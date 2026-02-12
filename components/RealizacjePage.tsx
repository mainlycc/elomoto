import React from 'react';
import { REALIZATIONS } from '../constants';
import { navigateTo } from '../utils/navigation';

export const RealizacjePage: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-24">
      <header className="mb-12">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#00ff88] uppercase mb-4">
          nasze projekty
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          Realizacje elomoto.eco
        </h1>
        <p className="text-gray-300 max-w-2xl text-sm">
          Zobacz wybrane wdrożenia infrastruktury ładowania w biurowcach, hotelach,
          centrach handlowych oraz na osiedlach mieszkaniowych. Każdy projekt to inny
          scenariusz użytkowania, ale ten sam cel – wygodne i bezpieczne ładowanie.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REALIZATIONS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => navigateTo(`/realizacje/${item.slug}`)}
            className="group text-left rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#00ff88]/50 hover:bg-white/10 transition-all shadow-lg hover:shadow-2xl"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#00ff88] mb-1">
                  realizacja 0{item.id}
                </p>
                <h2 className="text-lg font-black text-white leading-tight">
                  {item.title}
                </h2>
              </div>
            </div>
            <div className="p-5 text-sm text-gray-200">
              <p>
                Zobacz szczegóły tej realizacji – zakres prac, typ stacji oraz sposób,
                w jaki ładowanie wspiera codzienne funkcjonowanie obiektu.
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

