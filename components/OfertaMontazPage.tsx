import React from 'react';

export const OfertaMontazPage: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          Montaż stacji ładowania
        </h1>
        <p className="text-gray-300 max-w-2xl">
          Kompleksowa usługa projektowania i montażu stacji ładowania pojazdów elektrycznych
          w budynkach mieszkalnych, firmach oraz przestrzeniach publicznych.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-12 text-sm text-gray-200 leading-relaxed">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">
            Od audytu do pierwszego ładowania
          </h2>
          <p>
            Zaczynamy od analizy istniejącej instalacji elektrycznej oraz wymagań użytkowników.
            Na tej podstawie dobieramy optymalną liczbę i moc punktów ładowania, tak aby inwestycja
            była bezpieczna i ekonomicznie uzasadniona.
          </p>
          <p>
            Wspieramy Cię również w uzgodnieniach z zarządcą budynku, wspólnotą lub dostawcą energii,
            tłumacząc kwestie techniczne na zrozumiały język.
          </p>
        </div>
        <div className="glass border border-white/10 rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-white mb-3">
            Co obejmuje montaż?
          </h2>
          <ul className="space-y-2">
            <li>• koncepcję rozmieszczenia punktów ładowania,</li>
            <li>• dobór urządzeń i akcesoriów montażowych,</li>
            <li>• prace elektryczne i budowlane,</li>
            <li>• konfigurację zabezpieczeń i systemu zarządzania mocą,</li>
            <li>• testy końcowe oraz przekazanie dokumentacji.</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">
          Najczęstsze scenariusze montażu
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-200">
          <div className="glass border border-white/10 rounded-3xl p-5">
            <p className="font-semibold text-white mb-1">Garaże podziemne</p>
            <p>
              Montaż przy miejscach postojowych z uwzględnieniem istniejących pionów zasilających
              i wymogów przeciwpożarowych.
            </p>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-5">
            <p className="font-semibold text-white mb-1">Parkingi naziemne</p>
            <p>
              Wolnostojące słupki lub stacje ścienne, odporne na warunki atmosferyczne
              i intensywną eksploatację.
            </p>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-5">
            <p className="font-semibold text-white mb-1">Miejsca pracy</p>
            <p>
              Punkty ładowania dla floty służbowej i pracowników z możliwością rozliczania
              sesji prywatnych i firmowych.
            </p>
          </div>
        </div>
      </div>

      <div className="glass border border-[#00ff88]/30 rounded-3xl p-6 md:p-8">
        <h2 className="text-lg font-semibold text-white mb-3">
          Potrzebujesz wyceny montażu?
        </h2>
        <p className="text-sm text-gray-200 mb-4">
          Przekaż nam kilka informacji o liczbie miejsc postojowych, typie budynku oraz
          oczekiwanym sposobie korzystania z ładowarek. Przygotujemy wstępny wariant techniczny
          i kosztorys prac.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#00ff88] text-black text-xs font-extrabold tracking-wider uppercase shadow-lg hover:bg-[#4dffac] active:scale-95 transition-all"
        >
          Poproś o wycenę
        </a>
      </div>
    </section>
  );
};
