import { NavItem, ServiceItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'O NAS', href: '#about' },
  { label: 'OFERTA', href: '#services' },
  { label: 'PROCES', href: '#process' },
  { label: 'MAPA STACJI', href: '#charging-map' },
  { label: 'BLOG', href: '/blog' },
  { label: 'KONTAKT', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'DZIERŻAWA MIEJSC PARKINGOWYCH',
    description: 'Wydzierżaw nam miejsce parkingowe i czerp zyski.',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=800',
    link: '#service-lease'
  },
  {
    title: 'MONTAŻ I OBSŁUGA STACJI ŁADOWANIA',
    description: 'Zamów kompleksową usługę montażu stacji ładowania w swoim domu lub firmie.',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800',
    link: '#service-install'
  },
  {
    title: 'EKSPERTYZA MIEJSC POSTOJOWYCH',
    description: 'Sprawdź czy możesz zamontować ładowarkę w swoim budynku.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
    link: '#service-audit'
  },
  {
    title: 'USŁUGA OPERATORSKA',
    description: 'Zamów usługę operatorską dla swojej stacji ładowania.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    link: '#service-operator'
  },
];

