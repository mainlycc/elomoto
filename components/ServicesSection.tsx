
import React from 'react';
import { SERVICES } from '../constants';
import { getImage } from '../utils/db';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#0a1a14] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#8ab925]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8ab925]/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-xl">
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-[2px] w-12 bg-[#8ab925]"></div>
              <p className="text-[#8ab925] font-black uppercase tracking-[0.3em] text-xs">Ecosystem</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
              Infrastruktura <br /> jutra
            </h2>
          </div>
          <p className="text-gray-400 text-sm mt-6 md:mt-0 md:text-right max-w-xs font-medium">
            Zapewniamy kompletne rozwiązania od dzierżawy gruntów po zaawansowane systemy operatorskie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white/5 rounded-[32px] p-2 transition-all duration-500 hover:bg-white/10 hover:shadow-2xl flex flex-col h-full border border-white/5 hover:border-[#8ab925]/20"
            >
              <div className="relative h-64 overflow-hidden rounded-[26px]">
                <img 
                  src={getImage(`service_${index}`, service.image)} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-2 mb-4">
                   <div className="w-2 h-2 rounded-full bg-[#8ab925]"></div>
                   <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Usługa 0{index + 1}</span>
                </div>
                <h3 className="text-lg font-black text-white mb-4 uppercase leading-tight group-hover:text-[#8ab925] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed font-medium">
                  {service.description}
                </p>
                
                <a 
                  href={service.link}
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#8ab925] border border-white/10 group-hover:bg-[#8ab925] group-hover:text-black transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
