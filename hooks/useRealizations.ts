import { useEffect, useState } from 'react';
import { fallbackRealizations } from '../lib/fallbackRealizations';
import type { Realization } from '../types';

export function useRealizations() {
  const [items, setItems] = useState<Realization[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setItems(fallbackRealizations);
    setError(null);
    setLoading(false);
  }, []);

  return { realizations: items, loading, error };
}
