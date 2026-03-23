import { createClient, type SanityClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined;
const dataset = import.meta.env.VITE_SANITY_DATASET as string | undefined;
const apiVersion =
  (import.meta.env.VITE_SANITY_API_VERSION as string | undefined) || '2024-01-01';

export const sanityConfigured = Boolean(projectId && dataset);

export const sanityClient: SanityClient | null = sanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset: dataset!,
      apiVersion,
      useCdn: true,
    })
  : null;
