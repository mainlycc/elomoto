export const COOKIE_CONSENT_STORAGE_KEY = 'elomoto_cookie_consent_v1';
export const COOKIE_CONSENT_VERSION = 1 as const;

export type CookieConsentPreferences = {
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

export const OPEN_COOKIE_SETTINGS_EVENT = 'elomoto:open-cookie-settings';
export const COOKIE_CONSENT_UPDATED_EVENT = 'elomoto:cookie-consent-updated';

export function defaultCookiePreferences(): CookieConsentPreferences {
  return { functional: false, analytics: false, marketing: false };
}

export function loadCookieConsent(): CookieConsentPreferences | null {
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as {
      v?: number;
      functional?: boolean;
      analytics?: boolean;
      marketing?: boolean;
    };
    if (data?.v !== COOKIE_CONSENT_VERSION) return null;
    return {
      functional: Boolean(data.functional),
      analytics: Boolean(data.analytics),
      marketing: Boolean(data.marketing),
    };
  } catch {
    return null;
  }
}

export function saveCookieConsent(prefs: CookieConsentPreferences): void {
  try {
    localStorage.setItem(
      COOKIE_CONSENT_STORAGE_KEY,
      JSON.stringify({ v: COOKIE_CONSENT_VERSION, ...prefs }),
    );
  } catch {
    // ignore
  }
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_UPDATED_EVENT, { detail: prefs }));
}

export function openCookieSettingsUi(): void {
  window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS_EVENT));
}
