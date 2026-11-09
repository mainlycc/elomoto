import { loadStationPhoto } from '../lib/stationPhoto';

const readSrc = (req: { url?: string; query?: { src?: string | string[] } }) => {
  const fromQuery = req.query?.src;
  if (typeof fromQuery === 'string' && fromQuery) return fromQuery;
  try {
    return new URL(req.url || '', 'http://localhost').searchParams.get('src') || '';
  } catch {
    return '';
  }
};

export default async function handler(req: { method?: string; url?: string; query?: { src?: string | string[] } }, res: any) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.statusCode = 405;
    res.setHeader('Allow', 'GET, HEAD');
    res.end();
    return;
  }

  const result = await loadStationPhoto(readSrc(req));
  if (!result.ok) {
    res.statusCode = result.status;
    res.end();
    return;
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', result.contentType);
  res.setHeader('Content-Length', String(result.body.length));
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  res.end(req.method === 'HEAD' ? undefined : result.body);
}
