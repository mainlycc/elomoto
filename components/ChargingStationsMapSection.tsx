import React from 'react';
import { navigateTo } from '../utils/navigation';
import { useI18n } from '../i18n/I18nProvider';
import { GoogleStationsMap } from './GoogleStationsMap';

export const ChargingStationsMapSection: React.FC = () => {
  const { t } = useI18n();
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const googleMapsDarkMapId = import.meta.env.VITE_GOOGLE_MAP_ID_DARK;

  // Źródło punktów jest nadal to samo (My Maps) — tylko render mapy jest już „prawdziwy” i stylowalny.
  const myMapsMid = '1VIBuF_LiB9G35xzG6bk510nFnfjnw24';
  const myMapsEmbedUrl = `https://www.google.com/maps/d/embed?mid=${myMapsMid}&ehbc=2E312F`;
  // KML jest synchronizowany do /public/stacje-data.kml (skrypt `npm run sync:kml` / predev / prebuild)
  const localKmlUrl = '/stacje-data.kml';

  const [stations, setStations] = React.useState<
    Array<{ id: string; name: string; lat: number; lng: number; comingSoon: boolean }>
  >([]);
  const [stationAddresses, setStationAddresses] = React.useState<Record<string, string>>({});
  const [isStationsOpen, setIsStationsOpen] = React.useState(false);
  const [selectedStationId, setSelectedStationId] = React.useState<string>('');

  const selectedLabel = 'Stacje ładowania';

  return (
    <section id="charging-map" className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Tła glow podobne do innych sekcji */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#8ab925]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#8ab925]/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nagłówek sekcji */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-16">
          <div className="max-w-xl -ml-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-[2px] w-12 bg-[#8ab925]"></div>
              <p className="text-[#8ab925] font-black uppercase tracking-[0.3em] text-xs">
                {t('chargingMap.eyebrow')}
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
              {t('chargingMap.headingLine1')}
              <br />
              {t('chargingMap.headingLine2')}
            </h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-md md:text-right space-y-3">
            <p className="text-gray-400 text-sm font-medium">
              {t('chargingMap.intro')}
            </p>
            <div className="inline-flex md:justify-end w-full">
              <div className="inline-flex flex-col items-start md:items-end gap-2 bg-white/5 border border-[#8ab925]/30 rounded-2xl px-4 py-3 shadow-[0_0_25px_rgba(138,185,37,0.2)]">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#8ab925]">
                  {t('chargingMap.cardEyebrow')}
                </p>
                <p className="text-gray-200 text-xs md:text-sm max-w-xs">
                  {t('chargingMap.cardBody')}
                </p>
                <button
                  type="button"
                  onClick={() => navigateTo('https://zaplac.elomoto.eco/')}
                  className="mt-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8ab925] text-black text-[11px] font-extrabold uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(138,185,37,0.5)] hover:bg-white hover:shadow-[0_0_30px_rgba(138,185,37,0.7)] transition-all active:scale-95"
                >
                  {t('chargingMap.cardCta')}
                  <span className="text-xs">↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Powiększona mapa Google */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#8ab925]/10 via-transparent to-[#8ab925]/10 blur-3xl -z-10" />

          <div className="relative h-[520px] md:h-[700px] rounded-[32px] bg-white/5 border border-white/10 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)] flex flex-col">
            {/* Pasek nagłówka „mapy” */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <span className="text-[11px] font-semibold text-gray-300 uppercase tracking-[0.2em]">
                  {t('chargingMap.mapHeader')}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-gray-400 uppercase tracking-[0.15em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8ab925]" />
                {t('chargingMap.mapViewLabel')}
              </div>
            </div>

            {/* Osadzona mapa Google */}
            <div className="relative flex-1 min-h-0">
              {/* Przycisk otwierania/zamykania panelu — tuż nad panelem */}
              {googleMapsApiKey ? (
                <div className="absolute top-4 left-4 z-40">
                  <button
                    type="button"
                    onClick={() => setIsStationsOpen((v) => !v)}
                    className="group inline-flex items-center gap-2 rounded-2xl px-3 py-2 bg-[#060b16]/85 border border-white/10 text-gray-200 hover:border-[#8ab925]/40 hover:bg-[#060b16] transition-all max-w-[260px] shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur"
                    aria-haspopup="dialog"
                    aria-expanded={isStationsOpen}
                    aria-label="Otwórz listę stacji ładowania"
                  >
                    <span className="truncate text-[12px] font-extrabold tracking-[0.06em] uppercase">
                      {selectedLabel}
                    </span>
                    <span className="text-gray-400 group-hover:text-[#8ab925] transition-colors" aria-hidden="true">
                      {isStationsOpen ? '◀' : '▶'}
                    </span>
                  </button>
                </div>
              ) : null}

              {/* Panel z listą stacji — przy lewej krawędzi, na całą wysokość mapy */}
              {googleMapsApiKey ? (
                <>
                  <button
                    type="button"
                    onClick={() => setIsStationsOpen(false)}
                    className={`absolute inset-0 z-20 bg-black/40 transition-opacity ${
                      isStationsOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    aria-label="Zamknij listę stacji"
                  />

                  <aside
                    role="dialog"
                    aria-label="Lista stacji ładowania"
                    className={`absolute top-0 left-0 bottom-0 z-30 w-[380px] max-w-[92vw] bg-[#060b16] border-r border-white/10 shadow-[30px_0_90px_rgba(0,0,0,0.75)] transform transition-transform duration-300 ${
                      isStationsOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                  >
                    {/* Bez nagłówka: przycisk nad panelem pełni też rolę zamknij/otwórz */}
                    <div className="h-full overflow-auto pt-16">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedStationId('');
                          setIsStationsOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 border-b border-white/10 hover:bg-white/5 transition-colors ${
                          !selectedStationId ? 'bg-white/5' : ''
                        }`}
                      >
                        <div className="text-[12px] font-extrabold text-gray-100 tracking-[0.08em] uppercase">
                          Wszystkie stacje
                        </div>
                        <div className="text-[11px] font-semibold text-gray-400 mt-1">
                          Pokaż wszystkie punkty na mapie
                        </div>
                      </button>

                      {stations.map((s) => {
                        const addr =
                          stationAddresses[s.id] || `${Number(s.lat).toFixed(6)}, ${Number(s.lng).toFixed(6)}`;
                        const isActive = selectedStationId === s.id;
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => {
                              setSelectedStationId(s.id);
                              setIsStationsOpen(false);
                            }}
                            className={`w-full text-left px-4 py-3 border-b border-white/10 hover:bg-white/5 transition-colors ${
                              isActive ? 'bg-white/5' : ''
                            }`}
                          >
                            <div className="flex items-center justify-between gap-3">
                              <div className="min-w-0">
                                <div className="text-[12px] font-extrabold text-gray-100 tracking-[0.04em] truncate">
                                  {s.name}
                                </div>
                                <div className="text-[11px] font-semibold text-gray-400 mt-1 line-clamp-2">
                                  {addr}
                                </div>
                              </div>
                              <div className="flex items-center gap-2 shrink-0">
                                {s.comingSoon ? (
                                  <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-gray-300 bg-white/5 border border-white/10 rounded-full px-2 py-1">
                                    wkrótce
                                  </span>
                                ) : (
                                  <span className="w-2 h-2 rounded-full bg-[#8ab925]" aria-hidden="true" />
                                )}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </aside>
                </>
              ) : null}

              {googleMapsApiKey ? (
                <GoogleStationsMap
                  apiKey={googleMapsApiKey}
                  mapId={googleMapsDarkMapId}
                  kmlUrl={localKmlUrl}
                  selectedStationId={selectedStationId || undefined}
                  onStationsLoaded={(list) => setStations(list)}
                  onStationAddressResolved={({ id, address }) =>
                    setStationAddresses((prev) => (prev[id] === address ? prev : { ...prev, [id]: address }))
                  }
                  className="w-full h-full"
                />
              ) : (
                <iframe
                  src={myMapsEmbedUrl}
                  className="w-full h-full border-0"
                  style={{
                    // Google My Maps embed nie wspiera natywnie ciemnego stylu; filtr daje spójny dark look.
                    filter: 'invert(92%) hue-rotate(180deg) saturate(120%) contrast(105%)',
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('chargingMap.mapTitle')}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

