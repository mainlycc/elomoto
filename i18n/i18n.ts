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
    offerPages: {
      common: {
        eyebrow: 'Oferta',
      },
      freeCharger: {
        forWhom: {
          title: 'Dla kogo jest ten model?',
          intro:
            'Model darmowej ładowarki powstał z myślą o lokalizacjach, które chcą uruchomić usługę ładowania bez ponoszenia kosztów inwestycyjnych. Najczęściej korzystają z niego:',
          items: {
            i1: 'Wspólnoty i spółdzielnie mieszkaniowe',
            i2: 'Zarządcy nieruchomości',
            i3: 'Deweloperzy',
            i4: 'Firmy zarządzające nieruchomościami',
            i5: 'Biurowce i parki biznesowe',
            i6: 'Obiekty hotelowe i usługowe',
          },
        },
        hero: {
          titlePrefix: 'Darmowa',
          titleAccent: 'ładowarka',
          subtitle: 'Stacja ładowania finansowana przez elomoto.eco',
          p1:
            'Darmowa ładowarka to model współpracy, w którym elomoto.eco inwestuje własny kapitał w budowę infrastruktury ładowania, a partner udostępnia lokalizację pod montaż stacji.',
          p2:
            'Finansujemy zakup, instalację oraz uruchomienie urządzeń, tworząc gotowy punkt ładowania bez konieczności angażowania środków po stronie właściciela nieruchomości.',
          p3:
            'To jeden z najszybszych sposobów na wdrożenie elektromobilności w danej lokalizacji — szczególnie tam, gdzie zapotrzebowanie dopiero się buduje.',
        },
        invests: {
          titlePrefix: 'Co inwestuje',
          titleAccent: 'elomoto.eco',
          intro: 'W ramach modelu inwestycyjnego bierzemy na siebie pełny zakres uruchomienia infrastruktury:',
          items: {
            i1: 'Finansowanie zakupu stacji ładowania',
            i2: 'Dobór technologii i mocy urządzeń',
            i3: 'Organizację i realizację montażu',
            i4: 'Odbiory techniczne i uruchomienie',
            i5: 'Konfigurację systemu operatorskiego',
            i6: 'Wdrożenie płatności i rozliczeń',
            i7: 'Monitoring i nadzór nad działaniem stacji',
            i8: 'Wsparcie serwisowe i techniczne',
          },
          note: 'Partner udostępnia lokalizację — my budujemy i operujemy infrastrukturą.',
        },
        process: {
          title: 'Jak wygląda proces inwestycji?',
          steps: {
            s1: {
              title: 'Zgłoszenie lokalizacji',
              desc: 'Przekazywane są podstawowe informacje o obiekcie, parkingu i infrastrukturze elektrycznej.',
            },
            s2: {
              title: 'Analiza techniczno-biznesowa',
              desc: 'Weryfikujemy możliwości przyłączeniowe, potencjał użytkowania oraz zasadność inwestycji.',
            },
            s3: {
              title: 'Ustalenie modelu współpracy',
              desc: 'Określamy zasady operacyjne, dostępność stacji i sposób funkcjonowania infrastruktury.',
            },
            s4: {
              title: 'Montaż i uruchomienie',
              desc: 'Realizujemy instalację, konfigurację systemu i oddajemy stację do użytkowania.',
            },
          },
        },
        contact: {
          kicker: 'Sprawdź swoją lokalizację',
          title: 'Darmowa ładowarka',
          highlightedTitle: 'w Twojej lokalizacji',
          description:
            'Jeżeli zarządzasz osiedlem lub parkingiem i chcesz uruchomić ładowarkę finansowaną przez operatora, przeanalizujemy potencjał inwestycyjny lokalizacji.',
          messagePlaceholder: 'Opisz krótko swoją lokalizację, typ parkingu i liczbę miejsc...',
        },
      },
      audits: {
        hero: {
          titlePrefix: 'Ekspertyzy stacji',
          titleAccent: 'ładowania',
          subtitle: 'Sprawdź możliwości montażu infrastruktury ładowania',
        },
        intro: {
          p1:
            'Wykonujemy ekspertyzy stacji ładowania oraz audyty techniczne infrastruktury elektrycznej, które pozwalają określić, czy i w jaki sposób można bezpiecznie zamontować ładowarki w danej lokalizacji.',
          p2:
            'Analizujemy warunki techniczne budynku, a wyniki przekładamy na czytelne rekomendacje inwestycyjne — zarówno dla zarządców nieruchomości, wspólnot mieszkaniowych, firm planujących rozwój infrastruktury ładowania oraz dla chcących ładowarkę na własny użytek.',
        },
        scope: {
          titlePrefix: 'Co obejmuje audyt',
          titleAccent: 'stacji ładowania?',
          intro: 'Ekspertyza techniczna infrastruktury ładowania obejmuje szczegółową analizę:',
          items: {
            i1: 'Istniejącej instalacji elektrycznej',
            i2: 'Mocy przyłączeniowej obiektu',
            i3: 'Aktualnych i szczytowych obciążeń energetycznych',
            i4: 'Rozdzielni i pionów zasilających',
            i5: 'Możliwości prowadzenia tras kablowych',
            i6: 'Ograniczeń konstrukcyjnych budynku',
            i7: 'Przepisów przeciwpożarowych',
            i8: 'Wymagań operatora sieci dystrybucyjnej',
          },
          outcomesIntro: 'Na tej podstawie określamy:',
          outcomes: {
            o1: 'Maksymalną liczbę punktów ładowania',
            o2: 'Możliwe moce ładowarek',
            o3: 'Konieczność rozbudowy przyłącza',
            o4: 'Zasadność wdrożenia zarządzania mocą (DLM)',
            o5: 'Optymalny model etapowania inwestycji',
          },
        },
        deliverables: {
          titlePrefix: 'Ekspertyza ładowarek –',
          titleAccent: 'co otrzymujesz?',
          intro: 'Wynik audytu przekazujemy w uporządkowanej, praktycznej formie:',
          items: {
            i1: 'Podsumowanie decyzyjne dla zarządu / wspólnoty / inwestora',
            i2: 'Część techniczna dla elektryka, projektanta lub wykonawcy',
            i3: 'Schemat możliwej infrastruktury',
            i4: 'Rekomendacje technologiczne',
            i5: 'Warianty dalszych kroków',
            i6: 'Orientacyjne scenariusze kosztowe',
          },
          note: 'Dokument może stanowić podstawę do podjęcia decyzji inwestycyjnej lub rozpoczęcia projektu wykonawczego.',
        },
        when: {
          titlePrefix: 'Kiedy warto wykonać',
          titleAccent: 'ekspertyzę stacji ładowania?',
          cards: {
            c1: {
              title: 'Początek rozmów o ładowarkach',
              body:
                'Gdy mieszkańcy, najemcy lub pracownicy zgłaszają potrzebę montażu ładowarek, ale nie ma wiedzy o realnych możliwościach technicznych budynku lub garażu.',
            },
            c2: {
              title: 'Wymogi formalne i dokumentacyjne',
              intro: 'Gdy potrzebny jest dokument do rozmów z:',
              list: {
                i1: 'dostawcą energii',
                i2: 'operatorem sieci dystrybucyjnej',
                i3: 'instytucją finansującą inwestycję',
                i4: 'ubezpieczycielem lub rzeczoznawcą ppoż.',
              },
            },
            c3: {
              title: 'Planowanie rozwoju infrastruktury',
              body:
                'Gdy celem jest budowa docelowej infrastruktury ładowania, ale realizowanej etapowo — bez ryzyka kosztownych modernizacji w przyszłości. Ekspertyza pozwala zaplanować skalowanie sieci ładowarek wraz ze wzrostem liczby pojazdów elektrycznych.',
            },
          },
        },
        who: {
          titlePrefix: 'Ekspertyzy dla osiedli,',
          titleAccent: 'firm i parkingów',
          intro: 'Realizujemy audyty infrastruktury ładowania m.in. dla:',
          items: {
            i1: 'Osiedli mieszkaniowych',
            i2: 'Wspólnot i spółdzielni',
            i3: 'Garaży podziemnych',
            i4: 'Biurowców i parków biznesowych',
            i5: 'Hoteli i obiektów komercyjnych',
            i6: 'Parkingów flotowych i logistycznych',
          },
        },
        contact: {
          kicker: 'Złóż zapytanie o ekspertyzę',
          title: 'Potrzebujesz ekspertyzy',
          highlightedTitle: 'stacji ładowania?',
          description:
            'Opisz krótko typ budynku, liczbę lokali lub użytkowników oraz to, ilu kierowców potencjalnie będzie korzystać z ładowania.',
          messagePlaceholder: 'Opisz typ budynku, liczbę lokali lub użytkowników oraz skalę potrzeb...',
        },
      },
      installation: {
        hero: {
          titlePrefix: 'Montaż stacji',
          titleAccent: 'ładowania',
          subtitle: 'Kompleksowa realizacja infrastruktury ładowania',
          p1:
            'Realizujemy kompleksowe usługi projektowania i montażu stacji ładowania pojazdów elektrycznych — zarówno dla klientów prywatnych, jak i firm budujących infrastrukturę na potrzeby swojej działalności.',
          p2:
            'Wdrażamy rozwiązania w budynkach mieszkalnych, obiektach komercyjnych oraz przestrzeniach publicznych, zapewniając pełne wsparcie techniczne od koncepcji po uruchomienie ładowania.',
          p3:
            'Dbamy o bezpieczeństwo, zgodność z normami i przejrzysty proces realizacji — od audytu, przez prace wykonawcze, aż po testy końcowe.',
        },
        fromAudit: {
          titlePrefix: 'Od audytu do',
          titleAccent: 'pierwszego ładowania',
          intro:
            'Proces rozpoczynamy od analizy istniejącej instalacji elektrycznej oraz potrzeb użytkowników. Na tej podstawie dobieramy:',
          items: {
            i1: 'Moc urządzeń',
            i2: 'Sposób zarządzania energią',
            i3: 'Przyszłą skalowalność infrastruktury',
          },
          note1: 'Dbamy o to, aby inwestycja była bezpieczna, zgodna z normami i ekonomicznie uzasadniona.',
          note2:
            'Wspieramy również w uzgodnieniach formalnych — z zarządcą budynku, wspólnotą mieszkaniową lub dostawcą energii — tłumacząc kwestie techniczne w przystępny sposób.',
        },
        scope: {
          titlePrefix: 'Co obejmuje montaż',
          titleAccent: 'stacji ładowania',
          intro: 'Zakres realizacji obejmuje pełny proces wykonawczy:',
          items: {
            i1: 'Opracowanie koncepcji rozmieszczenia punktów ładowania',
            i2: 'Dobór stacji, mocy i akcesoriów montażowych',
            i3: 'Projekt techniczny infrastruktury',
            i4: 'Prace elektryczne i budowlane',
            i5: 'Prowadzenie tras kablowych',
            i6: 'Montaż zabezpieczeń',
            i7: 'Konfigurację systemu zarządzania mocą (DLM)',
            i8: 'Opcjonalną integrację z systemem operatorskim',
            i9: 'Testy końcowe i uruchomienie',
            i10: 'Przekazanie dokumentacji powykonawczej',
          },
        },
        scenarios: {
          titlePrefix: 'Najczęstsze scenariusze',
          titleAccent: 'montażu',
          cards: {
            c1: {
              title: 'Garaże podziemne',
              intro: 'Montaż punktów ładowania przy miejscach postojowych z uwzględnieniem:',
              list: {
                i1: 'istniejących pionów zasilających',
                i2: 'bilansu mocy budynku',
                i3: 'wymogów przeciwpożarowych',
                i4: 'możliwości przyszłej rozbudowy infrastruktury',
              },
            },
            c2: {
              title: 'Parkingi naziemne',
              intro:
                'Instalacja wolnostojących stacji lub ładowarek ściennych przystosowanych do pracy w warunkach zewnętrznych:',
              list: {
                i1: 'odporność na warunki atmosferyczne',
                i2: 'zabezpieczenia antykolizyjne',
                i3: 'przygotowanie pod rozbudowę sieci',
              },
            },
            c3: {
              title: 'Infrastruktura w firmach',
              intro: 'Budowa stacji ładowania na terenie działalności obejmuje m.in.:',
              list: {
                i1: 'punkty dla floty służbowej',
                i2: 'ładowarki dla pracowników',
                i3: 'stacje dla klientów i gości',
                i4: 'możliwość rozliczania sesji prywatnych i firmowych',
                i5: 'integrację z systemem operatorskim i raportowaniem',
              },
            },
            c4: {
              title: 'Montaż prywatnej stacji ładowania',
              intro: 'Realizujemy również instalacje indywidualne:',
              list: {
                i1: 'przy domach jednorodzinnych',
                i2: 'w garażach prywatnych',
                i3: 'na miejscach postojowych w halach garażowych',
              },
              note: 'Dobieramy urządzenia do mocy przyłączeniowej budynku oraz stylu użytkowania pojazdu.',
            },
          },
        },
        contact: {
          kicker: 'Wycena montażu',
          title: 'Potrzebujesz wyceny',
          highlightedTitle: 'montażu stacji?',
          description:
            'Przekaż nam podstawowe informacje: liczbę miejsc postojowych, typ obiektu, dostępną moc przyłączeniową oraz planowany sposób korzystania z ładowarek.',
          messagePlaceholder: 'Opisz typ obiektu, liczbę miejsc postojowych, dostępną moc przyłączeniową...',
        },
      },
      operator: {
        hero: {
          titlePrefix: 'Usługa',
          titleAccent: 'operatorska',
          titleSuffix: 'stacji ładowania',
          subtitle: 'Kompleksowe zarządzanie infrastrukturą EV',
          p1:
            'Świadczymy pełną usługę operatorską stacji ładowania pojazdów elektrycznych, obejmującą zarządzanie infrastrukturą, rozliczenia użytkowników, obsługę płatności oraz wsparcie techniczne.',
          p2:
            'Pracujemy w oparciu o własny system operatorski elomoto.eco oraz dedykowaną aplikację do obsługi ładowania, dzięki czemu otrzymujesz gotowe, skalowalne środowisko do zarządzania siecią stacji.',
          p3:
            'Zapewniamy ciągłość działania, monitoring i pomoc użytkownikom — tak, aby infrastruktura działała stabilnie i była wygodna dla kierowców.',
        },
        fullService: {
          titlePrefix: 'Co oznacza pełna',
          titleAccent: 'obsługa operatorska',
          intro:
            'Jako operator stacji ładowania odpowiadamy za bieżące funkcjonowanie infrastruktury — zarówno od strony technicznej, jak i użytkowej. Zapewniamy:',
          items: {
            i1: 'Widoczność stacji w systemie i aplikacji, także u innych operatorów',
            i2: 'Prawidłowe naliczanie opłat za ładowanie',
            i3: 'Obsługę płatności jednorazowych i kont użytkowników',
            i4: 'Wsparcie kierowców korzystających z infrastruktury',
          },
          note:
            'Właściciel lokalizacji określa jedynie ogólne zasady funkcjonowania (np. dostępność, politykę cenową, grupy uprzywilejowane), a obsługę operacyjną przejmuje elomoto.eco.',
        },
        system: {
          titlePrefix: 'System operatorski',
          titleMid: 'i aplikacja',
          titleAccent: 'elomoto.eco',
          intro:
            'Nasza usługa opiera się na autorskim oprogramowaniu do zarządzania stacjami ładowania, które umożliwia:',
          items: {
            i1: 'Zdalne zarządzanie infrastrukturą',
            i2: 'Konfigurację taryf i dostępów',
            i3: 'Monitoring sesji ładowania w czasie rzeczywistym',
            i4: 'Obsługę płatności online i RFID',
            i5: 'Płatności bez rejestracji (QR)',
            i6: 'Raportowanie wykorzystania stacji',
            i7: 'Integrację z systemami flotowymi',
          },
          note: 'Aplikacja użytkownika pozwala kierowcom lokalizować stacje, rozpoczynać ładowanie i kontrolować koszty.',
        },
        scope: {
          titlePrefix: 'Zakres usługi',
          titleAccent: 'operatorskiej',
          intro: 'Kompleksowa obsługa obejmuje:',
          items: {
            i1: 'Konfigurację cenników ładowania',
            i2: 'Zarządzanie dostępami do stacji',
            i3: 'Obsługę płatności i rozliczeń sesji',
            i4: 'Fakturowanie użytkowników',
            i5: 'Wsparcie użytkowników (helpdesk)',
            i6: 'Monitoring pracy urządzeń 24/7',
            i7: 'Powiadomienia o nieprawidłowościach',
            i8: 'Okresowe raporty wykorzystania infrastruktury',
            i9: 'Rekomendacje rozwoju sieci ładowania',
          },
        },
        billingModels: {
          titlePrefix: 'Modele',
          titleAccent: 'rozliczeń',
          titleSuffix: 'ładowania',
          intro: 'System operatorski umożliwia elastyczne konfigurowanie zasad korzystania ze stacji.',
          cards: {
            c1: {
              title: 'Dla mieszkańców / pracowników',
              list: {
                i1: 'preferencyjne stawki',
                i2: 'rozliczenia miesięczne',
                i3: 'indywidualne konta użytkowników',
                i4: 'identyfikacja RFID lub aplikacją',
              },
            },
            c2: {
              title: 'Dla gości i klientów',
              list: {
                i1: 'płatności jednorazowe (ad hoc)',
                i2: 'uruchamianie sesji przez aplikację lub kod QR',
                i3: 'szybkie płatności bez rejestracji',
              },
            },
            c3: {
              title: 'Modele mieszane',
              list: {
                i1: 'darmowe ładowanie dla mieszkańców',
                i2: 'tańsze taryfy dla pracowników',
                i3: 'komercyjne stawki dla użytkowników zewnętrznych',
              },
            },
          },
        },
        noBackoffice: {
          titlePrefix: 'Operator stacji ładowania',
          titleAccent: 'bez własnego zaplecza',
          body:
            'Usługa operatorska elomoto.eco pozwala udostępniać infrastrukturę ładowania bez konieczności budowania własnego zespołu technicznego, IT czy działu rozliczeń. Przejmujemy obowiązki związane z codziennym działaniem stacji, umożliwiając właścicielowi infrastruktury skupienie się na swojej podstawowej działalności.',
        },
        contact: {
          kicker: 'Porozmawiajmy',
          title: 'System operatorski',
          highlightedTitle: 'dla Twojej sieci',
          description:
            'Jeżeli planujesz uruchomić lub rozwinąć sieć ładowania, system elomoto.eco umożliwia pełne operowanie infrastrukturą od pojedynczych stacji po rozproszone sieci ładowarek.',
          messagePlaceholder: 'Opisz swoją infrastrukturę, liczbę stacji i potrzeby operacyjne...',
        },
      },
      service: {
        hero: {
          titlePrefix: 'Serwis stacji',
          titleAccent: 'ładowania AC',
          subtitle: 'Specjalistyczny serwis i przeglądy infrastruktury AC',
        },
        intro: {
          p1:
            'Zapewniamy profesjonalny serwis stacji ładowania oraz utrzymanie infrastruktury ładowania pojazdów elektrycznych w oparciu o doświadczenie techniczne i eksploatacyjne.',
          p2:
            'Specjalizujemy się wyłącznie w ładowarkach AC (prądu przemiennego). Nie prowadzimy serwisu stacji szybkiego ładowania DC — koncentrujemy się na infrastrukturze najczęściej stosowanej w lokalizacjach prywatnych i półpublicznych.',
        },
        where: {
          intro: 'Serwisujemy stacje AC instalowane m.in. w:',
          items: {
            i1: 'Garażach podziemnych',
            i2: 'Na osiedlach mieszkaniowych',
            i3: 'Parkingach wspólnot i spółdzielni',
            i4: 'Obiektach firmowych',
            i5: 'Hotelach i lokalizacjach usługowych',
          },
        },
        why: {
          titlePrefix: 'Dlaczego serwis stacji ładowania jest',
          titleAccent: 'tak ważny',
          intro:
            'Infrastruktura ładowania pracuje pod stałym obciążeniem elektrycznym, dlatego wymaga regularnych przeglądów technicznych oraz bieżącej kontroli stanu podzespołów. Profesjonalny serwis ładowarek AC zapewnia:',
          items: {
            i1: 'Bezpieczeństwo użytkowników',
            i2: 'Zgodność z normami elektrycznymi',
            i3: 'Ciągłość działania stacji',
            i4: 'Wydłużenie żywotności urządzeń',
            i5: 'Ograniczenie ryzyka awarii',
            i6: 'Utrzymanie pozytywnego wizerunku infrastruktury',
          },
        },
        scope: {
          titlePrefix: 'Zakres serwisu',
          titleAccent: 'ładowarek AC',
          intro: 'Usługa obejmuje fizyczne utrzymanie techniczne stacji ładowania:',
          items: {
            i1: 'Diagnostykę usterek na miejscu',
            i2: 'Reakcję na zgłoszenia administratorów i użytkowników',
            i3: 'Przeglądy techniczne stacji',
            i4: 'Testy bezpieczeństwa elektrycznego',
            i5: 'Kontrolę zabezpieczeń',
            i6: 'Sprawdzenie okablowania i połączeń',
            i7: 'Weryfikację elementów montażowych',
            i8: 'Naprawy urządzeń',
            i9: 'Wymiany zużytych lub uszkodzonych podzespołów',
          },
        },
        inspections: {
          titlePrefix: 'Przeglądy stacji',
          titleAccent: 'ładowania AC',
          intro: 'Wykonujemy okresowe przeglądy infrastruktury zgodnie z:',
          items: {
            i1: 'Zaleceniami producentów',
            i2: 'Normami instalacji elektrycznych',
            i3: 'Wymogami ubezpieczycieli',
            i4: 'Procedurami bezpieczeństwa obiektów',
          },
          note:
            'Regularne przeglądy są szczególnie istotne w garażach podziemnych oraz lokalizacjach o intensywnym wykorzystaniu stacji.',
        },
        brands: {
          titlePrefix: 'Marki ładowarek AC, które',
          titleAccent: 'serwisujemy',
          intro: 'Specjalizujemy się w serwisie wybranych producentów infrastruktury AC.',
        },
        contact: {
          kicker: 'Serwis i utrzymanie',
          title: 'Potrzebujesz serwisu',
          highlightedTitle: 'stacji ładowania?',
          description:
            'Napisz do nas, a przedstawimy zakres obsługi serwisowej, warunki współpracy i możliwości utrzymania Twojej infrastruktury ładowania AC.',
          messagePlaceholder: 'Opisz typ stacji, liczbę urządzeń, lokalizację i potrzeby serwisowe...',
        },
      },
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
      titleLine1: 'Porozmawiajmy o Twojej',
      titleAccent: 'dzierżawie miejsca parkingowego',
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
        phoneLabel: 'Telefon',
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
        phoneLabel: 'Telefon',
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
        'Sprawdź ustawienia CORS w Sanity (sanity.io/manage) i dodaj origin aplikacji, np. https://elomoto.eco, https://www.elomoto.eco, http://localhost:3000 oraz http://127.0.0.1:3000.',
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
    offerPages: {
      common: {
        eyebrow: 'Offer',
      },
      freeCharger: {
        forWhom: {
          title: 'Who is this model for?',
          intro:
            'The free-charger model was created for locations that want to launch charging without upfront investment costs. It’s most often chosen by:',
          items: {
            i1: 'Housing communities and cooperatives',
            i2: 'Property managers',
            i3: 'Developers',
            i4: 'Property management companies',
            i5: 'Office buildings and business parks',
            i6: 'Hotels and service facilities',
          },
        },
        hero: {
          titlePrefix: 'Free',
          titleAccent: 'charger',
          subtitle: 'A charging station financed by elomoto.eco',
          p1:
            'A free charger is a cooperation model in which elomoto.eco invests its own capital to build charging infrastructure, while the partner provides the site for installation.',
          p2:
            'We finance the purchase, installation, and commissioning of the equipment, creating a ready-to-use charging point without requiring funds from the property owner.',
          p3:
            'It’s one of the fastest ways to introduce e-mobility at a given location — especially where demand is only just emerging.',
        },
        invests: {
          titlePrefix: 'What does',
          titleAccent: 'elomoto.eco',
          intro: 'Under the investment model, we take full responsibility for launching the infrastructure:',
          items: {
            i1: 'Financing the purchase of the charging station',
            i2: 'Selecting technology and power level',
            i3: 'Organizing and executing the installation',
            i4: 'Technical acceptance tests and commissioning',
            i5: 'Operator system configuration',
            i6: 'Payments and billing implementation',
            i7: 'Monitoring and supervision of station operation',
            i8: 'Service and technical support',
          },
          note: 'You provide the location — we build and operate the infrastructure.',
        },
        process: {
          title: 'What does the investment process look like?',
          steps: {
            s1: {
              title: 'Site submission',
              desc: 'You provide basic information about the facility, parking, and electrical infrastructure.',
            },
            s2: {
              title: 'Technical & business analysis',
              desc: 'We verify grid connection options, usage potential, and investment viability.',
            },
            s3: {
              title: 'Cooperation model setup',
              desc: 'We define operating rules, station availability, and how the infrastructure will work.',
            },
            s4: {
              title: 'Installation and go-live',
              desc: 'We deliver the installation, configure the system, and launch the station for use.',
            },
          },
        },
        contact: {
          kicker: 'Check your location',
          title: 'Free charger',
          highlightedTitle: 'at your site',
          description:
            'If you manage a residential complex or parking area and want an operator-financed charger, we’ll assess the investment potential of your location.',
          messagePlaceholder: 'Briefly describe your location, parking type, and number of spaces...',
        },
      },
      audits: {
        hero: {
          titlePrefix: 'Charging station',
          titleAccent: 'audits & expertise',
          subtitle: 'Check feasibility for installing charging infrastructure',
        },
        intro: {
          p1:
            'We provide charging station expertise and technical audits of electrical infrastructure to determine whether — and how — chargers can be installed safely at a given location.',
          p2:
            'We analyze the building’s technical conditions and translate the results into clear investment recommendations — for property managers, housing communities, companies planning charging infrastructure, and individuals who want a private charger.',
        },
        scope: {
          titlePrefix: 'What does a',
          titleAccent: 'charging audit include?',
          intro: 'A technical expertise audit includes a detailed analysis of:',
          items: {
            i1: 'Existing electrical installation',
            i2: 'Connection capacity of the facility',
            i3: 'Current and peak energy loads',
            i4: 'Switchboards and supply risers',
            i5: 'Cable routing feasibility',
            i6: 'Structural constraints of the building',
            i7: 'Fire safety requirements',
            i8: 'Distribution network operator requirements',
          },
          outcomesIntro: 'Based on that, we determine:',
          outcomes: {
            o1: 'Maximum number of charging points',
            o2: 'Possible charger power levels',
            o3: 'Whether a connection upgrade is required',
            o4: 'Whether dynamic load management (DLM) is justified',
            o5: 'An optimal phased rollout model',
          },
        },
        deliverables: {
          titlePrefix: 'Charger expertise —',
          titleAccent: 'what do you get?',
          intro: 'We deliver the audit result in a structured, practical format:',
          items: {
            i1: 'Decision summary for management / community / investor',
            i2: 'Technical section for an electrician, designer, or contractor',
            i3: 'A schematic of the feasible infrastructure',
            i4: 'Technology recommendations',
            i5: 'Next-step variants',
            i6: 'Indicative cost scenarios',
          },
          note: 'The document can serve as a basis for an investment decision or for starting a detailed execution design.',
        },
        when: {
          titlePrefix: 'When is it worth doing a',
          titleAccent: 'charging station audit?',
          cards: {
            c1: {
              title: 'Early discussions about chargers',
              body:
                'When residents, tenants, or employees request chargers but the real technical feasibility of the building or garage is unknown.',
            },
            c2: {
              title: 'Formal and documentation requirements',
              intro: 'When you need a document for discussions with:',
              list: {
                i1: 'the energy supplier',
                i2: 'the distribution network operator',
                i3: 'a financing institution',
                i4: 'an insurer or fire-safety expert',
              },
            },
            c3: {
              title: 'Planning infrastructure growth',
              body:
                'When the goal is a target charging infrastructure built in phases — without risking costly future upgrades. The audit helps plan scaling as EV adoption grows.',
            },
          },
        },
        who: {
          titlePrefix: 'Audits for residential sites,',
          titleAccent: 'companies and parking lots',
          intro: 'We deliver charging infrastructure audits, among others, for:',
          items: {
            i1: 'Residential complexes',
            i2: 'Housing communities and cooperatives',
            i3: 'Underground garages',
            i4: 'Office buildings and business parks',
            i5: 'Hotels and commercial facilities',
            i6: 'Fleet and logistics parking areas',
          },
        },
        contact: {
          kicker: 'Request an audit',
          title: 'Need a charging',
          highlightedTitle: 'station audit?',
          description:
            'Briefly describe the building type, number of units or users, and how many drivers may potentially use charging.',
          messagePlaceholder: 'Describe the building type, number of units/users, and the scale of needs...',
        },
      },
      installation: {
        hero: {
          titlePrefix: 'Charging station',
          titleAccent: 'installation',
          subtitle: 'End-to-end delivery of charging infrastructure',
          p1:
            'We provide comprehensive charging station design and installation services — for both private clients and companies building infrastructure for their operations.',
          p2:
            'We deploy solutions in residential buildings, commercial facilities, and public spaces, providing full technical support from concept to first charge.',
          p3:
            'We focus on safety, standards compliance, and a transparent delivery process — from audit and execution works to final tests.',
        },
        fromAudit: {
          titlePrefix: 'From audit to',
          titleAccent: 'the first charge',
          intro:
            'We start by analyzing your existing electrical installation and user needs. Based on that, we select:',
          items: {
            i1: 'Device power',
            i2: 'Energy management approach',
            i3: 'Future scalability of the infrastructure',
          },
          note1: 'We make sure the investment is safe, compliant, and economically justified.',
          note2:
            'We also support formal arrangements — with building management, housing communities, or the energy supplier — explaining technical topics in a clear way.',
        },
        scope: {
          titlePrefix: 'What does the installation of a',
          titleAccent: 'charging station',
          intro: 'The scope covers the full execution process:',
          items: {
            i1: 'Charging point layout concept',
            i2: 'Selection of station, power level, and mounting accessories',
            i3: 'Technical design of the infrastructure',
            i4: 'Electrical and construction works',
            i5: 'Cable route installation',
            i6: 'Protection devices installation',
            i7: 'Dynamic load management (DLM) configuration',
            i8: 'Optional integration with an operator system',
            i9: 'Final testing and commissioning',
            i10: 'Handover of as-built documentation',
          },
        },
        scenarios: {
          titlePrefix: 'Most common',
          titleAccent: 'installation scenarios',
          cards: {
            c1: {
              title: 'Underground garages',
              intro: 'Installation of charging points at parking spaces, considering:',
              list: {
                i1: 'existing supply risers',
                i2: 'the building power balance',
                i3: 'fire-safety requirements',
                i4: 'possibility of future expansion',
              },
            },
            c2: {
              title: 'Outdoor parking lots',
              intro:
                'Installation of freestanding stations or wall-mounted chargers designed for outdoor conditions:',
              list: {
                i1: 'weather resistance',
                i2: 'anti-collision protection',
                i3: 'preparation for network expansion',
              },
            },
            c3: {
              title: 'Company infrastructure',
              intro: 'Charging stations at business premises can include, among others:',
              list: {
                i1: 'points for company fleets',
                i2: 'chargers for employees',
                i3: 'stations for customers and visitors',
                i4: 'billing for private vs business sessions',
                i5: 'integration with operator and reporting systems',
              },
            },
            c4: {
              title: 'Private home installation',
              intro: 'We also deliver individual installations:',
              list: {
                i1: 'at single-family homes',
                i2: 'in private garages',
                i3: 'at parking spaces in shared garages',
              },
              note: 'We select devices based on the facility’s connection capacity and your driving/charging habits.',
            },
          },
        },
        contact: {
          kicker: 'Installation quote',
          title: 'Need a quote',
          highlightedTitle: 'for installation?',
          description:
            'Share the basics: number of parking spaces, facility type, available connection capacity, and the planned way chargers will be used.',
          messagePlaceholder: 'Describe the facility type, number of parking spaces, and available connection capacity...',
        },
      },
      operator: {
        hero: {
          titlePrefix: 'Charging station',
          titleAccent: 'operator',
          titleSuffix: 'service',
          subtitle: 'Comprehensive EV infrastructure management',
          p1:
            'We provide a full operator service for EV charging stations, including infrastructure management, user billing, payment handling, and technical support.',
          p2:
            'We work with our own elomoto.eco operator system and a dedicated charging app, giving you a ready, scalable environment to manage your station network.',
          p3:
            'We ensure continuity, monitoring, and user assistance — so the infrastructure runs reliably and remains convenient for drivers.',
        },
        fullService: {
          titlePrefix: 'What does full',
          titleAccent: 'operator service',
          intro:
            'As a charging station operator, we handle day-to-day infrastructure performance — both technically and from the user perspective. We provide:',
          items: {
            i1: 'Station visibility in the system and app, also across roaming partners',
            i2: 'Correct charging fee calculation',
            i3: 'One-time payments and user account handling',
            i4: 'Support for drivers using the infrastructure',
          },
          note:
            'The site owner only sets high-level rules (e.g., availability, pricing policy, privileged groups), while elomoto.eco takes over day-to-day operations.',
        },
        system: {
          titlePrefix: 'Operator system',
          titleMid: 'and the',
          titleAccent: 'elomoto.eco app',
          intro:
            'Our service is built on proprietary charging station management software that enables:',
          items: {
            i1: 'Remote infrastructure management',
            i2: 'Tariff and access configuration',
            i3: 'Real-time session monitoring',
            i4: 'Online payments and RFID support',
            i5: 'Pay-without-registration (QR) flows',
            i6: 'Station usage reporting',
            i7: 'Integration with fleet systems',
          },
          note: 'The user app lets drivers find stations, start charging, and control costs.',
        },
        scope: {
          titlePrefix: 'Scope of the',
          titleAccent: 'operator service',
          intro: 'The end-to-end service includes:',
          items: {
            i1: 'Charging price list configuration',
            i2: 'Station access management',
            i3: 'Payments and session billing',
            i4: 'User invoicing',
            i5: 'User support (helpdesk)',
            i6: '24/7 device monitoring',
            i7: 'Alerts for irregularities',
            i8: 'Periodic utilization reports',
            i9: 'Recommendations for network growth',
          },
        },
        billingModels: {
          titlePrefix: 'Charging',
          titleAccent: 'billing',
          titleSuffix: 'models',
          intro: 'The operator system enables flexible configuration of station usage rules.',
          cards: {
            c1: {
              title: 'For residents / employees',
              list: {
                i1: 'preferential rates',
                i2: 'monthly settlements',
                i3: 'individual user accounts',
                i4: 'RFID or app identification',
              },
            },
            c2: {
              title: 'For guests and customers',
              list: {
                i1: 'one-time (ad hoc) payments',
                i2: 'session start via the app or QR code',
                i3: 'fast pay-without-registration flows',
              },
            },
            c3: {
              title: 'Mixed models',
              list: {
                i1: 'free charging for residents',
                i2: 'discounted tariffs for employees',
                i3: 'commercial rates for external users',
              },
            },
          },
        },
        noBackoffice: {
          titlePrefix: 'Operator service',
          titleAccent: 'without your own back office',
          body:
            'The elomoto.eco operator service lets you offer charging without building your own technical, IT, or billing teams. We take over day-to-day station responsibilities so the infrastructure owner can focus on core business.',
        },
        contact: {
          kicker: 'Let’s talk',
          title: 'Operator system',
          highlightedTitle: 'for your network',
          description:
            'If you’re planning to launch or expand a charging network, elomoto.eco enables full operations — from a single station to distributed charger networks.',
          messagePlaceholder: 'Describe your infrastructure, number of stations, and operational needs...',
        },
      },
      service: {
        hero: {
          titlePrefix: 'AC charging station',
          titleAccent: 'service',
          subtitle: 'Specialized AC maintenance and inspections',
        },
        intro: {
          p1:
            'We provide professional charging station service and maintenance of EV charging infrastructure based on technical and operational experience.',
          p2:
            'We specialize exclusively in AC chargers (alternating current). We do not service DC fast-charging stations — we focus on infrastructure most commonly used in private and semi-public locations.',
        },
        where: {
          intro: 'We service AC stations installed, among others, in:',
          items: {
            i1: 'Underground garages',
            i2: 'Residential complexes',
            i3: 'Housing community and cooperative parking areas',
            i4: 'Company facilities',
            i5: 'Hotels and service locations',
          },
        },
        why: {
          titlePrefix: 'Why is charging station service',
          titleAccent: 'so important',
          intro:
            'Charging infrastructure operates under continuous electrical load, which is why it requires regular technical inspections and ongoing component checks. Professional AC charger service ensures:',
          items: {
            i1: 'User safety',
            i2: 'Compliance with electrical standards',
            i3: 'Station uptime and continuity',
            i4: 'Extended device lifetime',
            i5: 'Reduced risk of failures',
            i6: 'A positive infrastructure image',
          },
        },
        scope: {
          titlePrefix: 'Scope of',
          titleAccent: 'AC charger service',
          intro: 'The service includes physical technical maintenance of charging stations:',
          items: {
            i1: 'On-site fault diagnostics',
            i2: 'Response to reports from administrators and users',
            i3: 'Technical inspections of stations',
            i4: 'Electrical safety tests',
            i5: 'Protection device checks',
            i6: 'Verification of wiring and connections',
            i7: 'Verification of mounting elements',
            i8: 'Device repairs',
            i9: 'Replacement of worn or damaged components',
          },
        },
        inspections: {
          titlePrefix: 'AC charging station',
          titleAccent: 'inspections',
          intro: 'We perform periodic infrastructure inspections in line with:',
          items: {
            i1: 'Manufacturer recommendations',
            i2: 'Electrical installation standards',
            i3: 'Insurer requirements',
            i4: 'Facility safety procedures',
          },
          note:
            'Regular inspections are especially important in underground garages and locations with intensive station usage.',
        },
        brands: {
          titlePrefix: 'AC charger brands we',
          titleAccent: 'service',
          intro: 'We specialize in servicing selected AC infrastructure manufacturers.',
        },
        contact: {
          kicker: 'Service & maintenance',
          title: 'Need service',
          highlightedTitle: 'for your station?',
          description:
            'Write to us and we’ll present the service scope, cooperation terms, and maintenance options for your AC charging infrastructure.',
          messagePlaceholder: 'Describe the station type, number of devices, location, and service needs...',
        },
      },
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
      titleAccent: 'parking space lease',
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
        phoneLabel: 'Phone',
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
        phoneLabel: 'Phone',
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

