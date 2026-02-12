import React from 'react';

export const OfertaOperatorPage: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          Usługa operatorska
        </h1>
        <p className="text-gray-300 max-w-2xl">
          Przejmujemy pełną obsługę operatorską stacji ładowania – od rozliczeń po wsparcie
          użytkowników, aż po raportowanie i rozwój infrastruktury.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-12 text-sm text-gray-200 leading-relaxed">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">
            Co oznacza „pełna obsługa operatorska”?
          </h2>
          <p>
            Jako operator odpowiadamy za bieżące funkcjonowanie stacji – ich widoczność w systemie,
            prawidłowe rozliczanie sesji ładowania oraz obsługę zgłoszeń użytkowników.
          </p>
          <p>
            Ty decydujesz o ogólnych zasadach (np. czy ładowanie ma być płatne czy bezpłatne
            dla wybranych grup), a my dbamy o resztę.
          </p>
        </div>
        <div className="glass border border-white/10 rounded-3xl p-6">
          <h2 className="text-lg font-semibold text-white mb-3">
            Zakres usługi operatorskiej
          </h2>
          <ul className="space-y-2">
            <li>• konfiguracja cenników i dostępów do stacji,</li>
            <li>• obsługa płatności i rozliczeń sesji,</li>
            <li>• wsparcie użytkowników (helpdesk),</li>
            <li>• monitoring pracy urządzeń i powiadomienia o nieprawidłowościach,</li>
            <li>• okresowe raporty wykorzystania infrastruktury.</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">
          Modele rozliczeń
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-200">
          <div className="glass border border-white/10 rounded-3xl p-5">
            <p className="font-semibold text-white mb-1">Dla mieszkańców / pracowników</p>
            <p>
              Preferencyjne stawki za ładowanie, rozliczanie miesięczne lub na podstawie
              indywidualnych kont użytkowników.
            </p>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-5">
            <p className="font-semibold text-white mb-1">Dla gości i klientów</p>
            <p>
              Krótkie sesje ładowania z płatnością ad hoc – np. przez aplikację lub kod QR.
            </p>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-5">
            <p className="font-semibold text-white mb-1">Mieszane modele</p>
            <p>
              Połączenie darmowego lub tańszego ładowania dla wybranych grup z komercyjną
              ofertą dla pozostałych użytkowników.
            </p>
          </div>
        </div>
      </div>

      <div className="glass border border-[#00ff88]/30 rounded-3xl p-6 md:p-8">
        <h2 className="text-lg font-semibold text-white mb-3">
          Zostań operatorem stacji bez budowania własnego zespołu
        </h2>
        <p className="text-sm text-gray-200 mb-4">
          Jeśli chcesz udostępniać ładowanie użytkownikom, ale nie planujesz tworzyć własnego
          działu obsługi i IT, usługa operatorska elomoto.eco zdejmie z Ciebie większość obowiązków
          związanych z codziennym działaniem stacji.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#00ff88] text-black text-xs font-extrabold tracking-wider uppercase shadow-lg hover:bg-[#4dffac] active:scale-95 transition-all"
        >
          Porozmawiajmy o operatorze
        </a>
      </div>
    </section>
  );
};
