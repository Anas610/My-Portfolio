import { EXPERIENCE_START_YEAR } from '../data/personal';

export const getYearsOfExperience = (): number =>
  new Date().getFullYear() - EXPERIENCE_START_YEAR;

export const getCurrentYear = (): number => new Date().getFullYear();
