import React from 'react';
import { SubpageContactSection } from './SubpageContactSection';
import { useRealizations } from '../hooks/useRealizations';
import { useI18n } from '../i18n/I18nProvider';
import { navigateTo } from '../utils/navigation';

export const RealizacjePage: React.FC = () => {
  const { t } = useI18n();
  const { realizations, loading, error } = useRealizations();

  return (
    <section className="max-w-7xl mx-auto pl-3 pr-4 sm:pl-5 sm:pr-6 lg:pl-7 lg:pr-8 pb-24">
      <header className="mb-12 text-left">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">{t('realizationsPage.eyebrow')}</p>
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">{t('realizationsPage.title')}</h1>
        <p className="text-gray-300 max-w-2xl text-sm">{t('realizationsPage.intro')}</p>
      </header>

      {loading ? (
        <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-8">{t('realizationsPage.listLoading')}</p>
      ) : null}
      {error && realizations.length === 0 ? (
        <p className="text-red-400 text-sm mb-8">{t('realizationsPage.listError')}</p>
      ) : null}
      {!loading && realizations.length === 0 ? (
        <p className="text-gray-400 text-sm">{t('realizationsPage.empty')}</p>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {realizations.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => navigateTo(`/realizacje/${item.slug}`)}
            className="group text-left rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#8ab925]/50 hover:bg-white/10 transition-all shadow-lg hover:shadow-2xl"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8ab925] mb-1">
                  {t('realizations.itemEyebrow', { number: String(item.order).padStart(2, '0') })}
                </p>
                <h2 className="text-lg font-black text-white leading-tight">{item.title}</h2>
              </div>
            </div>
            <div className="p-5 text-sm text-gray-200">
              <p>{t('realizationsPage.cardTeaser')}</p>
            </div>
          </button>
        ))}
      </div>

      <SubpageContactSection
        kicker={t('realizationsPage.contactKicker')}
        title={t('realizationsPage.contactTitle')}
        highlightedTitle={t('realizationsPage.contactHighlightedTitle')}
        description={t('realizationsPage.contactDescription')}
        messagePlaceholder={t('realizationsPage.contactMessagePlaceholder')}
      />
    </section>
  );
};
