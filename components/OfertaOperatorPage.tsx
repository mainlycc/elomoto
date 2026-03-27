import React from 'react';
import { SubpageContactSection } from './SubpageContactSection';

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

      <SubpageContactSection
        kicker="Porozmawiajmy"
        title="System operatorski"
        highlightedTitle="dla Twojej sieci"
        description="Jeżeli planujesz uruchomić lub rozwinąć sieć ładowania, system elomoto.eco umożliwia pełne operowanie infrastrukturą od pojedynczych stacji po rozproszone sieci ładowarek."
        messagePlaceholder="Opisz swoją infrastrukturę, liczbę stacji i potrzeby operacyjne..."
      />
    </section>
  );
};
