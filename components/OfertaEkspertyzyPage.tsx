import React from 'react';

export const OfertaEkspertyzyPage: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      {/* Nagłówek */}
      <header className="mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">Oferta</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
          Ekspertyzy stacji <span className="text-[#8ab925]">ładowania</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium">
          Sprawdź możliwości montażu infrastruktury ładowania
        </p>
      </header>

      {/* Opis główny */}
      <div className="mb-16 space-y-4 text-sm text-gray-300 leading-relaxed max-w-3xl">
        <p>
          Wykonujemy ekspertyzy stacji ładowania oraz audyty techniczne infrastruktury elektrycznej, 
          które pozwalają określić, czy i w jaki sposób można bezpiecznie zamontować ładowarki w 
          danej lokalizacji.
        </p>
        <p>
          Analizujemy warunki techniczne budynku, a wyniki przekładamy na czytelne rekomendacje 
          inwestycyjne — zarówno dla zarządców nieruchomości, wspólnot mieszkaniowych, firm 
          planujących rozwój infrastruktury ładowania oraz dla chcących ładowarkę na własny użytek.
        </p>
      </div>

      {/* Co obejmuje audyt stacji ładowania */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
          Co obejmuje audyt <span className="text-[#8ab925]">stacji ładowania?</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Ekspertyza techniczna infrastruktury ładowania obejmuje szczegółową analizę:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {[
            'Istniejącej instalacji elektrycznej',
            'Mocy przyłączeniowej obiektu',
            'Aktualnych i szczytowych obciążeń energetycznych',
            'Rozdzielni i pionów zasilających',
            'Możliwości prowadzenia tras kablowych',
            'Ograniczeń konstrukcyjnych budynku',
            'Przepisów przeciwpożarowych',
            'Wymagań operatora sieci dystrybucyjnej',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <div className="glass border border-white/10 rounded-3xl p-6 md:p-8">
          <p className="text-sm text-gray-300 leading-relaxed mb-4 font-semibold">
            Na tej podstawie określamy:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Maksymalną liczbę punktów ładowania',
              'Możliwe moce ładowarek',
              'Konieczność rozbudowy przyłącza',
              'Zasadność wdrożenia zarządzania mocą (DLM)',
              'Optymalny model etapowania inwestycji',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-[#8ab925] font-black">•</span>
                <span className="text-sm text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ekspertyza ładowarek – co otrzymujesz */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
          Ekspertyza ładowarek – <span className="text-[#8ab925]">co otrzymujesz?</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Wynik audytu przekazujemy w uporządkowanej, praktycznej formie:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            'Podsumowanie decyzyjne dla zarządu / wspólnoty / inwestora',
            'Część techniczna dla elektryka, projektanta lub wykonawcy',
            'Schemat możliwej infrastruktury',
            'Rekomendacje technologiczne',
            'Warianty dalszych kroków',
            'Orientacyjne scenariusze kosztowe',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black mt-0.5">•</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-6 italic">
          Dokument może stanowić podstawę do podjęcia decyzji inwestycyjnej lub rozpoczęcia 
          projektu wykonawczego.
        </p>
      </div>

      {/* Kiedy warto wykonać ekspertyzę */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
          Kiedy warto wykonać <span className="text-[#8ab925]">ekspertyzę stacji ładowania?</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">Początek rozmów o ładowarkach</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Gdy mieszkańcy, najemcy lub pracownicy zgłaszają potrzebę montażu ładowarek, ale nie 
              ma wiedzy o realnych możliwościach technicznych budynku lub garażu.
            </p>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">Wymogi formalne i dokumentacyjne</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              Gdy potrzebny jest dokument do rozmów z:
            </p>
            <ul className="space-y-2 text-sm text-gray-200">
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> dostawcą energii</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> operatorem sieci dystrybucyjnej</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> instytucją finansującą inwestycję</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> ubezpieczycielem lub rzeczoznawcą ppoż.</li>
            </ul>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">Planowanie rozwoju infrastruktury</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Gdy celem jest budowa docelowej infrastruktury ładowania, ale realizowanej etapowo — bez 
              ryzyka kosztownych modernizacji w przyszłości. Ekspertyza pozwala zaplanować skalowanie 
              sieci ładowarek wraz ze wzrostem liczby pojazdów elektrycznych.
            </p>
          </div>
        </div>
      </div>

      {/* Ekspertyzy dla osiedli, firm i parkingów */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
          Ekspertyzy dla osiedli, <span className="text-[#8ab925]">firm i parkingów</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Realizujemy audyty infrastruktury ładowania m.in. dla:
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Osiedli mieszkaniowych',
            'Wspólnot i spółdzielni',
            'Garaży podziemnych',
            'Biurowców i parków biznesowych',
            'Hoteli i obiektów komercyjnych',
            'Parkingów flotowych i logistycznych',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Formularz kontaktowy */}
      <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-2xl">
        <div className="mb-10">
          <span className="text-[#8ab925] font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">Złóż zapytanie o ekspertyzę</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-[0.95] mb-4">
            Potrzebujesz ekspertyzy <br /><span className="text-[#8ab925]">stacji ładowania?</span>
          </h2>
          <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xl">
            Opisz krótko typ budynku, liczbę lokali lub użytkowników oraz to, ilu kierowców 
            potencjalnie będzie korzystać z ładowania. Na tej podstawie przygotujemy propozycję 
            zakresu ekspertyzy i wycenę.
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
              placeholder="Opisz typ budynku, liczbę lokali lub użytkowników oraz to, ilu kierowców potencjalnie będzie korzystać z ładowania..."
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
