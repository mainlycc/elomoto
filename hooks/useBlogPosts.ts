import { useEffect, useState } from 'react';
import { sanityClient, sanityConfigured } from '../lib/sanityClient';
import { mapSanityBlogPost } from '../lib/sanityMappers';
import { blogPostsQuery } from '../lib/sanityQueries';
import type { BlogPost } from '../types';

type Row = Parameters<typeof mapSanityBlogPost>[0];

export function useBlogPosts() {
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
      .fetch<Row[]>(blogPostsQuery)
      .then((rows) => {
        if (cancelled) return;
        const mapped = rows
          .map((row) => mapSanityBlogPost(row))
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
  }, []);

  return { posts, loading, error };
}
