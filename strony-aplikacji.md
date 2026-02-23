# Mapa stron i podstron – elomoto.eco

## Strona główna

| Ścieżka | Komponent | Opis |
|---------|-----------|------|
| `/` | `App` (strona główna) | Strona główna zawierająca sekcje: Hero, O nas, Usługi, Proces, Mapa stacji, Aplikacja, Blog, FAQ, Kontakt |

### Sekcje na stronie głównej (kotwice)

| Kotwica | Komponent | Opis |
|---------|-----------|------|
| `#about` | `AboutSection` | Sekcja "O nas" |
| `#services` | `ServicesSection` | Sekcja z usługami |
| `#process` | `ProcessSection` | Sekcja procesu współpracy |
| `#charging-map` | `ChargingStationsMapSection` | Mapa stacji ładowania |
| `#app-download` | `AppSection` | Sekcja pobierania aplikacji |
| `#contact` | `ContactSection` | Sekcja kontaktowa |

---

## Strony statyczne

| Ścieżka | Komponent | Opis |
|---------|-----------|------|
| `/o-nas` | `AboutSection` | Osobna strona "O nas" |
| `/kontakt` | `ContactSection` | Strona kontaktowa |
| `/mapa` | `ChargingStationsMapSection` | Mapa stacji ładowania (pełna strona) |
| `/blog` | `BlogPage` | Strona z wpisami blogowymi |
| `/kariera` | `KarieraPage` | Strona z ofertami pracy / kariera |
| `/darmowa-stacja` | `DarmowaStacjaPage` | Strona o darmowej stacji ładowania |
| `/platnosc-bez-rejestracji` | `PlatnoscBezRejestracjiPage` | Płatność bez rejestracji |
| `/realizacje` | `RealizacjePage` | Lista realizacji / portfolio |

---

## Strony prawne

| Ścieżka | Komponent | Opis |
|---------|-----------|------|
| `/regulamin` | `RegulaminPage` | Regulamin serwisu |
| `/polityka-prywatnosci` | `PolitykaPrywatnosciPage` | Polityka prywatności |

---

## Oferta – strona główna i podstrony

| Ścieżka | Komponent | Opis |
|---------|-----------|------|
| `/oferta` | `OfertaPage` | Przegląd oferty |
| `/oferta/darmowa-ladowarka` | `OfertaDarmowaLadowarkaPage` | Oferta – Darmowa ładowarka |
| `/oferta/montaz` | `OfertaMontazPage` | Oferta – Montaż stacji ładowania |
| `/oferta/ekspertyzy` | `OfertaEkspertyzyPage` | Oferta – Ekspertyzy techniczne |
| `/oferta/operator` | `OfertaOperatorPage` | Oferta – Usługa operatorska |
| `/oferta/serwis` | `OfertaSerwisPage` | Oferta – Serwis i utrzymanie |

---

## Realizacje – strony dynamiczne

Ścieżka: `/realizacje/:slug` → Komponent: `RealizacjaDetailPage`

Dostępne realizacje:

| Ścieżka | Tytuł |
|---------|-------|
| `/realizacje/biurowiec-warszawa` | Biurowiec Warszawa |
| `/realizacje/hotel-hilton-krakow` | Hotel Hilton Kraków |
| `/realizacje/centrum-handlowe-gdynia` | Centrum Handlowe Gdynia |
| `/realizacje/osiedle-zielone-tarasy` | Osiedle Zielone Tarasy |
| `/realizacje/parking-publiczny-wroclaw` | Parking Publiczny Wrocław |

---

## Strona administracyjna

| Ścieżka | Komponent | Opis |
|---------|-----------|------|
| `/ustaw` | `SettingsPage` | Strona ustawień (bez Navbar i Footer) |

---

## Podsumowanie

**Łączna liczba stron/ścieżek: 21** (w tym 5 dynamicznych podstron realizacji)

### Struktura drzewa nawigacji:

```
/                                   ← Strona główna
├── /o-nas                          ← O nas
├── /kontakt                        ← Kontakt
├── /mapa                           ← Mapa stacji
├── /blog                           ← Blog
├── /kariera                        ← Kariera
├── /darmowa-stacja                 ← Darmowa stacja
├── /platnosc-bez-rejestracji       ← Płatność bez rejestracji
├── /realizacje                     ← Lista realizacji
│   ├── /realizacje/biurowiec-warszawa
│   ├── /realizacje/hotel-hilton-krakow
│   ├── /realizacje/centrum-handlowe-gdynia
│   ├── /realizacje/osiedle-zielone-tarasy
│   └── /realizacje/parking-publiczny-wroclaw
├── /oferta                         ← Przegląd oferty
│   ├── /oferta/darmowa-ladowarka
│   ├── /oferta/montaz
│   ├── /oferta/ekspertyzy
│   ├── /oferta/operator
│   └── /oferta/serwis
├── /regulamin                      ← Regulamin
├── /polityka-prywatnosci           ← Polityka prywatności
└── /ustaw                          ← Ustawienia (admin)
```
