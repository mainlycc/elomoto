
import React, { useState } from 'react';

const CONTACT_TOPICS = [
  { id: 'subsidies', label: 'Dotacje', icon: '💰' },
  { id: 'install', label: 'Zakup i montaż', icon: '⚡' },
  { id: 'lease', label: 'Dzierżawa parkingu', icon: '🅿️' },
  { id: 'operator', label: 'Usługa operatorska', icon: '📱' },
  { id: 'audit', label: 'Ekspertyza punktu', icon: '📋' },
];

export const ContactSection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  return (
    <section id="contact" className="py-32 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Lewa strona: Nagłówek i Tematy */}
          <div className="lg:w-5/12 space-y-12">
            <div>
              <span className="text-[#00ff88] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Zacznijmy współpracę</span>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                NAPISZ <br /><span className="text-[#00ff88]">DO NAS</span>
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed max-w-sm">
                Wybierz interesujący Cię temat i wyślij zapytanie. Nasz zespół inżynierów odpowie w ciągu 24h.
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
                        ? 'border-[#00ff88] bg-[#00ff88]/5 shadow-lg shadow-[#00ff88]/10' 
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
                <a href="mailto:biuro@elomoto.eco" className="text-sm font-black hover:text-[#00ff88] transition-colors">biuro@elomoto.eco</a>
              </div>
              <div>
                <span className="block text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] mb-2">Telefon</span>
                <a href="tel:+48222692022" className="text-sm font-black hover:text-[#00ff88] transition-colors">+48 222 692 022</a>
              </div>
            </div>
          </div>

          {/* Prawa strona: Formularz i Dane firmy */}
          <div className="lg:w-7/12">
            <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Twoje Imię</label>
                  <input 
                    type="text" 
                    placeholder="np. Jan Kowalski"
                    className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold focus:border-[#00ff88] focus:ring-4 focus:ring-[#00ff88]/5 outline-none transition-all placeholder:text-slate-300"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">E-mail</label>
                  <input 
                    type="email" 
                    placeholder="twoj@email.pl"
                    className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 text-sm font-bold focus:border-[#00ff88] focus:ring-4 focus:ring-[#00ff88]/5 outline-none transition-all placeholder:text-slate-300"
                  />
                </div>
                <div className="md:col-span-2 space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Treść wiadomości</label>
                  <textarea 
                    rows={4}
                    placeholder="Opisz krótko swoje potrzeby..."
                    className="w-full bg-white border border-slate-200 rounded-3xl py-4 px-6 text-sm font-bold focus:border-[#00ff88] focus:ring-4 focus:ring-[#00ff88]/5 outline-none transition-all placeholder:text-slate-300 resize-none"
                  ></textarea>
                </div>

                <div className="md:col-span-2 pt-4">
                  <div className="space-y-3 mb-8">
                    <label className="flex items-start space-x-3 cursor-pointer group">
                      <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-[#00ff88] focus:ring-[#00ff88]" />
                      <span className="text-[10px] text-slate-400 font-medium leading-relaxed">
                        Wyrażam zgodę na przetwarzanie danych przez Elomoto Sp. z o.o. zgodnie z <a href="#" className="text-slate-900 underline font-black">Polityką Prywatności</a>.
                      </span>
                    </label>
                  </div>
                  
                  <button className="w-full sm:w-auto bg-[#00ff88] text-white font-black py-5 px-16 rounded-2xl text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#00ff88]/20 hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95">
                    Wyślij zapytanie
                  </button>
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
                    <div className="mt-4 inline-flex items-center space-x-2 bg-slate-900 text-[#00ff88] px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 bg-[#00ff88] rounded-full animate-pulse"></span>
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
