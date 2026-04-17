import fs from 'node:fs/promises';
import path from 'node:path';

const projectRoot = process.cwd();
const inputPath = path.join(projectRoot, 'public', 'Stacje ładowania Elomoto.kml');
const outputPath = path.join(projectRoot, 'public', 'stacje-data.kml');

function extractNetworkLinkHref(xml) {
  const match =
    xml.match(/<href><!\[CDATA\[(.*?)\]\]><\/href>/i) || xml.match(/<href>(.*?)<\/href>/i);
  return match?.[1]?.trim() || null;
}

async function main() {
  const inputXml = await fs.readFile(inputPath, 'utf8');
  const href = extractNetworkLinkHref(inputXml);
  if (!href) {
    // Plik już może być pełnym KML-em; wtedy tylko kopiujemy.
    await fs.writeFile(outputPath, inputXml, 'utf8');
    console.log(`[sync-kml] copied full KML to ${outputPath}`);
    return;
  }

  const res = await fetch(href, {
    headers: {
      'user-agent': 'elomoto-kml-sync/1.0',
      accept: 'application/vnd.google-earth.kml+xml,application/xml,text/xml,*/*',
    },
  });
  if (!res.ok) {
    throw new Error(`[sync-kml] fetch failed: ${res.status} ${res.statusText}`);
  }
  const kml = await res.text();
  if (!kml.includes('<Placemark')) {
    throw new Error('[sync-kml] fetched KML does not contain Placemark entries');
  }

  await fs.writeFile(outputPath, kml, 'utf8');
  console.log(`[sync-kml] wrote ${outputPath} (${kml.length} chars)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

