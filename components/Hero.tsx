
import React from 'react';
import { getImage } from '../utils/db';
import { navigateTo } from '../utils/navigation';
import { useI18n } from '../i18n/I18nProvider';

export const Hero: React.FC = () => {
  const { t } = useI18n();
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
          alt={t('hero.imageAlt')}
          className="w-full h-full object-cover saturate-[1.1] brightness-[0.9] contrast-[1.1]"
        />
        
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#8ab925]/20 blur-[100px] z-30 animate-pulse-slow"></div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight">
            {t('hero.headlineLine1')} <br />
            {t('hero.headlineLine2')} <span className="text-[#8ab925]">{t('hero.headlineAccent')}</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-medium">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              type="button"
              onClick={() => navigateTo('/oferta/darmowa-ladowarka')}
              className="bg-[#8ab925] hover:bg-[#9ed02e] text-[#0a1a14] font-extrabold py-5 px-10 rounded-2xl transition-all duration-300 shadow-[0_15px_30px_rgba(138,185,37,0.3)] uppercase text-sm tracking-wider transform hover:-translate-y-1 active:scale-95"
            >
              {t('hero.ctaPrimary')}
            </button>
            <button
              type="button"
              onClick={() => navigateTo('/oferta/montaz')}
              className="border border-white/10 hover:border-[#8ab925]/50 text-white font-extrabold py-5 px-10 rounded-2xl transition-all duration-300 uppercase text-sm tracking-wider bg-white/5 backdrop-blur-sm shadow-sm hover:bg-white/10 active:scale-95"
            >
              {t('hero.ctaSecondary')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
