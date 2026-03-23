import { useEffect, useState } from 'react';
import { sanityClient, sanityConfigured } from '../lib/sanityClient';
import { mapSanityRealization } from '../lib/sanityMappers';
import { realizationBySlugQuery } from '../lib/sanityQueries';
import type { Realization } from '../types';

type Row = Parameters<typeof mapSanityRealization>[0];

export function useRealizationBySlug(slug: string | undefined) {
  const [realization, setRealization] = useState<Realization | null>(null);
  const [loading, setLoading] = useState(Boolean(sanityConfigured && slug));
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!slug) {
      setRealization(null);
      setLoading(false);
      return;
    }

    if (!sanityClient) {
      setRealization(null);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    sanityClient
      .fetch<Row | null>(realizationBySlugQuery, { slug })
      .then((row) => {
        if (cancelled) return;
        const mapped = row ? mapSanityRealization(row) : null;
        setRealization(mapped);
        setError(null);
      })
      .catch((e: unknown) => {
        if (cancelled) return;
        setError(e instanceof Error ? e : new Error(String(e)));
        setRealization(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { realization, loading, error };
}
