# Porównanie umowy vs stan faktyczny (repo + produkcja)

Źródła:
- **Umowa**: treść z wiadomości (bez Briefu).
- **Repo**: `c:/Users/sblic/Programowanie_lokalnie/CLI_vite_elomoto`
- **Produkcja**: `https://www.elomoto.eco/` (WWW)

Legenda statusów:
- **ZROBIONE**: spełnia wymaganie z umowy.
- **CZĘŚCIOWO**: jest, ale nie spełnia parametrów umowy lub spełnia tylko fragment.
- **BRAK**: brak w stanie faktycznym.
- **PONAD**: zrobione dodatkowo (nie wynika bezpośrednio z umowy).

---

## 1) Przedmiot umowy (strona Elomoto.eco w tech Node.js / Next.js / CMS)

### 1.1 Technologia (umowa §1.1 + §1.5)
- **Wymaganie**: Backend Node.js (Express/Nest), DB (PostgreSQL/MongoDB), autoryzacja (JWT/sesje), frontend Next.js (SSR/CSR), CMS (Strapi/Sanity/Directus/dedykowany), CSS (Tailwind/Bootstrap/dedykowany).
- **Stan faktyczny**:
  - **Frontend**: Vite + React SPA (routing kliencki), brak Next.js/SSR.  
    Dowód: `vite.config.ts`, `index.tsx`, `App.tsx`, `package.json`.
  - **CMS**: jest **Sanity Studio**.  
    Dowód: katalog `studio/`, `studio/sanity.config.ts`, `studio/schemaTypes/*`, `lib/sanityClient.ts`, `lib/sanityQueries.ts`.
  - **Backend/DB/Auth**: brak klasycznego backendu (Express/Nest) oraz brak bazy danych i mechanizmów JWT/sesji w repo aplikacji.  
    Jest tylko endpoint `api/contact.ts` (typowy pod Vercel/Serverless). Dowód: `api/contact.ts`, `package.json` (brak Express/Nest, brak driverów DB, brak auth libs).
  - **CSS**: Tailwind używany przez CDN w `index.html` oraz klasy Tailwind w komponentach.  
    Dowód: `index.html` (`<script src="https://cdn.tailwindcss.com"></script>`), komponenty `components/*.tsx`.
- **Status**:
  - **Next.js (SSR/CSR)**: **BRAK** (jest SPA na Vite).
  - **Backend Node.js (Express/Nest)**: **BRAK** (poza serverless `api/contact.ts`).
  - **DB (PostgreSQL/MongoDB)**: **BRAK**.
  - **Autoryzacja (JWT/sesje)**: **BRAK** (poza logowaniem do Sanity jako usługa zewnętrzna).
  - **CMS**: **ZROBIONE** (Sanity).
  - **CSS**: **ZROBIONE** (Tailwind).

### 1.2 Przeniesienie praw autorskich
- **Wymaganie**: przeniesienie praw / kod źródłowy.
- **Stan faktyczny**: tego nie da się zweryfikować technicznie z repo/produkcji.
- **Status**: **POZA ZAKRESEM TECHNICZNYM**.

---

## 2) Struktura strony (umowa §1.3)

### 2.1 Wymagana struktura z umowy
Wymagane (skrót):
- Strona główna
- **O nas** (z podstronami: **Kariera** i **Realizacje**)
- Darmowa stacja ładowania
- **Oferta** z sekcjami/podstronami: Darmowa ładowarka, Montaż ładowarki, Ekspertyzy techniczne, Usługi operatorskie, Usługi serwisowe
- Pobierz aplikację
- Kontakt
- Płatność bez rejestracji (link zewnętrzny)
- Podstrony dodatkowe: Polityka prywatności, Regulamin

### 2.2 Zmapowanie do istniejących ścieżek w aplikacji
Źródło ścieżek: `App.tsx` oraz opis: `strony-aplikacji.md`.

- **Strona główna**: `/` → **ZROBIONE**
- **O nas**: `/o-nas` → **ZROBIONE** (`components/AboutPage.tsx`)
- **Kariera**: `/kariera` → **ZROBIONE** (`components/KarieraPage.tsx`)
- **Realizacje (lista)**: `/realizacje` → **ZROBIONE** (`components/RealizacjePage.tsx`)
- **Realizacje (szczegół)**: `/realizacje/:slug` → **PONAD** (umowa nie precyzuje osobnych stron szczegółu po slugu; wymaga galerii z opisami/kategoryzacją, ale nie opisuje routingu)
- **Darmowa stacja ładowania**: `/darmowa-stacja` → **ZROBIONE** (`components/DarmowaStacjaPage.tsx`)
- **Oferta**:
  - `/oferta` → **ZROBIONE**
  - `/oferta/darmowa-ladowarka` → **ZROBIONE**
  - `/oferta/montaz` → **ZROBIONE**
  - `/oferta/ekspertyzy` → **ZROBIONE**
  - `/oferta/operator` → **ZROBIONE**
  - `/oferta/serwis` → **ZROBIONE**
- **Kontakt**: `/kontakt` → **ZROBIONE**
- **Płatność bez rejestracji**: `/platnosc-bez-rejestracji` (strona) + link zewnętrzny do `https://zaplac.elomoto.eco/` → **CZĘŚCIOWO**  
  - Umowa mówi o „linku zewnętrznym”; w praktyce jest i strona wewnętrzna, i zewnętrzny link.
- **Polityka prywatności**: `/polityka-prywatnosci` → **ZROBIONE**
- **Regulamin**: `/regulamin` → **ZROBIONE**
- **Pobierz aplikację**: jest sekcja na home (`AppSection` / kotwica `#app-download`), ale brak osobnej podstrony typu `/pobierz-aplikacje`. → **CZĘŚCIOWO**  
  Dowód: `App.tsx` (sekcja `AppSection`), `components/AppSection.tsx`, brak ścieżki w `App.tsx`.

### 2.3 Uwaga dot. „O nas (z podstronami Kariera i Realizacje)”
- W umowie brzmi to jak hierarchia „O nas → Kariera/Realizacje”.  
- W stanie faktycznym to osobne ścieżki (`/o-nas`, `/kariera`, `/realizacje`).  
- **Status**: **CZĘŚCIOWO** (funkcjonalnie istnieje, ale nie jako podstrony w obrębie `/o-nas/...`).

---

## 3) Kluczowe funkcjonalności (umowa §1.4)

### 3.1 Formularz kontaktowy (wymóg: pola, zgody, wysyłka do Zleceniodawcy + potwierdzenie dla usera)
- **Wymaganie z umowy**:
  - pola: imię i nazwisko, firma, e-mail, telefon, treść
  - zgody: RODO i marketingowe
  - wysyłka na e-mail Zleceniodawcy + potwierdzenie dla użytkownika
- **Stan faktyczny**:
  - Frontend formularza: `components/ContactSection.tsx` + `components/SubpageContactSection.tsx`
  - Pola: `name`, `email`, `phone`, `message`, `topic` + `consent` (jedna zgoda)  
    Brak pola „firma”; brak rozdzielonych zgód RODO/marketing.
  - Backend/email: `api/contact.ts` używa Resend i wysyła email **do użytkownika** (`to: payload.email`).  
    Brak wysyłki do Zleceniodawcy (nie ma `to` na adres firmowy / kopii / BCC).  
    Jest więc „potwierdzenie dla użytkownika”, ale brak „maila do Zleceniodawcy”.
- **Status**: **CZĘŚCIOWO** (formularz jest, ale nie spełnia wymagań pól/zgód i kierunku wysyłki).

### 3.2 Formularz aplikacyjny „Kariera” z załączeniem CV
- **Wymaganie z umowy**: formularz aplikacyjny z załączeniem CV.
- **Stan faktyczny**: `components/KarieraPage.tsx` zawiera CTA `mailto:` na `rekrutacja@elomoto.eco`, bez uploadu CV.  
- **Status**: **BRAK** (brak formularza z uploadem CV).

### 3.3 Aktualności / Blog
- **Wymaganie z umowy**: „Aktualności”.
- **Stan faktyczny**: jest „Blog” zasilany z Sanity (`studio/schemaTypes/blogPost.ts`, `hooks/useBlogPosts.ts`, strony `components/BlogPage.tsx`, `components/BlogPostPage.tsx`).  
- **Status**: **ZROBIONE** (funkcjonalność aktualności w praktyce = blog).
- **Ryzyko produkcyjne**: na homepage widać „Loading posts…” (może oznaczać brak danych/CORS lub chwilową niedostępność).  
  Dowód wskazówkowy w repo: `i18n/i18n.ts` zawiera komunikat o CORS dla bloga.

### 3.4 Realizacje (galeria z opisami i kategoryzacją)
- **Wymaganie z umowy**: realizacje jako galeria z opisami i **kategoryzacją**.
- **Stan faktyczny**:
  - Realizacje są w CMS (Sanity) i mają tytuł, obraz, intro, body.  
    Dowód: `studio/schemaTypes/realization.ts`, `lib/sanityQueries.ts`, `hooks/useRealizations.ts`.
  - Brak pola „kategoria/kategoryzacja” w schemacie `realization` (nie widać kategorii).  
- **Status**: **CZĘŚCIOWO** (galeria + opisy: tak; kategoryzacja: brak w schemacie).

### 3.5 Mapa stacji ładowania (Google Maps / OSM, zarządzana w CMS)
- **Wymaganie z umowy**: integracja z Google Maps lub OpenStreetMap, **zarządzana w CMS**.
- **Stan faktyczny**:
  - Mapa jest osadzona jako iframe Google My Maps z konkretnym `mid=...`.  
    Dowód: `components/ChargingStationsMapSection.tsx` (`<iframe src="https://www.google.com/maps/d/embed?mid=...">`).
  - Nie widać zarządzania punktami mapy w CMS w repo (brak schematu/stacji w Sanity; brak pobierania danych mapy z CMS).  
- **Status**: **CZĘŚCIOWO** (Google Maps: tak; „zarządzana w CMS”: brak).

### 3.6 SEO: meta tagi edytowalne, sitemap.xml, robots.txt, przyjazne URL
- **Wymaganie z umowy**:
  - edytowalne meta tagi
  - `sitemap.xml`
  - `robots.txt`
  - przyjazne URL
- **Stan faktyczny (repo)**:
  - `index.html` ma statyczny `<title>` i podstawowe meta (`charset`, `viewport`), brak systemu per-podstrona (np. React Helmet) oraz brak integracji z CMS dla meta.  
    Dowód: `index.html`, brak bibliotek typu `react-helmet` w `package.json`.
  - Brak plików `robots.txt` i `sitemap.xml` w repo (folder `public/` nie zawiera tych plików).
  - URL-e są „przyjazne” (np. `/o-nas`, `/oferta/montaz`).  
    Dowód: `App.tsx`, `strony-aplikacji.md`.
- **Stan faktyczny (produkcja)**:
  - `https://www.elomoto.eco/sitemap.xml` zwraca 404.
  - `https://www.elomoto.eco/robots.txt` zwraca 404.
  - Deep-linki do podstron typu `https://www.elomoto.eco/o-nas` zwracają 404 na serwerze (czyli URL jest „ładny”, ale nie działa jako bezpośrednie wejście).  
- **Status**: **CZĘŚCIOWO / BRAK**:
  - Meta tagi „edytowalne”: **BRAK**
  - `sitemap.xml`: **BRAK**
  - `robots.txt`: **BRAK**
  - Przyjazne URL: **CZĘŚCIOWO** (ładne ścieżki istnieją, ale deep-link 404 na produkcji)

---

## 4) Wymagania niefunkcjonalne (umowa §1.4.a–c)

### 4.1 Responsywność (mobile-first, pełne RWD)
- **Stan faktyczny**: komponenty mają klasy responsywne Tailwind (`md:`, `lg:` itd.).  
  Dowód: np. `components/ContactSection.tsx`, `components/ChargingStationsMapSection.tsx`.
- **Status**: **ZROBIONE** (na poziomie implementacji UI).

### 4.2 Szybkie ładowanie / Core Web Vitals
- **Stan faktyczny**: brak jednoznacznej weryfikacji bez pomiarów CWV (Lighthouse/CrUX).  
- **Status**: **NIEZWERYFIKOWANE** (wymaga testu wydajności).

### 4.3 Bezpieczeństwo: HTTPS, Captcha, bezpieczne logowanie do CMS
- **HTTPS**: na produkcji jest `https://` → **ZROBIONE**.
- **Captcha**: nie widać integracji (brak reCAPTCHA/Turnstile/hCaptcha w kodzie). → **BRAK**  
  Dowód: brak wystąpień w repo; formularze wysyłają bez Captcha.
- **Logowanie do CMS**: Sanity Studio ma własne logowanie, ale repo nie opisuje polityk dostępu/konfiguracji zabezpieczeń. → **CZĘŚCIOWO** (CMS istnieje, ale bezpieczeństwa nie da się potwierdzić z frontu).

### 4.4 Możliwość rozwoju o kolejne wersje językowe + start PL/EN
- **Stan faktyczny**: jest przełączanie PL/EN, wykrywanie języka i zapis w localStorage.  
  Dowód: `i18n/i18n.ts`, `i18n/I18nProvider.tsx`.
- **Status**: **ZROBIONE** (dwujęzyczność jest).
- **Uwaga SEO dla języków** (nie w umowie wprost, ale istotne): brak per-język URL-i i meta (np. `/en/...`, `hreflang`) — w SPA z jednym `index.html` będzie to wymagało dodatkowej pracy.

### 4.5 Integracje opcjonalne: CRM, GA4, Meta Pixel
- **Stan faktyczny**: brak oczywistych śladów w repo (brak konfiguracji/SDK) i brak danych z produkcji z poziomu samego tekstu strony.  
- **Status**: **BRAK / NIEZWERYFIKOWANE** (wymaga sprawdzenia kodu źródłowego HTML w przeglądarce lub panelu tagów).

---

## 5) Hosting, CI/CD, testy automatyczne (umowa §1.5.j–l)

### 5.1 Hosting
- **Wymaganie**: Vercel/Netlify/Railway/Heroku/VPS.
- **Stan faktyczny**: nie wynika wprost z repo; endpoint `api/contact.ts` sugeruje Vercel/Serverless, ale domena może być hostowana różnie.
- **Status**: **NIEZWERYFIKOWANE**.

### 5.2 CI/CD
- **Wymaganie**: GitHub Actions lub inne CI/CD.
- **Stan faktyczny**: brak `.github/workflows/*` w repo.
- **Status**: **BRAK**.

### 5.3 Testy automatyczne uruchamiane w CI/CD
- **Wymaganie**: testy automatyczne w ramach CI/CD na każdy deploy.
- **Stan faktyczny**: brak konfiguracji testów (brak Vitest/Jest/Playwright config, brak plików `*.test.*`).
- **Status**: **BRAK**.

---

## 6) Rzeczy wykonane „ponad umowę” (widoczne w repo)

- **Widget „ładowania” i elementy interaktywne** (branding/UX): `components/ChargingWidget.tsx` + sekcja/stały widget w `App.tsx`. → **PONAD**
- **Popup CTA kontaktowy**: `components/ContactCtaPopup.tsx` → **PONAD**
- **Panel `/ustaw` do podmiany obrazów** (localStorage, upload na klienta): `components/SettingsPage.tsx`, `utils/db.ts`. → **PONAD**  
  Uwaga: to nie jest CMS w rozumieniu umowy (nie zarządza treściami/stronami/SEO; jest to narzędzie „lokalne” dla obrazów w przeglądarce).
- **Sanity Studio jako pełny CMS do bloga/realizacji/zespołu** (umowa dopuszcza CMS, ale nie wymaga Sanity konkretnie): `studio/*` → **PONAD (konkretna implementacja)**.

---

## 7) Największe rozbieżności / ryzyka względem umowy (high-signal)

1) **Stack technologiczny**: umowa mówi o Next.js + backend Node + DB + auth, a stan faktyczny to **Vite + React SPA + Sanity** (bez DB/auth) + serverless `api/contact.ts`.
2) **SEO**: brak `robots.txt`, brak `sitemap.xml`, brak systemu meta per podstrona; do tego **deep-linki 404 na produkcji** dla ścieżek typu `/o-nas` (krytyczne dla SEO i UX).
3) **Formularze**:
   - kontakt: brak pola „firma”, brak zgód RODO/marketing osobno, brak wysyłki do Zleceniodawcy (jest do usera).
   - kariera: brak formularza z uploadem CV.
4) **Mapa stacji**: jest Google Maps, ale brak zarządzania w CMS.
5) **CI/CD i testy**: brak pipeline’ów i testów automatycznych.

---

## 8) Minimalna lista działań, żeby domknąć zgodność z umową (propozycja)

Priorytet 1 (krytyczne):
- Naprawa deep-linków na produkcji (history fallback dla SPA) **albo** migracja na Next.js zgodnie z umową.
- Dodać `robots.txt` i `sitemap.xml` na produkcji.

Priorytet 2 (funkcjonalności):
- Rozszerzyć formularz kontaktowy o: **firma**, osobne zgody **RODO** i **marketing**, oraz wysyłkę maila **do Zleceniodawcy** + potwierdzenie do użytkownika.
- Dodać formularz „Kariera” z uploadem CV (i obsługą po stronie backendu / storage).

Priorytet 3 (SEO/CMS):
- Zaprojektować sposób zarządzania meta tagami (najlepiej w CMS) i generowania meta per podstrona.
- Jeśli mapa ma być „zarządzana w CMS”: dodać w Sanity typ dokumentu dla stacji/punktów i renderować mapę z danych.

Priorytet 4 (proces):
- Dodać CI/CD (GitHub Actions) i testy automatyczne (minimum smoke testy routingu + formularzy).

