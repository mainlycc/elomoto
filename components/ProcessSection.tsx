
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'ANALIZA',
    description: 'Badamy zapotrzebowanie i możliwości techniczne Twojej lokalizacji, by dobrać optymalne rozwiązanie.'
  },
  {
    number: '02',
    title: 'PROJEKT',
    description: 'Przygotowujemy kompletną dokumentację projektową i uzyskujemy niezbędne zgody administracyjne.'
  },
  {
    number: '03',
    title: 'MONTAŻ',
    description: 'Nasi certyfikowani specjaliści instalują infrastrukturę, dbając o najwyższe standardy bezpieczeństwa.'
  },
  {
    number: '04',
    title: 'GO LIVE',
    description: 'Uruchamiamy stację, wdrażamy system rozliczeniowy elomoto i zapewniamy pełne wsparcie 24/7.'
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-[#0a1a14] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-32">
          <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#8ab925]"></span>
            <p className="text-[#8ab925] font-extrabold uppercase tracking-widest text-[10px]">Ecosystem Workflow</p>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
            Proces Wdrożenia <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8ab925] to-[#22c55e]">Krok Po Kroku</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Backbone (Desktop) - Adjusted for perfect centering with icons */}
          <div className="absolute top-8 left-0 w-full h-[1px] bg-white/10 hidden lg:block">
            <div className="absolute top-0 left-0 h-full w-2/3 bg-gradient-to-r from-[#8ab925] to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group flex flex-col items-center text-center">
                
                {/* Step Indicator (Circle) */}
                <div className="relative z-10 mb-12">
                  <div className="w-16 h-16 rounded-full bg-[#0a1a14] border-2 border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-[#8ab925] group-hover:shadow-[0_0_30px_rgba(138,185,37,0.4)] relative overflow-hidden group-hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8ab925]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-xl font-black text-white group-hover:text-[#8ab925] transition-colors relative z-10">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Vertical line for mobile - strictly centered */}
                  {index !== steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-[#8ab925]/50 to-transparent lg:hidden"></div>
                  )}
                </div>

                {/* Content Card - Symmetrical Design */}
                <div className="bg-white/5 border border-white/5 rounded-[40px] p-8 transition-all duration-500 hover:bg-white/[0.08] hover:border-white/10 hover:-translate-y-3 group-hover:shadow-2xl relative w-full">
                  {/* Small top accent line */}
                  <div className="w-12 h-[2px] bg-[#8ab925] mx-auto mb-6 opacity-40 group-hover:opacity-100 group-hover:w-20 transition-all duration-500"></div>
                  
                  <h3 className="text-lg font-black text-white uppercase tracking-widest mb-4 group-hover:text-[#8ab925] transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed font-medium group-hover:text-gray-300 transition-colors">
                    {step.description}
                  </p>
                  
                  {/* Background mesh glow */}
                  <div className="absolute inset-0 bg-radial-gradient from-[#8ab925]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px] -z-10"></div>
                </div>

                {/* Desktop Connection Pulse (Centered on the line between icons) */}
                {index !== steps.length - 1 && (
                   <div className="absolute top-8 right-0 translate-x-1/2 w-4 h-4 hidden lg:flex items-center justify-center z-20">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#8ab925] transition-colors"></div>
                   </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA for Section */}
        <div className="mt-28 text-center">
          <button className="inline-flex items-center space-x-6 bg-white/5 border border-white/10 hover:border-[#8ab925]/40 px-10 py-5 rounded-2xl transition-all group backdrop-blur-sm transform hover:-translate-y-1 active:scale-95">
            <span className="text-white font-extrabold text-xs uppercase tracking-wider">Poznaj model biznesowy</span>
            <div className="w-10 h-10 rounded-full bg-[#8ab925]/10 flex items-center justify-center group-hover:bg-[#8ab925] transition-all">
              <svg className="w-5 h-5 text-[#8ab925] group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
