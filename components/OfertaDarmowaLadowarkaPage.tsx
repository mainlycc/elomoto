import React from 'react';

export const OfertaDarmowaLadowarkaPage: React.FC = () => {

  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      {/* Nagłówek */}
      <header className="mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">Oferta</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
          Darmowa <span className="text-[#8ab925]">ładowarka</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium">
          Stacja ładowania finansowana przez elomoto.eco
        </p>
      </header>

      {/* Opis główny */}
      <div className="mb-16 space-y-4 text-sm text-gray-300 leading-relaxed max-w-3xl">
        <p>
          Darmowa ładowarka to model współpracy, w którym elomoto.eco inwestuje własny kapitał w budowę infrastruktury ładowania, a partner udostępnia lokalizację pod montaż stacji.
        </p>
        <p>
          Finansujemy zakup, instalację oraz uruchomienie urządzeń, tworząc gotowy punkt ładowania bez konieczności angażowania środków po stronie właściciela nieruchomości.
        </p>
        <p>
          To jeden z najszybszych sposobów na wdrożenie elektromobilności w danej lokalizacji — szczególnie tam, gdzie zapotrzebowanie dopiero się buduje.
        </p>
      </div>

      {/* Darmowa ładowarka na osiedlu */}
      <div className="glass border border-white/10 rounded-3xl p-6 md:p-8 mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Darmowa ładowarka na <span className="text-[#8ab925]">osiedlu mieszkaniowym</span>
        </h2>
        <div className="text-sm text-gray-300 leading-relaxed space-y-3">
          <p>
            Największe znaczenie infrastruktura ma tam, gdzie auta stoją najdłużej — dlatego model inwestycyjny elomoto.eco szczególnie wdrażany jest na terenach mieszkaniowych.
          </p>
          <p>
            Darmowa ładowarka na osiedlu mieszkaniowym umożliwia mieszkańcom codzienne, wygodne ładowanie pojazdów bez konieczności budowy prywatnej infrastruktury.
          </p>
          <p>
            Rozwiązanie sprawdza się na parkingach zewnętrznych.
          </p>
        </div>
      </div>

      {/* Dla kogo */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Dla kogo jest ten model?
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Model darmowej ładowarki powstał z myślą o lokalizacjach, które chcą uruchomić usługę ładowania bez ponoszenia kosztów inwestycyjnych. Najczęściej korzystają z niego:
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Wspólnoty i spółdzielnie mieszkaniowe',
            'Zarządcy nieruchomości',
            'Deweloperzy',
            'Firmy zarządzające nieruchomościami',
            'Biurowce i parki biznesowe',
            'Obiekty hotelowe i usługowe',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#8ab925] flex-shrink-0"></span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Co inwestuje elomoto.eco */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Co inwestuje <span className="text-[#8ab925]">elomoto.eco</span>?
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          W ramach modelu inwestycyjnego bierzemy na siebie pełny zakres uruchomienia infrastruktury:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            'Finansowanie zakupu stacji ładowania',
            'Dobór technologii i mocy urządzeń',
            'Organizację i realizację montażu',
            'Odbiory techniczne i uruchomienie',
            'Konfigurację systemu operatorskiego',
            'Wdrożenie płatności i rozliczeń',
            'Monitoring i nadzór nad działaniem stacji',
            'Wsparcie serwisowe i techniczne',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-4 italic">
          Partner udostępnia lokalizację — my budujemy i operujemy infrastrukturą.
        </p>
      </div>

      {/* Proces inwestycji */}
      <div className="mb-20">
        <h2 className="text-xl font-black text-white mb-8 uppercase tracking-tight">
          Jak wygląda proces inwestycji?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { step: '01', title: 'Zgłoszenie lokalizacji', desc: 'Przekazywane są podstawowe informacje o obiekcie, parkingu i infrastrukturze elektrycznej.' },
            { step: '02', title: 'Analiza techniczno-biznesowa', desc: 'Weryfikujemy możliwości przyłączeniowe, potencjał użytkowania oraz zasadność inwestycji.' },
            { step: '03', title: 'Ustalenie modelu współpracy', desc: 'Określamy zasady operacyjne, dostępność stacji i sposób funkcjonowania infrastruktury.' },
            { step: '04', title: 'Montaż i uruchomienie', desc: 'Realizujemy instalację, konfigurację systemu i oddajemy stację do użytkowania.' },
          ].map((item) => (
            <div key={item.step} className="glass border border-white/10 rounded-3xl p-6 space-y-3">
              <span className="text-3xl font-black text-[#8ab925]">{item.step}</span>
              <h3 className="text-sm font-black text-white uppercase tracking-tight">{item.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Formularz kontaktowy */}
      <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-2xl">
        <div className="mb-10">
          <span className="text-[#8ab925] font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">Sprawdź swoją lokalizację</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-[0.95] mb-4">
            Darmowa ładowarka <br /><span className="text-[#8ab925]">w Twojej lokalizacji</span>
          </h2>
          <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xl">
            Jeżeli zarządzasz osiedlem lub parkingiem i chcesz uruchomić ładowarkę finansowaną przez operatora — możemy przeanalizować potencjał inwestycyjny lokalizacji oraz przedstawić możliwe scenariusze wdrożenia infrastruktury.
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
              placeholder="Opisz krótko swoją lokalizację, typ parkingu, liczbę miejsc..."
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
