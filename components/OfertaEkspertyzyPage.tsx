import React from 'react';

export const OfertaEkspertyzyPage: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          Ekspertyzy i audyty techniczne
        </h1>
        <p className="text-gray-300 max-w-2xl">
          Sprawdzamy, czy i w jaki sposób można bezpiecznie zamontować infrastrukturę ładowania
          w Twojej lokalizacji, a następnie przekładamy wyniki na czytelne rekomendacje.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-12 text-sm text-gray-200 leading-relaxed">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">
            Co analizujemy?
          </h2>
          <p>
            Przyglądamy się istniejącej instalacji elektrycznej, mocy przyłączeniowej oraz
            obciążeniom w godzinach szczytu. Uwzględniamy ograniczenia budynku, przepisy
            przeciwpożarowe i wymagania operatora sieci dystrybucyjnej.
          </p>
          <p>
            Na tej podstawie określamy możliwą liczbę punktów ładowania oraz sugerujemy
            optymalny sposób etapowego rozwoju infrastruktury.
          </p>
        </div>
        <div className="glass border border-white/10 rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-white mb-3">
            Wynik ekspertyzy otrzymasz w formie
          </h2>
          <ul className="space-y-2">
            <li>• krótkiego podsumowania dla zarządu / wspólnoty,</li>
            <li>• części technicznej dla elektryka lub projektanta,</li>
            <li>• rekomendacji dalszych kroków (wraz z orientacyjnymi wariantami kosztowymi).</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">
          Kiedy warto zamówić ekspertyzę?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-200">
          <div className="glass border border-white/10 rounded-3xl p-5">
            <p className="font-semibold text-white mb-1">Początek rozmów</p>
            <p>
              Gdy mieszkańcy lub zarząd deklarują chęć montażu ładowarek, ale nie wiesz,
              jakie są realne możliwości techniczne budynku.
            </p>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-5">
            <p className="font-semibold text-white mb-1">Wymogi formalne</p>
            <p>
              Gdy potrzebujesz dokumentu, który pomoże w rozmowach z dostawcą energii
              lub instytucją finansującą inwestycję.
            </p>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-5">
            <p className="font-semibold text-white mb-1">Planowanie rozwoju</p>
            <p>
              Gdy chcesz zaplanować docelową infrastrukturę, ale realizować ją etapami,
              bez ryzyka kosztownych przeróbek w przyszłości.
            </p>
          </div>
        </div>
      </div>

      <div className="glass border border-[#00ff88]/30 rounded-3xl p-6 md:p-8">
        <h2 className="text-lg font-semibold text-white mb-3">
          Złóż zapytanie o ekspertyzę
        </h2>
        <p className="text-sm text-gray-200 mb-4">
          Opisz krótko typ budynku, liczbę lokali lub użytkowników oraz to, ilu kierowców
          potencjalnie będzie korzystać z ładowania. Na tej podstawie przygotujemy propozycję
          zakresu ekspertyzy i wycenę.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#00ff88] text-black text-xs font-extrabold tracking-wider uppercase shadow-lg hover:bg-[#4dffac] active:scale-95 transition-all"
        >
          Zapytaj o ekspertyzę
        </a>
      </div>
    </section>
  );
};
