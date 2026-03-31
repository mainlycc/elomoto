import React from 'react';
import { useTeamMembers } from '../hooks/useTeamMembers';
import { navigateTo } from '../utils/navigation';
import polonusWarszawaImg from '../Polonus Warszawa.jpeg';

export const AboutPage: React.FC = () => {
  const { members, loading, error } = useTeamMembers();
  const aboutImg = polonusWarszawaImg;

  return (
    <section className="pb-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
            <img src={aboutImg} alt="Elomoto - O nas" className="w-full h-[520px] object-cover opacity-85" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass p-5 rounded-2xl border border-white/20">
              <p className="text-[#8ab925] text-xs font-extrabold uppercase tracking-widest">Elomoto</p>
              <p className="text-white text-lg font-black uppercase tracking-tight">Budujemy sieć ładowania na lata</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[2px] bg-[#8ab925]" />
              <p className="text-[#8ab925] font-extrabold uppercase tracking-widest text-xs">Opis firmy</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight">
              O NAS
            </h1>
            <p className="text-gray-300 leading-relaxed text-lg">
              Jesteśmy polskim operatorem ogólnopolskiej sieci ładowania pojazdów elektrycznych, tworzonym z myślą o przyszłości miast i codziennej wygodzie ich mieszkańców.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Koncentrujemy się na przestrzeniach, które definiują rytm nowoczesnego życia - osiedlach wielorodzinnych oraz kompleksach biurowych. To właśnie tam rozwijamy infrastrukturę, która realnie wspiera transformację w kierunku elektromobilności.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Projektujemy i realizujemy inwestycje w sposób kompleksowy - od koncepcji i analiz, przez procesy formalne i przyłączeniowe, aż po budowę, zarządzanie i rozwój sieci. Każdy projekt traktujemy indywidualnie, dbając o najwyższe standardy technologiczne i operacyjne.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Tworzymy rozwiązania, które łączą estetykę, wydajność i skalowalność - gotowe na potrzeby dzisiejsze i wyzwania jutra.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-[#8ab925] font-extrabold uppercase tracking-widest text-xs mb-2">Nasz zespół</p>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                Poznaj osoby, które tworzą Elomoto
              </h2>
            </div>
          </div>

          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-4 animate-pulse">
                  <div className="w-full aspect-square rounded-xl bg-white/10 mb-3" />
                  <div className="h-4 w-2/3 bg-white/10 rounded mb-2" />
                  <div className="h-3 w-1/2 bg-white/10 rounded" />
                </div>
              ))}
            </div>
          )}

          {!loading && error && (
            <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-red-100">
              Nie udało się pobrać zespołu z CMS. Spróbuj ponownie za chwilę.
            </div>
          )}

          {!loading && !error && members.length === 0 && (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-gray-200">
              Brak osób w sekcji zespołu. Dodaj członków w CMS, aby wyświetlić ich na stronie.
            </div>
          )}

          {!loading && !error && members.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {members.map((member) => (
                <article
                  key={member.id}
                  className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-xl"
                >
                  <div className="w-full aspect-square overflow-hidden bg-white p-2">
                    <img
                      src={member.photo}
                      alt={member.photoAlt}
                      className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-black text-white tracking-tight">{member.fullName}</h3>
                    <p className="text-[#8ab925] text-xs font-extrabold uppercase tracking-wider mt-1">
                      {member.position}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="mt-20 flex justify-center">
          <button
            type="button"
            onClick={() => navigateTo('/kariera')}
            className="bg-[#8ab925] hover:bg-[#9ed02e] text-[#0a1a14] font-extrabold py-5 px-10 rounded-2xl transition-all duration-300 shadow-[0_15px_30px_rgba(138,185,37,0.3)] uppercase text-sm tracking-wider transform hover:-translate-y-1 active:scale-95"
          >
            Dołącz do nas!
          </button>
        </div>
      </div>
    </section>
  );
};
