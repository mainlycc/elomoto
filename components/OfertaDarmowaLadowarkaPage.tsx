import React from 'react';

export const OfertaDarmowaLadowarkaPage: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          Darmowa ładowarka
        </h1>
        <p className="text-gray-300 max-w-2xl">
          Model współpracy, w którym elomoto.eco finansuje i instaluje stację ładowania,
          a Ty udostępniasz lokalizację i korzystasz z korzyści dla użytkowników.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-12 text-sm text-gray-200 leading-relaxed">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">
            Dla kogo jest ten model?
          </h2>
          <p>
            Darmowa ładowarka sprawdzi się wszędzie tam, gdzie chcesz zaoferować nową usługę
            bez angażowania dużego kapitału własnego – w garażach podziemnych, na parkingach
            osiedlowych, przy biurowcach czy obiektach usługowych.
          </p>
          <ul className="space-y-2">
            <li>• wspólnoty i spółdzielnie szukające prostego startu z elektromobilnością,</li>
            <li>• firmy, które chcą przetestować zapotrzebowanie na ładowanie,</li>
            <li>• obiekty komercyjne, którym zależy na wyróżnieniu się na rynku.</li>
          </ul>
        </div>
        <div className="glass border border-white/10 rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-white mb-3">
            Co bierzemy na siebie?
          </h2>
          <ul className="space-y-2">
            <li>• finansowanie zakupu stacji ładowania,</li>
            <li>• organizację montażu i uruchomienie urządzeń,</li>
            <li>• konfigurację systemu rozliczeń i dostępów,</li>
            <li>• wsparcie techniczne i nadzór nad działaniem sprzętu.</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">
          Jak wygląda proces krok po kroku?
        </h2>
        <ol className="space-y-4 text-sm text-gray-200">
          <li>
            <span className="font-semibold text-white">1. Zgłoszenie lokalizacji.</span>{' '}
            Przekazujesz nam podstawowe informacje o budynku i możliwościach montażu.
          </li>
          <li>
            <span className="font-semibold text-white">2. Analiza potencjału.</span>{' '}
            Sprawdzamy, czy lokalizacja spełnia warunki techniczne i biznesowe.
          </li>
          <li>
            <span className="font-semibold text-white">3. Umowa i harmonogram.</span>{' '}
            Ustalamy zasady współpracy, terminy i zakres odpowiedzialności stron.
          </li>
          <li>
            <span className="font-semibold text-white">4. Montaż i uruchomienie.</span>{' '}
            Organizujemy prace instalacyjne i konfigurujemy system.
          </li>
        </ol>
      </div>

      <div className="glass border border-[#00ff88]/30 rounded-3xl p-6 md:p-8">
        <h2 className="text-lg font-semibold text-white mb-3">
          Chcesz sprawdzić, czy Twoja lokalizacja się kwalifikuje?
        </h2>
        <p className="text-sm text-gray-200 mb-4">
          Wyślij nam kilka informacji o budynku i parkingu – przygotujemy wstępną ocenę
          możliwości uruchomienia darmowej ładowarki i skontaktujemy się z propozycją dalszych kroków.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#00ff88] text-black text-xs font-extrabold tracking-wider uppercase shadow-lg hover:bg-[#4dffac] active:scale-95 transition-all"
        >
          Napisz do nas
        </a>
      </div>
    </section>
  );
};
