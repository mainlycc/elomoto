import { NavItem, ServiceItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { labelKey: 'nav.about', href: '/o-nas' },
  { labelKey: 'nav.offer', href: '#services' },
  { labelKey: 'nav.process', href: '#process' },
  { labelKey: 'nav.realizations', href: '/realizacje' },
  { labelKey: 'nav.chargingMap', href: '#charging-map' },
  { labelKey: 'nav.blog', href: '/blog' },
  { labelKey: 'nav.contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    titleKey: 'services.items.parkingLease.title',
    descriptionKey: 'services.items.parkingLease.description',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=800',
    link: '/oferta/darmowa-ladowarka'
  },
  {
    titleKey: 'services.items.installationOps.title',
    descriptionKey: 'services.items.installationOps.description',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800',
    link: '/oferta/montaz'
  },
  {
    titleKey: 'services.items.parkingAudit.title',
    descriptionKey: 'services.items.parkingAudit.description',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
    link: '/oferta/ekspertyzy'
  },
  {
    titleKey: 'services.items.operator.title',
    descriptionKey: 'services.items.operator.description',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    link: '/oferta/operator'
  },
];

