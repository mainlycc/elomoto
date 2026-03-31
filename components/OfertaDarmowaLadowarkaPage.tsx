import React from 'react';
import { SubpageContactSection } from './SubpageContactSection';
import { useI18n } from '../i18n/I18nProvider';

export const OfertaDarmowaLadowarkaPage: React.FC = () => {
  const { t } = useI18n();

  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      {/* Dla kogo (na górze) */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          {t('offerPages.freeCharger.forWhom.title')}
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          {t('offerPages.freeCharger.forWhom.intro')}
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            t('offerPages.freeCharger.forWhom.items.i1'),
            t('offerPages.freeCharger.forWhom.items.i2'),
            t('offerPages.freeCharger.forWhom.items.i3'),
            t('offerPages.freeCharger.forWhom.items.i4'),
            t('offerPages.freeCharger.forWhom.items.i5'),
            t('offerPages.freeCharger.forWhom.items.i6'),
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#8ab925] flex-shrink-0"></span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Nagłówek */}
      <header className="mb-16">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">{t('offerPages.common.eyebrow')}</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            {t('offerPages.freeCharger.hero.titlePrefix')}{' '}
            <span className="text-[#8ab925]">{t('offerPages.freeCharger.hero.titleAccent')}</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium">
            {t('offerPages.freeCharger.hero.subtitle')}
          </p>

          <div className="mt-6 space-y-4 text-sm text-gray-300 leading-relaxed max-w-3xl">
            <p>
              {t('offerPages.freeCharger.hero.p1')}
            </p>
            <p>
              {t('offerPages.freeCharger.hero.p2')}
            </p>
            <p>
              {t('offerPages.freeCharger.hero.p3')}
            </p>
          </div>
        </div>
      </header>

      {/* Co inwestuje elomoto.eco */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          {t('offerPages.freeCharger.invests.titlePrefix')}{' '}
          <span className="text-[#8ab925]">{t('offerPages.freeCharger.invests.titleAccent')}</span>?
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          {t('offerPages.freeCharger.invests.intro')}
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            t('offerPages.freeCharger.invests.items.i1'),
            t('offerPages.freeCharger.invests.items.i2'),
            t('offerPages.freeCharger.invests.items.i3'),
            t('offerPages.freeCharger.invests.items.i4'),
            t('offerPages.freeCharger.invests.items.i5'),
            t('offerPages.freeCharger.invests.items.i6'),
            t('offerPages.freeCharger.invests.items.i7'),
            t('offerPages.freeCharger.invests.items.i8'),
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-4 italic">
          {t('offerPages.freeCharger.invests.note')}
        </p>
      </div>

      {/* Proces inwestycji */}
      <div className="mb-20">
        <h2 className="text-xl font-black text-white mb-8 uppercase tracking-tight">
          {t('offerPages.freeCharger.process.title')}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { step: '01', title: t('offerPages.freeCharger.process.steps.s1.title'), desc: t('offerPages.freeCharger.process.steps.s1.desc') },
            { step: '02', title: t('offerPages.freeCharger.process.steps.s2.title'), desc: t('offerPages.freeCharger.process.steps.s2.desc') },
            { step: '03', title: t('offerPages.freeCharger.process.steps.s3.title'), desc: t('offerPages.freeCharger.process.steps.s3.desc') },
            { step: '04', title: t('offerPages.freeCharger.process.steps.s4.title'), desc: t('offerPages.freeCharger.process.steps.s4.desc') },
          ].map((item) => (
            <div key={item.step} className="glass border border-white/10 rounded-3xl p-6 space-y-3">
              <span className="text-3xl font-black text-[#8ab925]">{item.step}</span>
              <h3 className="text-sm font-black text-white uppercase tracking-tight">{item.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <SubpageContactSection
        kicker={t('offerPages.freeCharger.contact.kicker')}
        title={t('offerPages.freeCharger.contact.title')}
        highlightedTitle={t('offerPages.freeCharger.contact.highlightedTitle')}
        description={t('offerPages.freeCharger.contact.description')}
        messagePlaceholder={t('offerPages.freeCharger.contact.messagePlaceholder')}
      />
    </section>
  );
};
