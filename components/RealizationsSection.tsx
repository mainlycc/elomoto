import React from 'react';
import { useRealizations } from '../hooks/useRealizations';
import { navigateTo } from '../utils/navigation';
import { useI18n } from '../i18n/I18nProvider';

export const RealizationsSection: React.FC = () => {
  const { t } = useI18n();
  const { realizations, loading, error } = useRealizations();

  return (
    <section id="realizacje" className="py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[2px] bg-[#8ab925]" />
            <p className="text-[#8ab925] font-extrabold uppercase tracking-widest text-xs">{t('realizations.eyebrow')}</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter mb-4">
            {t('realizations.heading')} <span className="text-[#8ab925]">{t('realizations.headingAccent')}</span>
          </h2>
          <p className="text-gray-300 max-w-3xl leading-relaxed">
            {t('realizations.intro')}
          </p>
        </div>

        {loading ? <p className="text-gray-400 text-sm mb-6">{t('realizations.loading')}</p> : null}
        {error && realizations.length === 0 ? (
          <p className="text-red-400 text-sm mb-6">{t('realizations.error')}</p>
        ) : null}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {realizations.slice(0, 3).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => navigateTo(`/realizacje/${item.slug}`)}
              className="group text-left rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#8ab925]/50 hover:bg-white/10 transition-all shadow-lg hover:shadow-2xl"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8ab925] mb-1">
                    {t('realizations.itemEyebrow', { number: String(item.order).padStart(2, '0') })}
                  </p>
                  <h3 className="text-lg font-black text-white leading-tight">{item.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-200 leading-relaxed">
                  {item.intro ||
                    t('realizations.itemFallbackIntro')}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10">
          <button
            type="button"
            onClick={() => navigateTo('/realizacje')}
            className="inline-flex items-center justify-center px-7 py-3 rounded-2xl bg-white/5 text-white text-xs font-extrabold tracking-wider uppercase border border-white/20 hover:bg-white/10 active:scale-95 transition-all"
          >
            {t('realizations.seeAll')}
          </button>
        </div>
      </div>
    </section>
  );
};
