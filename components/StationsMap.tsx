import React from 'react';
import { LngLatBounds, Map as MapLibreMap, Marker, NavigationControl, Popup, setWorkerUrl } from 'maplibre-gl';
import maplibreWorkerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?url';
import 'maplibre-gl/dist/maplibre-gl.css';

setWorkerUrl(maplibreWorkerUrl);

type Station = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  comingSoon: boolean;
};

type StationsMapProps = {
  kmlUrl: string;
  className?: string;
  selectedStationId?: string;
  onStationsLoaded?: (stations: Station[]) => void;
};

const DARK_STYLE = 'https://tiles.openfreemap.org/styles/dark';

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      default:
        return '&#39;';
    }
  });

const stationIdFromCoords = (lat: number, lng: number) => `${lat.toFixed(6)},${lng.toFixed(6)}`;

const parseFirstImageSrc = (rawHtml: string) => {
  const match = rawHtml.match(/<img\b[^>]*src="([^"]+)"/i);
  const src = match?.[1] ?? '';
  if (!/^https?:\/\//i.test(src)) return null;
  return src;
};

const pinElement = (comingSoon: boolean) => {
  const el = document.createElement('div');
  const fill = comingSoon ? '#94a3b8' : '#8ab925';
  const ring = comingSoon ? 'rgba(148,163,184,.35)' : 'rgba(138,185,37,.35)';
  el.style.width = '18px';
  el.style.height = '18px';
  el.style.borderRadius = '999px';
  el.style.background = fill;
  el.style.boxShadow = `0 0 0 6px ${ring}, 0 10px 25px rgba(0,0,0,.45)`;
  el.style.border = '2px solid rgba(2,6,23,.9)';
  el.style.cursor = 'pointer';
  return el;
};

const popupHtml = (opts: { name: string; lat: number; lng: number; imageSrc: string | null; comingSoon: boolean }) => {
  const safeName = escapeHtml(opts.name || 'Stacja ładowania');
  const mapsUrl = `https://www.openstreetmap.org/?mlat=${opts.lat}&mlon=${opts.lng}#map=17/${opts.lat}/${opts.lng}`;
  const image = opts.imageSrc
    ? `<img src="/api/station-photo?src=${encodeURIComponent(opts.imageSrc)}" alt="" style="width:100%;height:160px;object-fit:cover;display:block;background:#020617;" />`
    : opts.comingSoon
      ? `<div style="min-height:120px;display:flex;align-items:center;justify-content:center;color:rgba(226,232,240,.75);font-size:12px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;">Wkrótce gotowe</div>`
      : '';

  return `
    <div style="width:300px;max-width:300px;background:#0b1220;color:#e5e7eb;border-radius:16px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.45);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial;">
      ${image ? `<div style="background:#020617;">${image}</div>` : ''}
      <div style="padding:12px 36px 10px 14px;${image ? 'border-top:1px solid rgba(255,255,255,.08);' : ''}">
        <div style="font-weight:900;font-size:14px;line-height:1.25;">${safeName}</div>
      </div>
      <div style="padding:0 14px 14px;">
        <a href="${mapsUrl}" target="_blank" rel="noreferrer" style="font-size:13px;font-weight:800;color:#8ab925;text-decoration:none;">Pokaż na mapie</a>
      </div>
    </div>
  `;
};

const boundsOf = (markers: Map<string, Marker>) => {
  const bounds = new LngLatBounds();
  for (const marker of markers.values()) bounds.extend(marker.getLngLat());
  return bounds;
};

export const StationsMap: React.FC<StationsMapProps> = ({
  kmlUrl,
  className,
  selectedStationId,
  onStationsLoaded,
}) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const mapRef = React.useRef<MapLibreMap | null>(null);
  const markersByIdRef = React.useRef<Map<string, Marker>>(new Map());
  const onStationsLoadedRef = React.useRef(onStationsLoaded);
  const selectedStationIdRef = React.useRef(selectedStationId);

  React.useEffect(() => {
    onStationsLoadedRef.current = onStationsLoaded;
  }, [onStationsLoaded]);

  React.useEffect(() => {
    selectedStationIdRef.current = selectedStationId;
  }, [selectedStationId]);

  React.useEffect(() => {
    if (document.getElementById('elomoto-maplibre-skin')) return;
    const style = document.createElement('style');
    style.id = 'elomoto-maplibre-skin';
    style.textContent = `
      .elomoto-map.maplibregl-map {
        width: 100%;
        height: 100%;
        background: #020617;
        z-index: 0;
        font-family: inherit;
      }
      .elomoto-map .maplibregl-ctrl-group {
        background: #0b1220;
        border: 1px solid rgba(255,255,255,.12);
        box-shadow: 0 10px 30px rgba(0,0,0,.45);
      }
      .elomoto-map .maplibregl-ctrl-group button + button {
        border-top-color: rgba(255,255,255,.12);
      }
      .elomoto-map .maplibregl-ctrl button .maplibregl-ctrl-icon {
        filter: invert(1);
      }
      .elomoto-map .maplibregl-ctrl-attrib {
        background: rgba(2,6,23,.8);
        color: #94a3b8;
      }
      .elomoto-map .maplibregl-ctrl-attrib a {
        color: #cbd5e1;
      }
      .elomoto-map .maplibregl-popup-content {
        background: transparent;
        padding: 0;
        box-shadow: none;
      }
      .elomoto-map .maplibregl-popup-tip {
        border-top-color: #0b1220;
        border-bottom-color: #0b1220;
      }
      .elomoto-map .maplibregl-popup-close-button {
        color: #fff;
        font-size: 20px;
        right: 10px;
        top: 6px;
      }
    `;
    document.head.appendChild(style);
  }, []);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    const map = new MapLibreMap({
      container,
      style: DARK_STYLE,
      center: [19.4, 52.1],
      zoom: 5.6,
      attributionControl: { compact: true },
    });
    mapRef.current = map;
    map.addControl(new NavigationControl({ showCompass: false, visualizePitch: false }), 'top-right');

    // MapLibre przy compact dopisuje też klasę „rozwinięte” i zdejmuje ją dopiero po przeciągnięciu mapy.
    const collapseAttribution = () => {
      map.getContainer().querySelector('.maplibregl-ctrl-attrib')?.classList.remove('maplibregl-compact-show');
    };
    collapseAttribution();
    map.once('load', collapseAttribution);

    const markersById = markersByIdRef.current;
    markersById.clear();

    const load = async () => {
      const response = await fetch(kmlUrl, { cache: 'no-store' });
      if (!response.ok) throw new Error(`Nie udało się pobrać KML (${response.status})`);
      const kmlText = await response.text();
      if (cancelled) return;

      const xml = new DOMParser().parseFromString(kmlText, 'application/xml');
      const placemarks = Array.from(xml.getElementsByTagName('Placemark'));
      const stations: Station[] = [];

      for (const placemark of placemarks) {
        const name = placemark.getElementsByTagName('name')?.[0]?.textContent?.trim() || 'Stacja ładowania';
        const coordText = placemark.getElementsByTagName('coordinates')?.[0]?.textContent?.trim();
        if (!coordText) continue;
        const [lngStr, latStr] = coordText.split(',').map((part) => part.trim());
        const lat = Number(latStr);
        const lng = Number(lngStr);
        if (!Number.isFinite(lat) || !Number.isFinite(lng)) continue;

        const rawDesc = placemark.getElementsByTagName('description')?.[0]?.textContent || '';
        const imageSrc = parseFirstImageSrc(rawDesc);
        const comingSoon = /^coming\s+soon\b/i.test(name);
        const id = stationIdFromCoords(lat, lng);
        if (markersById.has(id)) continue;

        stations.push({ id, name, lat, lng, comingSoon });
        const popup = new Popup({ offset: 18, closeButton: true, maxWidth: '320px' }).setHTML(
          popupHtml({ name, lat, lng, imageSrc, comingSoon }),
        );
        const marker = new Marker({ element: pinElement(comingSoon) })
          .setLngLat([lng, lat])
          .setPopup(popup)
          .addTo(map);
        markersById.set(id, marker);
      }

      stations.sort((a, b) => a.name.localeCompare(b.name, 'pl', { sensitivity: 'base' }));
      onStationsLoadedRef.current?.(stations);

      if (markersById.size > 0) {
        const selectedId = selectedStationIdRef.current;
        const selected = selectedId ? markersById.get(selectedId) : undefined;
        if (selected) {
          map.jumpTo({ center: selected.getLngLat(), zoom: 13 });
          selected.togglePopup();
        } else {
          map.fitBounds(boundsOf(markersById), { padding: 48, duration: 0 });
        }
      }
    };

    map.on('load', () => {
      load().catch(() => {
        // Mapa zostaje na kafelkach, nawet gdy KML chwilowo się nie wczyta.
      });
    });

    return () => {
      cancelled = true;
      markersById.clear();
      map.remove();
      mapRef.current = null;
    };
  }, [kmlUrl]);

  React.useEffect(() => {
    const map = mapRef.current;
    if (!map || markersByIdRef.current.size === 0) return;

    if (!selectedStationId) {
      for (const marker of markersByIdRef.current.values()) marker.getPopup()?.remove();
      map.fitBounds(boundsOf(markersByIdRef.current), { padding: 48, duration: 500 });
      return;
    }

    const marker = markersByIdRef.current.get(selectedStationId);
    if (!marker) return;
    for (const other of markersByIdRef.current.values()) {
      if (other !== marker) other.getPopup()?.remove();
    }
    map.flyTo({ center: marker.getLngLat(), zoom: Math.max(map.getZoom(), 13), duration: 500 });
    if (!marker.getPopup()?.isOpen()) marker.togglePopup();
  }, [selectedStationId]);

  return <div ref={containerRef} className={`elomoto-map ${className ?? ''}`} />;
};
