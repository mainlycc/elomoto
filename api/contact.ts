import { Resend } from 'resend';

const CONTACT_TOPIC_IDS = ['subsidies', 'install', 'lease', 'operator', 'audit'] as const;
type ContactTopicId = (typeof CONTACT_TOPIC_IDS)[number];

interface ContactFormPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  topic: ContactTopicId;
  consent: boolean;
}

const TOPIC_LABELS: Record<ContactTopicId, string> = {
  subsidies: 'Dotacje',
  install: 'Zakup i montaz',
  lease: 'Dzierzawa parkingu',
  operator: 'Usluga operatorska',
  audit: 'Ekspertyza punktu',
};

const isValidEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const countDigits = (value: string): number => (value.match(/\d/g) ?? []).length;

const parseRequestBody = (body: unknown): unknown => {
  if (typeof body !== 'string') {
    return body;
  }

  try {
    return JSON.parse(body);
  } catch {
    return null;
  }
};

const normalizePayload = (body: unknown): ContactFormPayload | null => {
  if (!body || typeof body !== 'object') {
    return null;
  }

  const candidate = body as Partial<ContactFormPayload>;
  const name = typeof candidate.name === 'string' ? candidate.name.trim() : '';
  const email = typeof candidate.email === 'string' ? candidate.email.trim() : '';
  const phone = typeof candidate.phone === 'string' ? candidate.phone.trim() : '';
  const message = typeof candidate.message === 'string' ? candidate.message.trim() : '';
  const topic = typeof candidate.topic === 'string' ? candidate.topic : '';
  const consent = candidate.consent === true;

  if (!name || name.length < 2 || name.length > 120) {
    return null;
  }

  if (!isValidEmail(email) || email.length > 200) {
    return null;
  }

  if (phone) {
    if (phone.length > 40 || countDigits(phone) < 7) {
      return null;
    }
  }

  if (!message || message.length < 10 || message.length > 5000) {
    return null;
  }

  if (!CONTACT_TOPIC_IDS.includes(topic as ContactTopicId)) {
    return null;
  }

  if (!consent) {
    return null;
  }

  return {
    name,
    email,
    phone: phone || undefined,
    message,
    topic: topic as ContactTopicId,
    consent,
  };
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFromEmail = process.env.RESEND_FROM_EMAIL;
  const missingVars: string[] = [];

  if (!resendApiKey) {
    missingVars.push('RESEND_API_KEY');
  }
  if (!resendFromEmail) {
    missingVars.push('RESEND_FROM_EMAIL');
  }

  if (missingVars.length > 0) {
    return res
      .status(500)
      .json({
        ok: false,
        message: `Missing email configuration on server: ${missingVars.join(', ')}`,
      });
  }

  const resend = new Resend(resendApiKey);

  const payload = normalizePayload(parseRequestBody(req.body));

  if (!payload) {
    return res.status(400).json({ ok: false, message: 'Invalid form payload.' });
  }

  const topicLabel = TOPIC_LABELS[payload.topic];
  const submittedAt = new Date().toISOString();

  try {
    const sendResult = await resend.emails.send({
      from: resendFromEmail,
      to: payload.email,
      subject: `Potwierdzenie zgloszenia: ${topicLabel}`,
      text: [
        'Dziekujemy za zgloszenie z formularza kontaktowego.',
        '',
        `Temat: ${topicLabel}`,
        `Imie i nazwisko: ${payload.name}`,
        `Email: ${payload.email}`,
        payload.phone ? `Telefon: ${payload.phone}` : null,
        `Data wyslania (UTC): ${submittedAt}`,
        '',
        'Twoja wiadomosc:',
        payload.message,
        '',
        'Skontaktujemy sie z Toba najszybciej, jak to mozliwe.',
      ]
        .filter((line): line is string => typeof line === 'string' && line.length > 0)
        .join('\n'),
    });

    if (sendResult.error) {
      const providerMessage =
        typeof sendResult.error.message === 'string' && sendResult.error.message.length > 0
          ? sendResult.error.message
          : 'Email provider error.';

      return res.status(502).json({ ok: false, message: providerMessage });
    }

    return res.status(200).json({ ok: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Contact email error:', error);
    const errorMessage = error instanceof Error ? error.message : null;

    return res.status(500).json({
      ok: false,
      message: errorMessage || 'Unexpected server error.',
    });
  }
}
