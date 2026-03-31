import React from 'react';
import { SubpageContactSection } from './SubpageContactSection';
import { useI18n } from '../i18n/I18nProvider';

export const HomeContactSection: React.FC = () => {
  const { t } = useI18n();
  return (
    <section id="contact" className="bg-[#020617] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <SubpageContactSection
          kicker={t('homeContact.kicker')}
          title={t('homeContact.title')}
          highlightedTitle={t('homeContact.highlightedTitle')}
          description={t('homeContact.description')}
          messagePlaceholder={t('homeContact.messagePlaceholder')}
        />
      </div>
    </section>
  );
};

