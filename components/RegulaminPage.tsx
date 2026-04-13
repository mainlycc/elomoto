import React from 'react';
import { useI18n } from '../i18n/I18nProvider';

const tp = (t: (k: string, p?: Record<string, string | number>) => string, key: string, params?: Record<string, string | number>) =>
  t(`legalPages.terms.${key}`, params);

export const RegulaminPage: React.FC = () => {
  const { t } = useI18n();
  const complaintsEmail = tp(t, 'complaintsEmail');

  return (
    <div className="min-h-screen bg-[#0a1a14] text-white p-8 md:p-20 font-['Plus_Jakarta_Sans']">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-black mb-4 uppercase tracking-tighter">
            {tp(t, 'h1Line1')} <span className="text-[#8ab925]">{tp(t, 'h1Accent')}</span>
          </h1>
          <div className="text-gray-400 text-sm space-y-1 mb-2">
            <p className="font-bold text-white">Elomoto Sp. z o.o.</p>
            <p>
              {tp(t, 'phoneLabel')}{' '}
              <a href="tel:+48222692022" className="hover:text-[#8ab925] transition-colors">
                222 692 022
              </a>
            </p>
            <p>
              {tp(t, 'emailLabel')}{' '}
              <a href="mailto:biuro@elomoto.com" className="hover:text-[#8ab925] transition-colors">
                biuro@elomoto.com
              </a>
            </p>
            <p>Czereśniowa 98, 02-456 Warszawa</p>
          </div>
        </div>

        <section className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl space-y-10">
          <div className="space-y-3">
            <h2 className="text-lg font-black text-[#8ab925] uppercase tracking-widest">{tp(t, 'introTitle')}</h2>
            <p className="text-gray-300 text-sm leading-relaxed">{tp(t, 'introBody')}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-black text-[#8ab925] uppercase tracking-widest">{tp(t, 'ch1Title')}</h2>
            <p className="text-gray-300 text-sm font-semibold">{tp(t, 'defsIntro')}</p>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-3 leading-relaxed">
              <li>
                <strong className="text-white">{tp(t, 'defUstawaStrong')}</strong> {tp(t, 'defUstawaRest')}
              </li>
              <li>
                <strong className="text-white">{tp(t, 'defSystemStrong')}</strong> {tp(t, 'defSystemRest')}
              </li>
              <li>
                <strong className="text-white">{tp(t, 'defEservicesStrong')}</strong> {tp(t, 'defEservicesRest')}
              </li>
              <li>
                <strong className="text-white">{tp(t, 'defCommsStrong')}</strong> {tp(t, 'defCommsRest')}
              </li>
              <li>
                <strong className="text-white">{tp(t, 'defProviderStrong')}</strong> {tp(t, 'defProviderRest')}
              </li>
              <li>
                <strong className="text-white">{tp(t, 'defRecipientStrong')}</strong> {tp(t, 'defRecipientRest')}
              </li>
            </ul>
            <p className="text-gray-300 text-sm leading-relaxed">{tp(t, 'domainsParagraph')}</p>
            <p className="text-gray-300 text-sm leading-relaxed">{tp(t, 'acceptanceParagraph')}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-black text-[#8ab925] uppercase tracking-widest">{tp(t, 'ch2Title')}</h2>
            <p className="text-gray-300 text-sm leading-relaxed">{tp(t, 'ch2Intro')}</p>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-3 leading-relaxed">
              <li>{tp(t, 'ch2_li1')}</li>
              <li>{tp(t, 'ch2_li2')}</li>
              <li>{tp(t, 'ch2_li3')}</li>
              <li>{tp(t, 'ch2_li4')}</li>
              <li>{tp(t, 'ch2_li5')}</li>
              <li>{tp(t, 'ch2_li6')}</li>
              <li>{tp(t, 'ch2_li7')}</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-black text-[#8ab925] uppercase tracking-widest">{tp(t, 'ch3Title')}</h2>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-3 leading-relaxed">
              <li>{tp(t, 'ch3_li1')}</li>
              <li>{tp(t, 'ch3_li2')}</li>
              <li>{tp(t, 'ch3_li3')}</li>
              <li>
                {tp(t, 'ch3_li4_intro')}
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>{tp(t, 'ch3_li4_sub1')}</li>
                  <li>{tp(t, 'ch3_li4_sub2')}</li>
                </ul>
              </li>
              <li>{tp(t, 'ch3_li5')}</li>
              <li>{tp(t, 'ch3_li6')}</li>
              <li>{tp(t, 'ch3_li7')}</li>
              <li>{tp(t, 'ch3_li8')}</li>
              <li>{tp(t, 'ch3_li9')}</li>
              <li>{tp(t, 'ch3_li10')}</li>
              <li>
                {tp(t, 'ch3_li11', { email: complaintsEmail }).split(complaintsEmail)[0]}
                <a href={`mailto:${complaintsEmail}`} className="text-[#8ab925] hover:underline">
                  {complaintsEmail}
                </a>
                {tp(t, 'ch3_li11', { email: complaintsEmail }).split(complaintsEmail)[1] ?? ''}
              </li>
              <li>{tp(t, 'ch3_li12')}</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-black text-[#8ab925] uppercase tracking-widest">{tp(t, 'ch4Title')}</h2>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-3 leading-relaxed">
              <li>{tp(t, 'ch4_li1')}</li>
              <li>{tp(t, 'ch4_li2')}</li>
              <li>
                {tp(t, 'ch4_li3_intro')}
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>{tp(t, 'ch4_li3_sub1')}</li>
                  <li>{tp(t, 'ch4_li3_sub2')}</li>
                </ul>
              </li>
              <li>{tp(t, 'ch4_li4')}</li>
              <li>
                {tp(t, 'ch4_li5_intro')}
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>{tp(t, 'ch4_li5_sub1')}</li>
                  <li>{tp(t, 'ch4_li5_sub2')}</li>
                  <li>{tp(t, 'ch4_li5_sub3')}</li>
                  <li>{tp(t, 'ch4_li5_sub4')}</li>
                </ul>
              </li>
              <li>{tp(t, 'ch4_li6')}</li>
              <li>{tp(t, 'ch4_li7')}</li>
              <li>{tp(t, 'ch4_li8')}</li>
              <li>{tp(t, 'ch4_li9')}</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-black text-[#8ab925] uppercase tracking-widest">{tp(t, 'ch5Title')}</h2>
            <p className="text-gray-300 text-sm leading-relaxed">{tp(t, 'ch5Intro')}</p>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2 leading-relaxed">
              <li>{tp(t, 'ch5_li1')}</li>
              <li>{tp(t, 'ch5_li2')}</li>
              <li>{tp(t, 'ch5_li3')}</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-black text-[#8ab925] uppercase tracking-widest">{tp(t, 'ch6Title')}</h2>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-3 leading-relaxed">
              <li>{tp(t, 'ch6_li1')}</li>
              <li>{tp(t, 'ch6_li2')}</li>
              <li>{tp(t, 'ch6_li3')}</li>
              <li>{tp(t, 'ch6_li4')}</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-black text-[#8ab925] uppercase tracking-widest">{tp(t, 'ch7Title')}</h2>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-3 leading-relaxed">
              <li>{tp(t, 'ch7_li1')}</li>
              <li>{tp(t, 'ch7_li2')}</li>
              <li>{tp(t, 'ch7_li3')}</li>
              <li>{tp(t, 'ch7_li4')}</li>
            </ul>
          </div>

          <p className="text-[10px] text-gray-300 uppercase tracking-widest pt-4 border-t border-white/10">{tp(t, 'lastUpdated')}</p>
        </section>
      </div>
    </div>
  );
};
