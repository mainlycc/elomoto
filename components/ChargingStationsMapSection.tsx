import React from 'react';
import { navigateTo } from '../utils/navigation';

export const ChargingStationsMapSection: React.FC = () => {
  return (
    <section id="charging-map" className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Tła glow podobne do innych sekcji */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#8ab925]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#8ab925]/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nagłówek sekcji */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-16">
          <div className="max-w-xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-[2px] w-12 bg-[#8ab925]"></div>
              <p className="text-[#8ab925] font-black uppercase tracking-[0.3em] text-xs">
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
              <div className="inline-flex flex-col items-start md:items-end gap-2 bg-white/5 border border-[#8ab925]/30 rounded-2xl px-4 py-3 shadow-[0_0_25px_rgba(138,185,37,0.2)]">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#8ab925]">
                  PŁATNOŚĆ BEZ REJESTRACJI
                </p>
                <p className="text-gray-200 text-xs md:text-sm max-w-xs">
                  Na naszych stacjach możesz zapłacić kartą lub BLIK-iem&nbsp;bez zakładania konta.
                  Skanujesz kod, wybierasz moc ładowania i od razu startujesz z sesją.
                </p>
                <button
                  type="button"
                  onClick={() => navigateTo('https://zaplac.elomoto.eco/')}
                  className="mt-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8ab925] text-black text-[11px] font-extrabold uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(138,185,37,0.5)] hover:bg-white hover:shadow-[0_0_30px_rgba(138,185,37,0.7)] transition-all active:scale-95"
                >
                  Zapłać bez rejestracji
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
                  Mapa stacji ładowania
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-gray-400 uppercase tracking-[0.15em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8ab925]" />
                Widok sieci stacji
              </div>
            </div>

            {/* Osadzona mapa Google */}
            <div className="relative flex-1 min-h-0">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1VIBuF_LiB9G35xzG6bk510nFnfjnw24&ehbc=2E312F"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa stacji ładowania"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

