
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { AppSection } from './components/AppSection';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SettingsPage } from './components/SettingsPage';
import { ChargingWidget } from './components/ChargingWidget';
import { RegulaminPage } from './components/RegulaminPage';
import { PolitykaPrywatnosciPage } from './components/PolitykaPrywatnosciPage';
import { ChargingStationsMapSection } from './components/ChargingStationsMapSection';
import { OfertaPage } from './components/OfertaPage';
import { OfertaDarmowaLadowarkaPage } from './components/OfertaDarmowaLadowarkaPage';
import { OfertaMontazPage } from './components/OfertaMontazPage';
import { OfertaEkspertyzyPage } from './components/OfertaEkspertyzyPage';
import { OfertaOperatorPage } from './components/OfertaOperatorPage';
import { OfertaSerwisPage } from './components/OfertaSerwisPage';
import { DarmowaStacjaPage } from './components/DarmowaStacjaPage';
import { RealizacjePage } from './components/RealizacjePage';
import { RealizacjaDetailPage } from './components/RealizacjaDetailPage';
import { KarieraPage } from './components/KarieraPage';
import { PlatnoscBezRejestracjiPage } from './components/PlatnoscBezRejestracjiPage';
import { REALIZATIONS } from './constants';
import { BlogPage } from './components/BlogPage';
import { MapaStacjiPage } from './components/MapaStacjiPage';

const App: React.FC = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const normalizedPath = (path || '/').replace(/\/+$/, '') || '/';

  // Zawsze przewijaj widok na górę przy zmianie podstrony (ścieżki)
  useEffect(() => {
    const hash = window.location.hash;
    if (normalizedPath === '/' && hash) {
      // Jeśli jesteśmy na stronie głównej z hashem, przewiń do sekcji po załadowaniu
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // W przeciwnym razie przewiń na górę
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [normalizedPath]);

  if (normalizedPath === '/ustaw') {
    return <SettingsPage />;
  }

  if (normalizedPath === '/regulamin') {
    return (
      <div className="min-h-screen relative">
        <Navbar />
        <main className="pt-32 md:pt-36">
          <RegulaminPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (normalizedPath === '/polityka-prywatnosci') {
    return (
      <div className="min-h-screen relative">
        <Navbar />
        <main className="pt-32 md:pt-36">
          <PolitykaPrywatnosciPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (normalizedPath === '/darmowa-stacja') {
    return (
      <div className="min-h-screen relative bg-[#020617]">
        <Navbar />
        <main className="pt-32 md:pt-36">
          <DarmowaStacjaPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (normalizedPath === '/realizacje') {
    return (
      <div className="min-h-screen relative bg-[#020617]">
        <Navbar />
        <main className="pt-32 md:pt-36">
          <RealizacjePage />
        </main>
        <Footer />
      </div>
    );
  }

  if (normalizedPath.startsWith('/realizacje/')) {
    const slug = normalizedPath.split('/')[2] || '';
    const realization = REALIZATIONS.find((r) => r.slug === slug) || null;

    return (
      <div className="min-h-screen relative bg-[#020617]">
        <Navbar />
        <main className="pt-32 md:pt-36">
          <RealizacjaDetailPage realization={realization} />
        </main>
        <Footer />
      </div>
    );
  }

  if (normalizedPath === '/mapa') {
    return (
      <div className="min-h-screen relative bg-[#020617]">
        <Navbar />
        <main className="pt-32 md:pt-36">
          <MapaStacjiPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (normalizedPath === '/o-nas') {
    return (
      <div className="min-h-screen relative bg-[#020617]">
        <Navbar />
        <main className="pt-32 md:pt-36">
          <AboutSection />
        </main>
        <Footer />
      </div>
    );
  }

  if (normalizedPath === '/kariera') {
    return (
      <div className="min-h-screen relative bg-[#020617]">
        <Navbar />
        <main className="pt-32 md:pt-36">
          <KarieraPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (normalizedPath === '/kontakt') {
    return (
      <div className="min-h-screen relative bg-[#020617]">
        <Navbar />
        <main className="pt-32 md:pt-36">
          <ContactSection />
        </main>
        <Footer />
      </div>
    );
  }

  if (normalizedPath === '/platnosc-bez-rejestracji') {
    return (
      <div className="min-h-screen relative bg-[#020617]">
        <Navbar />
        <main className="pt-32 md:pt-36">
          <PlatnoscBezRejestracjiPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (normalizedPath === '/blog') {
    return (
      <div className="min-h-screen relative bg-[#020617]">
        <Navbar />
        <main className="pt-32 md:pt-36">
          <BlogPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (normalizedPath === '/oferta') {
    return (
      <div className="min-h-screen relative">
        <Navbar />
        <main className="pt-32 md:pt-36">
          <OfertaPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (normalizedPath === '/oferta/darmowa-ladowarka') {
    return (
      <div className="min-h-screen relative">
        <Navbar />
        <main className="pt-32 md:pt-36">
          <OfertaDarmowaLadowarkaPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (normalizedPath === '/oferta/montaz') {
    return (
      <div className="min-h-screen relative">
        <Navbar />
        <main className="pt-32 md:pt-36">
          <OfertaMontazPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (normalizedPath === '/oferta/ekspertyzy') {
    return (
      <div className="min-h-screen relative">
        <Navbar />
        <main className="pt-32 md:pt-36">
          <OfertaEkspertyzyPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (normalizedPath === '/oferta/operator') {
    return (
      <div className="min-h-screen relative">
        <Navbar />
        <main className="pt-32 md:pt-36">
          <OfertaOperatorPage />
        </main>
        <Footer />
      </div>
    );
  }

  if (normalizedPath === '/oferta/serwis') {
    return (
      <div className="min-h-screen relative">
        <Navbar />
        <main className="pt-32 md:pt-36">
          <OfertaSerwisPage />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <Navbar />

      {/* Floating Charging Widget - Follows the user */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden xl:block pointer-events-none scale-75 origin-right">
        <div className="pointer-events-auto">
          <ChargingWidget />
        </div>
      </div>

      {/* Na stronie głównej Hero ma już własne odstępy, więc nie dodajemy extra paddingu pod navbar */}
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <ChargingStationsMapSection />
        <AppSection />
        <BlogSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
