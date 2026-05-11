import { useEffect, useState } from 'react';
import { sanityClient, sanityConfigured } from '../lib/sanityClient';
import { mapSanityTeamMember } from '../lib/sanityMappers';
import { teamMembersQuery } from '../lib/sanityQueries';
import type { TeamMember } from '../types';

type Row = Parameters<typeof mapSanityTeamMember>[0];

function initials(fullName: string): string {
  const parts = fullName
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? '') : '';
  return (first + last).toUpperCase();
}

function placeholderAvatarDataUrl(label: string): string {
  const safeLabel = label.replace(/[<>&"]/g, '');
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" role="img" aria-label="${safeLabel}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a1a14"/>
      <stop offset="1" stop-color="#8ab925"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="64" fill="url(#g)"/>
  <circle cx="256" cy="210" r="88" fill="rgba(255,255,255,0.18)"/>
  <path d="M128 420c20-86 92-132 128-132s108 46 128 132" fill="rgba(255,255,255,0.18)"/>
  <text x="256" y="286" text-anchor="middle" font-family="Plus Jakarta Sans, system-ui, -apple-system, Segoe UI, Roboto, Arial" font-size="72" font-weight="800" fill="rgba(255,255,255,0.85)">${safeLabel}</text>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/** Używane tylko gdy brak konfiguracji Sanity albo pusty dataset — nie scalamy z CMS. */
const fallbackMembers: TeamMember[] = [
  {
    id: 'fallback-michal-suska',
    order: 1,
    fullName: 'Michał Suska',
    position: 'CEO',
    bio: 'Współtworzy rozwój projektów i standardów obsługi w obszarze elektromobilności.',
    photo: placeholderAvatarDataUrl(initials('Michał Suska')),
    photoAlt: 'Członek zespołu Elomoto',
  },
  {
    id: 'fallback-andrzej-smiegielski',
    order: 2,
    fullName: 'Andrzej Śmigielski',
    position: 'CFO',
    bio: 'Wspiera realizację inwestycji i rozwój infrastruktury ładowania w skali ogólnopolskiej.',
    photo: placeholderAvatarDataUrl(initials('Andrzej Śmigielski')),
    photoAlt: 'Członek zespołu Elomoto',
  },
  {
    id: 'fallback-marcel-hulewicz',
    order: 3,
    fullName: 'Marcel Hulewicz',
    position: 'Head of Marketing and Business Development',
    bio: 'Odpowiada za sprawną koordynację działań operacyjnych i wdrożeniowych.',
    photo: placeholderAvatarDataUrl(initials('Marcel Hulewicz')),
    photoAlt: 'Członek zespołu Elomoto',
  },
  {
    id: 'fallback-lukasz-gradowski',
    order: 4,
    fullName: 'Łukasz Gradowski',
    position: 'COO',
    bio: 'Koncentruje się na jakości wykonania oraz terminowej realizacji kolejnych etapów projektów.',
    photo: placeholderAvatarDataUrl(initials('Łukasz Gradowski')),
    photoAlt: 'Członek zespołu Elomoto',
  },
  {
    id: 'fallback-kamil-jankowski',
    order: 5,
    fullName: 'Kamil Jankowski',
    position: 'Kierownik ds. Technicznych',
    bio: 'Wspiera obszar techniczny i rozwój niezawodnych rozwiązań dla użytkowników stacji.',
    photo: placeholderAvatarDataUrl(initials('Kamil Jankowski')),
    photoAlt: 'Członek zespołu Elomoto',
  },
  {
    id: 'fallback-kamila-krawczyk',
    order: 6,
    fullName: 'Kamila Krawczyk',
    position: 'Specjalista ds. Rekrutacji',
    bio: 'Dba o komunikację i organizację procesów, które przekładają się na wysoką jakość obsługi.',
    photo: placeholderAvatarDataUrl(initials('Kamila Krawczyk')),
    photoAlt: 'Członek zespołu Elomoto',
  },
  {
    id: 'fallback-damian-pietrucha',
    order: 7,
    fullName: 'Damian Pietrucha',
    position: 'Zespół Elomoto',
    bio: 'Współuczestniczy w rozwoju narzędzi i procesów wspierających skalowanie sieci ładowania.',
    photo: placeholderAvatarDataUrl(initials('Damian Pietrucha')),
    photoAlt: 'Członek zespołu Elomoto',
  },
];

export function useTeamMembers() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(sanityConfigured);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!sanityClient) {
      setMembers(fallbackMembers);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    sanityClient
      .fetch<Row[]>(teamMembersQuery)
      .then((rows) => {
        if (cancelled) return;
        const mapped = rows
          .map((row) => mapSanityTeamMember(row))
          .filter((member): member is TeamMember => member !== null)
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

        if (mapped.length === 0) {
          setMembers(fallbackMembers);
          setError(null);
          return;
        }

        setMembers(mapped);
        setError(null);
      })
      .catch((e: unknown) => {
        if (cancelled) return;
        setError(e instanceof Error ? e : new Error(String(e)));
        setMembers(fallbackMembers);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { members, loading, error };
}
