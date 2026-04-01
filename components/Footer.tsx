
import React from 'react';
import { navigateTo } from '../utils/navigation';
import logoWhite from '../Logo Png white.png';
import { useI18n } from '../i18n/I18nProvider';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  const isInternal = href.startsWith('/');

  if (!isInternal) {
    return (
      <a
        href={href}
        className="text-gray-500 hover:text-[#8ab925] text-xs font-bold transition-colors"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => navigateTo(href)}
      className="text-gray-500 hover:text-[#8ab925] text-xs font-bold transition-colors text-left"
    >
      {children}
    </button>
  );
};

export const Footer: React.FC = () => {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white pt-12 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">

          {/* Kolumna 0 – Logo + opis + dane firmy */}
          <div className="lg:col-span-1 w-[176px] max-w-[176px]">
            <button
              type="button"
              onClick={() => {
                navigateTo('/');
                window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
              }}
              className="bg-transparent border-0 p-0 cursor-pointer mb-4 block"
              aria-label={t('nav.goHomeAria')}
            >
              <img
                src={logoWhite}
                alt="elomoto.eco"
                className="h-16 w-[176px] object-contain"
              />
            </button>
            <p className="text-[11px] text-gray-400 leading-relaxed mb-5">
              {t('footer.tagline')}
            </p>
            <div className="text-[10px] text-gray-400 leading-relaxed font-medium">
              <p className="font-bold text-gray-500 mb-1">ELOMOTO SP. Z O.O.</p>
              <p>NIP: 5223246605</p>
              <p>ul. Czereśniowa 98/117</p>
              <p>02-456 Warszawa</p>
              <p className="mt-2">
                tel. <a href="tel:+48222692022" className="hover:text-[#8ab925]">+48 222 692 022</a>
              </p>
              <p>
                e-mail{' '}
                <a href="mailto:biuro@elomoto.eco" className="hover:text-[#8ab925]">
                  biuro@elomoto.eco
                </a>
              </p>
            </div>
          </div>

          {/* Kolumna 1 – Firma */}
          <div>
            <h4 className="text-gray-900 font-bold uppercase text-[10px] tracking-widest mb-4">
              {t('footer.columns.company')}
            </h4>
            <ul className="space-y-3 text-xs font-bold">
              <li>
                <FooterLink href="/o-nas">{t('footer.links.about')}</FooterLink>
              </li>
              <li>
                <FooterLink href="/kariera">{t('footer.links.career')}</FooterLink>
              </li>
              <li>
                <FooterLink href="/realizacje">{t('footer.links.realizations')}</FooterLink>
              </li>
            </ul>
          </div>

          {/* Kolumna 2 – Oferta */}
          <div>
            <h4 className="text-gray-900 font-bold uppercase text-[10px] tracking-widest mb-4">
              {t('footer.columns.offer')}
            </h4>
            <ul className="space-y-3 text-xs font-bold">
              <li>
                <FooterLink href="/oferta/darmowa-ladowarka">{t('footer.links.freeCharger')}</FooterLink>
              </li>
              <li>
                <FooterLink href="/oferta/montaz">{t('footer.links.installation')}</FooterLink>
              </li>
              <li>
                <FooterLink href="/oferta/ekspertyzy">{t('footer.links.audits')}</FooterLink>
              </li>
              <li>
                <FooterLink href="/oferta/operator">{t('footer.links.operator')}</FooterLink>
              </li>
              <li>
                <FooterLink href="/oferta/serwis">{t('footer.links.service')}</FooterLink>
              </li>
            </ul>
          </div>

          {/* Kolumna 3 – Dla użytkowników */}
          <div>
            <h4 className="text-gray-900 font-bold uppercase text-[10px] tracking-widest mb-4">
              {t('footer.columns.users')}
            </h4>
            <ul className="space-y-3 text-xs font-bold">
              <li>
                <FooterLink href="/mapa">{t('footer.links.map')}</FooterLink>
              </li>
              <li>
                <FooterLink href="/#app-download">{t('footer.links.appDownload')}</FooterLink>
              </li>
              <li>
                <FooterLink href="/platnosc-bez-rejestracji">
                  {t('footer.links.noRegisterPayment')}
                </FooterLink>
              </li>
            </ul>
          </div>

          {/* Kolumna 4 – Prawne */}
          <div>
            <h4 className="text-gray-900 font-bold uppercase text-[10px] tracking-widest mb-4">
              {t('footer.columns.legal')}
            </h4>
            <ul className="space-y-3 text-xs font-bold">
              <li>
                <FooterLink href="/polityka-prywatnosci">{t('footer.links.privacy')}</FooterLink>
              </li>
              <li>
                <FooterLink href="/regulamin">{t('footer.links.terms')}</FooterLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">
            {t('footer.copyright', { year })}
          </p>

          <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2">
            <span className="text-[10px] md:text-xs font-extrabold text-gray-600 uppercase tracking-[0.2em]">
              Made by{' '}
            </span>
            <a
              href="https://www.mainly.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-[10px] md:text-xs font-extrabold uppercase tracking-[0.2em] text-gray-900 hover:text-[#8ab925] transition-colors"
            >
              Mainly
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
