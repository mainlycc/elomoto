
import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: "Gdzie możecie zainstalować ładowarki?",
    answer: "Praktycznie wszędzie — od prywatnych miejsc postojowych po ogólnodostępne lokalizacje."
  },
  {
    question: "Jak wygląda proces uruchomienia stacji ładowania?",
    answer: "Zajmujemy się wszystkim za Ciebie. Od analizy lokalizacji i projektu, przez formalności i uzyskanie niezbędnych zgód, aż po montaż, odbiory, uruchomienie i obsługę infrastruktury."
  },
  {
    question: "Kiedy Elomoto może sfinansować inwestycję?",
    answer: "Wszystko zależy od potencjału lokalizacji. Skontaktuj się z nami — przeanalizujemy projekt i wspólnie znajdziemy najlepszy model współpracy."
  },
  {
    question: "Mam już ładowarkę — czy możecie ją przejąć w zarządzanie?",
    answer: "Tak. Możemy kompleksowo zarządzać istniejącą infrastrukturą — zapewniając jej ciągłe działanie, serwis, monitoring oraz rozliczenia użytkowników."
  },
  {
    question: "Ile trwa instalacja stacji ładowania?",
    answer: "Czas realizacji zależy od lokalizacji i warunków technicznych. W optymalnym scenariuszu sam montaż może zająć nawet kilka godzin (2-3h), jednak cały proces inwestycyjny obejmuje również przygotowania, formalności oraz odbiory."
  },
  {
    question: "Czy stacje są przystosowane do pracy na zewnątrz?",
    answer: "Tak. Korzystamy wyłącznie z certyfikowanych urządzeń AC i DC, przystosowanych do pracy w wymagających warunkach atmosferycznych. Jesteśmy oficjalnym dystrybutorem sprawdzonych, europejskich producentów infrastruktury ładowania."
  },
  {
    question: "Czy trzeba się rejestrować, żeby skorzystać z ładowarki?",
    answer: "Nie. Możesz skorzystać z ładowania bez rejestracji — oferujemy wygodne płatności jednorazowe, bez konieczności zakładania konta."
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#8ab925] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Baza wiedzy</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">
            PYTANIA I <span className="text-[#8ab925]">ODPOWIEDZI</span>
          </h2>
          <p className="mt-4 text-slate-500 font-medium">
            Wszystko, co warto wiedzieć o infrastrukturze ładowania z Elomoto.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
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
                  {item.question}
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
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            Nie znalazłeś odpowiedzi? <a href="#contact" className="text-[#8ab925] hover:underline">Zadaj nam pytanie bezpośrednio.</a>
          </p>
        </div>
      </div>
    </section>
  );
};
