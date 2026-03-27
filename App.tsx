
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { AboutPage } from './components/AboutPage';
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
import { RealizationsSection } from './components/RealizationsSection';
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
import { BlogPage } from './components/BlogPage';
import { BlogPostPage } from './components/BlogPostPage';
import { MapaStacjiPage } from './components/MapaStacjiPage';
import { HomeContactSection } from './components/HomeContactSection';

type PageShellProps = {
  children: React.ReactNode;
  wrapperClassName?: string;
  mainClassName?: string;
  mainProps?: React.HTMLAttributes<HTMLElement>;
};

const PageShell: React.FC<PageShellProps> = ({
  children,
  wrapperClassName = 'min-h-screen relative',
  mainClassName = 'pt-32 md:pt-36',
  mainProps,
}) => {
  return (
    <div className={wrapperClassName}>
      <Navbar />

      {/* Floating Charging Widget - Follows the user */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden xl:block pointer-events-none scale-75 origin-right">
        <div className="pointer-events-auto">
          <ChargingWidget />
        </div>
      </div>

      <main className={mainClassName} {...mainProps}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

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
    return (
      <PageShell>
        <SettingsPage />
      </PageShell>
    );
  }

  if (normalizedPath === '/regulamin') {
    return (
      <PageShell>
        <RegulaminPage />
      </PageShell>
    );
  }

  if (normalizedPath === '/polityka-prywatnosci') {
    return (
      <PageShell>
        <PolitykaPrywatnosciPage />
      </PageShell>
    );
  }

  if (normalizedPath === '/darmowa-stacja') {
    return (
      <PageShell wrapperClassName="min-h-screen relative bg-[#020617]">
        <DarmowaStacjaPage />
      </PageShell>
    );
  }

  if (normalizedPath === '/realizacje') {
    return (
      <PageShell wrapperClassName="min-h-screen relative bg-[#020617]">
        <RealizacjePage />
      </PageShell>
    );
  }

  if (normalizedPath.startsWith('/realizacje/')) {
    const slug = normalizedPath.split('/')[2] || '';

    return (
      <PageShell wrapperClassName="min-h-screen relative bg-[#020617]">
        <RealizacjaDetailPage slug={slug} />
      </PageShell>
    );
  }

  if (normalizedPath === '/mapa') {
    return (
      <PageShell wrapperClassName="min-h-screen relative bg-[#020617]">
        <MapaStacjiPage />
      </PageShell>
    );
  }

  if (normalizedPath === '/o-nas') {
    return (
      <PageShell wrapperClassName="min-h-screen relative bg-[#020617]">
        <AboutPage />
      </PageShell>
    );
  }

  if (normalizedPath === '/kariera') {
    return (
      <PageShell wrapperClassName="min-h-screen relative bg-[#020617]">
        <KarieraPage />
      </PageShell>
    );
  }

  if (normalizedPath === '/kontakt') {
    return (
      <PageShell wrapperClassName="min-h-screen relative bg-[#020617]">
        <ContactSection />
      </PageShell>
    );
  }

  if (normalizedPath === '/platnosc-bez-rejestracji') {
    return (
      <PageShell wrapperClassName="min-h-screen relative bg-[#020617]">
        <PlatnoscBezRejestracjiPage />
      </PageShell>
    );
  }

  if (normalizedPath.startsWith('/blog/')) {
    const blogSlug = normalizedPath.slice('/blog/'.length).split('/')[0] || '';

    return (
      <PageShell
        wrapperClassName="min-h-screen relative bg-[#020617]"
        mainClassName="pt-32 md:pt-36 bg-white"
      >
        <BlogPostPage slug={blogSlug} />
      </PageShell>
    );
  }

  if (normalizedPath === '/blog') {
    return (
      <PageShell wrapperClassName="min-h-screen relative bg-[#020617]">
        <BlogPage />
      </PageShell>
    );
  }

  if (normalizedPath === '/oferta') {
    return (
      <PageShell>
        <OfertaPage />
      </PageShell>
    );
  }

  if (normalizedPath === '/oferta/darmowa-ladowarka') {
    return (
      <PageShell>
        <OfertaDarmowaLadowarkaPage />
      </PageShell>
    );
  }

  if (normalizedPath === '/oferta/montaz') {
    return (
      <PageShell>
        <OfertaMontazPage />
      </PageShell>
    );
  }

  if (normalizedPath === '/oferta/ekspertyzy') {
    return (
      <PageShell>
        <OfertaEkspertyzyPage />
      </PageShell>
    );
  }

  if (normalizedPath === '/oferta/operator') {
    return (
      <PageShell>
        <OfertaOperatorPage />
      </PageShell>
    );
  }

  if (normalizedPath === '/oferta/serwis') {
    return (
      <PageShell>
        <OfertaSerwisPage />
      </PageShell>
    );
  }

  return (
    <PageShell mainClassName="">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ChargingStationsMapSection />
      <AppSection />
      <BlogSection />
      <FaqSection />
      <RealizationsSection />
      <HomeContactSection />
    </PageShell>
  );
};

export default App;
