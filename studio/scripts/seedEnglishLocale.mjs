/**
 * Tworzy angielskie duplikaty realizacji i wpisów bloga (locale: en, osobne _id i slugi).
 * Nie usuwa polskich dokumentów.
 *
 *   cd studio
 *   $env:SANITY_API_WRITE_TOKEN="sk..."; npm run seed-english
 *   (jedna linia — bez Enter w środku tokenu; albo: $env:SANITY_API_WRITE_TOKEN = (Get-Content ..\.env.local -Raw).Trim())
 *
 * Token: sanity.io/manage → projekt → API → Tokens (Editor lub Administrator).
 */

import { createClient } from '@sanity/client';
import { sanitizeSanityToken } from './sanitizeSanityToken.mjs';

const projectId = '6zehmfv6';
const dataset = 'production';
const apiVersion = '2024-01-01';

const DETAIL_LEAD_EN =
  'Selected charging infrastructure deployments in office buildings, hotels, shopping centers, and residential developments. Different locations — one standard: convenient, safe, and modern electric vehicle charging.';

const EFFECTS_LEAD_EN =
  'Charging infrastructure adds value for users and enables reporting on station usage and electricity consumption.';

function span(text) {
  return { _type: 'span', text, marks: [] };
}

function scopeContentBlocksEn(docId) {
  const p = `${docId}-scope-en`;
  return [
    {
      _type: 'block',
      _key: `${p}-p`,
      style: 'normal',
      markDefs: [],
      children: [
        span(
          'The project included charging demand analysis, a technical concept, full installation of charging points, and go-live of the billing system.',
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
      children: [span('Installation of multiple AC / DC charging points.')],
    },
    {
      _type: 'block',
      _key: `${p}-b2`,
      style: 'normal',
      listItem: 'bullet',
      level: 1,
      markDefs: [],
      children: [span('Infrastructure aligned with the existing switchgear.')],
    },
    {
      _type: 'block',
      _key: `${p}-b3`,
      style: 'normal',
      listItem: 'bullet',
      level: 1,
      markDefs: [],
      children: [span('Access setup for residents, customers, or employees.')],
    },
    {
      _type: 'block',
      _key: `${p}-b4`,
      style: 'normal',
      listItem: 'bullet',
      level: 1,
      markDefs: [],
      children: [span('Integration with the elomoto.eco operator service.')],
    },
  ];
}

function bodyParagraphEn(_key, text) {
  return {
    _type: 'block',
    _key,
    style: 'normal',
    markDefs: [],
    children: [span(text)],
  };
}

function effectsHighlightsEn(docId) {
  return [
    {
      _key: `${docId}-ef1`,
      _type: 'effectHighlight',
      label: 'comfort',
      text: 'Charging where people spend most of their time.',
    },
    {
      _key: `${docId}-ef2`,
      _type: 'effectHighlight',
      label: 'brand',
      text: 'Strengthening the property’s green credentials.',
    },
    {
      _key: `${docId}-ef3`,
      _type: 'effectHighlight',
      label: 'data',
      text: 'Better insight into real charging demand through reports.',
    },
  ];
}

const REALIZATIONS_EN = [
  {
    _id: 'realization-redutowa-warszawa-en',
    order: 1,
    title: 'Redutowa, Warsaw',
    slug: 'redutowa-warsaw',
    intro:
      'Charging at a residential complex on Redutowa Street. The infrastructure supports residents’ day-to-day EV charging.',
    legacyImageUrl:
      'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?auto=format&fit=crop&q=80&w=900',
  },
  {
    _id: 'realization-polonus-warszawa-en',
    order: 2,
    title: 'Polonus, Warsaw',
    slug: 'polonus-warsaw',
    intro:
      'Night-time deployment at a municipal site with a clearly marked charging point. Designed for easy access and safe operation.',
    legacyImageUrl:
      'https://images.unsplash.com/photo-1567449300518-034887bc4751?auto=format&fit=crop&q=80&w=900',
  },
  {
    _id: 'realization-domaniewska-warszawa-en',
    order: 3,
    title: 'Domaniewska, Warsaw',
    slug: 'domaniewska-warsaw',
    intro:
      'Chargers at a mixed office and residential development in Mokotów. Tailored to both business and private users.',
    legacyImageUrl:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=900',
  },
  {
    _id: 'realization-czeslawa-niemena-poznan-en',
    order: 4,
    title: 'Czesława Niemena, Poznań',
    slug: 'czeslawa-niemena-poznan',
    intro:
      'Charging on a housing estate with clear EV bay marking. The project improves everyday access to charging for residents.',
    legacyImageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=900',
  },
  {
    _id: 'realization-studzienna-warszawa-en',
    order: 5,
    title: 'Studzienna, Warsaw',
    slug: 'studzienna-warsaw',
    intro:
      'A charging point at a modern mixed-use development. The solution combines the building’s aesthetics with practical EV charging.',
    legacyImageUrl:
      'https://images.unsplash.com/photo-1590674499398-2b91c8301985?auto=format&fit=crop&q=80&w=900',
  },
];

function realizationDocumentEn(r) {
  return {
    _id: r._id,
    _type: 'realization',
    locale: 'en',
    title: r.title,
    slug: { _type: 'slug', current: r.slug },
    order: r.order,
    intro: r.intro,
    legacyImageUrl: r.legacyImageUrl,
    detailLead: DETAIL_LEAD_EN,
    scopeTitle: 'Project scope',
    scopeContent: scopeContentBlocksEn(r._id),
    effectsTitle: 'Benefits for the investor',
    effectsLead: EFFECTS_LEAD_EN,
    effectsHighlights: effectsHighlightsEn(r._id),
  };
}

const BLOG_POSTS_EN = [
  {
    _id: 'blogPost-dlaczego-ladowarki-en',
    locale: 'en',
    title: 'WHY WORKPLACE CHARGERS MATTER SO MUCH',
    slug: 'why-workplace-chargers-matter',
    publishedAt: '2024-04-23T12:00:00.000Z',
    category: 'MAINTENANCE / TECHNOLOGY',
    excerpt:
      'E-mobility is becoming the norm, and companies increasingly see charging at work as a standard employee benefit and part of their sustainability strategy.',
    legacyImageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800',
    body: [
      bodyParagraphEn(
        'why-chargers-p1',
        'Access to charging where people already spend many hours — at work — reduces range anxiety and makes EV adoption realistic for more drivers. Employers that invest in workplace infrastructure support both their teams and their ESG goals.',
      ),
      bodyParagraphEn(
        'why-chargers-p2',
        'Well-planned AC points, billing, and operator integration turn a parking area into a usable mobility hub without burdening facility managers with day-to-day operations.',
      ),
    ],
  },
  {
    _id: 'blogPost-duzi-przedsiebiorcy-en',
    locale: 'en',
    title: 'LARGE ENTERPRISES: E-MOBILITY IS NO LONGER A NICHE',
    slug: 'large-enterprises-emobility-mainstream',
    publishedAt: '2024-04-03T12:00:00.000Z',
    category: 'AUTO TIPS / AUTOMOBILE',
    excerpt:
      'EV charging infrastructure in Poland is accelerating, and major businesses are moving from pilots to fleet-wide and site-wide rollouts.',
    legacyImageUrl: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?auto=format&fit=crop&q=80&w=800',
    body: [
      bodyParagraphEn(
        'enterprises-p1',
        'Corporate fleets, retail chains, and logistics operators are scaling charging alongside vehicle replacement plans. What used to be experimental is now part of procurement and facility standards.',
      ),
      bodyParagraphEn(
        'enterprises-p2',
        'Partnerships with operators, predictable service models, and data on usage help finance and operations teams justify expansion beyond a handful of pilot sockets.',
      ),
    ],
  },
  {
    _id: 'blogPost-niemcy-en',
    locale: 'en',
    title: 'GERMANY: OVER HALF OF NEW REGISTRATIONS ARE ELECTRIC-RELATED',
    slug: 'germany-new-car-registrations-ev',
    publishedAt: '2024-03-28T12:00:00.000Z',
    category: 'NEWS',
    excerpt:
      'Sales figures from Europe’s largest car market show a clear shift: plug-in and battery-electric models dominate new registrations.',
    legacyImageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
    body: [
      bodyParagraphEn(
        'germany-p1',
        'Germany’s registration mix is often watched as a bellwether for Central Europe. Strong EV share increases pressure on charging availability in cities, workplaces, and along corridors.',
      ),
      bodyParagraphEn(
        'germany-p2',
        'For property owners and employers, the lesson is simple: infrastructure planned today should assume much higher EV penetration within the asset’s lifetime.',
      ),
    ],
  },
];

function blogDocumentEn(b) {
  return {
    _id: b._id,
    _type: 'blogPost',
    locale: b.locale,
    title: b.title,
    slug: { _type: 'slug', current: b.slug },
    publishedAt: b.publishedAt,
    category: b.category,
    excerpt: b.excerpt,
    legacyImageUrl: b.legacyImageUrl,
    body: b.body,
  };
}

async function main() {
  const token = sanitizeSanityToken(process.env.SANITY_API_WRITE_TOKEN);
  if (!token) {
    console.error('Missing SANITY_API_WRITE_TOKEN. See comment at top of this file.');
    process.exit(1);
  }

  const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

  let trx = client.transaction();
  for (const r of REALIZATIONS_EN) {
    trx = trx.createOrReplace(realizationDocumentEn(r));
  }
  for (const b of BLOG_POSTS_EN) {
    trx = trx.createOrReplace(blogDocumentEn(b));
  }
  await trx.commit();

  console.log(
    `OK: ${REALIZATIONS_EN.length} EN realizations + ${BLOG_POSTS_EN.length} EN blog posts (createOrReplace).`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
