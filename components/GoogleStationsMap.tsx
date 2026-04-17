import React from 'react';
import { loadGoogleMaps } from '../utils/loadGoogleMaps';

type GoogleStationsMapProps = {
  apiKey: string;
  mapId?: string;
  kmlUrl: string;
  className?: string;
};

const darkMapStyles = [
  { elementType: 'geometry', stylers: [{ color: '#0b1220' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#0b1220' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#8aa0b6' }] },
  { featureType: 'administrative', elementType: 'geometry', stylers: [{ color: '#334155' }] },
  { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#7c97b2' }] },
  { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#0f172a' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#1e293b' }] },
  { featureType: 'road', elementType: 'geometry.stroke', stylers: [{ color: '#0b1220' }] },
  { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#93a4b8' }] },
  { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#111827' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#020617' }] },
  { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#64748b' }] },
] as const;

export const GoogleStationsMap: React.FC<GoogleStationsMapProps> = ({
  apiKey,
  mapId,
  kmlUrl,
  className,
}) => {
  const normalizedMapId = React.useMemo(() => {
    const raw = (mapId ?? '').trim();
    // .env bywa wklejane z cudzysłowami — to psuje mapId i wtedy styl się nie aplikuje.
    return raw.replace(/^['"]/, '').replace(/['"]$/, '');
  }, [mapId]);
  const hasMapId = normalizedMapId.length > 0;

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const mapRef = React.useRef<any>(null);
  const markersRef = React.useRef<any[]>([]);
  const infoWindowRef = React.useRef<any>(null);
  const geocoderRef = React.useRef<any>(null);
  const geocodeCacheRef = React.useRef<Map<string, string>>(new Map());

  React.useEffect(() => {
    let cancelled = false;
    let injectedStyleEl: HTMLStyleElement | null = null;

    async function init() {
      await loadGoogleMaps({ apiKey, language: 'pl', region: 'PL' });
      if (cancelled) return;
      if (!containerRef.current) return;

      const google = (window as any).google as any;
      const { ColorScheme } = (await google.maps.importLibrary('core')) as any;
      const { AdvancedMarkerElement } = (await google.maps.importLibrary('marker')) as any;

      // Usuń wrażenie „dwóch dymków”: zrób zewnętrzny kontener InfoWindow przezroczysty.
      if (!document.getElementById('elomoto-gmaps-infowindow-skin')) {
        injectedStyleEl = document.createElement('style');
        injectedStyleEl.id = 'elomoto-gmaps-infowindow-skin';
        injectedStyleEl.textContent = `
          /* Zewnętrzny "biały dymek" InfoWindow */
          .gm-style .gm-style-iw-c{
            padding: 0 !important;
            background: transparent !important;
            box-shadow: none !important;
            border-radius: 0 !important;
          }
          .gm-style .gm-style-iw-d{
            overflow: visible !important;
            background: transparent !important;
          }
          /* Ukryj domyślny X Google (bywa pozycjonowany poza treścią) */
          .gm-style button.gm-ui-hover-effect{
            display: none !important;
          }
          /* "Ogonek" dymka */
          .gm-style .gm-style-iw-tc::after{
            background: transparent !important;
            box-shadow: none !important;
          }
        `;
        document.head.appendChild(injectedStyleEl);
      }

      if (!mapRef.current) {
        mapRef.current = new google.maps.Map(containerRef.current, {
          center: { lat: 52.2297, lng: 21.0122 }, // Warszawa jako sensowny start
          zoom: 6,
          // Wymuś wariant ciemny dla Map ID (cloud-based styling).
          // To musi być ustawione przy inicjalizacji mapy.
          colorScheme: ColorScheme.DARK,
          mapId: hasMapId ? normalizedMapId : undefined,
          styles: hasMapId ? undefined : (darkMapStyles as any),
          clickableIcons: false,
          fullscreenControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          gestureHandling: 'greedy',
          backgroundColor: '#020617',
        });
      } else {
        // W dev/hot-reload mapa potrafi żyć dłużej niż propsy — dopilnujmy stylu.
        mapRef.current.setOptions({
          mapId: hasMapId ? normalizedMapId : undefined,
          styles: hasMapId ? undefined : (darkMapStyles as any),
        });
      }

      if (!infoWindowRef.current) {
        infoWindowRef.current = new google.maps.InfoWindow();
      }
      // Zamknięcie dymka z naszego przycisku w treści HTML.
      (window as any).__elomotoCloseInfoWindow = () => {
        try {
          infoWindowRef.current?.close();
        } catch {
          // ignore
        }
      };
      if (!geocoderRef.current) {
        geocoderRef.current = new google.maps.Geocoder();
      }

      // Usuń poprzednie markery (np. po hot reload / zmianie KML).
      for (const m of markersRef.current) {
        try {
          m.map = null;
        } catch {
          // ignore
        }
      }
      markersRef.current = [];

      // Pobierz i sparsuj KML (lokalnie z /public — bez problemów CORS).
      const kmlText = await fetch(kmlUrl, { cache: 'no-store' }).then((r) => r.text());
      if (cancelled) return;

      const parser = new DOMParser();
      const xml = parser.parseFromString(kmlText, 'application/xml');
      const placemarks = Array.from(xml.getElementsByTagName('Placemark'));

      const parseFirstImageHtml = (rawHtml: string) => {
        const m = rawHtml.match(/<img\b[^>]*src="([^"]+)"/i);
        if (!m?.[1]) return null;
        const src = m[1];
        return `<img src="${src}" alt="" />`;
      };

      const parseCoordinates = (pm: Element) => {
        const coordEl = pm.getElementsByTagName('coordinates')?.[0];
        const text = coordEl?.textContent?.trim();
        if (!text) return null;
        const [lngStr, latStr] = text.split(',').map((s) => s.trim());
        const lat = Number(latStr);
        const lng = Number(lngStr);
        if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
        return { lat, lng };
      };

      const makePinEl = (variant: 'active' | 'comingSoon') => {
        const el = document.createElement('div');
        const fill = variant === 'comingSoon' ? '#94a3b8' : '#8ab925';
        const ring = variant === 'comingSoon' ? 'rgba(148,163,184,.35)' : 'rgba(138,185,37,.35)';
        el.style.width = '18px';
        el.style.height = '18px';
        el.style.borderRadius = '999px';
        el.style.background = fill;
        el.style.boxShadow = `0 0 0 6px ${ring}, 0 10px 25px rgba(0,0,0,.45)`;
        el.style.border = '2px solid rgba(2,6,23,.9)';
        return el;
      };

      const openCard = (opts: {
        name: string;
        lat: number;
        lng: number;
        mediaHtml?: string | null;
        comingSoon?: boolean;
      }) => {
        const safeName = String(opts.name || '');
        const latLng = new google.maps.LatLng(opts.lat, opts.lng);
        const mediaHtml = opts.mediaHtml?.trim() || '';
        const hasImage = Boolean(mediaHtml);
        const comingSoon = Boolean(opts.comingSoon);

        const initialAddress = `${Number(opts.lat).toFixed(6)}, ${Number(opts.lng).toFixed(6)}`;

        const soonPlaceholder = `
          <div class="elomoto-kml-soon" aria-hidden="true">
            <svg class="elomoto-kml-soon-icon" viewBox="0 0 24 24" role="img" focusable="false">
              <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 5v5.25l4.2 2.52-.84 1.38L11 13.1V7Z"/>
            </svg>
            <div class="elomoto-kml-soon-text">Wkrótce gotowe</div>
          </div>
        `;

        const cardHtml = (addressLine: string) => `
          <div class="elomoto-kml-card">
            <button class="elomoto-kml-close" type="button" aria-label="Zamknij" onclick="window.__elomotoCloseInfoWindow && window.__elomotoCloseInfoWindow()">
              <span aria-hidden="true">×</span>
            </button>
            ${
              hasImage
                ? `<div class="elomoto-kml-media">${mediaHtml}</div>`
                : comingSoon
                  ? `<div class="elomoto-kml-media elomoto-kml-media--soon">${soonPlaceholder}</div>`
                  : ''
            }
            <div class="elomoto-kml-head">
              <div class="elomoto-kml-title">${safeName || 'Stacja ładowania'}</div>
            </div>
            <div class="elomoto-kml-section">
              <div class="elomoto-kml-section-title">Szczegóły z Map Google</div>
              <div class="elomoto-kml-address">${addressLine || 'Brak danych adresowych.'}</div>
              <a class="elomoto-kml-link" target="_blank" rel="noreferrer" href="https://www.google.com/maps?q=${encodeURIComponent(
                `${opts.lat},${opts.lng}`,
              )}">Wyświetl w Mapach Google</a>
            </div>
          </div>
          <style>
            .elomoto-kml-card{width:320px;max-width:320px;background:#0b1220;color:#e5e7eb;border-radius:16px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.45);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial;position:relative}
            .elomoto-kml-close{position:absolute;top:10px;right:10px;width:28px;height:28px;border-radius:10px;background:rgba(2,6,23,.88);border:1px solid rgba(255,255,255,.12);box-shadow:0 10px 24px rgba(0,0,0,.5);color:#fff;font-size:18px;line-height:1;font-weight:900;display:flex;align-items:center;justify-content:center;padding:0;margin:0;cursor:pointer;z-index:5;-webkit-appearance:none;appearance:none}
            .elomoto-kml-close span{display:block;line-height:1;transform:translateY(-0.5px)}
            .elomoto-kml-close:hover{background:rgba(2,6,23,.98);border-color:rgba(138,185,37,.45)}
            .elomoto-kml-media{background:#020617}
            .elomoto-kml-media img{width:100% !important;max-width:100% !important;height:160px !important;object-fit:cover !important;display:block;border:0}
            .elomoto-kml-media--soon{display:flex;align-items:center;justify-content:center;min-height:160px}
            .elomoto-kml-soon{display:flex;flex-direction:column;align-items:center;gap:8px;color:rgba(226,232,240,.92)}
            .elomoto-kml-soon-icon{width:44px;height:44px;color:#8ab925;opacity:.95}
            .elomoto-kml-soon-text{font-size:12px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;color:rgba(226,232,240,.75)}
            .elomoto-kml-media br{display:none}
            .elomoto-kml-head{padding:12px 14px 10px;border-top:1px solid rgba(255,255,255,.08)}
            .elomoto-kml-title{font-weight:900;font-size:14px;line-height:1.25;letter-spacing:.01em}
            .elomoto-kml-section{padding:12px 14px 14px;border-top:1px solid rgba(255,255,255,.08)}
            .elomoto-kml-section-title{font-size:12px;font-weight:800;color:rgba(226,232,240,.85);margin-bottom:8px}
            .elomoto-kml-address{font-size:13px;font-weight:600;color:#e2e8f0;margin-bottom:10px}
            .elomoto-kml-link{display:inline-block;font-size:13px;font-weight:800;color:#8ab925;text-decoration:none}
            .elomoto-kml-link:hover{text-decoration:underline}
          </style>
        `;

        // Pokaż od razu kartę z placeholderem adresu, a potem podmień na wynik geocodingu.
        infoWindowRef.current.setContent(cardHtml(initialAddress));
        if (latLng) infoWindowRef.current.setPosition(latLng);
        infoWindowRef.current.open({ map: mapRef.current });

        const cacheKey = `${latLng.lat().toFixed(6)},${latLng.lng().toFixed(6)}`;
        const cached = geocodeCacheRef.current.get(cacheKey);
        if (cached) {
          infoWindowRef.current.setContent(cardHtml(cached));
          return;
        }

        try {
          geocoderRef.current.geocode({ location: latLng }, (results: any, status: any) => {
            if (cancelled) return;
            if (!infoWindowRef.current) return;
            if (status !== 'OK' || !results?.length) return;
            const formatted = results[0]?.formatted_address;
            if (!formatted) return;
            geocodeCacheRef.current.set(cacheKey, formatted);
            infoWindowRef.current.setContent(cardHtml(formatted));
          });
        } catch {
          // ignore
        }
      };

      // Stwórz markery z KML
      for (const pm of placemarks) {
        const nameEl = pm.getElementsByTagName('name')?.[0];
        const name = nameEl?.textContent?.trim() || '';
        const coords = parseCoordinates(pm);
        if (!coords) continue;

        const descEl = pm.getElementsByTagName('description')?.[0];
        const rawDesc = descEl?.textContent || '';
        const mediaHtml = parseFirstImageHtml(rawDesc);

        const comingSoon = /^coming\s+soon\b/i.test(name);
        const content = makePinEl(comingSoon ? 'comingSoon' : 'active');

        const marker = new AdvancedMarkerElement({
          map: mapRef.current,
          position: coords,
          content,
          title: name,
        });
        marker.addListener('click', () => {
          openCard({ name, lat: coords.lat, lng: coords.lng, mediaHtml, comingSoon });
        });
        markersRef.current.push(marker);
      }
    }

    init().catch(() => {
      // Fallback/obsługa błędu jest wyżej (ChargingStationsMapSection),
      // więc tu nie musimy nic renderować — mapa po prostu się nie zainicjuje.
    });

    return () => {
      cancelled = true;
      try {
        const google = (window as any).google as any;
        // usuń markery
        for (const m of markersRef.current) {
          try {
            m.map = null;
          } catch {
            // ignore
          }
        }
        markersRef.current = [];
      } catch {
        // ignore
      }
    };
  }, [apiKey, hasMapId, normalizedMapId, kmlUrl]);

  return <div ref={containerRef} className={className} />;
};

