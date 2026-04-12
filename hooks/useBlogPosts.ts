import { useEffect, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider';
import { sanityClient, sanityConfigured } from '../lib/sanityClient';
import { mapSanityBlogPost } from '../lib/sanityMappers';
import { blogPostsQuery } from '../lib/sanityQueries';
import type { BlogPost } from '../types';

type Row = Parameters<typeof mapSanityBlogPost>[0];

export function useBlogPosts() {
  const { locale } = useI18n();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(sanityConfigured);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!sanityClient) {
      setPosts([]);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    sanityClient
      .fetch<Row[]>(blogPostsQuery, { locale })
      .then((rows) => {
        if (cancelled) return;
        const mapped = rows
          .map((row) => mapSanityBlogPost(row, locale))
          .filter((p): p is BlogPost => p !== null);
        setPosts(mapped);
        setError(null);
      })
      .catch((e: unknown) => {
        if (cancelled) return;
        setError(e instanceof Error ? e : new Error(String(e)));
        setPosts([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [locale]);

  return { posts, loading, error };
}
