import React from 'react';
import { SubpageContactSection } from './SubpageContactSection';
import { useI18n } from '../i18n/I18nProvider';

export const OfertaEkspertyzyPage: React.FC = () => {
  const { t } = useI18n();
  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      {/* Nagłówek */}
      <header className="mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">
          {t('offerPages.common.eyebrow')}
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
          {t('offerPages.audits.hero.titlePrefix')}{' '}
          <span className="text-[#8ab925]">{t('offerPages.audits.hero.titleAccent')}</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium">
          {t('offerPages.audits.hero.subtitle')}
        </p>

      </header>

      {/* Opis główny */}
      <div className="mb-16 space-y-4 text-sm text-gray-300 leading-relaxed max-w-3xl">
        <p>
          {t('offerPages.audits.intro.p1')}
        </p>
        <p>
          {t('offerPages.audits.intro.p2')}
        </p>
      </div>

      {/* Co obejmuje audyt stacji ładowania */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
          {t('offerPages.audits.scope.titlePrefix')}{' '}
          <span className="text-[#8ab925]">{t('offerPages.audits.scope.titleAccent')}</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          {t('offerPages.audits.scope.intro')}
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {[
            t('offerPages.audits.scope.items.i1'),
            t('offerPages.audits.scope.items.i2'),
            t('offerPages.audits.scope.items.i3'),
            t('offerPages.audits.scope.items.i4'),
            t('offerPages.audits.scope.items.i5'),
            t('offerPages.audits.scope.items.i6'),
            t('offerPages.audits.scope.items.i7'),
            t('offerPages.audits.scope.items.i8'),
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <div className="glass border border-white/10 rounded-3xl p-6 md:p-8">
          <p className="text-sm text-gray-300 leading-relaxed mb-4 font-semibold">
            {t('offerPages.audits.scope.outcomesIntro')}
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              t('offerPages.audits.scope.outcomes.o1'),
              t('offerPages.audits.scope.outcomes.o2'),
              t('offerPages.audits.scope.outcomes.o3'),
              t('offerPages.audits.scope.outcomes.o4'),
              t('offerPages.audits.scope.outcomes.o5'),
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-[#8ab925] font-black">•</span>
                <span className="text-sm text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ekspertyza ładowarek – co otrzymujesz */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
          {t('offerPages.audits.deliverables.titlePrefix')}{' '}
          <span className="text-[#8ab925]">{t('offerPages.audits.deliverables.titleAccent')}</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          {t('offerPages.audits.deliverables.intro')}
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            t('offerPages.audits.deliverables.items.i1'),
            t('offerPages.audits.deliverables.items.i2'),
            t('offerPages.audits.deliverables.items.i3'),
            t('offerPages.audits.deliverables.items.i4'),
            t('offerPages.audits.deliverables.items.i5'),
            t('offerPages.audits.deliverables.items.i6'),
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black mt-0.5">•</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-6 italic">
          {t('offerPages.audits.deliverables.note')}
        </p>
      </div>

      {/* Kiedy warto wykonać ekspertyzę */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
          {t('offerPages.audits.when.titlePrefix')}{' '}
          <span className="text-[#8ab925]">{t('offerPages.audits.when.titleAccent')}</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">
              {t('offerPages.audits.when.cards.c1.title')}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t('offerPages.audits.when.cards.c1.body')}
            </p>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">
              {t('offerPages.audits.when.cards.c2.title')}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              {t('offerPages.audits.when.cards.c2.intro')}
            </p>
            <ul className="space-y-2 text-sm text-gray-200">
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.audits.when.cards.c2.list.i1')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.audits.when.cards.c2.list.i2')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.audits.when.cards.c2.list.i3')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.audits.when.cards.c2.list.i4')}</li>
            </ul>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">
              {t('offerPages.audits.when.cards.c3.title')}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t('offerPages.audits.when.cards.c3.body')}
            </p>
          </div>
        </div>
      </div>

      {/* Ekspertyzy dla osiedli, firm i parkingów */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
          {t('offerPages.audits.who.titlePrefix')}{' '}
          <span className="text-[#8ab925]">{t('offerPages.audits.who.titleAccent')}</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          {t('offerPages.audits.who.intro')}
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            t('offerPages.audits.who.items.i1'),
            t('offerPages.audits.who.items.i2'),
            t('offerPages.audits.who.items.i3'),
            t('offerPages.audits.who.items.i4'),
            t('offerPages.audits.who.items.i5'),
            t('offerPages.audits.who.items.i6'),
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <SubpageContactSection
        kicker={t('offerPages.audits.contact.kicker')}
        title={t('offerPages.audits.contact.title')}
        highlightedTitle={t('offerPages.audits.contact.highlightedTitle')}
        description={t('offerPages.audits.contact.description')}
        messagePlaceholder={t('offerPages.audits.contact.messagePlaceholder')}
      />
    </section>
  );
};
