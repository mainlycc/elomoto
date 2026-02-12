
import React, { useState, useEffect } from 'react';

export const ChargingWidget: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      // Obliczamy całkowitą wysokość do przewinięcia (wysokość dokumentu minus wysokość okna)
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      // Zabezpieczenie przed dzieleniem przez zero, jeśli strona jest krótsza niż okno
      if (maxScroll <= 0) {
        setScrollProgress(1);
        return;
      }

      const progress = Math.min(Math.max(currentScroll / maxScroll, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    // Dodatkowo nasłuchujemy na zmianę rozmiaru okna, bo wysokość scrolla może się zmienić
    window.addEventListener('resize', handleScroll);
    
    // Początkowe wywołanie
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const radius = 110;
  const size = 280;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - scrollProgress * circumference;

  const capacity = 77.0;
  const currentEnergy = (scrollProgress * capacity).toFixed(1);
  const percentage = (scrollProgress * 100).toFixed(0);

  return (
    <div className="relative flex items-center justify-center group select-none transition-transform duration-500 hover:scale-110" style={{ width: size, height: size }}>
      {/* Dynamic Glow */}
      <div 
        className="absolute inset-10 bg-[#00E676]/10 blur-[80px] rounded-full -z-10 transition-opacity duration-700" 
        style={{ opacity: scrollProgress + 0.2 }}
      ></div>
      
      <svg 
        width={size} 
        height={size} 
        viewBox={`0 0 ${size} ${size}`} 
        className="absolute inset-0 transform -rotate-90 z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
      >
        {/* Tło paska */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="32"
          fill="transparent"
        />

        {/* Pasek postępu */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#00E676"
          strokeWidth="32"
          strokeDasharray={circumference}
          style={{ 
            strokeDashoffset: offset,
            transition: 'stroke-dashoffset 0.1s linear', // Szybsza reakcja dla płynności przy przewijaniu
          }}
          strokeLinecap="round"
          fill="transparent"
          className="drop-shadow-[0_0_15px_rgba(0,230,118,0.6)]"
        />
      </svg>

      <div className="relative z-20 w-[184px] h-[184px] bg-white rounded-full flex flex-col items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.25)] border-4 border-white">
        <div className="absolute inset-0 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] rounded-full"></div>
        
        <div className="flex items-baseline mb-1">
          <span className="text-6xl font-black text-[#0f172a] tracking-tighter tabular-nums">
            {percentage}
          </span>
          <span className="text-2xl font-bold text-[#0f172a] ml-1 opacity-70">%</span>
        </div>

        <div className="flex items-center space-x-2 px-4 py-1.5 bg-gray-50 rounded-full border border-gray-100 scale-90">
          <svg className={`w-4 h-4 text-[#00E676] ${scrollProgress > 0 && scrollProgress < 1 ? 'animate-pulse' : ''}`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <div className="text-[11px] font-black tracking-tight flex items-center">
            <span className="text-[#0f172a] tabular-nums">{currentEnergy} KWH</span>
            <span className="text-gray-300 mx-1">/</span>
            <span className="text-gray-300 tabular-nums">{capacity} KWH</span>
          </div>
        </div>
      </div>
    </div>
  );
};
