import React from 'react';
import { SubpageContactSection } from './SubpageContactSection';
import { useI18n } from '../i18n/I18nProvider';

export const OfertaMontazPage: React.FC = () => {
  const { t } = useI18n();
  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      {/* Nagłówek */}
      <header className="mb-16">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">
            {t('offerPages.common.eyebrow')}
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            {t('offerPages.installation.hero.titlePrefix')}{' '}
            <span className="text-[#8ab925]">{t('offerPages.installation.hero.titleAccent')}</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium">
            {t('offerPages.installation.hero.subtitle')}
          </p>

          <div className="mt-6 space-y-4 text-sm text-gray-300 leading-relaxed max-w-3xl">
            <p>
              {t('offerPages.installation.hero.p1')}
            </p>
            <p>
              {t('offerPages.installation.hero.p2')}
            </p>
            <p>
              {t('offerPages.installation.hero.p3')}
            </p>
          </div>
        </div>
      </header>

      {/* Od audytu do pierwszego ładowania */}
      <div className="glass border border-white/10 rounded-3xl p-6 md:p-8 mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          {t('offerPages.installation.fromAudit.titlePrefix')}{' '}
          <span className="text-[#8ab925]">{t('offerPages.installation.fromAudit.titleAccent')}</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          {t('offerPages.installation.fromAudit.intro')}
        </p>
        <div className="grid sm:grid-cols-3 gap-3 mb-5">
          {[
            t('offerPages.installation.fromAudit.items.i1'),
            t('offerPages.installation.fromAudit.items.i2'),
            t('offerPages.installation.fromAudit.items.i3'),
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <div className="text-sm text-gray-400 space-y-2 italic">
          <p>{t('offerPages.installation.fromAudit.note1')}</p>
          <p>{t('offerPages.installation.fromAudit.note2')}</p>
        </div>
      </div>

      {/* Co obejmuje montaż */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          {t('offerPages.installation.scope.titlePrefix')}{' '}
          <span className="text-[#8ab925]">{t('offerPages.installation.scope.titleAccent')}</span>?
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          {t('offerPages.installation.scope.intro')}
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            t('offerPages.installation.scope.items.i1'),
            t('offerPages.installation.scope.items.i2'),
            t('offerPages.installation.scope.items.i3'),
            t('offerPages.installation.scope.items.i4'),
            t('offerPages.installation.scope.items.i5'),
            t('offerPages.installation.scope.items.i6'),
            t('offerPages.installation.scope.items.i7'),
            t('offerPages.installation.scope.items.i8'),
            t('offerPages.installation.scope.items.i9'),
            t('offerPages.installation.scope.items.i10'),
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Najczęstsze scenariusze montażu */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
          {t('offerPages.installation.scenarios.titlePrefix')}{' '}
          <span className="text-[#8ab925]">{t('offerPages.installation.scenarios.titleAccent')}</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Garaże podziemne */}
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">
              {t('offerPages.installation.scenarios.cards.c1.title')}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              {t('offerPages.installation.scenarios.cards.c1.intro')}
            </p>
            <ul className="space-y-2 text-sm text-gray-200">
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.installation.scenarios.cards.c1.list.i1')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.installation.scenarios.cards.c1.list.i2')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.installation.scenarios.cards.c1.list.i3')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.installation.scenarios.cards.c1.list.i4')}</li>
            </ul>
          </div>

          {/* Parkingi naziemne */}
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">
              {t('offerPages.installation.scenarios.cards.c2.title')}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              {t('offerPages.installation.scenarios.cards.c2.intro')}
            </p>
            <ul className="space-y-2 text-sm text-gray-200">
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.installation.scenarios.cards.c2.list.i1')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.installation.scenarios.cards.c2.list.i2')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.installation.scenarios.cards.c2.list.i3')}</li>
            </ul>
          </div>

          {/* Infrastruktura w firmach */}
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">
              {t('offerPages.installation.scenarios.cards.c3.title')}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              {t('offerPages.installation.scenarios.cards.c3.intro')}
            </p>
            <ul className="space-y-2 text-sm text-gray-200">
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.installation.scenarios.cards.c3.list.i1')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.installation.scenarios.cards.c3.list.i2')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.installation.scenarios.cards.c3.list.i3')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.installation.scenarios.cards.c3.list.i4')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.installation.scenarios.cards.c3.list.i5')}</li>
            </ul>
          </div>

          {/* Montaż prywatny */}
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">
              {t('offerPages.installation.scenarios.cards.c4.title')}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              {t('offerPages.installation.scenarios.cards.c4.intro')}
            </p>
            <ul className="space-y-2 text-sm text-gray-200">
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.installation.scenarios.cards.c4.list.i1')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.installation.scenarios.cards.c4.list.i2')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.installation.scenarios.cards.c4.list.i3')}</li>
            </ul>
            <p className="text-sm text-gray-400 mt-3 italic">
              {t('offerPages.installation.scenarios.cards.c4.note')}
            </p>
          </div>
        </div>
      </div>

      <SubpageContactSection
        kicker={t('offerPages.installation.contact.kicker')}
        title={t('offerPages.installation.contact.title')}
        highlightedTitle={t('offerPages.installation.contact.highlightedTitle')}
        description={t('offerPages.installation.contact.description')}
        messagePlaceholder={t('offerPages.installation.contact.messagePlaceholder')}
      />
    </section>
  );
};
