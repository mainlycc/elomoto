import React from 'react';
import type { Realization } from '../types';
import { REALIZATIONS } from '../constants';
import { navigateTo } from '../utils/navigation';

interface Props {
  realization: Realization | null;
}

export const RealizacjaDetailPage: React.FC<Props> = ({ realization }) => {
  if (!realization) {
    return (
      <section className="max-w-4xl mx-auto px-4 pb-24">
        <h1 className="text-2xl md:text-3xl font-black text-white mb-4">
          Realizacja nie została znaleziona
        </h1>
        <p className="text-sm text-gray-300 mb-6">
          Sprawdź poprawność adresu URL lub wróć do listy wszystkich realizacji.
        </p>
        <button
          onClick={() => navigateTo('/realizacje')}
          className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#8ab925] text-black text-xs font-extrabold tracking-wider uppercase shadow-lg hover:bg-[#9ed02e] active:scale-95 transition-all"
        >
          Wróć do realizacji
        </button>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      {/* Nagłówek główny */}
      <header className="mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">
          nasze projekty
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
          Realizacje <span className="text-[#8ab925]">elomoto.eco</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium">
          Wybrane wdrożenia infrastruktury ładowania w biurowcach, hotelach, centrach handlowych i 
          na osiedlach mieszkaniowych. Różne lokalizacje, jeden standard – wygodne, bezpieczne i 
          nowoczesne ładowanie pojazdów elektrycznych.
        </p>
      </header>

      {/* Szczegóły realizacji */}
      <div className="mb-16">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">
            realizacja 0{realization.id}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            {realization.title}
          </h2>
          <p className="text-gray-300 text-sm max-w-2xl">
            Przykładowa realizacja infrastruktury ładowania w obiekcie komercyjnym. Opis poniżej
            ma charakter poglądowy – możesz go później zastąpić szczegółowym case study.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src={realization.image}
              alt={realization.title}
              className="w-full h-full object-cover max-h-[360px]"
            />
          </div>
          <div className="space-y-4 text-sm text-gray-200 leading-relaxed">
            <h3 className="text-lg font-semibold text-white">
              Zakres projektu
            </h3>
            <p>
              W ramach projektu wykonano analizę zapotrzebowania na ładowanie, przygotowano
              koncepcję techniczną oraz zrealizowano kompletny montaż punktów ładowania wraz
              z uruchomieniem systemu rozliczeń.
            </p>
            <ul className="space-y-2">
              <li>• instalacja kilku punktów ładowania AC / DC,</li>
              <li>• dopasowanie infrastruktury do istniejącej rozdzielni,</li>
              <li>• konfiguracja dostępu dla mieszkańców / klientów / pracowników,</li>
              <li>• integracja z usługą operatorską elomoto.eco.</li>
            </ul>
          </div>
        </div>

        <div className="glass border border-white/10 rounded-3xl p-6 md:p-8 mb-10">
          <h3 className="text-lg font-semibold text-white mb-3">
            Efekty dla inwestora
          </h3>
          <p className="text-sm text-gray-200 mb-4">
            Dzięki wdrożeniu infrastruktury ładowania obiekt zyskał nową wartość dla użytkowników,
            a także możliwość raportowania danych związanych z wykorzystaniem stacji i zużyciem
            energii elektrycznej.
          </p>
          <ul className="grid md:grid-cols-3 gap-4 text-sm text-gray-200">
            <li className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">
                komfort
              </p>
              <p>Ładowanie dostępne tam, gdzie użytkownicy spędzają najwięcej czasu.</p>
            </li>
            <li className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">
                wizerunek
              </p>
              <p>Wzmocnienie proekologicznego wizerunku inwestycji.</p>
            </li>
            <li className="bg-white/5 rounded-2xl p-4 border border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">
                dane
              </p>
              <p>Lepsze zrozumienie realnego zapotrzebowania na ładowanie dzięki raportom.</p>
            </li>
          </ul>
        </div>

        <button
          onClick={() => navigateTo('/realizacje')}
          className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-white/5 text-white text-xs font-extrabold tracking-wider uppercase border border-white/20 hover:bg-white/10 active:scale-95 transition-all"
        >
          Wróć do listy realizacji
        </button>
      </div>

      {/* Galeria innych realizacji */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
          Inne <span className="text-[#8ab925]">realizacje</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {REALIZATIONS.filter(r => r.id !== realization.id).slice(0, 4).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => navigateTo(`/realizacje/${item.slug}`)}
              className="group text-left rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#8ab925]/50 hover:bg-white/10 transition-all shadow-lg hover:shadow-2xl"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#8ab925] mb-1">
                    realizacja 0{item.id}
                  </p>
                  <h3 className="text-sm font-black text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Formularz kontaktowy */}
      <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-2xl">
        <div className="mb-10">
          <span className="text-[#8ab925] font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">Formularz kontaktowy</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-[0.95] mb-4">
            Chcesz podobną <br /><span className="text-[#8ab925]">realizację?</span>
          </h2>
          <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xl">
            Skontaktuj się z nami, aby omówić możliwości wdrożenia infrastruktury ładowania w Twoim obiekcie. 
            Przygotujemy indywidualną ofertę dopasowaną do Twoich potrzeb.
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="space-y-1">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Twoje Imię</label>
            <input
              type="text"
              placeholder="np. Jan Kowalski"
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold text-slate-900 focus:border-[#8ab925] focus:ring-4 focus:ring-[#8ab925]/5 outline-none transition-all placeholder:text-slate-300"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">E-mail</label>
            <input
              type="email"
              placeholder="twoj@email.pl"
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold text-slate-900 focus:border-[#8ab925] focus:ring-4 focus:ring-[#8ab925]/5 outline-none transition-all placeholder:text-slate-300"
            />
          </div>
          <div className="md:col-span-2 space-y-1">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Treść wiadomości</label>
            <textarea
              rows={4}
              placeholder="Opisz swój projekt, liczbę miejsc postojowych, typ obiektu..."
              className="w-full bg-white border border-slate-200 rounded-3xl py-4 px-6 text-sm font-bold text-slate-900 focus:border-[#8ab925] focus:ring-4 focus:ring-[#8ab925]/5 outline-none transition-all placeholder:text-slate-300 resize-none"
            ></textarea>
          </div>

          <div className="md:col-span-2 pt-4">
            <div className="space-y-3 mb-8">
              <label className="flex items-start space-x-3 cursor-pointer group">
                <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-[#8ab925] focus:ring-[#8ab925]" />
                <span className="text-[10px] text-slate-400 font-medium leading-relaxed">
                  Wyrażam zgodę na przetwarzanie danych przez Elomoto Sp. z o.o. zgodnie z <a href="/polityka-prywatnosci" className="text-slate-900 underline font-black">Polityką Prywatności</a>.
                </span>
              </label>
            </div>

            <button className="w-full sm:w-auto bg-[#8ab925] text-white font-black py-5 px-16 rounded-2xl text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#8ab925]/20 hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">
              Wyślij zapytanie
            </button>
          </div>
        </form>

        {/* Dane firmy */}
        <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h5 className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-3">Rejestracja spółki</h5>
              <div className="text-[10px] font-bold text-slate-500 space-y-1 leading-relaxed">
                <p>ELOMOTO SP. Z O.O.</p>
                <p>KRS: 0001012969 | NIP: 5223246605</p>
                <p>REGON: 524171300</p>
                <p>Kapitał: 3 000 000 PLN</p>
              </div>
            </div>
            <div className="md:text-right">
              <h5 className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-3">Siedziba</h5>
              <p className="text-[10px] font-bold text-slate-500 leading-relaxed">
                ul. Czereśniowa 98/117<br />
                02-456 Warszawa
              </p>
              <div className="mt-4 inline-flex items-center space-x-2 bg-slate-900 text-[#8ab925] px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-[#8ab925] rounded-full animate-pulse"></span>
                <span>Ubezpieczenie OC 2 mln PLN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

