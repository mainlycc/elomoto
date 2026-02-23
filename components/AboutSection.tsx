
import React from 'react';
import { getImage } from '../utils/db';

export const AboutSection: React.FC = () => {
  const aboutImg = getImage('about', 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800');

  return (
    <section id="about" className="py-24 bg-[#0a1a14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#8ab925] rounded-full blur-3xl opacity-10 -z-10 animate-pulse-slow"></div>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-white/5">
              <img 
                src={aboutImg} 
                alt="EV Station Passion" 
                className="w-full object-cover h-[600px] hover:scale-105 transition-transform duration-1000 opacity-80"
              />
              <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-3xl border border-white/20">
                 <div className="text-white font-black text-xl mb-1 uppercase tracking-tighter">Doświadczenie</div>
                 <div className="text-[#8ab925] font-extrabold text-xs uppercase tracking-widest">Lider Innowacji od 2023</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-8 h-[2px] bg-[#8ab925]"></span>
                <p className="text-[#8ab925] font-extrabold uppercase tracking-widest text-xs">O NAS</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
                ELEKTROMOBILNOŚĆ <br />
                <span className="text-[#8ab925]">TO NASZA PASJA</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg font-medium">
                <strong className="text-white">Elomoto Sp. z o.o.</strong> to wyspecjalizowany podmiot w ekosystemie Energomix, dedykowany wyłącznie technologii ładowania pojazdów.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                Skupiamy się na rozwoju ogólnopolskiej, niezależnej sieci ładowarek elomoto. Nasz zespół inżynierów i ekspertów zapewnia kompleksowość: od audytu lokalizacji, przez projektowanie, aż po finalny montaż i cyfrową obsługę operatorską.
              </p>

              <ul className="space-y-4">
                {[
                  'Indywidualne podejście do każdej lokalizacji',
                  'Najnowocześniejsze ładowarki DC i AC',
                  'Pełne wsparcie w pozyskiwaniu dotacji',
                  'Własny system rozliczeniowy i aplikacja mobilna'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm font-extrabold text-gray-300 uppercase tracking-tight">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#8ab925]/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#8ab925]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <button className="bg-white text-black hover:bg-[#8ab925] font-extrabold py-5 px-10 rounded-2xl transition-all duration-300 uppercase text-xs tracking-wider shadow-lg transform hover:-translate-y-1 active:scale-95">
                Poznaj Nas Lepiej
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
