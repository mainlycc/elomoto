import React from 'react';
import type { Realization } from '../types';

interface Props {
  realization: Realization | null;
}

export const RealizacjaDetailPage: React.FC<Props> = ({ realization }) => {
  if (!realization) {
    return (
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <h1 className="text-2xl md:text-3xl font-black text-white mb-4">
          Realizacja nie została znaleziona
        </h1>
        <p className="text-sm text-gray-300 mb-6">
          Sprawdź poprawność adresu URL lub wróć do listy wszystkich realizacji.
        </p>
        <a
          href="/realizacje"
          className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#00ff88] text-black text-xs font-extrabold tracking-wider uppercase shadow-lg hover:bg-[#4dffac] active:scale-95 transition-all"
        >
          Wróć do realizacji
        </a>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      <header className="mb-10">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#00ff88] uppercase mb-4">
          realizacja 0{realization.id}
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          {realization.title}
        </h1>
        <p className="text-gray-300 text-sm max-w-2xl">
          Przykładowa realizacja infrastruktury ładowania w obiekcie komercyjnym. Opis poniżej
          ma charakter poglądowy – możesz go później zastąpić szczegółowym case study.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
          <img
            src={realization.image}
            alt={realization.title}
            className="w-full h-full object-cover max-h-[360px]"
          />
        </div>
        <div className="space-y-4 text-sm text-gray-200 leading-relaxed">
          <h2 className="text-lg font-semibold text-white">
            Zakres projektu
          </h2>
          <p>
            W ramach projektu wykonano analizę zapotrzebowania na ładowanie, przygotowano
            koncepcję techniczną oraz zrealizowano kompletny montaż punktów ładowania wraz
            z uruchomieniem systemu rozliczeń.
          </p>
          <ul className="space-y-2">
            <li>• instalacja kilku punktów ładowania AC / DC,</li>
            <li>• dopasowanie infrastruktury do istniejącej rozdzielni,</li>
            <li>• konfiguracja dostępu dla mieszkańców / klientów / pracowników,</li>
            <li>• integracja z usługą operatorską elomoto.eco.</li>
          </ul>
        </div>
      </div>

      <div className="glass border border-white/10 rounded-3xl p-6 md:p-8 mb-10">
        <h2 className="text-lg font-semibold text-white mb-3">
          Efekty dla inwestora
        </h2>
        <p className="text-sm text-gray-200 mb-4">
          Dzięki wdrożeniu infrastruktury ładowania obiekt zyskał nową wartość dla użytkowników,
          a także możliwość raportowania danych związanych z wykorzystaniem stacji i zużyciem
          energii elektrycznej.
        </p>
        <ul className="grid md:grid-cols-3 gap-4 text-sm text-gray-200">
          <li className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">
              komfort
            </p>
            <p>Ładowanie dostępne tam, gdzie użytkownicy spędzają najwięcej czasu.</p>
          </li>
          <li className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">
              wizerunek
            </p>
            <p>Wzmocnienie proekologicznego wizerunku inwestycji.</p>
          </li>
          <li className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">
              dane
            </p>
            <p>Lepsze zrozumienie realnego zapotrzebowania na ładowanie dzięki raportom.</p>
          </li>
        </ul>
      </div>

      <a
        href="/realizacje"
        className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-white/5 text-white text-xs font-extrabold tracking-wider uppercase border border-white/20 hover:bg-white/10 active:scale-95 transition-all"
      >
        Wróć do listy realizacji
      </a>
    </section>
  );
};

