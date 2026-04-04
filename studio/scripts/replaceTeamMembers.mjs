/**
 * Usuwa wszystkie dokumenty `teamMember` i tworzy 7 osób zgodnych z dotychczasową stroną „O nas”.
 * Próbuje wgrać lokalne pliki zdjęć z katalogu głównego repo (obok folderu `studio/`).
 *
 *   SANITY_API_WRITE_TOKEN=sk... node ./scripts/replaceTeamMembers.mjs
 */

import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const projectId = '6zehmfv6';
const dataset = 'production';
const apiVersion = '2024-01-01';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..', '..');

const PLACEHOLDER_IMAGE =
  'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=900';

const TEAM = [
  {
    _id: 'teamMember-michal-suska',
    order: 1,
    fullName: 'Michał Suska',
    position: 'CEO',
    file: '1. Michal-Suska.jpg',
  },
  {
    _id: 'teamMember-andrzej-smiegielski',
    order: 2,
    fullName: 'Andrzej Śmigielski',
    position: 'CFO',
    file: '2.Andrzej-Smiegielski.jpg',
  },
  {
    _id: 'teamMember-marcel-hulewicz',
    order: 3,
    fullName: 'Marcel Hulewicz',
    position: 'Head of Marketing and Business Development',
    file: '3.Marcel Hulewicz.png',
  },
  {
    _id: 'teamMember-lukasz-gradowski',
    order: 4,
    fullName: 'Łukasz Gradowski',
    position: 'COO',
    file: '4. Lukasz-Gradowski.jpg',
  },
  {
    _id: 'teamMember-kamil-jankowski',
    order: 5,
    fullName: 'Kamil Jankowski',
    position: 'Kierownik ds. Technicznych',
    file: '5. Kamil-Jankowski.jpg',
  },
  {
    _id: 'teamMember-kamila-krawczyk',
    order: 6,
    fullName: 'Kamila Krawczyk',
    position: 'Specjalista ds. Rekrutacji',
    file: '6.Kamila Krawczyk.jpg',
  },
  {
    _id: 'teamMember-damian-pietrucha',
    order: 7,
    fullName: 'Damian Pietrucha',
    position: 'Zespół Elomoto',
    file: '7.Damian Pietrucha.png',
  },
];

async function uploadPhoto(client, filename) {
  const abs = path.join(projectRoot, filename);
  if (!fs.existsSync(abs)) {
    console.warn(`Brak pliku (pomijam upload): ${filename}`);
    return null;
  }
  const buffer = fs.readFileSync(abs);
  const asset = await client.assets.upload('image', buffer, { filename: path.basename(filename) });
  return asset;
}

async function main() {
  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!token) {
    console.error('Brak zmiennej środowiskowej SANITY_API_WRITE_TOKEN.');
    process.exit(1);
  }

  const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

  const oldIds = await client.fetch(`*[_type == "teamMember"]._id`);
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
    console.log(`Usunięto ${oldIds.length} starych wpisów zespołu.`);
  } else {
    console.log('Brak istniejących wpisów zespołu do usunięcia.');
  }

  trx = client.transaction();
  for (const person of TEAM) {
    let photoField = undefined;
    let legacyPhotoUrl = undefined;

    try {
      const asset = await uploadPhoto(client, person.file);
      if (asset?._id) {
        photoField = {
          _type: 'image',
          asset: { _type: 'reference', _ref: asset._id },
          alt: `${person.fullName} - Zespół Elomoto`,
        };
      }
    } catch (e) {
      console.warn(`Upload nieudany dla ${person.file}:`, e?.message || e);
    }

    if (!photoField) {
      legacyPhotoUrl = PLACEHOLDER_IMAGE;
    }

    trx = trx.create({
      _id: person._id,
      _type: 'teamMember',
      fullName: person.fullName,
      position: person.position,
      order: person.order,
      ...(legacyPhotoUrl ? { legacyPhotoUrl } : {}),
      ...(photoField ? { photo: photoField } : {}),
    });
  }
  await trx.commit();

  console.log(`Zapisano ${TEAM.length} członków zespołu. Sprawdź w Studio — możesz edytować każdy dokument.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
