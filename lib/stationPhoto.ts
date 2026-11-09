const ALLOWED_HOST = 'mymaps.usercontent.google.com';
const MAX_BYTES = 6_000_000;

export type StationPhotoResult =
  | { ok: true; contentType: string; body: Buffer }
  | { ok: false; status: number };

const isAllowedPhotoUrl = (url: URL) =>
  url.protocol === 'https:' &&
  url.hostname === ALLOWED_HOST &&
  url.pathname.startsWith('/hostedimage/');

export async function loadStationPhoto(rawUrl: string): Promise<StationPhotoResult> {
  let photoUrl: URL;
  try {
    photoUrl = new URL(rawUrl);
  } catch {
    return { ok: false, status: 400 };
  }

  if (!isAllowedPhotoUrl(photoUrl)) {
    return { ok: false, status: 400 };
  }

  photoUrl.searchParams.set('fife', 's960');

  let response: Response;
  try {
    response = await fetch(photoUrl, {
      redirect: 'follow',
      headers: { accept: 'image/avif,image/webp,image/png,image/jpeg,image/*;q=0.8' },
    });
  } catch {
    return { ok: false, status: 502 };
  }

  let finalUrl: URL;
  try {
    finalUrl = new URL(response.url);
  } catch {
    return { ok: false, status: 502 };
  }

  if (!response.ok || !isAllowedPhotoUrl(finalUrl)) {
    return { ok: false, status: 502 };
  }

  const contentType = (response.headers.get('content-type') || '').split(';')[0].trim().toLowerCase();
  if (!contentType.startsWith('image/')) {
    return { ok: false, status: 502 };
  }

  const body = Buffer.from(await response.arrayBuffer());
  if (body.length < 32 || body.length > MAX_BYTES) {
    return { ok: false, status: 502 };
  }

  return { ok: true, contentType, body };
}
