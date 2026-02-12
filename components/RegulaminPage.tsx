
import React from 'react';

export const RegulaminPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a1a14] text-white p-8 md:p-20 font-['Plus_Jakarta_Sans']">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black mb-2 uppercase tracking-tighter">
              Regulamin <span className="text-[#00ff88]">Serwisu</span>
            </h1>
            <p className="text-gray-300">
              Poniżej znajduje się wzór regulaminu dla strony informacyjnej. Uzupełnij go o dane firmy i szczegóły usług,
              jeśli planujesz je oferować.
            </p>
          </div>
        </div>

        <section className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl space-y-8">
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">1. Postanowienia ogólne</h2>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
              <li>Serwis ma charakter informacyjny i promocyjny.</li>
              <li>Korzystanie z Serwisu oznacza akceptację niniejszego Regulaminu.</li>
              <li>Właściciel Serwisu może aktualizować Regulamin; zalecamy okresowe sprawdzanie zmian.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">2. Zasady korzystania</h2>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
              <li>Użytkownik zobowiązuje się korzystać z Serwisu w sposób zgodny z prawem i dobrymi obyczajami.</li>
              <li>Zabronione jest dostarczanie treści bezprawnych oraz podejmowanie działań zakłócających działanie Serwisu.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">3. Własność intelektualna</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Treści dostępne w Serwisie (w tym teksty, grafiki, znaki) mogą podlegać ochronie prawnej. Zabronione jest
              kopiowanie i rozpowszechnianie bez zgody uprawnionych podmiotów, chyba że przepisy stanowią inaczej.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">4. Odpowiedzialność</h2>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
              <li>Właściciel Serwisu dokłada starań, aby informacje były aktualne, ale nie gwarantuje ich kompletności.</li>
              <li>W najszerszym dopuszczalnym zakresie Właściciel Serwisu nie ponosi odpowiedzialności za szkody pośrednie.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">5. Kontakt</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              W sprawach dotyczących Serwisu skontaktuj się poprzez formularz w sekcji „Kontakt” na stronie głównej.
            </p>
          </div>

          <p className="text-[10px] text-gray-300 uppercase tracking-widest pt-2 border-t border-white/10">
            Ostatnia aktualizacja: uzupełnij datę
          </p>
        </section>
      </div>
    </div>
  );
};

