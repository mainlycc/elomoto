import React from 'react';
import { ChargingStationsMapSection } from './ChargingStationsMapSection';

export const MapaStacjiPage: React.FC = () => {
  return (
    <>
      {/* Nagłówek i opis strony */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">
          mapa stacji
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
          Stacje ładowania <span className="text-[#8ab925]">elomoto.eco</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium mb-6">
          Infrastrukturę ładowania projektujemy w pierwszej kolejności z myślą o lokalizacjach
          mieszkaniowych, biurowych i hotelowych — tam, gdzie samochody elektryczne parkują
          najdłużej i gdzie realnie odbywa się codzienne ładowanie.
        </p>
      </section>

      {/* Mapa stacji ładowania */}
      <ChargingStationsMapSection />
    </>
  );
};

