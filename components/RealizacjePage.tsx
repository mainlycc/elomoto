import React from 'react';
import { REALIZATIONS } from '../constants';
import { navigateTo } from '../utils/navigation';

export const RealizacjePage: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-24">
      {/* Nagłówek strony realizacji */}
      <header className="mb-12">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">
          nasze projekty
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          Realizacje elomoto.eco
        </h1>
        <p className="text-gray-300 max-w-2xl text-sm">
          Wybrane wdrożenia infrastruktury ładowania w biurowcach, hotelach, centrach handlowych i
          na osiedlach mieszkaniowych. Różne lokalizacje, jeden standard – wygodne, bezpieczne i
          nowoczesne ładowanie pojazdów elektrycznych.
        </p>
      </header>

      {/* Karty realizacji */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {REALIZATIONS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => navigateTo(`/realizacje/${item.slug}`)}
            className="group text-left rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#8ab925]/50 hover:bg-white/10 transition-all shadow-lg hover:shadow-2xl"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8ab925] mb-1">
                  realizacja 0{item.id}
                </p>
                <h2 className="text-lg font-black text-white leading-tight">
                  {item.title}
                </h2>
              </div>
            </div>
            <div className="p-5 text-sm text-gray-200">
              <p>
                Zobacz szczegóły tej realizacji – zakres prac, typ stacji oraz sposób,
                w jaki ładowanie wspiera codzienne funkcjonowanie obiektu.
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Formularz kontaktowy pod realizacjami */}
      <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-2xl">
        <div className="mb-10">
          <span className="text-[#8ab925] font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">
            Formularz kontaktowy
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-[0.95] mb-4">
            Chcesz podobną <br />
            <span className="text-[#8ab925]">realizację?</span>
          </h2>
          <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xl">
            Napisz do nas, jeśli planujesz wdrożenie infrastruktury ładowania w swoim biurowcu,
            hotelu, centrum handlowym lub na osiedlu mieszkaniowym. Przygotujemy propozycję
            dopasowaną do Twojego obiektu.
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="space-y-1">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">
              Twoje Imię
            </label>
            <input
              type="text"
              placeholder="np. Jan Kowalski"
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold text-slate-900 focus:border-[#8ab925] focus:ring-4 focus:ring-[#8ab925]/5 outline-none transition-all placeholder:text-slate-300"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">
              E-mail
            </label>
            <input
              type="email"
              placeholder="twoj@email.pl"
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold text-slate-900 focus:border-[#8ab925] focus:ring-4 focus:ring-[#8ab925]/5 outline-none transition-all placeholder:text-slate-300"
            />
          </div>
          <div className="md:col-span-2 space-y-1">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">
              Treść wiadomości
            </label>
            <textarea
              rows={4}
              placeholder="Opisz swój obiekt, liczbę miejsc postojowych, potrzeby użytkowników..."
              className="w-full bg-white border border-slate-200 rounded-3xl py-4 px-6 text-sm font-bold text-slate-900 focus:border-[#8ab925] focus:ring-4 focus:ring-[#8ab925]/5 outline-none transition-all placeholder:text-slate-300 resize-none"
            ></textarea>
          </div>

          <div className="md:col-span-2 pt-4">
            <div className="space-y-3 mb-8">
              <label className="flex items-start space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 rounded border-slate-300 text-[#8ab925] focus:ring-[#8ab925]"
                />
                <span className="text-[10px] text-slate-400 font-medium leading-relaxed">
                  Wyrażam zgodę na przetwarzanie danych przez Elomoto Sp. z o.o. zgodnie z{' '}
                  <a href="/polityka-prywatnosci" className="text-slate-900 underline font-black">
                    Polityką Prywatności
                  </a>
                  .
                </span>
              </label>
            </div>

            <button className="w-full sm:w-auto bg-[#8ab925] text-white font-black py-5 px-16 rounded-2xl text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#8ab925]/20 hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">
              Wyślij zapytanie
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

