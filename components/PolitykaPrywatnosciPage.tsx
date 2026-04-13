import React from 'react';
import { useI18n } from '../i18n/I18nProvider';

const pp = (t: (k: string, p?: Record<string, string | number>) => string, key: string) =>
  t(`legalPages.privacy.${key}`);

export const PolitykaPrywatnosciPage: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-[#0a1a14] text-white p-8 md:p-20 font-['Plus_Jakarta_Sans']">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black mb-2 uppercase tracking-tighter">
              {pp(t, 'h1Line1')} <span className="text-[#8ab925]">{pp(t, 'h1Accent')}</span>
            </h1>
            <p className="text-gray-300">{pp(t, 'lead')}</p>
          </div>
        </div>

        <section className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl space-y-8">
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">{pp(t, 's1Title')}</h2>
            <p className="text-gray-300 text-sm leading-relaxed">{pp(t, 's1Body')}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">{pp(t, 's2Title')}</h2>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
              <li>{pp(t, 's2_li1')}</li>
              <li>{pp(t, 's2_li2')}</li>
              <li>{pp(t, 's2_li3')}</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">{pp(t, 's3Title')}</h2>
            <p className="text-gray-300 text-sm leading-relaxed">{pp(t, 's3Body')}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">{pp(t, 's4Title')}</h2>
            <p className="text-gray-300 text-sm leading-relaxed">{pp(t, 's4Body')}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">{pp(t, 's5Title')}</h2>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
              <li>{pp(t, 's5_li1')}</li>
              <li>{pp(t, 's5_li2')}</li>
              <li>{pp(t, 's5_li3')}</li>
            </ul>
          </div>

          <div className="space-y-3 scroll-mt-28" id="pliki-cookies">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">{pp(t, 's6Title')}</h2>
            <p className="text-gray-300 text-sm leading-relaxed">{pp(t, 's6Body')}</p>
          </div>

          <p className="text-[10px] text-gray-300 uppercase tracking-widest pt-2 border-t border-white/10">{pp(t, 'lastUpdated')}</p>
        </section>
      </div>
    </div>
  );
};
