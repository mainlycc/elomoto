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
    image: '/oferta/1miejscaparkingowe.jpg',
    link: '/oferta/darmowa-ladowarka'
  },
  {
    titleKey: 'services.items.installationOps.title',
    descriptionKey: 'services.items.installationOps.description',
    image: '/oferta/montaz.jpg',
    link: '/oferta/montaz'
  },
  {
    titleKey: 'services.items.parkingAudit.title',
    descriptionKey: 'services.items.parkingAudit.description',
    image: '/oferta/darmowa-ladowarka.jpg',
    link: '/oferta/ekspertyzy'
  },
  {
    titleKey: 'services.items.operator.title',
    descriptionKey: 'services.items.operator.description',
    image: '/oferta/eksperty.png',
    link: '/oferta/operator'
  },
];

