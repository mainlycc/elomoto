import type { PortableTextBlock } from '@portabletext/types';
import type { Locale } from '../i18n/i18n';
import type { BlogPost, Realization, RealizationHighlight, TeamMember } from '../types';
import { applySanityImageParams, resolveImageUrl } from './sanityImage';

export function formatBlogDate(iso: string | undefined, locale: Locale = 'pl'): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  const loc = locale === 'en' ? 'en-US' : 'pl-PL';
  return d
    .toLocaleDateString(loc, { day: 'numeric', month: 'long', year: 'numeric' })
    .toUpperCase();
}

type SanityBlogRow = {
  _id: string;
  title?: string;
  slug?: string;
  publishedAt?: string;
  category?: string;
  excerpt?: string;
  imageUrl?: string;
  mainImage?: unknown;
  legacyImageUrl?: string;
};

function resolveMappedImage(
  imageUrl: string | undefined,
  mainImage: unknown,
  legacyImageUrl: string | undefined,
  options: { width?: number; height?: number; quality?: number; fit?: 'crop' | 'max' }
): string {
  const fromQuery = applySanityImageParams(imageUrl, options);
  if (fromQuery) return fromQuery;

  const fromAsset = resolveImageUrl(mainImage, options);
  if (fromAsset) return fromAsset;

  return legacyImageUrl || '';
}

export function mapSanityBlogPost(row: SanityBlogRow, locale: Locale = 'pl'): BlogPost | null {
  if (!row.slug || !row.title) return null;
  const image = resolveMappedImage(row.imageUrl, row.mainImage, row.legacyImageUrl, {
    width: 900,
    quality: 85,
  });
  return {
    id: row._id,
    slug: row.slug,
    date: formatBlogDate(row.publishedAt, locale),
    category: row.category || '',
    title: row.title,
    excerpt: row.excerpt || '',
    image,
  };
}

type SanityEffectHighlight = { label?: string; text?: string };

type SanityRealizationRow = {
  _id: string;
  title?: string;
  slug?: string;
  order?: number;
  imageUrl?: string;
  mainImage?: unknown;
  legacyImageUrl?: string;
  intro?: string;
  body?: PortableTextBlock[];
  detailLead?: string;
  scopeTitle?: string;
  scopeContent?: PortableTextBlock[];
  effectsTitle?: string;
  effectsLead?: string;
  effectsHighlights?: SanityEffectHighlight[];
};

function mapEffectHighlights(rows: SanityEffectHighlight[] | undefined): RealizationHighlight[] | undefined {
  if (!rows?.length) return undefined;
  const out = rows
    .map((h) => ({
      label: typeof h?.label === 'string' ? h.label : '',
      text: typeof h?.text === 'string' ? h.text : '',
    }))
    .filter((h) => h.label.trim() || h.text.trim());
  return out.length ? out : undefined;
}

export function mapSanityRealization(row: SanityRealizationRow): Realization | null {
  if (!row.slug || !row.title) return null;
  const image = resolveMappedImage(row.imageUrl, row.mainImage, row.legacyImageUrl, {
    width: 800,
    quality: 85,
  });
  return {
    id: row._id,
    order: typeof row.order === 'number' ? row.order : 0,
    title: row.title,
    slug: row.slug,
    image,
    intro: row.intro,
    body: row.body,
    detailLead: row.detailLead,
    scopeTitle: row.scopeTitle,
    scopeContent: row.scopeContent,
    effectsTitle: row.effectsTitle,
    effectsLead: row.effectsLead,
    effectsHighlights: mapEffectHighlights(row.effectsHighlights),
  };
}

type SanityTeamMemberRow = {
  _id: string;
  fullName?: string;
  position?: string;
  order?: number;
  photoUrl?: string;
  legacyPhotoUrl?: string;
  photo?: {
    alt?: string;
  };
};

export function mapSanityTeamMember(row: SanityTeamMemberRow): TeamMember | null {
  if (!row.fullName || !row.position) return null;
  const photo = resolveMappedImage(row.photoUrl, row.photo, row.legacyPhotoUrl, {
    width: 720,
    height: 960,
    quality: 85,
    fit: 'crop',
  });

  return {
    id: row._id,
    order: typeof row.order === 'number' ? row.order : 0,
    fullName: row.fullName,
    position: row.position,
    photo: photo || 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=900',
    photoAlt: row.photo?.alt || `${row.fullName} - ${row.position}`,
  };
}
