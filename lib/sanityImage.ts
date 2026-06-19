import imageUrlBuilder from '@sanity/image-url';
import { SANITY_DATASET, SANITY_PROJECT_ID } from './sanityConfig';

const projectId =
  (import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined) || SANITY_PROJECT_ID;
const dataset =
  (import.meta.env.VITE_SANITY_DATASET as string | undefined) || SANITY_DATASET;

const builder =
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }) : null;

export function urlForImage(source: Parameters<NonNullable<typeof builder>['image']>[0]) {
  if (!builder) return null;
  return builder.image(source);
}
