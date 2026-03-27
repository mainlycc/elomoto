import type { Realization } from '../types';
import redutowaWarszawaImage from '../Redutowa Warszawa.jpeg';
import polonusWarszawaImage from '../Polonus Warszawa.jpeg';
import domaniewskaWarszawaImage from '../Domaniewska Warszawa.png';
import czeslawaNiemenaPoznanImage from '../Czesława Niemena Poznań.jpeg';
import studziennaWarszawaImage from '../Studzienna Warszawa.JPG';

export const fallbackRealizations: Realization[] = [
  {
    id: 'fallback-realization-redutowa',
    order: 1,
    title: 'Redutowa, Warszawa',
    slug: 'redutowa-warszawa',
    image: redutowaWarszawaImage,
    intro:
      'Stacja ładowania na osiedlu mieszkaniowym przy ul. Redutowej. Infrastruktura wspiera codzienne ładowanie aut elektrycznych mieszkańców.',
  },
  {
    id: 'fallback-realization-polonus',
    order: 2,
    title: 'Polonus, Warszawa',
    slug: 'polonus-warszawa',
    image: polonusWarszawaImage,
    intro:
      'Nocna realizacja przy obiekcie miejskim z wyraźnie oznaczonym punktem ładowania. Lokalizacja zaprojektowana pod wygodny dostęp i bezpieczne użytkowanie.',
  },
  {
    id: 'fallback-realization-domaniewska',
    order: 3,
    title: 'Domaniewska, Warszawa',
    slug: 'domaniewska-warszawa',
    image: domaniewskaWarszawaImage,
    intro:
      'Ładowarki przy zabudowie biurowo-mieszkaniowej na Mokotowie. Miejsce dopasowane do użytkowników firmowych i prywatnych.',
  },
  {
    id: 'fallback-realization-czeslawa-niemena',
    order: 4,
    title: 'Czesława Niemena, Poznań',
    slug: 'czeslawa-niemena-poznan',
    image: czeslawaNiemenaPoznanImage,
    intro:
      'Stacja ładowania w przestrzeni osiedla z czytelnym oznakowaniem miejsc EV. Projekt zwiększa dostępność ładowania w codziennej mobilności mieszkańców.',
  },
  {
    id: 'fallback-realization-studzienna',
    order: 5,
    title: 'Studzienna, Warszawa',
    slug: 'studzienna-warszawa',
    image: studziennaWarszawaImage,
    intro:
      'Punkt ładowania przy nowoczesnej zabudowie usługowo-mieszkaniowej. Rozwiązanie łączy estetykę inwestycji z funkcjonalnym ładowaniem EV.',
  },
];
