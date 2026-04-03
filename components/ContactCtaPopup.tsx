import React, { useEffect, useRef, useState } from 'react';
import { navigateTo } from '../utils/navigation';
import { useI18n } from '../i18n/I18nProvider';

const DISMISSED_KEY = 'contactCtaPopupDismissed';

type ContactCtaPopupProps = {
  delayMs?: number;
};

function canUseSessionStorage(): boolean {
  try {
    return typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined';
  } catch {
    return false;
  }
}

export const ContactCtaPopup: React.FC<ContactCtaPopupProps> = ({ delayMs = 10_000 }) => {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
    if (currentPath === '/kontakt') {
      return;
    }

    if (canUseSessionStorage()) {
      const dismissed = window.sessionStorage.getItem(DISMISSED_KEY);
      if (dismissed === '1') {
        return;
      }
    }

    const timeoutId = window.setTimeout(() => {
      setIsOpen(true);
    }, delayMs);

    return () => window.clearTimeout(timeoutId);
  }, [delayMs]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    // focus primary dismiss control
    window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        dismiss();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const persistDismissed = () => {
    if (!canUseSessionStorage()) {
      return;
    }
    window.sessionStorage.setItem(DISMISSED_KEY, '1');
  };

  const dismiss = () => {
    persistDismissed();
    setIsOpen(false);
  };

  const handleCta = () => {
    persistDismissed();
    setIsOpen(false);
    navigateTo('/#contact');
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed left-4 sm:left-6 top-1/2 -translate-y-1/2 z-[200] w-[min(92vw,420px)] pointer-events-none">
      <div
        role="dialog"
        aria-label={t('contactPopup.title')}
        className="pointer-events-auto bg-white rounded-[28px] border border-black/10 shadow-2xl shadow-black/15 p-5 sm:p-6 transition-all duration-300 animate-[slideInLeft_260ms_cubic-bezier(0.2,0.9,0.2,1)]"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[#0b1220] font-black uppercase tracking-tight leading-snug text-lg sm:text-xl">
              {t('contactPopup.title')}
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={dismiss}
            className="shrink-0 rounded-xl border border-black/10 bg-black/5 hover:bg-black/10 text-black/70 hover:text-black transition-colors px-3 py-2 text-xs font-extrabold uppercase tracking-wider active:scale-95"
          >
            {t('contactPopup.close')}
          </button>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={handleCta}
            className="w-full sm:flex-1 bg-[#8ab925] text-[#06110a] text-xs font-extrabold px-6 py-4 rounded-2xl hover:bg-[#7aa51f] hover:shadow-[0_12px_28px_rgba(138,185,37,0.35)] transition-all tracking-wider shadow-md active:scale-95"
          >
            {t('contactPopup.cta')}
          </button>
          <button
            type="button"
            onClick={dismiss}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl text-xs font-extrabold uppercase tracking-wider text-black/70 hover:text-black bg-black/5 hover:bg-black/10 border border-black/10 transition-colors active:scale-95"
          >
            {t('contactPopup.later')}
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-18px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

