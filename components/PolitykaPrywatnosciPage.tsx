
import React from 'react';

export const PolitykaPrywatnosciPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a1a14] text-white p-8 md:p-20 font-['Plus_Jakarta_Sans']">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black mb-2 uppercase tracking-tighter">
              Polityka <span className="text-[#8ab925]">Prywatności</span>
            </h1>
            <p className="text-gray-300">
              To jest szablon polityki prywatności dla strony informacyjnej. Uzupełnij go zgodnie z faktycznym sposobem
              przetwarzania danych oraz używanymi narzędziami (np. analityka, newsletter).
            </p>
          </div>
        </div>

        <section className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl space-y-8">
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">1. Administrator danych</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Administratorem danych jest właściciel serwisu elomoto.eco (dalej: „Administrator”). Dane kontaktowe
              Administratora uzupełnij w tej sekcji.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">2. Zakres i cele przetwarzania</h2>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
              <li>Obsługa zapytań z formularza kontaktowego (jeśli dostępny).</li>
              <li>Utrzymanie i bezpieczeństwo Serwisu (logi techniczne, wykrywanie nadużyć).</li>
              <li>Pomiar statystyk (jeśli używasz narzędzi analitycznych – opisz je i podstawę prawną).</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">3. Odbiorcy danych</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dane mogą być przekazywane podmiotom przetwarzającym na zlecenie Administratora (np. hosting, dostawcy
              narzędzi IT) wyłącznie w zakresie niezbędnym do świadczenia usług.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">4. Okres przechowywania</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dane przechowywane są przez czas niezbędny do realizacji celu, a następnie przez okres wymagany przepisami
              prawa lub do czasu przedawnienia ewentualnych roszczeń.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">5. Prawa użytkownika</h2>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
              <li>Prawo dostępu do danych, sprostowania, usunięcia, ograniczenia przetwarzania.</li>
              <li>Prawo sprzeciwu oraz przenoszenia danych (jeśli ma zastosowanie).</li>
              <li>Prawo wniesienia skargi do organu nadzorczego.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">6. Pliki cookies</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Serwis może wykorzystywać pliki cookies w celach technicznych oraz – opcjonalnie – analitycznych. Opisz
              używane kategorie cookies oraz sposób zarządzania zgodą, jeśli wdrażasz baner cookies.
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

