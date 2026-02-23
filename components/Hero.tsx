
import React from 'react';
import { getImage } from '../utils/db';
import { navigateTo } from '../utils/navigation';

export const Hero: React.FC = () => {
  const heroImage = getImage('hero', 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1600');

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center pt-40 pb-20 bg-[#0a1a14]">
      <div className="absolute inset-0 tech-grid opacity-20 z-0"></div>
      
      {/* Right Side Image / Visuals */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a14] via-[#0a1a14]/60 to-transparent z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a14] via-transparent to-transparent z-20 h-1/3 bottom-0 top-auto"></div>
        <img 
          src={heroImage} 
          alt="Ładowanie samochodu elektrycznego Elomoto" 
          className="w-full h-full object-cover saturate-[1.1] brightness-[0.9] contrast-[1.1]"
        />
        
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#8ab925]/20 blur-[100px] z-30 animate-pulse-slow"></div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-10 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[#8ab925] shadow-[0_0_10px_#8ab925] animate-pulse"></span>
            <span className="text-xs font-extrabold text-gray-300 uppercase tracking-widest">Design & Technologia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight">
            Energia <br />
            <span className="text-[#8ab925]">Przyszłości</span> <br />
            W Twoim Zasięgu.
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-medium">
            Tworzymy ekosystem, który łączy nowoczesną architekturę z inteligentną mobilnością. Odkryj najwyższy standard ładowania pojazdów elektrycznych.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              type="button"
              onClick={() => navigateTo('/oferta/montaz')}
              className="bg-[#8ab925] hover:bg-[#9ed02e] text-[#0a1a14] font-extrabold py-5 px-10 rounded-2xl transition-all duration-300 shadow-[0_15px_30px_rgba(138,185,37,0.3)] uppercase text-sm tracking-wider transform hover:-translate-y-1 active:scale-95"
            >
              Skonfiguruj stację
            </button>
            <button
              type="button"
              onClick={() => navigateTo('/oferta/darmowa-ladowarka')}
              className="border border-white/10 hover:border-[#8ab925]/50 text-white font-extrabold py-5 px-10 rounded-2xl transition-all duration-300 uppercase text-sm tracking-wider bg-white/5 backdrop-blur-sm shadow-sm hover:bg-white/10 active:scale-95"
            >
              Oferta dla domu
            </button>
          </div>
          
          <div className="mt-20 grid grid-cols-3 gap-8 border-t border-white/5 pt-12">
            <div>
              <div className="text-3xl font-bold text-white">Premium</div>
              <div className="text-xs text-gray-500 font-extrabold uppercase tracking-widest mt-2">Wykończenie</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#8ab925]">Smart</div>
              <div className="text-xs text-gray-500 font-extrabold uppercase tracking-widest mt-2">Zarządzanie</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">Eko</div>
              <div className="text-xs text-gray-500 font-extrabold uppercase tracking-widest mt-2">Lifestyle</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
