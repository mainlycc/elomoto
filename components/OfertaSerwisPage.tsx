import React from 'react';
import { SubpageContactSection } from './SubpageContactSection';
import { useI18n } from '../i18n/I18nProvider';

export const OfertaSerwisPage: React.FC = () => {
  const { t } = useI18n();
  return (
    <section className="max-w-5xl mx-auto px-4 pb-24">
      {/* Nagłówek */}
      <header className="mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#8ab925] uppercase mb-4">
          {t('offerPages.common.eyebrow')}
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
          {t('offerPages.service.hero.titlePrefix')}{' '}
          <span className="text-[#8ab925]">{t('offerPages.service.hero.titleAccent')}</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium">
          {t('offerPages.service.hero.subtitle')}
        </p>
      </header>

      {/* Opis główny */}
      <div className="mb-16 space-y-4 text-sm text-gray-300 leading-relaxed max-w-3xl">
        <p>
          {t('offerPages.service.intro.p1')}
        </p>
        <p>
          {t('offerPages.service.intro.p2')}
        </p>
      </div>

      {/* Gdzie serwisujemy */}
      <div className="mb-16">
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          {t('offerPages.service.where.intro')}
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            t('offerPages.service.where.items.i1'),
            t('offerPages.service.where.items.i2'),
            t('offerPages.service.where.items.i3'),
            t('offerPages.service.where.items.i4'),
            t('offerPages.service.where.items.i5'),
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#8ab925] flex-shrink-0"></span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dlaczego serwis jest ważny */}
      <div className="glass border border-white/10 rounded-3xl p-6 md:p-8 mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          {t('offerPages.service.why.titlePrefix')}{' '}
          <span className="text-[#8ab925]">{t('offerPages.service.why.titleAccent')}</span>?
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          {t('offerPages.service.why.intro')}
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            t('offerPages.service.why.items.i1'),
            t('offerPages.service.why.items.i2'),
            t('offerPages.service.why.items.i3'),
            t('offerPages.service.why.items.i4'),
            t('offerPages.service.why.items.i5'),
            t('offerPages.service.why.items.i6'),
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Zakres serwisu */}
      <div className="mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          {t('offerPages.service.scope.titlePrefix')}{' '}
          <span className="text-[#8ab925]">{t('offerPages.service.scope.titleAccent')}</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          {t('offerPages.service.scope.intro')}
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            t('offerPages.service.scope.items.i1'),
            t('offerPages.service.scope.items.i2'),
            t('offerPages.service.scope.items.i3'),
            t('offerPages.service.scope.items.i4'),
            t('offerPages.service.scope.items.i5'),
            t('offerPages.service.scope.items.i6'),
            t('offerPages.service.scope.items.i7'),
            t('offerPages.service.scope.items.i8'),
            t('offerPages.service.scope.items.i9'),
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="text-[#8ab925] font-black">✓</span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Przeglądy stacji */}
      <div className="glass border border-white/10 rounded-3xl p-6 md:p-8 mb-16">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          {t('offerPages.service.inspections.titlePrefix')}{' '}
          <span className="text-[#8ab925]">{t('offerPages.service.inspections.titleAccent')}</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          {t('offerPages.service.inspections.intro')}
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-5">
          {[
            t('offerPages.service.inspections.items.i1'),
            t('offerPages.service.inspections.items.i2'),
            t('offerPages.service.inspections.items.i3'),
            t('offerPages.service.inspections.items.i4'),
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#8ab925] flex-shrink-0"></span>
              <span className="text-sm text-gray-200 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 italic">
          {t('offerPages.service.inspections.note')}
        </p>
      </div>

      {/* Marki ładowarek AC */}
      <div className="glass border border-[#8ab925]/20 rounded-3xl p-6 md:p-8 mb-20">
        <h2 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
          {t('offerPages.service.brands.titlePrefix')}{' '}
          <span className="text-[#8ab925]">{t('offerPages.service.brands.titleAccent')}</span>
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          {t('offerPages.service.brands.intro')}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { src: '/brands/Elinta_Charge_Logo_RGB.webp', alt: 'Elinta Charge' },
            { src: '/brands/Morek-logo.png', alt: 'Morek' },
            { src: '/brands/Enelion_main_logo_color_20221212.svg', alt: 'Enelion' },
            { src: '/brands/evb.png', alt: 'EVB' },
          ].map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center bg-white rounded-2xl h-20 px-4 border border-white/10"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="block max-h-12 w-auto max-w-full object-contain opacity-95"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <SubpageContactSection
        kicker={t('offerPages.service.contact.kicker')}
        title={t('offerPages.service.contact.title')}
        highlightedTitle={t('offerPages.service.contact.highlightedTitle')}
        description={t('offerPages.service.contact.description')}
        messagePlaceholder={t('offerPages.service.contact.messagePlaceholder')}
      />
    </section>
  );
};
