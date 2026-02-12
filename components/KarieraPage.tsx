import React from 'react';

export const KarieraPage: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      <header className="mb-10">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#00ff88] uppercase mb-4">
          kariera
        </p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          Dołącz do zespołu elomoto.eco
        </h1>
        <p className="text-gray-300 text-sm max-w-2xl">
          Szukasz miejsca, w którym elektromobilność to coś więcej niż hasło marketingowe?
          Budujemy zespół, który realnie zmienia sposób, w jaki Polacy ładują swoje samochody elektryczne.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mb-10 text-sm text-gray-200">
        <div className="glass border border-white/10 rounded-3xl p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">
            misja
          </p>
          <p>
            Tworzymy infrastrukturę ładowania, która jest dostępna, intuicyjna i
            rzeczywiście przyjazna dla użytkownika.
          </p>
        </div>
        <div className="glass border border-white/10 rounded-3xl p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">
            zespół
          </p>
          <p>
            Łączymy kompetencje inżynierskie, produktowe i operacyjne – od projektantów
            instalacji po specjalistów IT.
          </p>
        </div>
        <div className="glass border border-white/10 rounded-3xl p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">
            rozwój
          </p>
          <p>
            Pracujemy w sektorze, który dynamicznie rośnie – razem z nami rozwijasz się
            w jednej z najciekawszych branż energetycznych.
          </p>
        </div>
      </div>

      <div className="glass border border-[#00ff88]/30 rounded-3xl p-6 md:p-8 mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">
          Aktualne oferty pracy
        </h2>
        <p className="text-sm text-gray-200 mb-4">
          W tej chwili nie publikujemy szczegółowych ogłoszeń na stronie. Jeśli chcesz z nami
          współpracować jako inżynier, handlowiec, specjalista ds. produktu lub operations –
          wyślij nam swoje CV i kilka słów o sobie.
        </p>
        <a
          href="mailto:praca@elomoto.eco"
          className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#00ff88] text-black text-xs font-extrabold tracking-wider uppercase shadow-lg hover:bg-[#4dffac] active:scale-95 transition-all"
        >
          Wyślij CV na praca@elomoto.eco
        </a>
      </div>

      <p className="text-xs text-gray-500">
        Klauzula RODO dotycząca rekrutacji może zostać dodana tutaj lub w treści ogłoszeń – w zależności
        od przyjętego przez Ciebie modelu publikacji ofert pracy.
      </p>
    </section>
  );
};

