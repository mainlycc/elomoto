import React, { useMemo } from 'react';
import { SubpageContactSection } from './SubpageContactSection';
import { useI18n } from '../i18n/I18nProvider';

const STEP_IDS = ['s1', 's2', 's3', 's4', 's5', 's6'] as const;
const SMART_BULLET_IDS = ['b1', 'b2', 'b3', 'b4'] as const;
const WHERE_ITEM_IDS = ['i1', 'i2', 'i3', 'i4', 'i5', 'i6'] as const;

export const PlatnoscBezRejestracjiPage: React.FC = () => {
  const { t } = useI18n();

  const steps = useMemo(
    () =>
      STEP_IDS.map((id, i) => ({
        step: String(i + 1).padStart(2, '0'),
        title: t(`payWithoutRegistrationPage.howItWorks.steps.${id}.title`),
        desc: t(`payWithoutRegistrationPage.howItWorks.steps.${id}.desc`),
      })),
    [t],
  );

  const smartBullets = useMemo(
    () => SMART_BULLET_IDS.map((id) => t(`payWithoutRegistrationPage.smartSearch.bullets.${id}`)),
    [t],
  );

  const whereItems = useMemo(
    () => WHERE_ITEM_IDS.map((id) => t(`payWithoutRegistrationPage.whereItFits.items.${id}`)),
    [t],
  );

  const smartTitleAfter = t('payWithoutRegistrationPage.smartSearch.titleAfter');

  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      <header className="mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">
          {t('payWithoutRegistrationPage.eyebrow')}
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
          {t('payWithoutRegistrationPage.hero.titleBefore')}{' '}
          <span className="text-[#8ab925]">{t('payWithoutRegistrationPage.hero.titleAccent')}</span>
        </h1>
        <div className="text-sm text-gray-300 leading-relaxed max-w-3xl space-y-3">
          <p>{t('payWithoutRegistrationPage.hero.p1')}</p>
          <p>{t('payWithoutRegistrationPage.hero.p2')}</p>
        </div>
      </header>

      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
          {t('payWithoutRegistrationPage.howItWorks.titleBefore')}{' '}
          <span className="text-[#8ab925]">{t('payWithoutRegistrationPage.howItWorks.titleAccent')}</span>
          {t('payWithoutRegistrationPage.howItWorks.titleAfter')}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((item) => (
            <div key={item.step} className="glass border border-white/10 rounded-3xl p-6 space-y-3">
              <span className="text-3xl font-black text-[#8ab925]">{item.step}</span>
              <h3 className="text-sm font-black text-white uppercase tracking-tight">{item.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-4 italic">{t('payWithoutRegistrationPage.howItWorks.geoNote')}</p>
      </div>

      <div className="glass border border-white/10 rounded-3xl p-6 md:p-8 mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          {t('payWithoutRegistrationPage.smartSearch.titleBefore')}{' '}
          <span className="text-[#8ab925]">{t('payWithoutRegistrationPage.smartSearch.titleAccent')}</span>
          {smartTitleAfter ? ` ${smartTitleAfter}` : ''}
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">{t('payWithoutRegistrationPage.smartSearch.intro')}</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {smartBullets.map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          {t('payWithoutRegistrationPage.whereItFits.titleBefore')}{' '}
          <span className="text-[#8ab925]">{t('payWithoutRegistrationPage.whereItFits.titleAccent')}</span>
          {t('payWithoutRegistrationPage.whereItFits.titleAfter')}
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">{t('payWithoutRegistrationPage.whereItFits.intro')}</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {whereItems.map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#8ab925] flex-shrink-0"></span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="glass border border-[#8ab925]/20 rounded-3xl p-6 md:p-8 mb-20">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          {t('payWithoutRegistrationPage.adHoc.titleBefore')}{' '}
          <span className="text-[#8ab925]">{t('payWithoutRegistrationPage.adHoc.titleAccent')}</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed">{t('payWithoutRegistrationPage.adHoc.body')}</p>
      </div>

      <SubpageContactSection
        kicker={t('payWithoutRegistrationPage.contact.kicker')}
        title={t('payWithoutRegistrationPage.contact.title')}
        highlightedTitle={t('payWithoutRegistrationPage.contact.highlightedTitle')}
        description={t('payWithoutRegistrationPage.contact.description')}
        messagePlaceholder={t('payWithoutRegistrationPage.contact.messagePlaceholder')}
      />
    </section>
  );
};
