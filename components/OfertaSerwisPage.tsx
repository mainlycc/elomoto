import React from 'react';
import { SubpageContactSection } from './SubpageContactSection';

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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { src: '/brands/Elinta_Charge_Logo_RGB.webp', alt: 'Elinta Charge' },
            { src: '/brands/Morek-logo.png', alt: 'Morek' },
            { src: '/brands/Enelion_main_logo_color_20221212.svg', alt: 'Enelion' },
            { src: '/brands/evb-logo-DQMQmUMH.png', alt: 'EVB' },
          ].map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center bg-white rounded-2xl h-20 px-4 border border-white/10"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="block max-h-12 w-auto max-w-full object-contain opacity-95"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <SubpageContactSection
        kicker="Serwis i utrzymanie"
        title="Potrzebujesz serwisu"
        highlightedTitle="stacji ładowania?"
        description="Napisz do nas, a przedstawimy zakres obsługi serwisowej, warunki współpracy i możliwości utrzymania Twojej infrastruktury ładowania AC."
        messagePlaceholder="Opisz typ stacji, liczbę urządzeń, lokalizację i potrzeby serwisowe..."
      />
    </section>
  );
};
