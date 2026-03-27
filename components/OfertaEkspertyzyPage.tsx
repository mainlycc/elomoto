import React from 'react';
import { SubpageContactSection } from './SubpageContactSection';

export const OfertaEkspertyzyPage: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      {/* Nagłówek */}
      <header className="mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">Oferta</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
          Ekspertyzy stacji <span className="text-[#8ab925]">ładowania</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium">
          Sprawdź możliwości montażu infrastruktury ładowania
        </p>
      </header>

      {/* Opis główny */}
      <div className="mb-16 space-y-4 text-sm text-gray-300 leading-relaxed max-w-3xl">
        <p>
          Wykonujemy ekspertyzy stacji ładowania oraz audyty techniczne infrastruktury elektrycznej, 
          które pozwalają określić, czy i w jaki sposób można bezpiecznie zamontować ładowarki w 
          danej lokalizacji.
        </p>
        <p>
          Analizujemy warunki techniczne budynku, a wyniki przekładamy na czytelne rekomendacje 
          inwestycyjne — zarówno dla zarządców nieruchomości, wspólnot mieszkaniowych, firm 
          planujących rozwój infrastruktury ładowania oraz dla chcących ładowarkę na własny użytek.
        </p>
      </div>

      {/* Co obejmuje audyt stacji ładowania */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
          Co obejmuje audyt <span className="text-[#8ab925]">stacji ładowania?</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Ekspertyza techniczna infrastruktury ładowania obejmuje szczegółową analizę:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {[
            'Istniejącej instalacji elektrycznej',
            'Mocy przyłączeniowej obiektu',
            'Aktualnych i szczytowych obciążeń energetycznych',
            'Rozdzielni i pionów zasilających',
            'Możliwości prowadzenia tras kablowych',
            'Ograniczeń konstrukcyjnych budynku',
            'Przepisów przeciwpożarowych',
            'Wymagań operatora sieci dystrybucyjnej',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <div className="glass border border-white/10 rounded-3xl p-6 md:p-8">
          <p className="text-sm text-gray-300 leading-relaxed mb-4 font-semibold">
            Na tej podstawie określamy:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Maksymalną liczbę punktów ładowania',
              'Możliwe moce ładowarek',
              'Konieczność rozbudowy przyłącza',
              'Zasadność wdrożenia zarządzania mocą (DLM)',
              'Optymalny model etapowania inwestycji',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-[#8ab925] font-black">•</span>
                <span className="text-sm text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ekspertyza ładowarek – co otrzymujesz */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
          Ekspertyza ładowarek – <span className="text-[#8ab925]">co otrzymujesz?</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Wynik audytu przekazujemy w uporządkowanej, praktycznej formie:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            'Podsumowanie decyzyjne dla zarządu / wspólnoty / inwestora',
            'Część techniczna dla elektryka, projektanta lub wykonawcy',
            'Schemat możliwej infrastruktury',
            'Rekomendacje technologiczne',
            'Warianty dalszych kroków',
            'Orientacyjne scenariusze kosztowe',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black mt-0.5">•</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-6 italic">
          Dokument może stanowić podstawę do podjęcia decyzji inwestycyjnej lub rozpoczęcia 
          projektu wykonawczego.
        </p>
      </div>

      {/* Kiedy warto wykonać ekspertyzę */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
          Kiedy warto wykonać <span className="text-[#8ab925]">ekspertyzę stacji ładowania?</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">Początek rozmów o ładowarkach</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Gdy mieszkańcy, najemcy lub pracownicy zgłaszają potrzebę montażu ładowarek, ale nie 
              ma wiedzy o realnych możliwościach technicznych budynku lub garażu.
            </p>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">Wymogi formalne i dokumentacyjne</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              Gdy potrzebny jest dokument do rozmów z:
            </p>
            <ul className="space-y-2 text-sm text-gray-200">
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> dostawcą energii</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> operatorem sieci dystrybucyjnej</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> instytucją finansującą inwestycję</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> ubezpieczycielem lub rzeczoznawcą ppoż.</li>
            </ul>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">Planowanie rozwoju infrastruktury</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Gdy celem jest budowa docelowej infrastruktury ładowania, ale realizowanej etapowo — bez 
              ryzyka kosztownych modernizacji w przyszłości. Ekspertyza pozwala zaplanować skalowanie 
              sieci ładowarek wraz ze wzrostem liczby pojazdów elektrycznych.
            </p>
          </div>
        </div>
      </div>

      {/* Ekspertyzy dla osiedli, firm i parkingów */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
          Ekspertyzy dla osiedli, <span className="text-[#8ab925]">firm i parkingów</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Realizujemy audyty infrastruktury ładowania m.in. dla:
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Osiedli mieszkaniowych',
            'Wspólnot i spółdzielni',
            'Garaży podziemnych',
            'Biurowców i parków biznesowych',
            'Hoteli i obiektów komercyjnych',
            'Parkingów flotowych i logistycznych',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <SubpageContactSection
        kicker="Złóż zapytanie o ekspertyzę"
        title="Potrzebujesz ekspertyzy"
        highlightedTitle="stacji ładowania?"
        description="Opisz krótko typ budynku, liczbę lokali lub użytkowników oraz to, ilu kierowców potencjalnie będzie korzystać z ładowania."
        messagePlaceholder="Opisz typ budynku, liczbę lokali lub użytkowników oraz skalę potrzeb..."
      />
    </section>
  );
};
