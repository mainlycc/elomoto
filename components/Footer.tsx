
import React from 'react';
import { navigateTo } from '../utils/navigation';
import logoWhite from '../Logo Png white.png';

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
  return (
    <footer className="bg-white pt-12 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">

          {/* Kolumna 0 – Logo + opis + dane firmy */}
          <div className="lg:col-span-1">
            <button
              type="button"
              onClick={() => navigateTo('/')}
              className="bg-transparent border-0 p-0 cursor-pointer mb-4 block"
              aria-label="Przejdź do strony głównej"
            >
              <img
                src={logoWhite}
                alt="elomoto.eco"
                className="h-24 w-auto object-contain"
              />
            </button>
            <p className="text-[11px] text-gray-400 leading-relaxed mb-5">
              Power up your future. Infrastruktura ładowania pojazdów elektrycznych.
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
              Firma
            </h4>
            <ul className="space-y-3 text-xs font-bold">
              <li>
                <FooterLink href="/o-nas">O nas</FooterLink>
              </li>
              <li>
                <FooterLink href="/kariera">Kariera</FooterLink>
              </li>
              <li>
                <FooterLink href="/realizacje">Realizacje</FooterLink>
              </li>
            </ul>
          </div>

          {/* Kolumna 2 – Oferta */}
          <div>
            <h4 className="text-gray-900 font-bold uppercase text-[10px] tracking-widest mb-4">
              Oferta
            </h4>
            <ul className="space-y-3 text-xs font-bold">
              <li>
                <FooterLink href="/oferta/darmowa-ladowarka">Darmowa ładowarka</FooterLink>
              </li>
              <li>
                <FooterLink href="/oferta/montaz">Montaż stacji</FooterLink>
              </li>
              <li>
                <FooterLink href="/oferta/ekspertyzy">Ekspertyzy techniczne</FooterLink>
              </li>
              <li>
                <FooterLink href="/oferta/operator">Usługa operatorska</FooterLink>
              </li>
              <li>
                <FooterLink href="/oferta/serwis">Serwis i utrzymanie</FooterLink>
              </li>
            </ul>
          </div>

          {/* Kolumna 3 – Dla użytkowników */}
          <div>
            <h4 className="text-gray-900 font-bold uppercase text-[10px] tracking-widest mb-4">
              Dla użytkowników
            </h4>
            <ul className="space-y-3 text-xs font-bold">
              <li>
                <FooterLink href="/mapa">Mapa stacji</FooterLink>
              </li>
              <li>
                <FooterLink href="/#app-download">Pobierz aplikację</FooterLink>
              </li>
              <li>
                <FooterLink href="/platnosc-bez-rejestracji">
                  Płatność bez rejestracji
                </FooterLink>
              </li>
            </ul>
          </div>

          {/* Kolumna 4 – Prawne */}
          <div>
            <h4 className="text-gray-900 font-bold uppercase text-[10px] tracking-widest mb-4">
              Prawne
            </h4>
            <ul className="space-y-3 text-xs font-bold">
              <li>
                <FooterLink href="/polityka-prywatnosci">Polityka prywatności</FooterLink>
              </li>
              <li>
                <FooterLink href="/regulamin">Regulamin</FooterLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[9px] font-bold text-gray-300 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} ELOMOTO.ECO. WSZYSTKIE PRAWA ZASTRZEŻONE.</p>
        </div>
      </div>
    </footer>
  );
};
