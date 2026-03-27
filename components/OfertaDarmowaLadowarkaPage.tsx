import React from 'react';
import { SubpageContactSection } from './SubpageContactSection';

export const OfertaDarmowaLadowarkaPage: React.FC = () => {

  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      {/* Nagłówek */}
      <header className="mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">Oferta</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
          Darmowa <span className="text-[#8ab925]">ładowarka</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium">
          Stacja ładowania finansowana przez elomoto.eco
        </p>
      </header>

      {/* Opis główny */}
      <div className="mb-16 space-y-4 text-sm text-gray-300 leading-relaxed max-w-3xl">
        <p>
          Darmowa ładowarka to model współpracy, w którym elomoto.eco inwestuje własny kapitał w budowę infrastruktury ładowania, a partner udostępnia lokalizację pod montaż stacji.
        </p>
        <p>
          Finansujemy zakup, instalację oraz uruchomienie urządzeń, tworząc gotowy punkt ładowania bez konieczności angażowania środków po stronie właściciela nieruchomości.
        </p>
        <p>
          To jeden z najszybszych sposobów na wdrożenie elektromobilności w danej lokalizacji — szczególnie tam, gdzie zapotrzebowanie dopiero się buduje.
        </p>
      </div>

      {/* Darmowa ładowarka na osiedlu */}
      <div className="glass border border-white/10 rounded-3xl p-6 md:p-8 mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Darmowa ładowarka na <span className="text-[#8ab925]">osiedlu mieszkaniowym</span>
        </h2>
        <div className="text-sm text-gray-300 leading-relaxed space-y-3">
          <p>
            Największe znaczenie infrastruktura ma tam, gdzie auta stoją najdłużej — dlatego model inwestycyjny elomoto.eco szczególnie wdrażany jest na terenach mieszkaniowych.
          </p>
          <p>
            Darmowa ładowarka na osiedlu mieszkaniowym umożliwia mieszkańcom codzienne, wygodne ładowanie pojazdów bez konieczności budowy prywatnej infrastruktury.
          </p>
          <p>
            Rozwiązanie sprawdza się na parkingach zewnętrznych.
          </p>
        </div>
      </div>

      {/* Dla kogo */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Dla kogo jest ten model?
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Model darmowej ładowarki powstał z myślą o lokalizacjach, które chcą uruchomić usługę ładowania bez ponoszenia kosztów inwestycyjnych. Najczęściej korzystają z niego:
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Wspólnoty i spółdzielnie mieszkaniowe',
            'Zarządcy nieruchomości',
            'Deweloperzy',
            'Firmy zarządzające nieruchomościami',
            'Biurowce i parki biznesowe',
            'Obiekty hotelowe i usługowe',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#8ab925] flex-shrink-0"></span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Co inwestuje elomoto.eco */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Co inwestuje <span className="text-[#8ab925]">elomoto.eco</span>?
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          W ramach modelu inwestycyjnego bierzemy na siebie pełny zakres uruchomienia infrastruktury:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            'Finansowanie zakupu stacji ładowania',
            'Dobór technologii i mocy urządzeń',
            'Organizację i realizację montażu',
            'Odbiory techniczne i uruchomienie',
            'Konfigurację systemu operatorskiego',
            'Wdrożenie płatności i rozliczeń',
            'Monitoring i nadzór nad działaniem stacji',
            'Wsparcie serwisowe i techniczne',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-4 italic">
          Partner udostępnia lokalizację — my budujemy i operujemy infrastrukturą.
        </p>
      </div>

      {/* Proces inwestycji */}
      <div className="mb-20">
        <h2 className="text-xl font-black text-white mb-8 uppercase tracking-tight">
          Jak wygląda proces inwestycji?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { step: '01', title: 'Zgłoszenie lokalizacji', desc: 'Przekazywane są podstawowe informacje o obiekcie, parkingu i infrastrukturze elektrycznej.' },
            { step: '02', title: 'Analiza techniczno-biznesowa', desc: 'Weryfikujemy możliwości przyłączeniowe, potencjał użytkowania oraz zasadność inwestycji.' },
            { step: '03', title: 'Ustalenie modelu współpracy', desc: 'Określamy zasady operacyjne, dostępność stacji i sposób funkcjonowania infrastruktury.' },
            { step: '04', title: 'Montaż i uruchomienie', desc: 'Realizujemy instalację, konfigurację systemu i oddajemy stację do użytkowania.' },
          ].map((item) => (
            <div key={item.step} className="glass border border-white/10 rounded-3xl p-6 space-y-3">
              <span className="text-3xl font-black text-[#8ab925]">{item.step}</span>
              <h3 className="text-sm font-black text-white uppercase tracking-tight">{item.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <SubpageContactSection
        kicker="Sprawdź swoją lokalizację"
        title="Darmowa ładowarka"
        highlightedTitle="w Twojej lokalizacji"
        description="Jeżeli zarządzasz osiedlem lub parkingiem i chcesz uruchomić ładowarkę finansowaną przez operatora, przeanalizujemy potencjał inwestycyjny lokalizacji."
        messagePlaceholder="Opisz krótko swoją lokalizację, typ parkingu i liczbę miejsc..."
      />
    </section>
  );
};
