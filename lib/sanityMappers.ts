import type { PortableTextBlock } from '@portabletext/types';
import type { BlogPost, Realization } from '../types';
import { urlForImage } from './sanityImage';

export function formatBlogDate(iso: string | undefined): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d
    .toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' })
    .toUpperCase();
}

type SanityBlogRow = {
  _id: string;
  title?: string;
  slug?: string;
  publishedAt?: string;
  category?: string;
  excerpt?: string;
  mainImage?: unknown;
  legacyImageUrl?: string;
};

export function mapSanityBlogPost(row: SanityBlogRow): BlogPost | null {
  if (!row.slug || !row.title) return null;
  const fromAsset = row.mainImage
    ? urlForImage(row.mainImage as never)
        ?.width(900)
        .quality(85)
        .url()
    : undefined;
  const image = fromAsset || row.legacyImageUrl || '';
  return {
    id: row._id,
    slug: row.slug,
    date: formatBlogDate(row.publishedAt),
    category: row.category || '',
    title: row.title,
    excerpt: row.excerpt || '',
    image,
  };
}

type SanityRealizationRow = {
  _id: string;
  title?: string;
  slug?: string;
  order?: number;
  mainImage?: unknown;
  legacyImageUrl?: string;
  intro?: string;
  body?: PortableTextBlock[];
};

export function mapSanityRealization(row: SanityRealizationRow): Realization | null {
  if (!row.slug || !row.title) return null;
  const fromAsset = row.mainImage
    ? urlForImage(row.mainImage as never)
        ?.width(800)
        .quality(85)
        .url()
    : undefined;
  const image = fromAsset || row.legacyImageUrl || '';
  return {
    id: row._id,
    order: typeof row.order === 'number' ? row.order : 0,
    title: row.title,
    slug: row.slug,
    image,
    intro: row.intro,
    body: row.body,
  };
}
