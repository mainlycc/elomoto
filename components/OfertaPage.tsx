import React from 'react';
import { SubpageContactSection } from './SubpageContactSection';

export const OfertaPage: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      <header className="mb-12">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">
          elomoto.eco / oferta
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          Kompleksowa oferta dla budynków mieszkalnych, firm i instytucji
        </h1>
        <p className="text-gray-300 max-w-2xl">
          Od pierwszej koncepcji, przez montaż i finansowanie, aż po pełną obsługę operatorską
          i serwis – projektujemy infrastrukturę ładowania, która realnie pracuje na wartość
          Twojej nieruchomości.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="glass border border-white/10 rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-white mb-3">
            Dla wspólnot i spółdzielni mieszkaniowych
          </h2>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>• podniesienie atrakcyjności budynku w oczach mieszkańców i kupujących,</li>
            <li>• uporządkowany model rozliczeń za energię,</li>
            <li>• możliwość rozwoju infrastruktury wraz z rosnącą liczbą aut elektrycznych.</li>
          </ul>
        </div>
        <div className="glass border border-white/10 rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-white mb-3">
            Dla firm i pracodawców
          </h2>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>• benefit dla pracowników i gości,</li>
            <li>• wsparcie strategii ESG i polityki zrównoważonego rozwoju,</li>
            <li>• możliwość włączenia infrastruktury w flotę służbową.</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">
          Jakie rozwiązania oferujemy?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-200">
          <div className="glass border border-white/10 rounded-3xl p-5">
            <p className="text-xs font-semibold text-[#8ab925] uppercase mb-2">
              finansowanie
            </p>
            <p className="font-semibold text-white mb-2">Darmowa ładowarka</p>
            <p>
              Model, w którym przejmujemy na siebie koszty inwestycji, a Ty zyskujesz nową
              usługę dla użytkowników nieruchomości.
            </p>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-5">
            <p className="text-xs font-semibold text-[#8ab925] uppercase mb-2">
              instalacja
            </p>
            <p className="font-semibold text-white mb-2">Montaż i ekspertyzy</p>
            <p>
              Od audytu istniejącej instalacji po dobór sprzętu i nadzór nad wykonawstwem – w jednym
              miejscu.
            </p>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-5">
            <p className="text-xs font-semibold text-[#8ab925] uppercase mb-2">
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
