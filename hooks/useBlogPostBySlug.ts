import { useEffect, useState } from 'react';
import { sanityClient, sanityConfigured } from '../lib/sanityClient';
import { mapSanityBlogPost } from '../lib/sanityMappers';
import { blogPostBySlugQuery } from '../lib/sanityQueries';
import type { PortableTextBlock } from '@portabletext/types';
import type { BlogPost } from '../types';

type Row = Parameters<typeof mapSanityBlogPost>[0] & { body?: PortableTextBlock[] };

export type BlogPostDetail = BlogPost & { body: PortableTextBlock[] };

export function useBlogPostBySlug(slug: string | undefined) {
  const [post, setPost] = useState<BlogPostDetail | null>(null);
  const [loading, setLoading] = useState(Boolean(sanityConfigured && slug));
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!slug) {
      setPost(null);
      setLoading(false);
      return;
    }

    if (!sanityClient) {
      setPost(null);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    sanityClient
      .fetch<Row | null>(blogPostBySlugQuery, { slug })
      .then((row) => {
        if (cancelled) return;
        if (!row) {
          setPost(null);
          setError(null);
          return;
        }
        const base = mapSanityBlogPost(row);
        if (!base) {
          setPost(null);
          return;
        }
        setPost({
          ...base,
          body: Array.isArray(row.body) ? row.body : [],
        });
        setError(null);
      })
      .catch((e: unknown) => {
        if (cancelled) return;
        setError(e instanceof Error ? e : new Error(String(e)));
        setPost(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { post, loading, error };
}
