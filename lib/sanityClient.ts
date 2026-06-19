import { createClient, type SanityClient } from '@sanity/client';
import {
  SANITY_API_VERSION,
  SANITY_DATASET,
  SANITY_PROJECT_ID,
} from './sanityConfig';

const projectId =
  (import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined) || SANITY_PROJECT_ID;
const dataset =
  (import.meta.env.VITE_SANITY_DATASET as string | undefined) || SANITY_DATASET;
const apiVersion =
  (import.meta.env.VITE_SANITY_API_VERSION as string | undefined) || SANITY_API_VERSION;

export const sanityConfigured = Boolean(projectId && dataset);

export const sanityClient: SanityClient | null = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;
