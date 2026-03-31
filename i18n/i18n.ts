export type Locale = 'pl' | 'en';

export type TranslationLeaf = string;
export type TranslationNode = { [key: string]: TranslationLeaf | TranslationNode };
export type Translations = Record<Locale, TranslationNode>;

export const DEFAULT_LOCALE: Locale = 'pl';
export const STORAGE_KEY = 'elomoto_locale';

export function detectInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'pl' || stored === 'en') return stored;
  } catch {
    // ignore
  }

  const lang = (navigator.language || '').toLowerCase();
  if (lang.startsWith('en')) return 'en';
  return DEFAULT_LOCALE;
}

function getByPath(obj: TranslationNode, path: string): string | undefined {
  const parts = path.split('.');
  let cur: TranslationLeaf | TranslationNode = obj;
  for (const part of parts) {
    if (typeof cur !== 'object' || cur === null) return undefined;
    cur = (cur as TranslationNode)[part] as TranslationLeaf | TranslationNode;
  }
  return typeof cur === 'string' ? cur : undefined;
}

export function interpolate(template: string, params?: Record<string, string | number>): string {
  if (!params) return template;
  return template.replace(/\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g, (_, key: string) => {
    const val = params[key];
    return val === undefined || val === null ? '' : String(val);
  });
}

export function createT(locale: Locale, translations: Translations) {
  return (key: string, params?: Record<string, string | number>): string => {
    const primary = getByPath(translations[locale], key);
    const fallback = getByPath(translations[DEFAULT_LOCALE], key);
    const value = primary ?? fallback ?? key;
    return interpolate(value, params);
  };
}

export const translations: Translations = {
  pl: {
    common: {
      language: 'Język',
      pl: 'PL',
      en: 'EN',
      loading: 'Ładowanie…',
    },
    nav: {
      about: 'O NAS',
      offer: 'OFERTA',
      process: 'PROCES',
      realizations: 'REALIZACJE',
      chargingMap: 'MAPA STACJI',
      blog: 'BLOG',
      contact: 'KONTAKT',
      payNoRegister: 'PŁAĆ BEZ REJESTRACJI',
      goHomeAria: 'Przejdź do strony głównej',
      offerOverview: 'Przegląd oferty',
      offerFreeCharger: 'Darmowa ładowarka',
      offerInstallation: 'Montaż stacji ładowania',
      offerAudits: 'Ekspertyzy stacji ładowania',
      offerOperator: 'Usługa operatorska stacji ładowania',
      offerService: 'Serwis stacji ładowania AC',
    },
    footer: {
      tagline: 'Power up your future. Infrastruktura ładowania pojazdów elektrycznych.',
      columns: {
        company: 'Firma',
        offer: 'Oferta',
        users: 'Dla użytkowników',
        legal: 'Prawne',
      },
      links: {
        about: 'O nas',
        career: 'Kariera',
        realizations: 'Realizacje',
        freeCharger: 'Darmowa ładowarka',
        installation: 'Montaż stacji ładowania',
        audits: 'Ekspertyzy stacji ładowania',
        operator: 'Usługa operatorska stacji ładowania',
        service: 'Serwis stacji ładowania AC',
        map: 'Mapa stacji',
        appDownload: 'Pobierz aplikację',
        noRegisterPayment: 'Płatność bez rejestracji',
        privacy: 'Polityka prywatności',
        terms: 'Regulamin',
      },
      copyright: '© {{year}} ELOMOTO.ECO. WSZYSTKIE PRAWA ZASTRZEŻONE.',
    },
    services: {
      eyebrow: 'Ecosystem',
      headingLine1: 'Infrastruktura',
      headingLine2: 'jutra',
      intro:
        'Zapewniamy kompletne rozwiązania od dzierżawy gruntów po zaawansowane systemy operatorskie.',
      itemLabel: 'Usługa {{number}}',
      items: {
        parkingLease: {
          title: 'DZIERŻAWA MIEJSC PARKINGOWYCH',
          description: 'Wydzierżaw nam miejsce parkingowe i czerp zyski.',
        },
        installationOps: {
          title: 'MONTAŻ I OBSŁUGA STACJI ŁADOWANIA',
          description: 'Zamów kompleksową usługę montażu stacji ładowania w swoim domu lub firmie.',
        },
        parkingAudit: {
          title: 'EKSPERTYZA MIEJSC POSTOJOWYCH',
          description: 'Sprawdź czy możesz zamontować ładowarkę w swoim budynku.',
        },
        operator: {
          title: 'USŁUGA OPERATORSKA',
          description: 'Zamów usługę operatorską dla swojej stacji ładowania.',
        },
      },
    },
    hero: {
      imageAlt: 'Ładowanie samochodu elektrycznego Elomoto',
      headlineLine1: 'Power up',
      headlineLine2: 'your',
      headlineAccent: 'future',
      description:
        'Tworzymy ekosystem, który łączy nowoczesną architekturę z inteligentną mobilnością. Odkryj najwyższy standard ładowania pojazdów elektrycznych.',
      ctaPrimary: 'Darmowa stacja ładowania',
      ctaSecondary: 'Kup stację ładowania',
    },
    aboutSection: {
      imageAlt: 'EV Station Passion',
      cardTitle: 'Doświadczenie',
      cardSubtitle: 'Lider Innowacji od 2023',
      eyebrow: 'O NAS',
      headingLine1: 'ELEKTROMOBILNOŚĆ',
      headingLine2Accent: 'TO NASZA SPECJALIZACJA',
      p1:
        'Jesteśmy polskim operatorem ogólnopolskiej sieci ładowania pojazdów elektrycznych, tworzonym z myślą o przyszłości miast i codziennej wygodzie ich mieszkańców.',
      p2:
        'Koncentrujemy się na przestrzeniach, które definiują rytm nowoczesnego życia - osiedlach wielorodzinnych oraz kompleksach biurowych. To właśnie tam rozwijamy infrastrukturę, która realnie wspiera transformację w kierunku elektromobilności.',
      p3:
        'Projektujemy i realizujemy inwestycje w sposób kompleksowy - od koncepcji i analiz, przez procesy formalne i przyłączeniowe, aż po budowę, zarządzanie i rozwój sieci. Każdy projekt traktujemy indywidualnie, dbając o najwyższe standardy technologiczne i operacyjne.',
      p4:
        'Tworzymy rozwiązania, które łączą estetykę, wydajność i skalowalność - gotowe na potrzeby dzisiejsze i wyzwania jutra.',
      bullets: {
        b1: 'Własna, ogólnopolska sieć ładowania',
        b2: 'Specjalizacja: osiedla mieszkaniowe i biura',
        b3: 'Szybkie i wydajne ładowarki AC i DC',
        b4: 'Kompleksowa realizacja inwestycji',
      },
      cta: 'Poznaj nas lepiej',
    },
    process: {
      badge: 'Ecosystem Workflow',
      headingLine1: 'Proces Wdrożenia',
      headingLine2Accent: 'Krok Po Kroku',
      cta: 'Poznaj model biznesowy',
      steps: {
        s1: {
          number: '01',
          title: 'ANALIZA',
          description:
            'Badamy zapotrzebowanie i możliwości techniczne Twojej lokalizacji, by dobrać optymalne rozwiązanie.',
        },
        s2: {
          number: '02',
          title: 'PROJEKT',
          description: 'Przygotowujemy kompletną dokumentację projektową i uzyskujemy niezbędne zgody administracyjne.',
        },
        s3: {
          number: '03',
          title: 'MONTAŻ',
          description: 'Nasi certyfikowani specjaliści instalują infrastrukturę, dbając o najwyższe standardy bezpieczeństwa.',
        },
        s4: {
          number: '04',
          title: 'GO LIVE',
          description: 'Uruchamiamy stację, wdrażamy system rozliczeniowy elomoto i zapewniamy pełne wsparcie 24/7.',
        },
      },
    },
    app: {
      headingLine1: 'Lokalizuj, Ładuj, Płać.',
      headingLine2Accent: 'Wszystko w jednej aplikacji.',
      description:
        'Aplikacja mobilna Elomoto sprawia, że ładowanie jest bezproblemowe. Znajdź dostępne stacje w czasie rzeczywistym, zarezerwuj miejsce i zapłać bezpiecznie.',
      downloadOn: 'Pobierz w',
      getFrom: 'Pobierz z',
      available: 'DOSTĘPNA',
      stationName: 'Stacja #402',
      stationMeta: '22kW AC • CCS2',
      startCharging: 'Rozpocznij Ładowanie',
    },
    faq: {
      eyebrow: 'Baza wiedzy',
      headingLine1: 'PYTANIA I',
      headingLine2Accent: 'ODPOWIEDZI',
      intro: 'Wszystko, co warto wiedzieć o infrastrukturze ładowania z Elomoto.',
      notFound: 'Nie znalazłeś odpowiedzi?',
      askDirect: 'Zadaj nam pytanie bezpośrednio.',
      items: {
        i1: {
          q: 'Gdzie możecie zainstalować ładowarki?',
          a: 'Praktycznie wszędzie — od prywatnych miejsc postojowych po ogólnodostępne lokalizacje.',
        },
        i2: {
          q: 'Jak wygląda proces uruchomienia stacji ładowania?',
          a: 'Zajmujemy się wszystkim za Ciebie. Od analizy lokalizacji i projektu, przez formalności i uzyskanie niezbędnych zgód, aż po montaż, odbiory, uruchomienie i obsługę infrastruktury.',
        },
        i3: {
          q: 'Kiedy Elomoto może sfinansować inwestycję?',
          a: 'Wszystko zależy od potencjału lokalizacji. Skontaktuj się z nami — przeanalizujemy projekt i wspólnie znajdziemy najlepszy model współpracy.',
        },
        i4: {
          q: 'Mam już ładowarkę — czy możecie ją przejąć w zarządzanie?',
          a: 'Tak. Możemy kompleksowo zarządzać istniejącą infrastrukturą — zapewniając jej ciągłe działanie, serwis, monitoring oraz rozliczenia użytkowników.',
        },
        i5: {
          q: 'Ile trwa instalacja stacji ładowania?',
          a: 'Czas realizacji zależy od lokalizacji i warunków technicznych. W optymalnym scenariuszu sam montaż może zająć nawet kilka godzin (2–3 h), jednak cały proces inwestycyjny obejmuje również przygotowania, formalności oraz odbiory.',
        },
        i6: {
          q: 'Czy stacje są przystosowane do pracy na zewnątrz?',
          a: 'Tak. Korzystamy wyłącznie z certyfikowanych urządzeń AC i DC, przystosowanych do pracy w wymagających warunkach atmosferycznych. Jesteśmy oficjalnym dystrybutorem sprawdzonych, europejskich producentów infrastruktury ładowania.',
        },
        i7: {
          q: 'Czy trzeba się rejestrować, żeby skorzystać z ładowarki?',
          a: 'Nie. Możesz skorzystać z ładowania bez rejestracji — oferujemy wygodne płatności jednorazowe, bez konieczności zakładania konta.',
        },
      },
    },
    contactPopup: {
      dialogAria: 'Skontaktuj się z nami',
      eyebrow: 'Szybki kontakt',
      titleLine1: 'Porozmawiajmy o Twoim',
      titleAccent: 'projekcie EV',
      body1: 'Zostaw wiadomość — odezwiemy się w ciągu 24 h z odpowiedzią i propozycją kolejnych kroków.',
      body2: 'Najlepiej podaj lokalizację, liczbę miejsc i dostępną moc.',
      close: 'Zamknij',
      cta: 'Skontaktuj się z nami',
      later: 'Nie teraz',
    },
    homeContact: {
      kicker: 'Zacznijmy współpracę',
      title: 'Napisz',
      highlightedTitle: 'do nas',
      description:
        'Przekaż nam podstawowe informacje — wrócimy z odpowiedzią i propozycją kolejnych kroków w ciągu 24 h.',
      messagePlaceholder:
        'Opisz krótko czego potrzebujesz (typ obiektu, lokalizacja, liczba miejsc, dostępna moc)...',
    },
    subpageContact: {
      fields: {
        nameLabel: 'Twoje Imię',
        namePlaceholder: 'np. Jan Kowalski',
        emailLabel: 'E-mail',
        emailPlaceholder: 'twoj@email.pl',
        phoneLabel: 'Telefon (opcjonalnie)',
        phonePlaceholder: 'np. 600 700 800',
        messageLabel: 'Treść wiadomości',
      },
      consentPrefix: 'Wyrażam zgodę na przetwarzanie danych przez Elomoto Sp. z o.o. zgodnie z',
      privacyPolicy: 'Polityką Prywatności',
      submit: 'Wyślij zapytanie',
      submitting: 'Wysyłanie...',
      asideLabel: 'lub skontaktuj się',
      validation: {
        name: 'Podaj poprawne imię i nazwisko.',
        email: 'Podaj poprawny adres e-mail.',
        phone: 'Podaj poprawny numer telefonu.',
        message: 'Wiadomość powinna mieć minimum 10 znaków.',
        consent: 'Aby wysłać formularz, zaakceptuj politykę prywatności.',
      },
      status: {
        success: 'Dziękujemy! Twoja wiadomość została wysłana.',
        genericError: 'Wystąpił błąd podczas wysyłki. Spróbuj ponownie za chwilę.',
        apiNotAvailable:
          'Endpoint /api/contact nie jest dostępny w tym trybie uruchomienia. Użyj środowiska Vercel.',
        httpError: 'Nie udało się wysłać formularza (HTTP {{status}}).',
      },
    },
    contact: {
      kicker: 'Zacznijmy współpracę',
      headingLine1: 'NAPISZ',
      headingLine2Accent: 'DO NAS',
      intro: 'Wybierz interesujący Cię temat i wyślij zapytanie. Nasz zespół odpowie w ciągu 24 h.',
      helpTitle: 'W czym możemy pomóc?',
      topics: {
        subsidies: 'Dotacje',
        install: 'Zakup i montaż',
        lease: 'Dzierżawa parkingu',
        operator: 'Usługa operatorska',
        audit: 'Ekspertyza punktu',
      },
      fields: {
        nameLabel: 'Twoje Imię',
        namePlaceholder: 'np. Jan Kowalski',
        emailLabel: 'E-mail',
        emailPlaceholder: 'twoj@email.pl',
        phoneLabel: 'Telefon (opcjonalnie)',
        phonePlaceholder: 'np. 600 700 800',
        messageLabel: 'Treść wiadomości',
        messagePlaceholder: 'Opisz krótko swoje potrzeby...',
      },
      consent:
        'Wyrażam zgodę na przetwarzanie danych przez Elomoto Sp. z o.o. zgodnie z {{link}}.',
      privacyPolicy: 'Polityką Prywatności',
      submit: 'Wyślij zapytanie',
      submitting: 'Wysyłanie...',
      status: {
        success: 'Dziękujemy! Twoja wiadomość została wysłana.',
        genericError: 'Wystąpił błąd podczas wysyłki. Spróbuj ponownie za chwilę.',
        apiNotAvailable:
          'Endpoint /api/contact nie jest dostępny w tym trybie uruchomienia. Użyj środowiska Vercel.',
        httpError: 'Nie udało się wysłać formularza (HTTP {{status}}).',
      },
      validation: {
        name: 'Podaj poprawne imię i nazwisko.',
        email: 'Podaj poprawny adres e-mail.',
        phone: 'Podaj poprawny numer telefonu.',
        message: 'Wiadomość powinna mieć minimum 10 znaków.',
        consent: 'Aby wysłać formularz, zaakceptuj politykę prywatności.',
      },
      quick: {
        email: 'E-mail',
        phone: 'Telefon',
      },
      company: {
        registrationTitle: 'Rejestracja spółki',
        hqTitle: 'Siedziba',
        insurance: 'Ubezpieczenie OC 2 mln PLN',
      },
    },
    chargingMap: {
      eyebrow: 'MAPA STACJI',
      headingLine1: 'Twoja infrastruktura',
      headingLine2: 'na wyciągnięcie ręki',
      intro:
        'Poniżej widzisz wybrane lokalizacje, w których infrastruktura ładowania realnie wspiera codzienny ruch – od biurowców po obiekty hotelowe i parkingi miejskie.',
      cardEyebrow: 'PŁATNOŚĆ BEZ REJESTRACJI',
      cardBody:
        'Na naszych stacjach możesz zapłacić kartą lub BLIK-iem bez zakładania konta. Skanujesz kod, wybierasz moc ładowania i od razu startujesz z sesją.',
      cardCta: 'Zapłać bez rejestracji',
      mapTitle: 'Mapa stacji ładowania',
      mapHeader: 'Mapa stacji ładowania',
      mapViewLabel: 'Widok sieci stacji',
    },
    realizations: {
      eyebrow: 'Nasze realizacje',
      heading: 'Infrastruktura EV',
      headingAccent: 'w realnych lokalizacjach',
      intro:
        'Pokazujemy wybrane wdrożenia z Warszawy i Poznania - osiedla mieszkaniowe oraz lokalizacje biurowo-usługowe, w których ładowanie pojazdów elektrycznych działa na co dzień.',
      loading: 'Ładowanie realizacji...',
      error: 'Nie udało się załadować realizacji.',
      itemEyebrow: 'realizacja {{number}}',
      itemFallbackIntro:
        'Kompleksowe wdrożenie infrastruktury ładowania z myślą o codziennym komforcie użytkowników.',
      seeAll: 'Zobacz wszystkie realizacje',
    },
    blog: {
      eyebrow: 'BLOG & WIADOMOŚCI',
      heading: 'CO NOWEGO W ŚWIECIE EV?',
      seeAll: 'Zobacz wszystkie wpisy',
      loading: 'Ładowanie wpisów…',
      errorTitle: 'Nie udało się załadować bloga.',
      empty: 'Brak opublikowanych wpisów.',
      corsHint:
        'Sprawdź ustawienia CORS w Sanity (sanity.io/manage) i dodaj origin aplikacji, np. http://localhost:3000 oraz http://127.0.0.1:3000.',
      readMore: 'Czytaj więcej',
    },
  },
  en: {
    common: {
      language: 'Language',
      pl: 'PL',
      en: 'EN',
      loading: 'Loading…',
    },
    nav: {
      about: 'ABOUT',
      offer: 'OFFER',
      process: 'PROCESS',
      realizations: 'PROJECTS',
      chargingMap: 'CHARGING MAP',
      blog: 'BLOG',
      contact: 'CONTACT',
      payNoRegister: 'PAY WITHOUT REGISTRATION',
      goHomeAria: 'Go to homepage',
      offerOverview: 'Offer overview',
      offerFreeCharger: 'Free charger',
      offerInstallation: 'Charging station installation',
      offerAudits: 'Charging audits & expertise',
      offerOperator: 'Charging station operator service',
      offerService: 'AC charging station service',
    },
    footer: {
      tagline: 'Power up your future. EV charging infrastructure.',
      columns: {
        company: 'Company',
        offer: 'Offer',
        users: 'For users',
        legal: 'Legal',
      },
      links: {
        about: 'About',
        career: 'Careers',
        realizations: 'Projects',
        freeCharger: 'Free charger',
        installation: 'Charging station installation',
        audits: 'Charging audits & expertise',
        operator: 'Operator service',
        service: 'AC service',
        map: 'Charging map',
        appDownload: 'Download the app',
        noRegisterPayment: 'Pay without registration',
        privacy: 'Privacy policy',
        terms: 'Terms & conditions',
      },
      copyright: '© {{year}} ELOMOTO.ECO. ALL RIGHTS RESERVED.',
    },
    services: {
      eyebrow: 'Ecosystem',
      headingLine1: 'Infrastructure',
      headingLine2: 'of tomorrow',
      intro: 'We provide end-to-end solutions — from land leasing to advanced operator systems.',
      itemLabel: 'Service {{number}}',
      items: {
        parkingLease: {
          title: 'PARKING SPACE LEASING',
          description: 'Lease us a parking space and earn revenue.',
        },
        installationOps: {
          title: 'CHARGING STATION INSTALLATION & OPERATIONS',
          description: 'Order a complete charging station installation service for your home or business.',
        },
        parkingAudit: {
          title: 'PARKING SPACE FEASIBILITY AUDIT',
          description: 'Check whether you can install a charger in your building.',
        },
        operator: {
          title: 'OPERATOR SERVICE',
          description: 'Order an operator service for your charging station.',
        },
      },
    },
    hero: {
      imageAlt: 'Elomoto EV charging',
      headlineLine1: 'Power up',
      headlineLine2: 'your',
      headlineAccent: 'future',
      description:
        'We build an ecosystem that connects modern architecture with smart mobility. Discover a premium standard for EV charging.',
      ctaPrimary: 'Free charging station',
      ctaSecondary: 'Buy a charging station',
    },
    aboutSection: {
      imageAlt: 'EV charging infrastructure',
      cardTitle: 'Experience',
      cardSubtitle: 'Innovation leader since 2023',
      eyebrow: 'ABOUT',
      headingLine1: 'E-MOBILITY',
      headingLine2Accent: 'IS OUR SPECIALTY',
      p1:
        'We are a Polish operator of a nationwide EV charging network, built for the future of cities and everyday convenience.',
      p2:
        'We focus on places that shape modern life — multi-family housing and office complexes. That’s where we build infrastructure that truly supports the transition to e-mobility.',
      p3:
        'We design and deliver projects end-to-end — from concept and analysis, through permits and grid connection, to construction, operations, and network growth. We treat every project individually, keeping the highest technological and operational standards.',
      p4:
        'We create solutions that combine aesthetics, performance, and scalability — ready for today’s needs and tomorrow’s challenges.',
      bullets: {
        b1: 'Our own nationwide charging network',
        b2: 'Specialization: residential complexes and offices',
        b3: 'Fast, reliable AC and DC chargers',
        b4: 'End-to-end project delivery',
      },
      cta: 'Get to know us',
    },
    process: {
      badge: 'Ecosystem workflow',
      headingLine1: 'Implementation process',
      headingLine2Accent: 'Step by step',
      cta: 'Explore the business model',
      steps: {
        s1: {
          number: '01',
          title: 'ANALYSIS',
          description: 'We assess demand and technical feasibility to select the optimal solution for your location.',
        },
        s2: {
          number: '02',
          title: 'DESIGN',
          description: 'We prepare complete design documentation and obtain the required administrative approvals.',
        },
        s3: {
          number: '03',
          title: 'INSTALLATION',
          description: 'Our certified specialists install the infrastructure to the highest safety standards.',
        },
        s4: {
          number: '04',
          title: 'GO LIVE',
          description: 'We launch the station, implement Elomoto billing, and provide full 24/7 support.',
        },
      },
    },
    app: {
      headingLine1: 'Locate. Charge. Pay.',
      headingLine2Accent: 'All in one app.',
      description:
        'The Elomoto mobile app makes charging effortless. Find available stations in real time, reserve a spot, and pay securely.',
      downloadOn: 'Download on',
      getFrom: 'Get it on',
      available: 'AVAILABLE',
      stationName: 'Station #402',
      stationMeta: '22kW AC • CCS2',
      startCharging: 'Start charging',
    },
    faq: {
      eyebrow: 'Knowledge base',
      headingLine1: 'QUESTIONS',
      headingLine2Accent: 'AND ANSWERS',
      intro: 'Everything worth knowing about EV charging infrastructure with Elomoto.',
      notFound: 'Didn’t find an answer?',
      askDirect: 'Ask us directly.',
      items: {
        i1: {
          q: 'Where can you install chargers?',
          a: 'Almost anywhere — from private parking spots to public locations.',
        },
        i2: {
          q: 'What does the charging station launch process look like?',
          a: 'We handle everything for you — from site analysis and design, through paperwork and approvals, to installation, commissioning, launch, and ongoing operations.',
        },
        i3: {
          q: 'When can Elomoto finance the investment?',
          a: 'It depends on the location’s potential. Contact us — we’ll analyze the project and find the best cooperation model together.',
        },
        i4: {
          q: 'I already have a charger — can you take over its management?',
          a: 'Yes. We can fully manage existing infrastructure — ensuring continuous operation, service, monitoring, and user billing.',
        },
        i5: {
          q: 'How long does charging station installation take?',
          a: 'It depends on the location and technical conditions. In the best case the installation itself can take a few hours (2–3h), but the overall process also includes preparation, paperwork, and commissioning.',
        },
        i6: {
          q: 'Are stations suitable for outdoor operation?',
          a: 'Yes. We use certified AC and DC devices designed for demanding weather conditions. We are an official distributor of proven European charging infrastructure manufacturers.',
        },
        i7: {
          q: 'Do I need to register to use a charger?',
          a: 'No. You can charge without registration — we offer convenient one-time payments without creating an account.',
        },
      },
    },
    contactPopup: {
      dialogAria: 'Contact us',
      eyebrow: 'Quick contact',
      titleLine1: 'Let’s talk about your',
      titleAccent: 'EV project',
      body1: 'Leave a message — we’ll get back within 24h with an answer and next steps.',
      body2: 'Ideally include location, number of spots, and available power.',
      close: 'Close',
      cta: 'Contact us',
      later: 'Not now',
    },
    homeContact: {
      kicker: 'Let’s work together',
      title: 'Write',
      highlightedTitle: 'to us',
      description: 'Share the basics — we’ll reply within 24h with an answer and the next steps.',
      messagePlaceholder:
        'Briefly describe what you need (facility type, location, number of spots, available power)...',
    },
    subpageContact: {
      fields: {
        nameLabel: 'Your name',
        namePlaceholder: 'e.g. Jane Doe',
        emailLabel: 'Email',
        emailPlaceholder: 'you@email.com',
        phoneLabel: 'Phone (optional)',
        phonePlaceholder: 'e.g. +48 600 700 800',
        messageLabel: 'Message',
      },
      consentPrefix: 'I consent to data processing by Elomoto Sp. z o.o. in accordance with the',
      privacyPolicy: 'Privacy Policy',
      submit: 'Send inquiry',
      submitting: 'Sending...',
      asideLabel: 'or call us',
      validation: {
        name: 'Please enter a valid name.',
        email: 'Please enter a valid email address.',
        phone: 'Please enter a valid phone number.',
        message: 'Message must be at least 10 characters.',
        consent: 'To submit the form, accept the privacy policy.',
      },
      status: {
        success: 'Thank you! Your message has been sent.',
        genericError: 'An error occurred while sending. Please try again in a moment.',
        apiNotAvailable: 'The /api/contact endpoint is not available in this run mode. Use Vercel.',
        httpError: 'Failed to send the form (HTTP {{status}}).',
      },
    },
    contact: {
      kicker: 'Let’s work together',
      headingLine1: 'WRITE',
      headingLine2Accent: 'TO US',
      intro: 'Choose a topic and send an inquiry. Our team will respond within 24h.',
      helpTitle: 'How can we help?',
      topics: {
        subsidies: 'Subsidies',
        install: 'Purchase & installation',
        lease: 'Parking lease',
        operator: 'Operator service',
        audit: 'Site audit',
      },
      fields: {
        nameLabel: 'Your name',
        namePlaceholder: 'e.g. Jane Doe',
        emailLabel: 'Email',
        emailPlaceholder: 'you@email.com',
        phoneLabel: 'Phone (optional)',
        phonePlaceholder: 'e.g. +48 600 700 800',
        messageLabel: 'Message',
        messagePlaceholder: 'Briefly describe your needs...',
      },
      consent: 'I consent to data processing by Elomoto Sp. z o.o. in accordance with the {{link}}.',
      privacyPolicy: 'Privacy Policy',
      submit: 'Send inquiry',
      submitting: 'Sending...',
      status: {
        success: 'Thank you! Your message has been sent.',
        genericError: 'An error occurred while sending. Please try again in a moment.',
        apiNotAvailable: 'The /api/contact endpoint is not available in this run mode. Use Vercel.',
        httpError: 'Failed to send the form (HTTP {{status}}).',
      },
      validation: {
        name: 'Please enter a valid name.',
        email: 'Please enter a valid email address.',
        phone: 'Please enter a valid phone number.',
        message: 'Message must be at least 10 characters.',
        consent: 'To submit the form, accept the privacy policy.',
      },
      quick: {
        email: 'Email',
        phone: 'Phone',
      },
      company: {
        registrationTitle: 'Company registration',
        hqTitle: 'Headquarters',
        insurance: 'Liability insurance 2M PLN',
      },
    },
    chargingMap: {
      eyebrow: 'CHARGING MAP',
      headingLine1: 'Your infrastructure',
      headingLine2: 'at your fingertips',
      intro:
        'Below you can see selected locations where charging infrastructure supports everyday traffic — from office buildings to hotels and city parking lots.',
      cardEyebrow: 'PAY WITHOUT REGISTRATION',
      cardBody:
        'At our stations you can pay by card or BLIK without creating an account. Scan the code, choose charging power, and start your session right away.',
      cardCta: 'Pay without registration',
      mapTitle: 'Charging stations map',
      mapHeader: 'Charging stations map',
      mapViewLabel: 'Network view',
    },
    realizations: {
      eyebrow: 'Our projects',
      heading: 'EV infrastructure',
      headingAccent: 'in real locations',
      intro:
        'We showcase selected deployments from Warsaw and Poznań — residential complexes and office/service locations where EV charging works every day.',
      loading: 'Loading projects...',
      error: 'Failed to load projects.',
      itemEyebrow: 'project {{number}}',
      itemFallbackIntro:
        'A complete EV charging infrastructure deployment designed for everyday user comfort.',
      seeAll: 'See all projects',
    },
    blog: {
      eyebrow: 'BLOG & NEWS',
      heading: 'WHAT’S NEW IN THE EV WORLD?',
      seeAll: 'See all posts',
      loading: 'Loading posts…',
      errorTitle: 'Failed to load the blog.',
      empty: 'No posts published yet.',
      corsHint:
        'Check CORS settings in Sanity (sanity.io/manage) and add your app origin, e.g. http://localhost:3000 and http://127.0.0.1:3000.',
      readMore: 'Read more',
    },
  },
};

