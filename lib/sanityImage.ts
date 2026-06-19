import imageUrlBuilder from '@sanity/image-url';
import { SANITY_DATASET, SANITY_PROJECT_ID } from './sanityConfig';

const projectId =
  (import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined) || SANITY_PROJECT_ID;
const dataset =
  (import.meta.env.VITE_SANITY_DATASET as string | undefined) || SANITY_DATASET;

const builder =
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }) : null;

type ImageTransformOptions = {
  width?: number;
  height?: number;
  quality?: number;
  fit?: 'crop' | 'max' | 'min' | 'clip';
};

function hasImageAsset(source: unknown): boolean {
  if (!source || typeof source !== 'object') return false;
  const asset = (source as { asset?: unknown }).asset;
  if (!asset || typeof asset !== 'object') return false;
  const candidate = asset as { _ref?: unknown; _id?: unknown; url?: unknown };
  return Boolean(
    (typeof candidate._ref === 'string' && candidate._ref) ||
      (typeof candidate._id === 'string' && candidate._id) ||
      (typeof candidate.url === 'string' && candidate.url)
  );
}

export function urlForImage(source: Parameters<NonNullable<typeof builder>['image']>[0]) {
  if (!builder || !hasImageAsset(source)) return null;
  return builder.image(source);
}

export function resolveImageUrl(
  source: unknown,
  options: ImageTransformOptions = {}
): string | undefined {
  try {
    const img = urlForImage(source as never);
    if (!img) return undefined;

    let chain = img;
    if (options.width) chain = chain.width(options.width);
    if (options.height) chain = chain.height(options.height);
    if (options.quality) chain = chain.quality(options.quality);
    if (options.fit) chain = chain.fit(options.fit);
    return chain.url();
  } catch {
    return undefined;
  }
}

export function applySanityImageParams(
  url: string | undefined,
  options: ImageTransformOptions = {}
): string {
  if (!url) return '';
  if (!url.includes('cdn.sanity.io')) return url;

  try {
    const parsed = new URL(url);
    if (options.width) parsed.searchParams.set('w', String(options.width));
    if (options.height) parsed.searchParams.set('h', String(options.height));
    if (options.quality) parsed.searchParams.set('q', String(options.quality));
    if (options.fit) parsed.searchParams.set('fit', options.fit);
    parsed.searchParams.set('auto', 'format');
    return parsed.toString();
  } catch {
    return url;
  }
}
