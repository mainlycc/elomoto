
import React, { useState } from 'react';
import { SERVICES, BLOG_POSTS } from '../constants';
import { saveImage, clearImages, getImage } from '../utils/db';

export const SettingsPage: React.FC = () => {
  const [status, setStatus] = useState<string>('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        saveImage(key, base64String);
        setStatus(`Zapisano obraz: ${key}`);
        setTimeout(() => setStatus(''), 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetAll = () => {
    if (confirm('Czy na pewno chcesz przywrócić wszystkie domyślne zdjęcia?')) {
      clearImages();
      window.location.reload();
    }
  };

  const renderUploadBox = (label: string, id: string) => (
    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest">{label}</h3>
        <span className="text-[10px] text-gray-500">Klucz: {id}</span>
      </div>
      <input 
        type="file" 
        accept="image/*" 
        onChange={(e) => handleFileUpload(e, id)}
        className="block w-full text-xs text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#00ff88] file:text-black hover:file:bg-[#00e67a] cursor-pointer"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a1a14] text-white p-8 md:p-20 font-['Plus_Jakarta_Sans']">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-4xl font-black mb-2 uppercase tracking-tighter">Panel Sterowania <span className="text-[#00ff88]">Obrazami</span></h1>
            <p className="text-gray-400">Wgraj własne zdjęcia, aby zastąpić domyślne grafiki na stronie głównej.</p>
          </div>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl text-xs font-bold transition-all"
          >
            POWRÓT DO STRONY
          </button>
        </div>

        {status && (
          <div className="fixed top-8 right-8 bg-[#00ff88] text-black px-6 py-4 rounded-2xl font-bold shadow-2xl animate-bounce z-50">
            {status}
          </div>
        )}

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-black mb-6 border-b border-white/10 pb-2">GŁÓWNE SEKCJE</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderUploadBox('Zdjęcie Hero (Główne)', 'hero')}
              {renderUploadBox('Zdjęcie "O Nas"', 'about')}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black mb-6 border-b border-white/10 pb-2">USŁUGI (4 ZDJĘCIA)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES.map((s, i) => renderUploadBox(`Usługa: ${s.title}`, `service_${i}`))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black mb-6 border-b border-white/10 pb-2">BLOG (3 ZDJĘCIA)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BLOG_POSTS.map((p, i) => renderUploadBox(`Wpis: ${p.title}`, `blog_${i}`))}
            </div>
          </section>

          <div className="pt-12 flex justify-center">
            <button 
              onClick={resetAll}
              className="border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 rounded-2xl text-xs font-bold transition-all uppercase tracking-widest"
            >
              Resetuj wszystkie zdjęcia do domyślnych
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
