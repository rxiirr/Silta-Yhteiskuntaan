
export enum Page {
  HOME = 'home',
  SERVICES = 'services',
  ABOUT = 'about',
  BLOG = 'blog',
  CONTACT = 'contact',
  JOIN = 'join'
}

export interface NavItem {
  label: string;
  page: Page;
}

export interface ServiceItem {
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  icon: string;
  color: string;
  tag?: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
  bgClass: string;
  iconClass: string;
}
