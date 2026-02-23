import React from 'react';
import { OfertaDarmowaLadowarkaPage } from './OfertaDarmowaLadowarkaPage';

export const DarmowaStacjaPage: React.FC = () => {
  return (
    <div className="bg-[#020617]">
      <section className="max-w-5xl mx-auto px-4 pt-6 pb-4">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-3">
          darmowa stacja ładowania
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
          Darmowa stacja od elomoto.eco
        </h1>
        <p className="text-gray-300 text-sm max-w-2xl">
          Oddzielna podstrona z pełnym opisem modelu darmowej stacji ładowania dla wspólnot,
          spółdzielni i firm. Poniżej znajdziesz szczegóły naszej oferty.
        </p>
      </section>

      {/* Wykorzystujemy istniejącą, rozbudowaną treść oferty darmowej ładowarki */}
      <OfertaDarmowaLadowarkaPage />
    </div>
  );
};

