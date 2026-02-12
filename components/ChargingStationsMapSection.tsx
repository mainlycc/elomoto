import React from 'react';
import { navigateTo } from '../utils/navigation';

type Station = {
  name: string;
  city: string;
  description: string;
};

const STATIONS: Station[] = [
  {
    name: 'ELOMOTO HUB POZNAŃ',
    city: 'Poznań',
    description: 'Stacja szybkiego ładowania przy centrum biurowym.',
  },
  {
    name: 'PARK & CHARGE WARSZAWA',
    city: 'Warszawa',
    description: 'Ładowanie przy wielopoziomowym parkingu.',
  },
  {
    name: 'GREEN PARK KRAKÓW',
    city: 'Kraków',
    description: 'Stacje AC dla pracowników i klientów.',
  },
];

export const ChargingStationsMapSection: React.FC = () => {
  return (
    <section id="charging-map" className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Tła glow podobne do innych sekcji */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#00ff88]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#00ff88]/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nagłówek sekcji */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-[2px] w-12 bg-[#00ff88]"></div>
              <p className="text-[#00ff88] font-black uppercase tracking-[0.3em] text-xs">
                MAPA STACJI
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
              Twoja infrastruktura
              <br />
              na wyciągnięcie ręki
            </h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-md md:text-right space-y-3">
            <p className="text-gray-400 text-sm font-medium">
              Poniżej widzisz wybrane lokalizacje, w których infrastruktura ładowania realnie wspiera
              codzienny ruch – od biurowców po obiekty hotelowe i parkingi miejskie.
            </p>
            <div className="inline-flex md:justify-end w-full">
              <div className="inline-flex flex-col items-start md:items-end gap-2 bg-white/5 border border-[#00ff88]/30 rounded-2xl px-4 py-3 shadow-[0_0_25px_rgba(0,255,136,0.2)]">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#00ff88]">
                  PŁATNOŚĆ BEZ REJESTRACJI
                </p>
                <p className="text-gray-200 text-xs md:text-sm max-w-xs">
                  Na naszych stacjach możesz zapłacić kartą lub BLIK-iem&nbsp;bez zakładania konta.
                  Skanujesz kod, wybierasz moc ładowania i od razu startujesz z sesją.
                </p>
                <button
                  type="button"
                  onClick={() => navigateTo('https://zaplac.elomoto.eco/')}
                  className="mt-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff88] text-black text-[11px] font-extrabold uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(0,255,136,0.5)] hover:bg-white hover:shadow-[0_0_30px_rgba(0,255,136,0.7)] transition-all active:scale-95"
                >
                  Zapłać bez rejestracji
                  <span className="text-xs">↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Główna karta z mapą i listą stacji */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Lista stacji */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 uppercase tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] mr-2"></span>
              Dostępne lokalizacje pilotażowe
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Projektujemy sieć stacji ładowania tak, aby naturalnie wpasowała się w Twój biznes –
              od biurowców, przez hotele, po parkingi P+R. Każdy punkt to potencjał na nowy strumień
              przychodów i wygodę dla użytkowników pojazdów elektrycznych.
            </p>

            <div className="space-y-4">
              {STATIONS.map((station, index) => (
                <div
                  key={station.name}
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00ff88]/40 hover:bg-white/10 transition-all cursor-default"
                >
                  <div className="mt-1">
                    <div className="w-3 h-3 rounded-full bg-[#00ff88] shadow-[0_0_10px_rgba(0,255,136,0.6)]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-bold">
                        STACJA 0{index + 1}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#00ff88] font-bold">
                        {station.city}
                      </span>
                    </div>
                    <h3 className="text-sm font-black text-white uppercase tracking-tight mb-1">
                      {station.name}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {station.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Makieta mapy */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#00ff88]/10 via-transparent to-[#00ff88]/10 blur-3xl -z-10" />

            <div className="relative h-[340px] md:h-[420px] rounded-[32px] bg-white/5 border border-white/10 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              {/* Pasek nagłówka „mapy” */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[11px] font-semibold text-gray-300 uppercase tracking-[0.2em]">
                    Mapa stacji ładowania
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-gray-400 uppercase tracking-[0.15em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
                  Widok sieci stacji
                </div>
              </div>

              {/* Tło „mapy” */}
              <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                {/* Linie siatki */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#1e293b_1px,transparent_0)] bg-[length:32px_32px]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#0f172a_1px,transparent_0)] bg-[length:8px_8px] opacity-40" />
                </div>

                {/* Delikatny gradient „drogowy” */}
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute -left-10 top-10 w-72 h-1 rounded-full bg-[#00ff88]/60 blur-sm rotate-6" />
                  <div className="absolute left-8 top-40 w-80 h-1 rounded-full bg-[#00ff88]/40 blur-sm -rotate-3" />
                  <div className="absolute right-4 bottom-16 w-64 h-1 rounded-full bg-[#00ff88]/30 blur-sm -rotate-12" />
                </div>

                {/* Pinezki stacji – rozmieszczone symbolicznie */}
                <div className="absolute inset-4">
                  {/* Poznań */}
                  <div className="absolute left-[22%] top-[48%] flex flex-col items-center gap-1">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-[#00ff88] shadow-[0_0_18px_rgba(0,255,136,0.9)]" />
                      <div className="absolute inset-0 rounded-full border border-[#00ff88]/60 animate-ping" />
                    </div>
                    <span className="text-[9px] font-semibold text-[#e5e7eb] uppercase tracking-[0.18em] bg-black/50 px-2 py-1 rounded-full border border-white/10">
                      POZNAŃ
                    </span>
                  </div>

                  {/* Warszawa */}
                  <div className="absolute right-[20%] top-[32%] flex flex-col items-center gap-1">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-[#00ff88] shadow-[0_0_18px_rgba(0,255,136,0.9)]" />
                      <div className="absolute inset-0 rounded-full border border-[#00ff88]/60 animate-ping" />
                    </div>
                    <span className="text-[9px] font-semibold text-[#e5e7eb] uppercase tracking-[0.18em] bg-black/50 px-2 py-1 rounded-full border border-white/10">
                      WARSZAWA
                    </span>
                  </div>

                  {/* Kraków */}
                  <div className="absolute right-[26%] bottom-[16%] flex flex-col items-center gap-1">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-[#00ff88] shadow-[0_0_18px_rgba(0,255,136,0.9)]" />
                      <div className="absolute inset-0 rounded-full border border-[#00ff88]/60 animate-ping" />
                    </div>
                    <span className="text-[9px] font-semibold text-[#e5e7eb] uppercase tracking-[0.18em] bg-black/50 px-2 py-1 rounded-full border border-white/10">
                      KRAKÓW
                    </span>
                  </div>
                </div>

                {/* Mały panel informacyjny w rogu */}
                <div className="absolute left-4 bottom-4 px-4 py-3 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md">
                  <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-1 font-semibold">
                    STATUS SIECI
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                      <span className="text-xs text-gray-200 font-medium">
                        {STATIONS.length} aktywne punkty pilotażowe
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

