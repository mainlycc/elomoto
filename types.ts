import type { PortableTextBlock } from '@portabletext/types';

export interface NavItem {
  label?: string;
  labelKey?: string;
  href: string;
}

export interface ServiceItem {
  title?: string;
  titleKey?: string;
  description?: string;
  descriptionKey?: string;
  image: string;
  link: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface Realization {
  id: string;
  order: number;
  image: string;
  title: string;
  slug: string;
  intro?: string;
  body?: PortableTextBlock[];
}

export interface TeamMember {
  id: string;
  order: number;
  fullName: string;
  position: string;
  bio?: string;
  photo: string;
  photoAlt: string;
}

export const CONTACT_TOPIC_IDS = ['subsidies', 'install', 'lease', 'operator', 'audit'] as const;

export type ContactTopicId = (typeof CONTACT_TOPIC_IDS)[number];

export interface ContactFormPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  topic: ContactTopicId;
  consent: boolean;
}
