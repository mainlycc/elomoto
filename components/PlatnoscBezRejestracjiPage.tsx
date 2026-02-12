import React from 'react';

export const PlatnoscBezRejestracjiPage: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      <header className="mb-10">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#00ff88] uppercase mb-4">
          płatność bez rejestracji
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          Ładuj bez zakładania konta
        </h1>
        <p className="text-gray-300 text-sm max-w-2xl">
          Dla wielu kierowców liczy się prostota: podjechać, zeskanować kod, zapłacić i odjechać.
          Dlatego elomoto.eco wspiera płatność za ładowanie bez konieczności rejestracji w aplikacji.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-12 text-sm text-gray-200 leading-relaxed">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">
            Jak działa płatność bez rejestracji?
          </h2>
          <ol className="space-y-3 list-decimal list-inside">
            <li> Kierowca skanuje kod QR umieszczony na stacji ładowania. </li>
            <li> Otwiera się strona płatności powiązana z konkretną ładowarką. </li>
            <li> Użytkownik wybiera metodę płatności i potwierdza transakcję. </li>
            <li> Stacja uruchamia proces ładowania na wybranym punkcie. </li>
          </ol>
        </div>
        <div className="glass border border-white/10 rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-white mb-3">
            Dla kogo jest to rozwiązanie?
          </h2>
          <ul className="space-y-2">
            <li>• parkingi ogólnodostępne,</li>
            <li>• obiekty hotelowe i usługowe,</li>
            <li>• lokalizacje z dużym udziałem użytkowników jednorazowych (np. klienci zewnętrzni).</li>
          </ul>
        </div>
      </div>

      <div className="glass border border-[#00ff88]/30 rounded-3xl p-6 md:p-8">
        <h2 className="text-lg font-semibold text-white mb-3">
          Chcesz uruchomić płatność bez rejestracji?
        </h2>
        <p className="text-sm text-gray-200 mb-4">
          Skontaktuj się z nami – pomożemy dobrać model rozliczeń do Twojej lokalizacji i
          wdrożyć płatności jednorazowe równolegle z kontami stałych użytkowników.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#00ff88] text-black text-xs font-extrabold tracking-wider uppercase shadow-lg hover:bg-[#4dffac] active:scale-95 transition-all"
        >
          Skontaktuj się w sprawie płatności
        </a>
      </div>
    </section>
  );
};

