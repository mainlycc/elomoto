import React from 'react';

export const PlatnoscBezRejestracjiPage: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      {/* Nagłówek */}
      <header className="mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">
          Płatność bez rejestracji
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
          Ładowanie bez <span className="text-[#8ab925]">zakładania konta</span>
        </h1>
        <div className="text-sm text-gray-300 leading-relaxed max-w-3xl space-y-3">
          <p>
            Nie każdy kierowca chce instalować aplikację i tworzyć konto, aby naładować samochód elektryczny. Dlatego elomoto.eco umożliwia szybkie uruchomienie ładowania oraz płatność jednorazową — całkowicie bez rejestracji.
          </p>
          <p>
            To rozwiązanie zwiększa dostępność stacji, poprawia rotację użytkowników i ułatwia obsługę kierowców okazjonalnych.
          </p>
        </div>
      </header>

      {/* Jak działa płatność bez rejestracji */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
          Jak działa płatność <span className="text-[#8ab925]">bez rejestracji</span>?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { step: '01', title: 'Skanuj kod QR', desc: 'Kierowca skanuje kod QR umieszczony na stacji ładowania.' },
            { step: '02', title: 'Strona obsługi', desc: 'Otwiera się mobilna strona obsługi ładowania.' },
            { step: '03', title: 'Bez rejestracji', desc: 'Użytkownik wybiera ikonę „Płatność bez rejestracji".' },
            { step: '04', title: 'Wyszukiwanie stacji', desc: 'System automatycznie wyszukuje ładowarkę na mapie.' },
            { step: '05', title: 'Wybór i płatność', desc: 'Kierowca wybiera punkt ładowania, metodę płatności i potwierdza transakcję.' },
            { step: '06', title: 'Start ładowania', desc: 'Proces ładowania uruchamia się automatycznie.' },
          ].map((item) => (
            <div key={item.step} className="glass border border-white/10 rounded-3xl p-6 space-y-3">
              <span className="text-3xl font-black text-[#8ab925]">{item.step}</span>
              <h3 className="text-sm font-black text-white uppercase tracking-tight">{item.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-4 italic">
          Jeśli w przeglądarce włączona jest geolokalizacja, platforma wskaże najbliższą stację — zazwyczaj tę, przy której znajduje się użytkownik.
        </p>
      </div>

      {/* Inteligentne wyszukiwanie */}
      <div className="glass border border-white/10 rounded-3xl p-6 md:p-8 mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Inteligentne <span className="text-[#8ab925]">wyszukiwanie</span> ładowarki
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          System wykorzystuje lokalizację urządzenia, aby maksymalnie uprościć proces startu sesji:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            'Automatyczne wskazanie najbliższej stacji',
            'Eliminacja błędów wyboru punktu',
            'Szybsze rozpoczęcie ładowania',
            'Wygoda dla użytkowników jednorazowych i zagranicznych',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gdzie sprawdza się płatność jednorazowa */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Gdzie sprawdza się <span className="text-[#8ab925]">płatność jednorazowa</span>?
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Rozwiązanie szczególnie dobrze działa w lokalizacjach o dużej rotacji kierowców:
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Parkingi prywatne / ogólnodostępne, szczególnie na osiedlach mieszkaniowych',
            'Hotele, apartamenty, obiekty noclegowe',
            'Restauracje i obiekty usługowe',
            'Galerie handlowe',
            'Biurowce z dostępem dla gości',
            'Stacje przy trasach przelotowych',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#8ab925] flex-shrink-0"></span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Płatności ad-hoc jako element systemu */}
      <div className="glass border border-[#8ab925]/20 rounded-3xl p-6 md:p-8 mb-20">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Płatności ad-hoc jako element <span className="text-[#8ab925]">systemu operatorskiego</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          Płatność bez rejestracji jest integralną częścią systemu operatorskiego elomoto.eco. Dzięki temu operator może obsługiwać zarówno stałych użytkowników, jak i kierowców jednorazowych w jednym, spójnym środowisku.
        </p>
      </div>

      {/* Formularz kontaktowy */}
      <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-2xl">
        <div className="mb-10">
          <span className="text-[#8ab925] font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">System operatorski</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-[0.95] mb-4">
            Potrzebujesz systemu <br /><span className="text-[#8ab925]">operatorskiego?</span>
          </h2>
          <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xl">
            Jeżeli planujesz uruchomienie lub rozwój sieci ładowania, system elomoto.eco umożliwia wdrożenie płatności bez rejestracji jako jednego z modeli rozliczeń — obok pełnej obsługi operatora, raportowania i zarządzania stacjami. Przedstawimy dostępne rozwiązania oraz modele wdrożenia dopasowane do skali infrastruktury i typu lokalizacji.
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
              placeholder="Opisz swoją infrastrukturę, liczbę stacji, potrzeby w zakresie płatności..."
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

