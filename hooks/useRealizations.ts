import { useEffect, useState } from 'react';
import { useI18n } from '../i18n/I18nProvider';
import { sanityClient, sanityConfigured } from '../lib/sanityClient';
import { mapSanityRealization } from '../lib/sanityMappers';
import { realizationsQuery } from '../lib/sanityQueries';
import type { Realization } from '../types';

type Row = Parameters<typeof mapSanityRealization>[0];

export function useRealizations() {
  const { locale } = useI18n();
  const [items, setItems] = useState<Realization[]>([]);
  const [loading, setLoading] = useState(sanityConfigured);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!sanityClient) {
      setItems([]);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    sanityClient
      .fetch<Row[]>(realizationsQuery, { locale })
      .then((rows) => {
        if (cancelled) return;
        const mapped = rows
          .map((row) => {
            try {
              return mapSanityRealization(row);
            } catch {
              return null;
            }
          })
          .filter((r): r is Realization => r !== null);
        setItems(mapped);
        setError(null);
      })
      .catch((e: unknown) => {
        if (cancelled) return;
        setError(e instanceof Error ? e : new Error(String(e)));
        setItems([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [locale]);

  return { realizations: items, loading, error };
}
