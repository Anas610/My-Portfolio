import {
  faClock,
  faCode,
  faDatabase,
  faEarthAmericas,
  faEnvelope,
  faEye,
  faHandshake,
  faLightbulb,
  faLaptopCode,
  faMobileScreenButton,
  faMoon,
  faMugHot,
  faSun,
  faUsers,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faUikit,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const iconMap: Record<string, IconDefinition> = {
  lightbulb: faLightbulb,
  code: faCode,
  database: faDatabase,
  'earth-americas': faEarthAmericas,
  'mobile-screen-button': faMobileScreenButton,
  uikit: faUikit,
  envelope: faEnvelope,
  linkedin: faLinkedin,
  github: faGithub,
  whatsapp: faWhatsapp,
  'laptop-code': faLaptopCode,
  users: faUsers,
  clock: faClock,
  'mug-hot': faMugHot,
  handshake: faHandshake,
  eye: faEye,
  sun: faSun,
  moon: faMoon,
  "arrow-right": faArrowRight,
};

export const getIcon = (name: string): IconDefinition | undefined => iconMap[name];
