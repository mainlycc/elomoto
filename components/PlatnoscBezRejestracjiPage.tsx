import React from 'react';
import { SubpageContactSection } from './SubpageContactSection';

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
            { step: '03', title: 'Bez rejestracji', desc: 'Użytkownik wybiera ikonę „Płatność bez rejestracji”.' },
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

      <SubpageContactSection
        kicker="System operatorski"
        title="Potrzebujesz systemu"
        highlightedTitle="operatorskiego?"
        description="Jeżeli planujesz uruchomienie lub rozwój sieci ładowania, przedstawimy dostępne rozwiązania oraz modele wdrożenia dopasowane do skali infrastruktury i typu lokalizacji."
        messagePlaceholder="Opisz swoją infrastrukturę, liczbę stacji i potrzeby w zakresie płatności..."
      />
    </section>
  );
};

