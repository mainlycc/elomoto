import React from 'react';
import { NAV_ALIGNED_PAGE_SHELL, OFFER_LEDE_INNER, OFFER_TEXT_COLUMN } from '../utils/navAlignedLayout';
import { SubpageContactSection } from './SubpageContactSection';

export const OfertaPage: React.FC = () => {
  return (
    <section className={NAV_ALIGNED_PAGE_SHELL}>
      <header className={`mb-12 ${OFFER_TEXT_COLUMN} text-left`}>
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">
          elomoto.eco / oferta
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          Kompleksowa oferta dla budynków mieszkalnych, firm i instytucji
        </h1>
        <p className={`text-gray-300 text-base md:text-lg leading-relaxed ${OFFER_LEDE_INNER}`}>
          Od pierwszej koncepcji, przez montaż i finansowanie, aż po pełną obsługę operatorską
          i serwis – projektujemy infrastrukturę ładowania, która realnie pracuje na wartość
          Twojej nieruchomości.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="glass border border-white/10 rounded-3xl p-6 text-left">
          <h2 className="text-lg font-semibold text-white mb-3">
            Dla wspólnot i spółdzielni mieszkaniowych
          </h2>
          <ul className="space-y-2 text-base text-gray-200 leading-relaxed">
            <li>• podniesienie atrakcyjności budynku w oczach mieszkańców i kupujących,</li>
            <li>• uporządkowany model rozliczeń za energię,</li>
            <li>• możliwość rozwoju infrastruktury wraz z rosnącą liczbą aut elektrycznych.</li>
          </ul>
        </div>
        <div className="glass border border-white/10 rounded-3xl p-6 text-left">
          <h2 className="text-lg font-semibold text-white mb-3">
            Dla firm i pracodawców
          </h2>
          <ul className="space-y-2 text-base text-gray-200 leading-relaxed">
            <li>• benefit dla pracowników i gości,</li>
            <li>• wsparcie strategii ESG i polityki zrównoważonego rozwoju,</li>
            <li>• możliwość włączenia infrastruktury w flotę służbową.</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <div className={`mb-4 ${OFFER_TEXT_COLUMN} text-left`}>
          <h2 className="text-xl font-semibold text-white">Jakie rozwiązania oferujemy?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-base text-gray-200 leading-relaxed">
          <div className="glass border border-white/10 rounded-3xl p-5 text-left">
            <p className="text-sm font-semibold text-[#8ab925] uppercase tracking-wide mb-2">
              finansowanie
            </p>
            <p className="font-semibold text-white mb-2">Darmowa ładowarka</p>
            <p>
              Model, w którym przejmujemy na siebie koszty inwestycji, a Ty zyskujesz nową
              usługę dla użytkowników nieruchomości.
            </p>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-5 text-left">
            <p className="text-sm font-semibold text-[#8ab925] uppercase tracking-wide mb-2">
              instalacja
            </p>
            <p className="font-semibold text-white mb-2">Montaż i ekspertyzy</p>
            <p>
              Od audytu istniejącej instalacji po dobór sprzętu i nadzór nad wykonawstwem – w jednym
              miejscu.
            </p>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-5 text-left">
            <p className="text-sm font-semibold text-[#8ab925] uppercase tracking-wide mb-2">
              operacja
            </p>
            <p className="font-semibold text-white mb-2">Operator i serwis</p>
            <p>
              Bierzemy na siebie rozliczenia, obsługę użytkowników i utrzymanie sprzętu, żeby stacje
              działały bez zbędnych przerw.
            </p>
          </div>
        </div>
      </div>

      <SubpageContactSection
        kicker="Porozmawiajmy o ofercie"
        title="Nie wiesz od czego zacząć?"
        highlightedTitle="Napisz do nas"
        description="Pomożemy dobrać właściwy model współpracy i wyjaśnimy różnice między poszczególnymi wariantami oferty."
        messagePlaceholder="Opisz krótko swój obiekt, potrzeby i zakres współpracy..."
      />
    </section>
  );
};
