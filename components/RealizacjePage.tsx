import React from 'react';
import { SubpageContactSection } from './SubpageContactSection';
import { useRealizations } from '../hooks/useRealizations';
import { navigateTo } from '../utils/navigation';

export const RealizacjePage: React.FC = () => {
  const { realizations, loading, error } = useRealizations();

  return (
    <section className="max-w-6xl mx-auto px-4 pb-24">
      <header className="mb-12">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">nasze projekty</p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Realizacje elomoto.eco</h1>
        <p className="text-gray-300 max-w-2xl text-sm">
          Wybrane wdrożenia infrastruktury ładowania w biurowcach, hotelach, centrach handlowych i na osiedlach
          mieszkaniowych. Różne lokalizacje, jeden standard – wygodne, bezpieczne i nowoczesne ładowanie pojazdów
          elektrycznych.
        </p>
      </header>

      {loading ? (
        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-8">Ładowanie realizacji…</p>
      ) : null}
      {error && realizations.length === 0 ? (
        <p className="text-red-400 text-sm mb-8">Nie udało się załadować listy realizacji.</p>
      ) : null}
      {!loading && realizations.length === 0 ? (
        <p className="text-gray-400 text-sm">Brak opublikowanych realizacji.</p>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {realizations.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => navigateTo(`/realizacje/${item.slug}`)}
            className="group text-left rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#8ab925]/50 hover:bg-white/10 transition-all shadow-lg hover:shadow-2xl"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8ab925] mb-1">
                  realizacja {String(item.order).padStart(2, '0')}
                </p>
                <h2 className="text-lg font-black text-white leading-tight">{item.title}</h2>
              </div>
            </div>
            <div className="p-5 text-sm text-gray-200">
              <p>
                Zobacz szczegóły tej realizacji – zakres prac, typ stacji oraz sposób, w jaki ładowanie wspiera
                codzienne funkcjonowanie obiektu.
              </p>
            </div>
          </button>
        ))}
      </div>

      <SubpageContactSection
        kicker="Formularz kontaktowy"
        title="Chcesz podobną"
        highlightedTitle="realizację?"
        description="Omówmy możliwości wdrożenia infrastruktury ładowania w Twoim obiekcie. Przygotujemy indywidualną ofertę dopasowaną do Twoich potrzeb."
        messagePlaceholder="Opisz swój projekt, liczbę miejsc postojowych i typ obiektu..."
      />
    </section>
  );
};
