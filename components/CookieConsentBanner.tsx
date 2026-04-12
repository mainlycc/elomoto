import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { navigateTo } from '../utils/navigation';
import { useI18n } from '../i18n/I18nProvider';
import { defaultCookiePreferences, type CookieConsentPreferences } from '../lib/cookieConsent';
import { useCookieConsent } from './CookieConsentProvider';

function ToggleRow({
  id,
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (next: boolean) => void;
}) {
  return (
    <div className="flex gap-3 py-3 border-b border-white/10 last:border-0">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled}
        disabled={disabled}
        id={id}
        onClick={() => !disabled && onChange(!checked)}
        className={`relative mt-0.5 h-6 w-11 shrink-0 rounded-full transition-colors ${
          disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
        } ${checked ? 'bg-[#8ab925]' : 'bg-white/20'}`}
      >
        <span
          className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-white shadow transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
      <div className="min-w-0 flex-1 text-left">
        <label htmlFor={id} className="block text-sm font-bold text-white cursor-pointer">
          {label}
        </label>
        <p className="mt-1 text-xs text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export const CookieConsentBanner: React.FC = () => {
  const { t } = useI18n();
  const { stored, draft, setDraft, settingsOpen, setSettingsOpen, persist } = useCookieConsent();
  const [detailOpen, setDetailOpen] = useState(false);

  const showBar = stored === null || settingsOpen;

  useEffect(() => {
    if (stored !== null) setDetailOpen(false);
  }, [stored]);

  const openPolicy = () => {
    navigateTo('/polityka-prywatnosci#pliki-cookies');
  };

  const setPref = (key: keyof CookieConsentPreferences, value: boolean) => {
    setDraft((d) => ({ ...d, [key]: value }));
  };

  const allAccepted: CookieConsentPreferences = { functional: true, analytics: true, marketing: true };
  const noneOptional: CookieConsentPreferences = defaultCookiePreferences();

  if (!showBar) return null;

  const expanded = detailOpen || settingsOpen;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[250] px-3 pb-3 pt-0 sm:px-4 sm:pb-4 pointer-events-none"
      role="region"
      aria-label={t('cookiesBanner.regionLabel')}
    >
      <div className="pointer-events-auto mx-auto max-w-3xl rounded-2xl border border-white/15 bg-[#0a1a14]/98 shadow-2xl backdrop-blur-md text-white">
        {!expanded ? (
          <div className="p-4 sm:p-5 space-y-4">
            <p className="text-sm text-gray-200 leading-relaxed">{t('cookiesBanner.intro')}</p>
            <p className="text-xs text-gray-400 leading-relaxed">{t('cookiesBanner.hint')}</p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => persist(noneOptional)}
                className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-xs font-bold uppercase tracking-wide text-white hover:bg-white/10 transition-colors"
              >
                {t('cookiesBanner.rejectOptional')}
              </button>
              <button
                type="button"
                onClick={() => setDetailOpen(true)}
                className="rounded-lg border border-[#8ab925]/60 bg-[#8ab925]/15 px-3 py-2 text-xs font-bold uppercase tracking-wide text-[#c9e896] hover:bg-[#8ab925]/25 transition-colors"
              >
                {t('cookiesBanner.customize')}
              </button>
              <button
                type="button"
                onClick={() => persist(allAccepted)}
                className="rounded-lg bg-[#8ab925] px-3 py-2 text-xs font-bold uppercase tracking-wide text-[#0a1a14] hover:bg-[#9dc92e] transition-colors"
              >
                {t('cookiesBanner.acceptAll')}
              </button>
            </div>
            <button
              type="button"
              onClick={openPolicy}
              className="text-xs font-bold text-[#8ab925] underline underline-offset-2 hover:text-[#c9e896]"
            >
              {t('cookiesBanner.policyLink')}
            </button>
          </div>
        ) : (
          <div className="p-4 sm:p-5 space-y-4 max-h-[min(70vh,520px)] overflow-y-auto">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#8ab925]">
              {t('cookiesBanner.settingsTitle')}
            </h2>
            <p className="text-xs text-gray-400 leading-relaxed">{t('cookiesBanner.settingsIntro')}</p>

            <div className="rounded-xl border border-white/10 bg-white/5 px-3">
              <ToggleRow
                id="cookie-necessary"
                label={t('cookiesBanner.categories.necessary.label')}
                description={t('cookiesBanner.categories.necessary.desc')}
                checked
                disabled
                onChange={() => {}}
              />
              <ToggleRow
                id="cookie-functional"
                label={t('cookiesBanner.categories.functional.label')}
                description={t('cookiesBanner.categories.functional.desc')}
                checked={draft.functional}
                onChange={(v) => setPref('functional', v)}
              />
              <ToggleRow
                id="cookie-analytics"
                label={t('cookiesBanner.categories.analytics.label')}
                description={t('cookiesBanner.categories.analytics.desc')}
                checked={draft.analytics}
                onChange={(v) => setPref('analytics', v)}
              />
              <ToggleRow
                id="cookie-marketing"
                label={t('cookiesBanner.categories.marketing.label')}
                description={t('cookiesBanner.categories.marketing.desc')}
                checked={draft.marketing}
                onChange={(v) => setPref('marketing', v)}
              />
            </div>

            <button
              type="button"
              onClick={openPolicy}
              className="text-xs font-bold text-[#8ab925] underline underline-offset-2 hover:text-[#c9e896]"
            >
              {t('cookiesBanner.policyLink')}
            </button>

            <div className="flex flex-wrap gap-2 pt-1">
              {settingsOpen ? (
                <button
                  type="button"
                  onClick={() => {
                    setDraft(stored ?? defaultCookiePreferences());
                    setSettingsOpen(false);
                  }}
                  className="rounded-lg border border-white/20 bg-transparent px-3 py-2 text-xs font-bold uppercase tracking-wide text-gray-300 hover:bg-white/5 transition-colors"
                >
                  {t('cookiesBanner.cancel')}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setDetailOpen(false)}
                  className="rounded-lg border border-white/20 bg-transparent px-3 py-2 text-xs font-bold uppercase tracking-wide text-gray-300 hover:bg-white/5 transition-colors"
                >
                  {t('cookiesBanner.back')}
                </button>
              )}
              <button
                type="button"
                onClick={() => persist(draft)}
                className="rounded-lg bg-[#8ab925] px-3 py-2 text-xs font-bold uppercase tracking-wide text-[#0a1a14] hover:bg-[#9dc92e] transition-colors"
              >
                {t('cookiesBanner.saveSelection')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const ConsentAwareAnalytics: React.FC = () => {
  const { stored } = useCookieConsent();
  if (!stored?.analytics) return null;
  return <Analytics />;
};
