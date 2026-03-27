import { useEffect, useState } from 'react';
import { fallbackRealizations } from '../lib/fallbackRealizations';
import type { Realization } from '../types';

export function useRealizationBySlug(slug: string | undefined) {
  const [realization, setRealization] = useState<Realization | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!slug) {
      setRealization(null);
      setLoading(false);
      return;
    }

    const fallback = fallbackRealizations.find((item) => item.slug === slug) ?? null;
    setRealization(fallback);
    setError(null);
    setLoading(false);
  }, [slug]);

  return { realization, loading, error };
}
