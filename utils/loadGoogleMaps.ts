type LoadGoogleMapsOptions = {
  apiKey: string;
  language?: string;
  region?: string;
};

declare global {
  interface Window {
    google?: any;
  }
}

let loadingPromise: Promise<void> | null = null;

export function loadGoogleMaps({ apiKey, language, region }: LoadGoogleMapsOptions): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.google?.maps) return Promise.resolve();
  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-google-maps="true"]');
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('Google Maps script failed to load')), {
        once: true,
      });
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.dataset.googleMaps = 'true';

    const params = new URLSearchParams({
      key: apiKey,
      v: 'weekly',
    });
    if (language) params.set('language', language);
    if (region) params.set('region', region);

    script.src = `https://maps.googleapis.com/maps/api/js?${params.toString()}`;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Google Maps script failed to load'));

    document.head.appendChild(script);
  });

  return loadingPromise;
}

