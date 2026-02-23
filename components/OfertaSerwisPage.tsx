import React from 'react';

export const OfertaSerwisPage: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      {/* Nagłówek */}
      <header className="mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">Oferta</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
          Serwis stacji <span className="text-[#8ab925]">ładowania AC</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium">
          Specjalistyczny serwis i przeglądy infrastruktury AC
        </p>
      </header>

      {/* Opis główny */}
      <div className="mb-16 space-y-4 text-sm text-gray-300 leading-relaxed max-w-3xl">
        <p>
          Zapewniamy profesjonalny serwis stacji ładowania oraz utrzymanie infrastruktury ładowania pojazdów elektrycznych w oparciu o doświadczenie techniczne i eksploatacyjne.
        </p>
        <p>
          Specjalizujemy się wyłącznie w ładowarkach AC (prądu przemiennego). Nie prowadzimy serwisu stacji szybkiego ładowania DC — koncentrujemy się na infrastrukturze najczęściej stosowanej w lokalizacjach prywatnych i półpublicznych.
        </p>
      </div>

      {/* Gdzie serwisujemy */}
      <div className="mb-16">
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Serwisujemy stacje AC instalowane m.in. w:
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Garażach podziemnych',
            'Na osiedlach mieszkaniowych',
            'Parkingach wspólnot i spółdzielni',
            'Obiektach firmowych',
            'Hotelach i lokalizacjach usługowych',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#8ab925] flex-shrink-0"></span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dlaczego serwis jest ważny */}
      <div className="glass border border-white/10 rounded-3xl p-6 md:p-8 mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Dlaczego serwis stacji ładowania jest <span className="text-[#8ab925]">tak ważny</span>?
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Infrastruktura ładowania pracuje pod stałym obciążeniem elektrycznym, dlatego wymaga regularnych przeglądów technicznych oraz bieżącej kontroli stanu podzespołów. Profesjonalny serwis ładowarek AC zapewnia:
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Bezpieczeństwo użytkowników',
            'Zgodność z normami elektrycznymi',
            'Ciągłość działania stacji',
            'Wydłużenie żywotności urządzeń',
            'Ograniczenie ryzyka awarii',
            'Utrzymanie pozytywnego wizerunku infrastruktury',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Zakres serwisu */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Zakres serwisu <span className="text-[#8ab925]">ładowarek AC</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Usługa obejmuje fizyczne utrzymanie techniczne stacji ładowania:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            'Diagnostykę usterek na miejscu',
            'Reakcję na zgłoszenia administratorów i użytkowników',
            'Przeglądy techniczne stacji',
            'Testy bezpieczeństwa elektrycznego',
            'Kontrolę zabezpieczeń',
            'Sprawdzenie okablowania i połączeń',
            'Weryfikację elementów montażowych',
            'Naprawy urządzeń',
            'Wymiany zużytych lub uszkodzonych podzespołów',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Przeglądy stacji */}
      <div className="glass border border-white/10 rounded-3xl p-6 md:p-8 mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Przeglądy stacji <span className="text-[#8ab925]">ładowania AC</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Wykonujemy okresowe przeglądy infrastruktury zgodnie z:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-5">
          {[
            'Zaleceniami producentów',
            'Normami instalacji elektrycznych',
            'Wymogami ubezpieczycieli',
            'Procedurami bezpieczeństwa obiektów',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#8ab925] flex-shrink-0"></span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 italic">
          Regularne przeglądy są szczególnie istotne w garażach podziemnych oraz lokalizacjach o intensywnym wykorzystaniu stacji.
        </p>
      </div>

      {/* Marki ładowarek AC */}
      <div className="glass border border-[#8ab925]/20 rounded-3xl p-6 md:p-8 mb-20">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Marki ładowarek AC, które <span className="text-[#8ab925]">serwisujemy</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Specjalizujemy się w serwisie wybranych producentów infrastruktury AC.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {/* Placeholder na loga producentów */}
          {['Producent 1', 'Producent 2', 'Producent 3', 'Producent 4'].map((brand) => (
            <div key={brand} className="flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl h-20 text-sm text-gray-500 font-medium">
              {brand}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-4 italic">
          Miejsce na logotypy marek serwisowanych ładowarek AC.
        </p>
      </div>

      {/* Formularz kontaktowy */}
      <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-2xl">
        <div className="mb-10">
          <span className="text-[#8ab925] font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">Serwis i utrzymanie</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-[0.95] mb-4">
            Potrzebujesz serwisu <br /><span className="text-[#8ab925]">stacji ładowania?</span>
          </h2>
          <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xl">
            Napisz do nas — przedstawimy zakres obsługi serwisowej, warunki współpracy i możliwości utrzymania Twojej infrastruktury ładowania AC.
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
              placeholder="Opisz typ stacji, liczbę urządzeń, lokalizację i potrzeby serwisowe..."
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
