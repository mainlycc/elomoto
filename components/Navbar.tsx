
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { navigateTo } from '../utils/navigation';
import logoWhite from '../Logo Png white.png';
import { useI18n } from '../i18n/I18nProvider';

const ofertaSubLinks = [
  { labelKey: 'nav.offerOverview', href: '/oferta' },
  { labelKey: 'nav.offerFreeCharger', href: '/oferta/darmowa-ladowarka' },
  { labelKey: 'nav.offerInstallation', href: '/oferta/montaz' },
  { labelKey: 'nav.offerAudits', href: '/oferta/ekspertyzy' },
  { labelKey: 'nav.offerOperator', href: '/oferta/operator' },
  { labelKey: 'nav.offerService', href: '/oferta/serwis' },
] as const;

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOfertaOpenMobile, setIsOfertaOpenMobile] = useState(false);
  const [isOfertaOpenDesktop, setIsOfertaOpenDesktop] = useState(false);
  const { locale, setLocale, t } = useI18n();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (href: string) => {
    if (href.startsWith('/')) {
      navigateTo(href);
    } else if (href.startsWith('#')) {
      // sekcje na stronie głównej
      const currentPath = window.location.pathname;
      if (currentPath !== '/') {
        // Jeśli jesteśmy na innej podstronie, przejdź na stronę główną z hashem
        navigateTo('/' + href);
      } else {
        // Jeśli już jesteśmy na stronie głównej, przewiń do sekcji
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-8'}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div
          className={`glass rounded-[32px] transition-all duration-500 pr-4 sm:pr-6 lg:pr-8 ${scrolled ? 'shadow-2xl border-white/10' : 'border-transparent'}`}
        >
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button
              type="button"
              onClick={() => {
                navigateTo('/');
                window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
              }}
              className="flex-shrink-0 flex items-center group cursor-pointer bg-transparent border-0 p-0"
              aria-label={t('nav.goHomeAria')}
            >
              <img
                src={logoWhite}
                alt="elomoto.eco"
                className="h-16 w-[176px] object-contain brightness-[1.15]"
              />
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-1 items-center">
              {NAV_LINKS.map((link) => {
                const label = link.labelKey ? t(link.labelKey) : link.label || '';
                if (link.labelKey === 'nav.offer' || link.label === 'OFERTA') {
                  return (
                    <div key={link.labelKey || link.label} className="relative">
                      <button
                        type="button"
                        onClick={() => setIsOfertaOpenDesktop((prev) => !prev)}
                        className="px-4 py-2 text-xs font-extrabold text-gray-400 hover:text-[#8ab925] transition-all uppercase tracking-wider inline-flex items-center space-x-1"
                      >
                        <span>{label}</span>
                        <span className="text-[10px]">{isOfertaOpenDesktop ? '▴' : '▾'}</span>
                      </button>
                      <div
                        className={`absolute left-0 mt-2 w-56 rounded-2xl bg-black/80 backdrop-blur-lg border border-white/10 shadow-xl transition-all duration-200 ${
                          isOfertaOpenDesktop
                            ? 'opacity-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 translate-y-2 pointer-events-none'
                        }`}
                      >
                        <div className="py-2">
                          {ofertaSubLinks.map((sub) => (
                            <button
                              key={sub.href}
                              type="button"
                              onClick={() => {
                                handleNavigate(sub.href);
                                setIsOfertaOpenDesktop(false);
                              }}
                              className="w-full text-left px-4 py-2 text-xs font-semibold text-gray-200 hover:text-[#8ab925] hover:bg-white/5 transition-colors"
                            >
                              {t(sub.labelKey)}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={link.labelKey || link.label}
                    type="button"
                    onClick={() => {
                      setIsOfertaOpenDesktop(false);
                      handleNavigate(link.href);
                    }}
                    className="px-4 py-2 text-xs font-extrabold text-gray-400 hover:text-[#8ab925] transition-all uppercase tracking-wider"
                  >
                    {label}
                  </button>
                );
              })}
              <div className="h-6 w-[1px] bg-white/10 mx-3"></div>

              {/* Language switch */}
              <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
                <button
                  type="button"
                  onClick={() => setLocale('pl')}
                  className={`px-2.5 py-2 text-[11px] font-black tracking-wider rounded-lg transition-colors ${
                    locale === 'pl' ? 'bg-white text-black' : 'text-gray-300 hover:text-white'
                  }`}
                  aria-label={t('common.pl')}
                >
                  {t('common.pl')}
                </button>
                <button
                  type="button"
                  onClick={() => setLocale('en')}
                  className={`px-2.5 py-2 text-[11px] font-black tracking-wider rounded-lg transition-colors ${
                    locale === 'en' ? 'bg-white text-black' : 'text-gray-300 hover:text-white'
                  }`}
                  aria-label={t('common.en')}
                >
                  {t('common.en')}
                </button>
              </div>

              <button
                onClick={() => navigateTo('https://zaplac.elomoto.eco/')}
                className={`bg-white text-black text-[11px] font-extrabold py-3 rounded-xl hover:bg-[#8ab925] hover:shadow-[0_0_20px_rgba(138,185,37,0.3)] transition-all tracking-wider shadow-md active:scale-95 whitespace-nowrap ${
                  locale === 'en' ? 'px-4' : 'px-6'
                }`}
              >
                {t('nav.payNoRegister')}
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 focus:outline-none">
                <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-[#8ab925] mb-1.5 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-x-4 top-24 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <div className="glass rounded-[32px] p-8 shadow-2xl border border-[#8ab925]/20 max-h-[70vh] overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {/* Language switch (mobile) */}
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="text-xs font-extrabold text-gray-200 uppercase tracking-wider">
                {t('common.language')}
              </div>
              <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
                <button
                  type="button"
                  onClick={() => setLocale('pl')}
                  className={`px-3 py-2 text-xs font-black tracking-wider rounded-lg transition-colors ${
                    locale === 'pl' ? 'bg-white text-black' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {t('common.pl')}
                </button>
                <button
                  type="button"
                  onClick={() => setLocale('en')}
                  className={`px-3 py-2 text-xs font-black tracking-wider rounded-lg transition-colors ${
                    locale === 'en' ? 'bg-white text-black' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {t('common.en')}
                </button>
              </div>
            </div>

            {NAV_LINKS.map((link) => {
              const label = link.labelKey ? t(link.labelKey) : link.label || '';
              if (link.labelKey === 'nav.offer' || link.label === 'OFERTA') {
                return (
                  <div key={link.labelKey || link.label} className="border-b border-white/10 pb-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIsOfertaOpenMobile((prev) => !prev);
                      }}
                      className="w-full flex items-center justify-between text-sm font-extrabold text-white hover:text-[#8ab925] py-1 tracking-wider uppercase"
                    >
                      <span>{label}</span>
                      <span className="text-xs">{isOfertaOpenMobile ? '▴' : '▾'}</span>
                    </button>
                    <div className={`mt-2 space-y-2 pl-3 text-xs text-gray-200 ${isOfertaOpenMobile ? 'block' : 'hidden'}`}>
                      {ofertaSubLinks.map((sub) => (
                        <button
                          key={sub.href}
                          type="button"
                          onClick={() => {
                            handleNavigate(sub.href);
                            setIsOpen(false);
                            setIsOfertaOpenMobile(false);
                          }}
                          className="w-full text-left py-1 hover:text-[#8ab925] transition-colors"
                        >
                          {t(sub.labelKey)}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={link.labelKey || link.label}
                  type="button"
                  onClick={() => {
                    handleNavigate(link.href);
                    setIsOpen(false);
                  }}
                  className="text-sm font-extrabold text-white hover:text-[#8ab925] py-1 tracking-wider uppercase border-b border-white/5 text-left"
                >
                  {label}
                </button>
              );
            })}
            <button
              onClick={() => {
                navigateTo('https://zaplac.elomoto.eco/');
                setIsOpen(false);
              }}
              className="w-full bg-[#8ab925] text-black font-extrabold py-4 rounded-2xl tracking-wider text-sm uppercase shadow-lg active:scale-95"
            >
              {t('nav.payNoRegister')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
