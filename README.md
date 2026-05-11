# Elomoto.eco — landing page (Vite + React)

Repozytorium zawiera aplikację frontendową zbudowaną na Vite i React. Treści (blog/realizacje/zespół) są pobierane z Sanity, formularz kontaktowy wysyła wiadomości przez Resend, a mapa stacji ładowania korzysta z Google Maps i pliku KML.

## Wymagania

- Node.js (zalecane: aktualne LTS)
- npm

## Szybki start

Zainstaluj zależności:

```bash
npm install
```

Skonfiguruj zmienne środowiskowe:

- skopiuj `.env.example` do `.env.local`
- uzupełnij wartości (szczegóły poniżej)

Uruchom środowisko developerskie:

```bash
npm run dev
```

Aplikacja domyślnie startuje na `http://localhost:3000`.

## Skrypty

- `npm run dev` — uruchamia Vite (przed startem synchronizuje plik KML)
- `npm run build` — buduje produkcyjny bundle (przed buildem synchronizuje plik KML)
- `npm run preview` — podgląd builda lokalnie
- `npm run sync:kml` — ręczna synchronizacja KML do pliku używanego przez aplikację

## Konfiguracja środowiska (`.env.local`)

Wzór znajduje się w `.env.example`.

### Sanity (treści)

- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`
- `VITE_SANITY_API_VERSION`

W panelu Sanity dodaj do CORS przynajmniej:
- `http://localhost:3000`
- domenę produkcyjną

### Resend (formularz kontaktowy)

Używane przez endpoint `api/contact.ts`.

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`

### Google Maps (mapa stacji)

- `VITE_GOOGLE_MAPS_API_KEY`
- `VITE_GOOGLE_MAP_ID_DARK` (opcjonalnie)

Uwaga: zmienne `VITE_*` są wbudowywane do aplikacji frontendowej. Klucz Google Maps będzie widoczny po stronie przeglądarki, dlatego ustaw restrykcje w Google Cloud (HTTP referrers/domeny oraz ograniczenie do wymaganych API).

## Dane stacji ładowania (KML)

Źródłowy plik KML znajduje się w:
- `public/Stacje ładowania Elomoto.kml`

Podczas `dev` oraz `build` wykonywana jest synchronizacja do:
- `public/stacje-data.kml`

Aplikacja korzysta z `public/stacje-data.kml` (plik wynikowy).

## Struktura projektu (skrót)

- `components/` — komponenty UI oraz podstrony
- `hooks/` — hooki do pobierania danych (Sanity)
- `lib/` — klient Sanity, zapytania, mapery, pomocnicze moduły
- `api/` — funkcje API (np. kontakt przez Resend)
- `public/` — statyczne zasoby (KML, obrazy)
- `studio/` — konfiguracja Sanity Studio i skrypty pomocnicze

## Deployment

Projekt jest kompatybilny z hostingiem statycznym (Vite build) oraz platformami typu Vercel. Upewnij się, że zmienne środowiskowe są ustawione po stronie hostingu, a w Sanity skonfigurowany jest CORS dla domeny produkcyjnej.

## Informacja prawna

Zobacz plik `NOTICE`.