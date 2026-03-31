import React from 'react';
import { SubpageContactSection } from './SubpageContactSection';
import { useI18n } from '../i18n/I18nProvider';

export const OfertaOperatorPage: React.FC = () => {
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
            {t('offerPages.operator.hero.titlePrefix')}{' '}
            <span className="text-[#8ab925]">{t('offerPages.operator.hero.titleAccent')}</span>{' '}
            {t('offerPages.operator.hero.titleSuffix')}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium">
            {t('offerPages.operator.hero.subtitle')}
          </p>

          <div className="mt-6 space-y-4 text-sm text-gray-300 leading-relaxed max-w-3xl">
            <p>
              {t('offerPages.operator.hero.p1')}
            </p>
            <p>
              {t('offerPages.operator.hero.p2')}
            </p>
            <p>
              {t('offerPages.operator.hero.p3')}
            </p>
          </div>
        </div>
      </header>

      {/* Co oznacza pełna obsługa operatorska */}
      <div className="glass border border-white/10 rounded-3xl p-6 md:p-8 mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          {t('offerPages.operator.fullService.titlePrefix')}{' '}
          <span className="text-[#8ab925]">{t('offerPages.operator.fullService.titleAccent')}</span>?
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          {t('offerPages.operator.fullService.intro')}
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            t('offerPages.operator.fullService.items.i1'),
            t('offerPages.operator.fullService.items.i2'),
            t('offerPages.operator.fullService.items.i3'),
            t('offerPages.operator.fullService.items.i4'),
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-5 italic">
          {t('offerPages.operator.fullService.note')}
        </p>
      </div>

      {/* System operatorski i aplikacja */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          {t('offerPages.operator.system.titlePrefix')}{' '}
          {t('offerPages.operator.system.titleMid')}{' '}
          <span className="text-[#8ab925]">{t('offerPages.operator.system.titleAccent')}</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          {t('offerPages.operator.system.intro')}
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          {[
            t('offerPages.operator.system.items.i1'),
            t('offerPages.operator.system.items.i2'),
            t('offerPages.operator.system.items.i3'),
            t('offerPages.operator.system.items.i4'),
            t('offerPages.operator.system.items.i5'),
            t('offerPages.operator.system.items.i6'),
            t('offerPages.operator.system.items.i7'),
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 italic">
          {t('offerPages.operator.system.note')}
        </p>
      </div>

      {/* Zakres usługi operatorskiej */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          {t('offerPages.operator.scope.titlePrefix')}{' '}
          <span className="text-[#8ab925]">{t('offerPages.operator.scope.titleAccent')}</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">{t('offerPages.operator.scope.intro')}</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            t('offerPages.operator.scope.items.i1'),
            t('offerPages.operator.scope.items.i2'),
            t('offerPages.operator.scope.items.i3'),
            t('offerPages.operator.scope.items.i4'),
            t('offerPages.operator.scope.items.i5'),
            t('offerPages.operator.scope.items.i6'),
            t('offerPages.operator.scope.items.i7'),
            t('offerPages.operator.scope.items.i8'),
            t('offerPages.operator.scope.items.i9'),
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#8ab925] flex-shrink-0"></span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modele rozliczeń */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
          {t('offerPages.operator.billingModels.titlePrefix')}{' '}
          <span className="text-[#8ab925]">{t('offerPages.operator.billingModels.titleAccent')}</span>{' '}
          {t('offerPages.operator.billingModels.titleSuffix')}
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          {t('offerPages.operator.billingModels.intro')}
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-200">
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">
              {t('offerPages.operator.billingModels.cards.c1.title')}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.operator.billingModels.cards.c1.list.i1')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.operator.billingModels.cards.c1.list.i2')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.operator.billingModels.cards.c1.list.i3')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.operator.billingModels.cards.c1.list.i4')}</li>
            </ul>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">
              {t('offerPages.operator.billingModels.cards.c2.title')}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.operator.billingModels.cards.c2.list.i1')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.operator.billingModels.cards.c2.list.i2')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.operator.billingModels.cards.c2.list.i3')}</li>
            </ul>
          </div>
          <div className="glass border border-white/10 rounded-3xl p-6">
            <h3 className="font-black text-white mb-3 uppercase text-xs tracking-wider">
              {t('offerPages.operator.billingModels.cards.c3.title')}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.operator.billingModels.cards.c3.list.i1')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.operator.billingModels.cards.c3.list.i2')}</li>
              <li className="flex items-start gap-2"><span className="text-[#8ab925] mt-0.5">•</span> {t('offerPages.operator.billingModels.cards.c3.list.i3')}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Operator bez własnego zaplecza */}
      <div className="glass border border-[#8ab925]/20 rounded-3xl p-6 md:p-8 mb-20">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          {t('offerPages.operator.noBackoffice.titlePrefix')}{' '}
          <span className="text-[#8ab925]">{t('offerPages.operator.noBackoffice.titleAccent')}</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          {t('offerPages.operator.noBackoffice.body')}
        </p>
      </div>

      <SubpageContactSection
        kicker={t('offerPages.operator.contact.kicker')}
        title={t('offerPages.operator.contact.title')}
        highlightedTitle={t('offerPages.operator.contact.highlightedTitle')}
        description={t('offerPages.operator.contact.description')}
        messagePlaceholder={t('offerPages.operator.contact.messagePlaceholder')}
      />
    </section>
  );
};
