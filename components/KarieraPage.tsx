import React from 'react';

export const KarieraPage: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      {/* Nagłówek */}
      <header className="mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">
          Kariera
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
          Dołącz do zespołu <span className="text-[#8ab925]">elomoto.eco</span>
        </h1>
        <div className="text-sm text-gray-300 leading-relaxed max-w-3xl space-y-3">
          <p>
            Szukasz miejsca, w którym elektromobilność to coś więcej niż hasło marketingowe?
          </p>
          <p>
            W elomoto.eco budujemy infrastrukturę ładowania samochodów elektrycznych, która realnie zmienia sposób, w jaki użytkownicy korzystają z e-mobilności w Polsce.
          </p>
          <p>
            Tworzymy rozwiązania dostępne, intuicyjne i dopasowane do codziennych potrzeb kierowców EV – od lokalizacji ładowarek po doświadczenie samego ładowania.
          </p>
        </div>
      </header>

      {/* Nasza misja */}
      <div className="glass border border-white/10 rounded-3xl p-6 md:p-8 mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Nasza <span className="text-[#8ab925]">misja</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Naszą misją jest rozwój infrastruktury ładowania, która jest:
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            'Łatwo dostępna w przestrzeni publicznej i prywatnej',
            'Prosta w obsłudze dla każdego użytkownika',
            'Zaprojektowana z myślą o realnym komforcie ładowania pojazdów elektrycznych',
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black mt-0.5">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-5 italic">
          Wierzymy, że dobrze zaprojektowana infrastruktura to fundament rozwoju elektromobilności.
        </p>
      </div>

      {/* Rozwój i branża przyszłości */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Rozwój i <span className="text-[#8ab925]">branża przyszłości</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Sektor elektromobilności należy do najszybciej rosnących gałęzi rynku energetycznego i transportowego. Dołączając do elomoto.eco:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            'Pracujesz przy realnych wdrożeniach infrastruktury EV',
            'Zdobywasz doświadczenie w rozwijającej się branży',
            'Rozwijasz kompetencje techniczne, projektowe lub sprzedażowe',
            'Współtworzysz rozwiązania, które będą standardem w najbliższych latach',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#8ab925] flex-shrink-0"></span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Staże i praktyki */}
      <div className="glass border border-[#8ab925]/20 rounded-3xl p-6 md:p-8 mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          Staże i <span className="text-[#8ab925]">praktyki</span>
        </h2>
        <div className="text-sm text-gray-300 leading-relaxed space-y-3">
          <p>
            Szukasz miejsca na staż lub praktyki w branży elektromobilności?
          </p>
          <p>
            W elomoto.eco dajemy możliwość zdobycia pierwszego doświadczenia przy realnych projektach związanych z infrastrukturą ładowania samochodów elektrycznych.
          </p>
          <p>
            Zapraszamy studentów oraz absolwentów kierunków technicznych, energetycznych, IT, biznesowych i pokrewnych, którzy chcą rozwijać się w sektorze e-mobility.
          </p>
        </div>
      </div>

      {/* Otwarta aplikacja */}
      <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-2xl">
        <div className="mb-8">
          <span className="text-[#8ab925] font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">Otwarta aplikacja</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-[0.95] mb-4">
            Dołącz do <span className="text-[#8ab925]">zespołu</span>
          </h2>
          <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xl">
            Wyślij swoje CV oraz kilka słów o sobie. Daj nam znać, w jakim obszarze chcesz się rozwijać i jakie kompetencje możesz wnieść do zespołu elomoto.eco.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 p-6 bg-slate-50 rounded-3xl border border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#8ab925]/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-[#8ab925]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1">Wyślij CV na adres</p>
              <a
                href="mailto:rekrutacja@elomoto.eco"
                className="text-lg font-black text-slate-900 hover:text-[#8ab925] transition-colors"
              >
                rekrutacja@elomoto.eco
              </a>
            </div>
          </div>
        </div>

        <a
          href="mailto:rekrutacja@elomoto.eco"
          className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-[#8ab925] text-white text-xs font-black tracking-[0.2em] uppercase shadow-lg shadow-[#8ab925]/20 hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95"
        >
          Aplikuj teraz
        </a>
      </div>
    </section>
  );
};

