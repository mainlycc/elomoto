import React from 'react';

export const OfertaSerwisPage: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          Serwis i utrzymanie
        </h1>
        <p className="text-gray-300 max-w-2xl">
          Zapewniamy bieżący serwis, utrzymanie i wsparcie techniczne dla stacji ładowania,
          aby działały niezawodnie każdego dnia.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-12 text-sm text-gray-200 leading-relaxed">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">
            Dlaczego serwis jest tak ważny?
          </h2>
          <p>
            Nawet najlepsza stacja ładowania wymaga okresowej konserwacji i reagowania
            na drobne usterki. Sprawne wsparcie techniczne przekłada się bezpośrednio
            na zadowolenie użytkowników i opinię o Twojej infrastrukturze.
          </p>
          <p>
            Dzięki zdalnemu dostępowi do urządzeń wiele problemów rozwiązujemy bez
            konieczności wizyty serwisanta na miejscu.
          </p>
        </div>
        <div className="glass border border-white/10 rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-white mb-3">
            Zakres usługi serwisowej
          </h2>
          <ul className="space-y-2">
            <li>• zdalny monitoring stanu urządzeń,</li>
            <li>• reakcja na zgłoszenia użytkowników i administratorów,</li>
            <li>• aktualizacje oprogramowania stacji (tam, gdzie to możliwe),</li>
            <li>• okresowe przeglądy i testy bezpieczeństwa,</li>
            <li>• naprawy lub wymiany elementów eksploatacyjnych.</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">
          Dostępne poziomy wsparcia
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-200">
          <div className="glass border border-white/10 rounded-3xl p-5">
            <p className="font-semibold text-white mb-1">Basic</p>
            <p>
              Podstawowe wsparcie z reakcją na zgłoszenia w godzinach pracy oraz
              przegląd roczny.
            </p>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-5">
            <p className="font-semibold text-white mb-1">Standard</p>
            <p>
              Krótsze czasy reakcji na zgłoszenia, dwa przeglądy w roku oraz rozszerzony
              zakres zdalnego monitoringu.
            </p>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-5">
            <p className="font-semibold text-white mb-1">Premium</p>
            <p>
              Najkrótsze SLA, priorytetowy dostęp do serwisu i pełny pakiet przeglądów
              oraz raportów stanu infrastruktury.
            </p>
          </div>
        </div>
      </div>

      <div className="glass border border-[#00ff88]/30 rounded-3xl p-6 md:p-8">
        <h2 className="text-lg font-semibold text-white mb-3">
          Dobierz model serwisu do swojej infrastruktury
        </h2>
        <p className="text-sm text-gray-200 mb-4">
          Napisz, ile punktów ładowania chcesz objąć umową serwisową oraz w jakim trybie
          będą wykorzystywane. Na tej podstawie zaproponujemy odpowiedni poziom wsparcia
          i warunki współpracy.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#00ff88] text-black text-xs font-extrabold tracking-wider uppercase shadow-lg hover:bg-[#4dffac] active:scale-95 transition-all"
        >
          Zapytaj o serwis
        </a>
      </div>
    </section>
  );
};
