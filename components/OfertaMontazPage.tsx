import React from 'react';
import { SubpageContactSection } from './SubpageContactSection';

export const OfertaMontazPage: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      {/* Nagłówek */}
      <header className="mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">Oferta</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
          Montaż stacji <span className="text-[#8ab925]">ładowania</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium">
          Kompleksowa realizacja infrastruktury ładowania
        </p>
      </header>

      {/* Opis główny */}
      <div className="mb-16 space-y-4 text-sm text-gray-300 leading-relaxed max-w-3xl">
        <p>
          Realizujemy kompleksowe usługi projektowania i montażu stacji ładowania pojazdów elektrycznych — zarówno dla klientów prywatnych, jak i firm budujących infrastrukturę na potrzeby swojej działalności.
        </p>
        <p>
          Wdrażamy rozwiązania w budynkach mieszkalnych, obiektach komercyjnych oraz przestrzeniach publicznych, zapewniając pełne wsparcie techniczne od koncepcji po uruchomienie ładowania.
        </p>
      </div>

      {/* Od audytu do pierwszego ładowania */}
      <div className="glass border border-white/10 rounded-3xl p-6 md:p-8 mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Od audytu do <span className="text-[#8ab925]">pierwszego ładowania</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Proces rozpoczynamy od analizy istniejącej instalacji elektrycznej oraz potrzeb użytkowników. Na tej podstawie dobieramy:
        </p>
        <div className="grid sm:grid-cols-3 gap-3 mb-5">
          {[
            'Moc urządzeń',
            'Sposób zarządzania energią',
            'Przyszłą skalowalność infrastruktury',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <div className="text-sm text-gray-400 space-y-2 italic">
          <p>Dbamy o to, aby inwestycja była bezpieczna, zgodna z normami i ekonomicznie uzasadniona.</p>
          <p>Wspieramy również w uzgodnieniach formalnych — z zarządcą budynku, wspólnotą mieszkaniową lub dostawcą energii — tłumacząc kwestie techniczne w przystępny sposób.</p>
        </div>
      </div>

      {/* Co obejmuje montaż */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Co obejmuje montaż <span className="text-[#8ab925]">stacji ładowania</span>?
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Zakres realizacji obejmuje pełny proces wykonawczy:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            'Opracowanie koncepcji rozmieszczenia punktów ładowania',
            'Dobór stacji, mocy i akcesoriów montażowych',
            'Projekt techniczny infrastruktury',
            'Prace elektryczne i budowlane',
            'Prowadzenie tras kablowych',
            'Montaż zabezpieczeń',
            'Konfigurację systemu zarządzania mocą (DLM)',
            'Opcjonalną integrację z systemem operatorskim',
            'Testy końcowe i uruchomienie',
            'Przekazanie dokumentacji powykonawczej',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Najczęstsze scenariusze montażu */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
          Najczęstsze scenariusze <span className="text-[#8ab925]">montażu</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Garaże podziemne */}
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">Garaże podziemne</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              Montaż punktów ładowania przy miejscach postojowych z uwzględnieniem:
            </p>
            <ul className="space-y-2 text-sm text-gray-200">
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> istniejących pionów zasilających</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> bilansu mocy budynku</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> wymogów przeciwpożarowych</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> możliwości przyszłej rozbudowy infrastruktury</li>
            </ul>
          </div>

          {/* Parkingi naziemne */}
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">Parkingi naziemne</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              Instalacja wolnostojących stacji lub ładowarek ściennych przystosowanych do pracy w warunkach zewnętrznych:
            </p>
            <ul className="space-y-2 text-sm text-gray-200">
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> odporność na warunki atmosferyczne</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> zabezpieczenia antykolizyjne</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> przygotowanie pod rozbudowę sieci</li>
            </ul>
          </div>

          {/* Infrastruktura w firmach */}
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">Infrastruktura w firmach</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              Budowa stacji ładowania na terenie działalności obejmuje m.in.:
            </p>
            <ul className="space-y-2 text-sm text-gray-200">
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> punkty dla floty służbowej</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> ładowarki dla pracowników</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> stacje dla klientów i gości</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> możliwość rozliczania sesji prywatnych i firmowych</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> integrację z systemem operatorskim i raportowaniem</li>
            </ul>
          </div>

          {/* Montaż prywatny */}
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">Montaż prywatnej stacji ładowania</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              Realizujemy również instalacje indywidualne:
            </p>
            <ul className="space-y-2 text-sm text-gray-200">
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> przy domach jednorodzinnych</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> w garażach prywatnych</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> na miejscach postojowych w halach garażowych</li>
            </ul>
            <p className="text-sm text-gray-400 mt-3 italic">
              Dobieramy urządzenia do mocy przyłączeniowej budynku oraz stylu użytkowania pojazdu.
            </p>
          </div>
        </div>
      </div>

      <SubpageContactSection
        kicker="Wycena montażu"
        title="Potrzebujesz wyceny"
        highlightedTitle="montażu stacji?"
        description="Przekaż nam podstawowe informacje: liczbę miejsc postojowych, typ obiektu, dostępną moc przyłączeniową oraz planowany sposób korzystania z ładowarek."
        messagePlaceholder="Opisz typ obiektu, liczbę miejsc postojowych, dostępną moc przyłączeniową..."
      />
    </section>
  );
};
