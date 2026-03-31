import React, { useMemo, useState } from 'react';
import type { ContactFormPayload } from '../types';
import { useI18n } from '../i18n/I18nProvider';

type FormStatus = 'idle' | 'success' | 'error';

const countDigits = (value: string): number => (value.match(/\d/g) ?? []).length;

interface SubpageContactSectionProps {
  kicker: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  messagePlaceholder: string;
}

export const SubpageContactSection: React.FC<SubpageContactSectionProps> = ({
  kicker,
  title,
  highlightedTitle,
  description,
  messagePlaceholder,
}) => {
  const { t } = useI18n();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const canSubmit = useMemo(() => {
    if (isSubmitting) {
      return false;
    }

    const trimmedPhone = phone.trim();
    const isPhoneValid =
      trimmedPhone.length === 0 || (countDigits(trimmedPhone) >= 7 && trimmedPhone.length <= 40);

    return (
      name.trim().length >= 2 &&
      email.trim().length > 0 &&
      isPhoneValid &&
      message.trim().length >= 10 &&
      consent
    );
  }, [consent, email, isSubmitting, message, name, phone]);

  const validatePayload = (payload: ContactFormPayload): string | null => {
    if (payload.name.trim().length < 2) {
      return t('subpageContact.validation.name');
    }

    const simpleEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!simpleEmailRegex.test(payload.email.trim())) {
      return t('subpageContact.validation.email');
    }

    if (typeof payload.phone === 'string') {
      const trimmedPhone = payload.phone.trim();
      if (trimmedPhone.length > 0) {
        if (trimmedPhone.length > 40 || countDigits(trimmedPhone) < 7) {
          return t('subpageContact.validation.phone');
        }
      }
    }

    if (payload.message.trim().length < 10) {
      return t('subpageContact.validation.message');
    }

    if (!payload.consent) {
      return t('subpageContact.validation.consent');
    }

    return null;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('idle');
    setStatusMessage('');

    const payload: ContactFormPayload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim().length > 0 ? phone.trim() : undefined,
      message: message.trim(),
      topic: 'install',
      consent,
    };

    const validationError = validatePayload(payload);
    if (validationError) {
      setStatus('error');
      setStatusMessage(validationError);
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const rawBody = await response.text();
      let result: { ok?: boolean; message?: string } = {};

      if (rawBody) {
        try {
          result = JSON.parse(rawBody) as { ok?: boolean; message?: string };
        } catch {
          result = {};
        }
      }

      if (!response.ok || !result.ok) {
        if (response.status === 404) {
          throw new Error(
            t('subpageContact.status.apiNotAvailable')
          );
        }

        throw new Error(
          result.message || t('subpageContact.status.httpError', { status: response.status })
        );
      }

      setStatus('success');
      setStatusMessage(t('subpageContact.status.success'));
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setConsent(false);
    } catch (error) {
      setStatus('error');
      setStatusMessage(
        error instanceof Error
          ? error.message
          : t('subpageContact.status.genericError')
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-2xl">
      <div className="mb-10">
        <span className="text-[#8ab925] font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">
          {kicker}
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-[0.95] mb-4">
          {title}
          {highlightedTitle ? (
            <>
              <br />
              <span className="text-[#8ab925]">{highlightedTitle}</span>
            </>
          ) : null}
        </h2>
        <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xl">{description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start mb-10">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">
              {t('subpageContact.fields.nameLabel')}
            </label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              disabled={isSubmitting}
              placeholder={t('subpageContact.fields.namePlaceholder')}
              required
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold text-slate-900 focus:border-[#8ab925] focus:ring-4 focus:ring-[#8ab925]/5 outline-none transition-all placeholder:text-slate-300"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">
              {t('subpageContact.fields.emailLabel')}
            </label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={isSubmitting}
              placeholder={t('subpageContact.fields.emailPlaceholder')}
              required
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold text-slate-900 focus:border-[#8ab925] focus:ring-4 focus:ring-[#8ab925]/5 outline-none transition-all placeholder:text-slate-300"
            />
          </div>
          <div className="md:col-span-2 space-y-1">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">
              {t('subpageContact.fields.phoneLabel')}
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              disabled={isSubmitting}
              placeholder={t('subpageContact.fields.phonePlaceholder')}
              autoComplete="tel"
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold text-slate-900 focus:border-[#8ab925] focus:ring-4 focus:ring-[#8ab925]/5 outline-none transition-all placeholder:text-slate-300"
            />
          </div>
          <div className="md:col-span-2 space-y-1">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">
              {t('subpageContact.fields.messageLabel')}
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              disabled={isSubmitting}
              placeholder={messagePlaceholder}
              required
              className="w-full bg-white border border-slate-200 rounded-3xl py-4 px-6 text-sm font-bold text-slate-900 focus:border-[#8ab925] focus:ring-4 focus:ring-[#8ab925]/5 outline-none transition-all placeholder:text-slate-300 resize-none"
            />
          </div>

          <div className="md:col-span-2 pt-4">
            <div className="space-y-3 mb-8">
              <label className="flex items-start space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                  disabled={isSubmitting}
                  className="mt-1 w-4 h-4 rounded border-slate-300 text-[#8ab925] focus:ring-[#8ab925]"
                />
                <span className="text-[10px] text-slate-400 font-medium leading-relaxed">
                  {t('subpageContact.consentPrefix')}{' '}
                  <a href="/polityka-prywatnosci" className="text-slate-900 underline font-black">
                    {t('subpageContact.privacyPolicy')}
                  </a>
                  .
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full sm:w-auto bg-[#8ab925] disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-black py-5 px-16 rounded-2xl text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#8ab925]/20 hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95"
            >
              {isSubmitting ? t('subpageContact.submitting') : t('subpageContact.submit')}
            </button>
            {status !== 'idle' ? (
              <p
                className={`mt-4 text-sm font-bold ${
                  status === 'success' ? 'text-emerald-600' : 'text-red-500'
                }`}
              >
                {statusMessage}
              </p>
            ) : null}
          </div>
        </form>

        <aside className="bg-slate-50 rounded-3xl p-6 border border-slate-100 lg:max-w-[260px]">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
            {t('subpageContact.asideLabel')}
          </p>
          <a
            href="tel:+48222692022"
            className="inline-flex items-center gap-2 text-slate-900 font-black text-lg hover:text-[#8ab925] transition-colors"
          >
            <span aria-hidden="true">📞</span>
            +48 222 692 022
          </a>
        </aside>
      </div>
    </div>
  );
};
