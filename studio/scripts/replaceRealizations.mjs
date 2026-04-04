/**
 * Usuwa wszystkie dokumenty typu `realization` i tworzy zestaw z pełną treścią strony szczegółu
 * (lead, zakres obok zdjęcia, efekty — edytowalne potem w Sanity Studio).
 *
 *   SANITY_API_WRITE_TOKEN=sk... node ./scripts/replaceRealizations.mjs
 */

import { createClient } from '@sanity/client';

const projectId = '6zehmfv6';
const dataset = 'production';
const apiVersion = '2024-01-01';

const DETAIL_LEAD =
  'Wybrane wdrożenia infrastruktury ładowania w biurowcach, hotelach, centrach handlowych i na osiedlach mieszkaniowych. Różne lokalizacje, jeden standard – wygodne, bezpieczne i nowoczesne ładowanie pojazdów elektrycznych.';

const EFFECTS_LEAD =
  'Dzięki wdrożeniu infrastruktury ładowania obiekt zyskał nową wartość dla użytkowników, a także możliwość raportowania danych związanych z wykorzystaniem stacji i zużyciem energii elektrycznej.';

function span(text) {
  return { _type: 'span', text, marks: [] };
}

/** Bloki Portable Text (akapit + lista) — kolumna „Zakres projektu”. */
function scopeContentBlocks(docId) {
  const p = `${docId}-scope`;
  return [
    {
      _type: 'block',
      _key: `${p}-p`,
      style: 'normal',
      markDefs: [],
      children: [
        span(
          'W ramach projektu wykonano analizę zapotrzebowania na ładowanie, przygotowano koncepcję techniczną oraz zrealizowano kompletny montaż punktów ładowania wraz z uruchomieniem systemu rozliczeń.',
        ),
      ],
    },
    {
      _type: 'block',
      _key: `${p}-b1`,
      style: 'normal',
      listItem: 'bullet',
      level: 1,
      markDefs: [],
      children: [span('instalacja kilku punktów ładowania AC / DC,')],
    },
    {
      _type: 'block',
      _key: `${p}-b2`,
      style: 'normal',
      listItem: 'bullet',
      level: 1,
      markDefs: [],
      children: [span('dopasowanie infrastruktury do istniejącej rozdzielni,')],
    },
    {
      _type: 'block',
      _key: `${p}-b3`,
      style: 'normal',
      listItem: 'bullet',
      level: 1,
      markDefs: [],
      children: [span('konfiguracja dostępu dla mieszkańców / klientów / pracowników,')],
    },
    {
      _type: 'block',
      _key: `${p}-b4`,
      style: 'normal',
      listItem: 'bullet',
      level: 1,
      markDefs: [],
      children: [span('integracja z usługą operatorską elomoto.eco.')],
    },
  ];
}

function effectsHighlights(docId) {
  return [
    {
      _key: `${docId}-ef1`,
      _type: 'effectHighlight',
      label: 'komfort',
      text: 'Ładowanie dostępne tam, gdzie użytkownicy spędzają najwięcej czasu.',
    },
    {
      _key: `${docId}-ef2`,
      _type: 'effectHighlight',
      label: 'wizerunek',
      text: 'Wzmocnienie proekologicznego wizerunku inwestycji.',
    },
    {
      _key: `${docId}-ef3`,
      _type: 'effectHighlight',
      label: 'dane',
      text: 'Lepsze zrozumienie realnego zapotrzebowania na ładowanie dzięki raportom.',
    },
  ];
}

const REALIZATIONS = [
  {
    _id: 'realization-redutowa-warszawa',
    order: 1,
    title: 'Redutowa, Warszawa',
    slug: 'redutowa-warszawa',
    intro:
      'Stacja ładowania na osiedlu mieszkaniowym przy ul. Redutowej. Infrastruktura wspiera codzienne ładowanie aut elektrycznych mieszkańców.',
    legacyImageUrl:
      'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?auto=format&fit=crop&q=80&w=900',
  },
  {
    _id: 'realization-polonus-warszawa',
    order: 2,
    title: 'Polonus, Warszawa',
    slug: 'polonus-warszawa',
    intro:
      'Nocna realizacja przy obiekcie miejskim z wyraźnie oznaczonym punktem ładowania. Lokalizacja zaprojektowana pod wygodny dostęp i bezpieczne użytkowanie.',
    legacyImageUrl:
      'https://images.unsplash.com/photo-1567449300518-034887bc4751?auto=format&fit=crop&q=80&w=900',
  },
  {
    _id: 'realization-domaniewska-warszawa',
    order: 3,
    title: 'Domaniewska, Warszawa',
    slug: 'domaniewska-warszawa',
    intro:
      'Ładowarki przy zabudowie biurowo-mieszkaniowej na Mokotowie. Miejsce dopasowane do użytkowników firmowych i prywatnych.',
    legacyImageUrl:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=900',
  },
  {
    _id: 'realization-czeslawa-niemena-poznan',
    order: 4,
    title: 'Czesława Niemena, Poznań',
    slug: 'czeslawa-niemena-poznan',
    intro:
      'Stacja ładowania w przestrzeni osiedla z czytelnym oznakowaniem miejsc EV. Projekt zwiększa dostępność ładowania w codziennej mobilności mieszkańców.',
    legacyImageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=900',
  },
  {
    _id: 'realization-studzienna-warszawa',
    order: 5,
    title: 'Studzienna, Warszawa',
    slug: 'studzienna-warszawa',
    intro:
      'Punkt ładowania przy nowoczesnej zabudowie usługowo-mieszkaniowej. Rozwiązanie łączy estetykę inwestycji z funkcjonalnym ładowaniem EV.',
    legacyImageUrl:
      'https://images.unsplash.com/photo-1590674499398-2b91c8301985?auto=format&fit=crop&q=80&w=900',
  },
];

function realizationDocument(r) {
  return {
    _id: r._id,
    _type: 'realization',
    title: r.title,
    slug: { _type: 'slug', current: r.slug },
    order: r.order,
    intro: r.intro,
    legacyImageUrl: r.legacyImageUrl,
    detailLead: DETAIL_LEAD,
    scopeTitle: 'Zakres projektu',
    scopeContent: scopeContentBlocks(r._id),
    effectsTitle: 'Efekty dla inwestora',
    effectsLead: EFFECTS_LEAD,
    effectsHighlights: effectsHighlights(r._id),
  };
}

async function main() {
  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!token) {
    console.error('Brak zmiennej środowiskowej SANITY_API_WRITE_TOKEN.');
    process.exit(1);
  }

  const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

  const oldIds = await client.fetch(`*[_type == "realization"]._id`);
  if (!Array.isArray(oldIds)) {
    console.error('Nieoczekiwana odpowiedź GROQ.');
    process.exit(1);
  }

  let trx = client.transaction();
  for (const id of oldIds) {
    trx = trx.delete(id);
  }
  if (oldIds.length > 0) {
    await trx.commit();
    console.log(`Usunięto ${oldIds.length} starych realizacji.`);
  } else {
    console.log('Brak istniejących realizacji do usunięcia.');
  }

  trx = client.transaction();
  for (const r of REALIZATIONS) {
    trx = trx.create(realizationDocument(r));
  }
  await trx.commit();

  console.log(`Zapisano ${REALIZATIONS.length} realizacji z pełną treścią strony szczegółu.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
