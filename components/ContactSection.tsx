
import React, { useMemo, useState } from 'react';
import type { ContactFormPayload, ContactTopicId } from '../types';

const CONTACT_TOPICS: Array<{ id: ContactTopicId; label: string; icon: string }> = [
  { id: 'subsidies', label: 'Dotacje', icon: '💰' },
  { id: 'install', label: 'Zakup i montaż', icon: '⚡' },
  { id: 'lease', label: 'Dzierżawa parkingu', icon: '🅿️' },
  { id: 'operator', label: 'Usługa operatorska', icon: '📱' },
  { id: 'audit', label: 'Ekspertyza punktu', icon: '📋' },
];

type FormStatus = 'idle' | 'success' | 'error';

const countDigits = (value: string): number => (value.match(/\d/g) ?? []).length;

export const ContactSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<ContactTopicId>('subsidies');
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
      message.trim().length >= 10 &&
      isPhoneValid &&
      consent
    );
  }, [consent, email, isSubmitting, message, name, phone]);

  const validatePayload = (payload: ContactFormPayload): string | null => {
    if (payload.name.trim().length < 2) {
      return 'Podaj poprawne imię i nazwisko.';
    }

    const simpleEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!simpleEmailRegex.test(payload.email.trim())) {
      return 'Podaj poprawny adres e-mail.';
    }

    if (typeof payload.phone === 'string') {
      const trimmedPhone = payload.phone.trim();
      if (trimmedPhone.length > 0) {
        if (trimmedPhone.length > 40 || countDigits(trimmedPhone) < 7) {
          return 'Podaj poprawny numer telefonu.';
        }
      }
    }

    if (payload.message.trim().length < 10) {
      return 'Wiadomość powinna mieć minimum 10 znaków.';
    }

    if (!payload.consent) {
      return 'Aby wysłać formularz, zaakceptuj politykę prywatności.';
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
      topic: selectedTopic,
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
            'Endpoint /api/contact nie jest dostępny w tym trybie uruchomienia. Użyj środowiska Vercel.'
          );
        }

        throw new Error(
          result.message || `Nie udało się wysłać formularza (HTTP ${response.status}).`
        );
      }

      setStatus('success');
      setStatusMessage('Dziękujemy! Twoja wiadomość została wysłana.');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setConsent(false);
      setSelectedTopic('subsidies');
    } catch (error) {
      setStatus('error');
      setStatusMessage(
        error instanceof Error
          ? error.message
          : 'Wystąpił błąd podczas wysyłki. Spróbuj ponownie za chwilę.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Lewa strona: Nagłówek i Tematy */}
          <div className="lg:w-5/12 space-y-12">
            <div>
              <span className="text-[#8ab925] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Zacznijmy współpracę</span>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                NAPISZ <br /><span className="text-[#8ab925]">DO NAS</span>
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed max-w-sm">
                Wybierz interesujący Cię temat i wyślij zapytanie. Nasz zespół odpowie w ciągu 24h.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4">W czym możemy pomóc?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CONTACT_TOPICS.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopic(topic.id)}
                    className={`flex items-center space-x-3 p-4 rounded-2xl border-2 transition-all text-left group ${
                      selectedTopic === topic.id 
                        ? 'border-[#8ab925] bg-[#8ab925]/5 shadow-lg shadow-[#8ab925]/10' 
                        : 'border-slate-100 hover:border-slate-200 bg-slate-50'
                    }`}
                  >
                    <span className="text-xl">{topic.icon}</span>
                    <span className={`text-[11px] font-black uppercase tracking-tight transition-colors ${
                      selectedTopic === topic.id ? 'text-slate-900' : 'text-slate-500'
                    }`}>
                      {topic.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dane kontaktowe szybkie */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-slate-100">
              <div>
                <span className="block text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] mb-2">E-mail</span>
                <a href="mailto:biuro@elomoto.eco" className="text-sm font-black hover:text-[#8ab925] transition-colors">biuro@elomoto.eco</a>
              </div>
              <div>
                <span className="block text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] mb-2">Telefon</span>
                <a href="tel:+48222692022" className="text-sm font-black hover:text-[#8ab925] transition-colors">+48 222 692 022</a>
              </div>
            </div>
          </div>

          {/* Prawa strona: Formularz i Dane firmy */}
          <div className="lg:w-7/12">
            <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Twoje Imię</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    disabled={isSubmitting}
                    placeholder="np. Jan Kowalski"
                    required
                    className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold focus:border-[#8ab925] focus:ring-4 focus:ring-[#8ab925]/5 outline-none transition-all placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">E-mail</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    disabled={isSubmitting}
                    placeholder="twoj@email.pl"
                    required
                    className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold focus:border-[#8ab925] focus:ring-4 focus:ring-[#8ab925]/5 outline-none transition-all placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">
                    Telefon (opcjonalnie)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    disabled={isSubmitting}
                    placeholder="np. 600 700 800"
                    autoComplete="tel"
                    className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold focus:border-[#8ab925] focus:ring-4 focus:ring-[#8ab925]/5 outline-none transition-all placeholder:text-slate-300"
                  />
                </div>
                <div className="md:col-span-2 space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Treść wiadomości</label>
                  <textarea 
                    rows={4}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    disabled={isSubmitting}
                    placeholder="Opisz krótko swoje potrzeby..."
                    required
                    className="w-full bg-white border border-slate-200 rounded-3xl py-4 px-6 text-sm font-bold focus:border-[#8ab925] focus:ring-4 focus:ring-[#8ab925]/5 outline-none transition-all placeholder:text-slate-300 resize-none"
                  ></textarea>
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
                        Wyrażam zgodę na przetwarzanie danych przez Elomoto Sp. z o.o. zgodnie z <a href="#" className="text-slate-900 underline font-black">Polityką Prywatności</a>.
                      </span>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="w-full sm:w-auto bg-[#8ab925] disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-black py-5 px-16 rounded-2xl text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#8ab925]/20 hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95"
                  >
                    {isSubmitting ? 'Wysyłanie...' : 'Wyślij zapytanie'}
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

              {/* Legal & Registration Info in a compact card */}
              <div className="bg-white/50 rounded-3xl p-6 border border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div>
                    <h5 className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-3">Rejestracja spółki</h5>
                    <div className="text-[10px] font-bold text-slate-500 space-y-1 leading-relaxed">
                      <p>ELOMOTO SP. Z O.O.</p>
                      <p>KRS: 0001012969 | NIP: 5223246605</p>
                      <p>REGON: 524171300</p>
                      <p>Kapitał: 3 000 000 PLN</p>
                    </div>
                  </div>
                  <div className="md:text-right">
                    <h5 className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-3">Siedziba</h5>
                    <p className="text-[10px] font-bold text-slate-500 leading-relaxed">
                      ul. Czereśniowa 98/117<br />
                      02-456 Warszawa
                    </p>
                    <div className="mt-4 inline-flex items-center space-x-2 bg-slate-900 text-[#8ab925] px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 bg-[#8ab925] rounded-full animate-pulse"></span>
                      <span>Ubezpieczenie OC 2 mln PLN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
