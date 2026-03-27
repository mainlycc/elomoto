import { useEffect, useState } from 'react';
import { sanityClient, sanityConfigured } from '../lib/sanityClient';
import { mapSanityTeamMember } from '../lib/sanityMappers';
import { teamMembersQuery } from '../lib/sanityQueries';
import type { TeamMember } from '../types';
import michalSuskaPhoto from '../1. Michal-Suska.jpg';
import andrzejSmiegielskiPhoto from '../2.Andrzej-Smiegielski.jpg';
import marcelHulewiczPhoto from '../3.Marcel Hulewicz.png';
import lukaszGradowskiPhoto from '../4. Lukasz-Gradowski.jpg';
import kamilJankowskiPhoto from '../5. Kamil-Jankowski.jpg';
import kamilaKrawczykPhoto from '../6.Kamila Krawczyk.jpg';
import damianPietruchaPhoto from '../7.Damian Pietrucha.png';

type Row = Parameters<typeof mapSanityTeamMember>[0];

const fallbackMembers: TeamMember[] = [
  {
    id: 'fallback-michal-suska',
    order: 1,
    fullName: 'Michał Suśka',
    position: 'Zespół Elomoto',
    bio: 'Współtworzy rozwój projektów i standardów obsługi w obszarze elektromobilności.',
    photo: michalSuskaPhoto,
    photoAlt: 'Michał Suśka - Zespół Elomoto',
  },
  {
    id: 'fallback-andrzej-smiegielski',
    order: 2,
    fullName: 'Andrzej Śmiegielski',
    position: 'Zespół Elomoto',
    bio: 'Wspiera realizację inwestycji i rozwój infrastruktury ładowania w skali ogólnopolskiej.',
    photo: andrzejSmiegielskiPhoto,
    photoAlt: 'Andrzej Śmiegielski - Zespół Elomoto',
  },
  {
    id: 'fallback-marcel-hulewicz',
    order: 3,
    fullName: 'Marcel Hulewicz',
    position: 'Zespół Elomoto',
    bio: 'Odpowiada za sprawną koordynację działań operacyjnych i wdrożeniowych.',
    photo: marcelHulewiczPhoto,
    photoAlt: 'Marcel Hulewicz - Zespół Elomoto',
  },
  {
    id: 'fallback-lukasz-gradowski',
    order: 4,
    fullName: 'Łukasz Gradowski',
    position: 'Zespół Elomoto',
    bio: 'Koncentruje się na jakości wykonania oraz terminowej realizacji kolejnych etapów projektów.',
    photo: lukaszGradowskiPhoto,
    photoAlt: 'Łukasz Gradowski - Zespół Elomoto',
  },
  {
    id: 'fallback-kamil-jankowski',
    order: 5,
    fullName: 'Kamil Jankowski',
    position: 'Zespół Elomoto',
    bio: 'Wspiera obszar techniczny i rozwój niezawodnych rozwiązań dla użytkowników stacji.',
    photo: kamilJankowskiPhoto,
    photoAlt: 'Kamil Jankowski - Zespół Elomoto',
  },
  {
    id: 'fallback-kamila-krawczyk',
    order: 6,
    fullName: 'Kamila Krawczyk',
    position: 'Zespół Elomoto',
    bio: 'Dba o komunikację i organizację procesów, które przekładają się na wysoką jakość obsługi.',
    photo: kamilaKrawczykPhoto,
    photoAlt: 'Kamila Krawczyk - Zespół Elomoto',
  },
  {
    id: 'fallback-damian-pietrucha',
    order: 7,
    fullName: 'Damian Pietrucha',
    position: 'Zespół Elomoto',
    bio: 'Współuczestniczy w rozwoju narzędzi i procesów wspierających skalowanie sieci ładowania.',
    photo: damianPietruchaPhoto,
    photoAlt: 'Damian Pietrucha - Zespół Elomoto',
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
          .filter((member): member is TeamMember => member !== null);
        setMembers(mapped.length > 0 ? mapped : fallbackMembers);
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
