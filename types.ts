
export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface BlogPost {
  id: number;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface Realization {
  id: number;
  image: string;
  title: string;
  slug: string;
}
