import type { NavLink, SocialLink } from '../types';

export const email = 'anas.hossam.work@gmail.com';
export const mailto = `mailto:${email}`;
export const resumePath = '/resume/Anas-Hossam-CV.pdf';

export const navLinks: NavLink[] = [
  { id: 'home', label: 'home', href: '#home' },
  { id: 'services', label: 'services', href: '#services' },
  { id: 'projects', label: 'projects', href: '#projects' },
  { id: 'about', label: 'about', href: '#about' },
  { id: 'contact', label: 'contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  {
    id: 'whatsapp',
    icon: 'whatsapp',
    href: 'https://wa.me/201144686309',
    label: 'WhatsApp',
    external: true,
  },
  {
    id: 'linkedin',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/anas-hossam-704276216/',
    label: 'LinkedIn',
    external: true,
  },
  {
    id: 'github',
    icon: 'github',
    href: 'https://github.com/Anas610',
    label: 'GitHub',
    external: true,
  },
];
