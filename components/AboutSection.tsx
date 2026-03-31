
import React from 'react';
import { navigateTo } from '../utils/navigation';
import polonusWarszawaImg from '../Polonus Warszawa.jpeg';
import { useI18n } from '../i18n/I18nProvider';

export const AboutSection: React.FC = () => {
  const { t } = useI18n();
  const aboutImg = polonusWarszawaImg;

  return (
    <section id="about" className="py-24 bg-[#0a1a14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#8ab925] rounded-full blur-3xl opacity-10 -z-10 animate-pulse-slow"></div>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-white/5">
              <img 
                src={aboutImg} 
                alt={t('aboutSection.imageAlt')}
                className="w-full object-cover h-[600px] hover:scale-105 transition-transform duration-1000 opacity-80"
              />
              <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-3xl border border-white/20">
                 <div className="text-white font-black text-xl mb-1 uppercase tracking-tighter">{t('aboutSection.cardTitle')}</div>
                 <div className="text-[#8ab925] font-extrabold text-xs uppercase tracking-widest">{t('aboutSection.cardSubtitle')}</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-8 h-[2px] bg-[#8ab925]"></span>
                <p className="text-[#8ab925] font-extrabold uppercase tracking-widest text-xs">{t('aboutSection.eyebrow')}</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
                {t('aboutSection.headingLine1')} <br />
                <span className="text-[#8ab925]">{t('aboutSection.headingLine2Accent')}</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg font-medium">
                {t('aboutSection.p1')}
              </p>

              <p className="text-gray-400 leading-relaxed">
                {t('aboutSection.p2')}
              </p>

              <p className="text-gray-400 leading-relaxed">
                {t('aboutSection.p3')}
              </p>

              <p className="text-gray-400 leading-relaxed">
                {t('aboutSection.p4')}
              </p>

              <ul className="space-y-4">
                {(['aboutSection.bullets.b1', 'aboutSection.bullets.b2', 'aboutSection.bullets.b3', 'aboutSection.bullets.b4'] as const).map((key, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm font-extrabold text-gray-300 uppercase tracking-tight">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#8ab925]/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#8ab925]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={() => navigateTo('/o-nas')}
                className="bg-white text-black hover:bg-[#8ab925] font-extrabold py-5 px-10 rounded-2xl transition-all duration-300 uppercase text-xs tracking-wider shadow-lg transform hover:-translate-y-1 active:scale-95"
              >
                {t('aboutSection.cta')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
