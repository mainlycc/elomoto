
import React from 'react';
import { NavItem, ServiceItem, BlogPost, Realization } from './types';

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

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    date: '23 KWIETNIA 2024',
    category: 'MAINTENANCE / TECHNOLOGY',
    title: 'DLACZEGO ŁADOWARKI W MIEJSCACH PRACY SĄ TAK WAŻNE?',
    excerpt: 'W dzisiejszych czasach elektromobilność staje się standardem, a firmy coraz częściej...',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    date: '3 KWIETNIA 2024',
    category: 'AUTO TIPS / AUTOMOBILE',
    title: 'DUZI PRZEDSIĘBIORCY – ELEKTROMOBILNOŚĆ TO JUŻ NIE CIEKAWOSTKA!',
    excerpt: 'Rozwój infrastruktury ładowania pojazdów elektrycznych v Polsce nabiera tempa...',
    image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    date: '28 MARCA 2024',
    category: 'BEZ KATEGORII',
    title: 'NIEMCY: PONAD POŁOWA NOWO ZAREJESTROWANYCH SAMOCHODÓW...',
    excerpt: 'Wyniki sprzedaży aut u naszych zachodnich sąsiadów pokazują jasny kierunek zmian...',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800'
  },
];

export const REALIZATIONS: Realization[] = [
  {
    id: 1,
    title: 'Biurowiec Warszawa',
    slug: 'biurowiec-warszawa',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    title: 'Hotel Hilton Kraków',
    slug: 'hotel-hilton-krakow',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    title: 'Centrum Handlowe Gdynia',
    slug: 'centrum-handlowe-gdynia',
    image: 'https://images.unsplash.com/photo-1567449300518-034887bc4751?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 4,
    title: 'Osiedle Zielone Tarasy',
    slug: 'osiedle-zielone-tarasy',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 5,
    title: 'Parking Publiczny Wrocław',
    slug: 'parking-publiczny-wroclaw',
    image: 'https://images.unsplash.com/photo-1590674499398-2b91c8301985?auto=format&fit=crop&q=80&w=400',
  },
];
