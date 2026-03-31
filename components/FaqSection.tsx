
import React, { useMemo, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider';

interface FaqItem {
  questionKey: string;
  answerKey: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    questionKey: 'faq.items.i1.q',
    answerKey: 'faq.items.i1.a'
  },
  {
    questionKey: 'faq.items.i2.q',
    answerKey: 'faq.items.i2.a'
  },
  {
    questionKey: 'faq.items.i3.q',
    answerKey: 'faq.items.i3.a'
  },
  {
    questionKey: 'faq.items.i4.q',
    answerKey: 'faq.items.i4.a'
  },
  {
    questionKey: 'faq.items.i5.q',
    answerKey: 'faq.items.i5.a'
  },
  {
    questionKey: 'faq.items.i6.q',
    answerKey: 'faq.items.i6.a'
  },
  {
    questionKey: 'faq.items.i7.q',
    answerKey: 'faq.items.i7.a'
  }
];

export const FaqSection: React.FC = () => {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = useMemo(() => FAQ_DATA, []);

  return (
    <section id="faq" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#8ab925] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">{t('faq.eyebrow')}</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">
            {t('faq.headingLine1')} <span className="text-[#8ab925]">{t('faq.headingLine2Accent')}</span>
          </h2>
          <p className="mt-4 text-slate-500 font-medium">
            {t('faq.intro')}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div 
              key={index}
              className={`group rounded-[32px] border transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-white border-[#8ab925]/30 shadow-xl shadow-[#8ab925]/5' 
                  : 'bg-white/50 border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-7 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-sm md:text-base font-black uppercase tracking-tight transition-colors ${
                  openIndex === index ? 'text-[#8ab925]' : 'text-slate-700'
                }`}>
                  {t(item.questionKey)}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                  openIndex === index ? 'bg-[#8ab925] rotate-180' : 'bg-slate-100 rotate-0'
                }`}>
                  <svg 
                    className={`w-4 h-4 transition-colors ${openIndex === index ? 'text-white' : 'text-slate-400'}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d={openIndex === index ? "M20 12H4" : "M12 4v16m8-8H4"} />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 text-slate-500 text-sm leading-relaxed font-medium">
                  <div className="pt-4 border-t border-slate-50">
                    {t(item.answerKey)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            {t('faq.notFound')}{' '}
            <a href="#contact" className="text-[#8ab925] hover:underline">
              {t('faq.askDirect')}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
