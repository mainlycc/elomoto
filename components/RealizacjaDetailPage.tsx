import { PortableText } from '@portabletext/react';
import React from 'react';
import { useRealizationBySlug } from '../hooks/useRealizationBySlug';
import { useRealizations } from '../hooks/useRealizations';
import { navigateTo } from '../utils/navigation';
import { SubpageContactSection } from './SubpageContactSection';
import { realizationPortableTextComponents } from './portableTextComponents';

interface Props {
  slug: string;
}

const defaultIntro =
  'Przykładowa realizacja infrastruktury ładowania w obiekcie komercyjnym. Opis poniżej ma charakter poglądowy – możesz go później zastąpić szczegółowym case study.';

export const RealizacjaDetailPage: React.FC<Props> = ({ slug }) => {
  const { realization, loading, error } = useRealizationBySlug(slug);
  const { realizations } = useRealizations();

  if (loading) {
    return (
      <section className="max-w-5xl mx-auto px-4 pb-24">
        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Ładowanie realizacji…</p>
      </section>
    );
  }

  if (error && !realization) {
    return (
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <h1 className="text-2xl md:text-3xl font-black text-white mb-4">Nie udało się załadować realizacji</h1>
        <p className="text-sm text-gray-300 mb-6">Spróbuj ponownie później lub wróć do listy.</p>
        <button
          onClick={() => navigateTo('/realizacje')}
          className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#8ab925] text-black text-xs font-extrabold tracking-wider uppercase shadow-lg hover:bg-[#9ed02e] active:scale-95 transition-all"
        >
          Wróć do realizacji
        </button>
      </section>
    );
  }

  if (!realization) {
    return (
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <h1 className="text-2xl md:text-3xl font-black text-white mb-4">Realizacja nie została znaleziona</h1>
        <p className="text-sm text-gray-300 mb-6">
          Sprawdź poprawność adresu URL lub wróć do listy wszystkich realizacji.
        </p>
        <button
          onClick={() => navigateTo('/realizacje')}
          className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#8ab925] text-black text-xs font-extrabold tracking-wider uppercase shadow-lg hover:bg-[#9ed02e] active:scale-95 transition-all"
        >
          Wróć do realizacji
        </button>
      </section>
    );
  }

  const others = realizations.filter((r) => r.slug !== realization.slug).slice(0, 4);
  const orderLabel = String(realization.order).padStart(2, '0');

  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      <header className="mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">nasze projekty</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
          Realizacje <span className="text-[#8ab925]">elomoto.eco</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium">
          Wybrane wdrożenia infrastruktury ładowania w biurowcach, hotelach, centrach handlowych i na osiedlach
          mieszkaniowych. Różne lokalizacje, jeden standard – wygodne, bezpieczne i nowoczesne ładowanie pojazdów
          elektrycznych.
        </p>
      </header>

      <div className="mb-16">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">
            realizacja {orderLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{realization.title}</h2>
          <p className="text-gray-300 text-sm max-w-2xl">{realization.intro ?? defaultIntro}</p>
        </div>

        {realization.body && realization.body.length > 0 ? (
          <div className="mb-12">
            <PortableText value={realization.body} components={realizationPortableTextComponents} />
          </div>
        ) : null}

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src={realization.image}
              alt={realization.title}
              className="w-full h-full object-cover max-h-[360px]"
            />
          </div>
          <div className="space-y-4 text-sm text-gray-200 leading-relaxed">
            <h3 className="text-lg font-semibold text-white">Zakres projektu</h3>
            <p>
              W ramach projektu wykonano analizę zapotrzebowania na ładowanie, przygotowano koncepcję techniczną oraz
              zrealizowano kompletny montaż punktów ładowania wraz z uruchomieniem systemu rozliczeń.
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
          <h3 className="text-lg font-semibold text-white mb-3">Efekty dla inwestora</h3>
          <p className="text-sm text-gray-200 mb-4">
            Dzięki wdrożeniu infrastruktury ładowania obiekt zyskał nową wartość dla użytkowników, a także możliwość
            raportowania danych związanych z wykorzystaniem stacji i zużyciem energii elektrycznej.
          </p>
          <ul className="grid md:grid-cols-3 gap-4 text-sm text-gray-200">
            <li className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">komfort</p>
              <p>Ładowanie dostępne tam, gdzie użytkownicy spędzają najwięcej czasu.</p>
            </li>
            <li className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">wizerunek</p>
              <p>Wzmocnienie proekologicznego wizerunku inwestycji.</p>
            </li>
            <li className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">dane</p>
              <p>Lepsze zrozumienie realnego zapotrzebowania na ładowanie dzięki raportom.</p>
            </li>
          </ul>
        </div>

        <button
          onClick={() => navigateTo('/realizacje')}
          className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-white/5 text-white text-xs font-extrabold tracking-wider uppercase border border-white/20 hover:bg-white/10 active:scale-95 transition-all"
        >
          Wróć do listy realizacji
        </button>
      </div>

      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
          Inne <span className="text-[#8ab925]">realizacje</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {others.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => navigateTo(`/realizacje/${item.slug}`)}
              className="group text-left rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#8ab925]/50 hover:bg-white/10 transition-all shadow-lg hover:shadow-2xl"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#8ab925] mb-1">
                    realizacja {String(item.order).padStart(2, '0')}
                  </p>
                  <h3 className="text-sm font-black text-white leading-tight">{item.title}</h3>
                </div>
              </div>
            </button>
          ))}
        </div>
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
