import React from 'react';

export const OfertaOperatorPage: React.FC = () => {

  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      {/* Nagłówek */}
      <header className="mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">Oferta</p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
          Usługa <span className="text-[#8ab925]">operatorska</span> stacji ładowania
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium">
          Kompleksowe zarządzanie infrastrukturą EV
        </p>
      </header>

      {/* Opis główny */}
      <div className="mb-16 space-y-4 text-sm text-gray-300 leading-relaxed max-w-3xl">
        <p>
          Świadczymy pełną usługę operatorską stacji ładowania pojazdów elektrycznych, obejmującą zarządzanie infrastrukturą, rozliczenia użytkowników, obsługę płatności oraz wsparcie techniczne.
        </p>
        <p>
          Pracujemy w oparciu o własny system operatorski elomoto.eco oraz dedykowaną aplikację do obsługi ładowania, dzięki czemu operator infrastruktury otrzymuje gotowe, skalowalne środowisko do zarządzania siecią stacji.
        </p>
      </div>

      {/* Co oznacza pełna obsługa operatorska */}
      <div className="glass border border-white/10 rounded-3xl p-6 md:p-8 mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Co oznacza pełna <span className="text-[#8ab925]">obsługa operatorska</span>?
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Jako operator stacji ładowania odpowiadamy za bieżące funkcjonowanie infrastruktury — zarówno od strony technicznej, jak i użytkowej. Zapewniamy:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            'Widoczność stacji w systemie i aplikacji, także u innych operatorów',
            'Prawidłowe naliczanie opłat za ładowanie',
            'Obsługę płatności jednorazowych i kont użytkowników',
            'Wsparcie kierowców korzystających z infrastruktury',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-5 italic">
          Właściciel lokalizacji określa jedynie ogólne zasady funkcjonowania (np. dostępność, politykę cenową, grupy uprzywilejowane), a obsługę operacyjną przejmuje elomoto.eco.
        </p>
      </div>

      {/* System operatorski i aplikacja */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          System operatorski i aplikacja <span className="text-[#8ab925]">elomoto.eco</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Nasza usługa opiera się na autorskim oprogramowaniu do zarządzania stacjami ładowania, które umożliwia:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          {[
            'Zdalne zarządzanie infrastrukturą',
            'Konfigurację taryf i dostępów',
            'Monitoring sesji ładowania w czasie rzeczywistym',
            'Obsługę płatności online i RFID',
            'Płatności bez rejestracji (QR)',
            'Raportowanie wykorzystania stacji',
            'Integrację z systemami flotowymi',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 italic">
          Aplikacja użytkownika pozwala kierowcom lokalizować stacje, rozpoczynać ładowanie i kontrolować koszty.
        </p>
      </div>

      {/* Zakres usługi operatorskiej */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Zakres usługi <span className="text-[#8ab925]">operatorskiej</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">Kompleksowa obsługa obejmuje:</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Konfigurację cenników ładowania',
            'Zarządzanie dostępami do stacji',
            'Obsługę płatności i rozliczeń sesji',
            'Fakturowanie użytkowników',
            'Wsparcie użytkowników (helpdesk)',
            'Monitoring pracy urządzeń 24/7',
            'Powiadomienia o nieprawidłowościach',
            'Okresowe raporty wykorzystania infrastruktury',
            'Rekomendacje rozwoju sieci ładowania',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#8ab925] flex-shrink-0"></span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modele rozliczeń */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
          Modele <span className="text-[#8ab925]">rozliczeń</span> ładowania
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          System operatorski umożliwia elastyczne konfigurowanie zasad korzystania ze stacji.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-200">
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">Dla mieszkańców / pracowników</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> preferencyjne stawki</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> rozliczenia miesięczne</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> indywidualne konta użytkowników</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> identyfikacja RFID lub aplikacją</li>
            </ul>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">Dla gości i klientów</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> płatności jednorazowe (ad hoc)</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> uruchamianie sesji przez aplikację lub kod QR</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> szybkie płatności bez rejestracji</li>
            </ul>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">Modele mieszane</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> darmowe ładowanie dla mieszkańców</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> tańsze taryfy dla pracowników</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> komercyjne stawki dla użytkowników zewnętrznych</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Operator bez własnego zaplecza */}
      <div className="glass border border-[#8ab925]/20 rounded-3xl p-6 md:p-8 mb-20">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Operator stacji ładowania <span className="text-[#8ab925]">bez własnego zaplecza</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          Usługa operatorska elomoto.eco pozwala udostępniać infrastrukturę ładowania bez konieczności budowania własnego zespołu technicznego, IT czy działu rozliczeń. Przejmujemy obowiązki związane z codziennym działaniem stacji, umożliwiając właścicielowi infrastruktury skupienie się na swojej podstawowej działalności.
        </p>
      </div>

      {/* Formularz kontaktowy */}
      <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-2xl">
        <div className="mb-10">
          <span className="text-[#8ab925] font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">Porozmawiajmy</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-[0.95] mb-4">
            System operatorski <br /><span className="text-[#8ab925]">dla Twojej sieci</span>
          </h2>
          <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xl">
            Jeżeli planujesz uruchomić lub rozwinąć sieć ładowania, system elomoto.eco umożliwia pełne operowanie infrastrukturą — od pojedynczych stacji po rozproszone sieci ładowarek w wielu lokalizacjach.
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
              placeholder="Opisz swoją infrastrukturę, liczbę stacji, potrzeby operacyjne..."
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
