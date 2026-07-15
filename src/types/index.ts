export type ProjectCategory = 'frontend' | 'react-native' | 'backend';

export interface Project {
  id: string;
  name: string;
  technology: string;
  category: ProjectCategory;
  image: string;
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  percentage: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  hexagonImage: string;
  accentColor: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  icon: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export type SocialIcon = 'envelope' | 'linkedin' | 'github' | 'whatsapp';

export interface SocialLink {
  id: string;
  icon: SocialIcon;
  href: string;
  label: string;
  external?: boolean;
}
