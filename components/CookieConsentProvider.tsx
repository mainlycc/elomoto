import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  COOKIE_CONSENT_UPDATED_EVENT,
  CookieConsentPreferences,
  defaultCookiePreferences,
  loadCookieConsent,
  OPEN_COOKIE_SETTINGS_EVENT,
  saveCookieConsent,
} from '../lib/cookieConsent';

type CookieConsentContextValue = {
  /** Zapisane preferencje po wyborze użytkownika; null = jeszcze nie zapisano. */
  stored: CookieConsentPreferences | null;
  /** Robocze stany przełączników w banerze. */
  draft: CookieConsentPreferences;
  setDraft: React.Dispatch<React.SetStateAction<CookieConsentPreferences>>;
  settingsOpen: boolean;
  setSettingsOpen: (open: boolean) => void;
  persist: (prefs: CookieConsentPreferences) => void;
  openManageFromFooter: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [stored, setStored] = useState<CookieConsentPreferences | null>(() => loadCookieConsent());
  const [draft, setDraft] = useState<CookieConsentPreferences>(() => stored ?? defaultCookiePreferences());
  const [settingsOpen, setSettingsOpen] = useState(false);

  const persist = useCallback((prefs: CookieConsentPreferences) => {
    saveCookieConsent(prefs);
    setStored(prefs);
    setDraft(prefs);
    setSettingsOpen(false);
  }, []);

  const openManageFromFooter = useCallback(() => {
    setDraft(stored ?? defaultCookiePreferences());
    setSettingsOpen(true);
  }, [stored]);

  useEffect(() => {
    const onOpen = () => openManageFromFooter();
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, onOpen);
  }, [openManageFromFooter]);

  useEffect(() => {
    const onUpdated = (e: Event) => {
      const ce = e as CustomEvent<CookieConsentPreferences>;
      if (ce.detail) {
        setStored(ce.detail);
        setDraft(ce.detail);
      }
    };
    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, onUpdated);
    return () => window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, onUpdated);
  }, []);

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      stored,
      draft,
      setDraft,
      settingsOpen,
      setSettingsOpen,
      persist,
      openManageFromFooter,
    }),
    [stored, draft, settingsOpen, persist, openManageFromFooter],
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error('useCookieConsent must be used within CookieConsentProvider');
  return ctx;
}

export { openCookieSettingsUi } from '../lib/cookieConsent';
