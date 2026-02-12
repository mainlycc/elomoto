
import React from 'react';

export const AppSection: React.FC = () => {
  return (
    <section id="app-download" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative overflow-hidden bg-[#0a1a14] rounded-[40px] p-8 md:p-16 border border-white/5 shadow-2xl">
        {/* Subtle radial glow in the corner */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00ff88]/10 blur-[120px] rounded-full -mr-64 -mt-64"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Lokalizuj, Ładuj, Płać. <br />
              <span className="text-[#00ff88]">Wszystko w jednej aplikacji.</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-md font-medium">
              Aplikacja mobilna Elomoto sprawia, że ładowanie jest bezproblemowe. Znajdź dostępne stacje w czasie rzeczywistym, zarezerwuj miejsce i zapłać bezpiecznie.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {/* App Store Button */}
              <a href="#" className="bg-white rounded-2xl py-4 px-8 flex items-center space-x-4 hover:scale-105 transition-transform duration-300 shadow-xl active:scale-95">
                <svg className="w-8 h-8 text-black" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-19-81.6-19-42.6 0-101 32.8-116.8 96-18.8 74.3 23.4 162.8 54 213 20.6 33.1 48 64 80 64s44-22 81.6-22c37 0 45.4 22 81.6 22 34 0 60.2-27.8 80.6-59.5 22.8-33.8 32-66.6 32.4-68.2-.8-.4-63.3-24.2-63.5-96.6zM281.3 75.3c15.7-19.1 26.2-45.6 23.3-72-23 1-51.1 15.4-67.6 34.7-14.8 17.1-27.8 44.2-24.2 69.8 25.6 2.1 52.8-13.4 68.5-32.5z"/>
                </svg>
                <div className="text-black text-left">
                  <div className="text-[10px] font-extrabold leading-none uppercase opacity-60 tracking-wider">Pobierz w</div>
                  <div className="text-lg font-black leading-none">App Store</div>
                </div>
              </a>
              
              {/* Play Store Button */}
              <a href="#" className="bg-white rounded-2xl py-4 px-8 flex items-center space-x-4 hover:scale-105 transition-transform duration-300 shadow-xl active:scale-95">
                <svg className="w-8 h-8 text-black" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div className="text-black text-left">
                  <div className="text-[10px] font-extrabold leading-none uppercase opacity-60 tracking-wider">Pobierz z</div>
                  <div className="text-lg font-black leading-none">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center items-center">
            <div className="relative w-[280px] h-[560px] bg-[#4a6b66] rounded-[48px] border-[8px] border-[#1a2e29] shadow-2xl overflow-hidden flex flex-col">
              {/* Internal Screen Content */}
              <div className="relative flex-grow bg-[#4a6b66] p-4 flex flex-col">
                {/* Status Bar Fake */}
                <div className="flex justify-between items-center mb-6">
                  <div className="text-[10px] font-bold text-white opacity-80">14:12</div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-2 bg-white/40 rounded-sm"></div>
                    <div className="w-3 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>

                {/* Map Interface Mockup */}
                <div className="absolute inset-0 z-0">
                  <div className="w-full h-full bg-[#5d7d78] opacity-50 relative overflow-hidden">
                    {/* Fake map lines */}
                    <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/20 -rotate-12"></div>
                    <div className="absolute top-2/3 left-0 w-full h-[1px] bg-white/20 rotate-45"></div>
                    <div className="absolute top-0 left-1/3 h-full w-[1px] bg-white/20"></div>
                    
                    {/* Current Location Marker */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
                  </div>
                </div>

                {/* App UI Card Overlay */}
                <div className="mt-auto relative z-10 bg-white rounded-3xl p-5 shadow-2xl mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#00ff88]"></div>
                    <div className="text-[10px] font-bold text-[#00ff88] uppercase tracking-widest">DOSTĘPNA</div>
                  </div>
                  <h4 className="text-xl font-black text-gray-900 mb-1">Stacja #402</h4>
                  <p className="text-xs text-gray-400 font-bold mb-6">22kW AC • CCS2</p>
                  
                  <button className="w-full bg-[#00ff88] text-[#0a1a14] font-extrabold py-4 rounded-2xl text-xs uppercase tracking-wider hover:bg-[#00e67a] transition-all transform active:scale-95 shadow-lg shadow-[#00ff88]/20">
                    Rozpocznij Ładowanie
                  </button>
                </div>
              </div>
              
              {/* Home Indicator */}
              <div className="h-1.5 w-24 bg-white/20 rounded-full mx-auto mb-2 mt-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
