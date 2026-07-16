import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { navLinks } from '../../data/links';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  enableScrollSpy?: boolean;
}

const scrollWithOffset = (element: HTMLElement) => {
  const yCoordinate = element.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: yCoordinate , behavior: 'smooth' });
};

export const Navbar = ({ enableScrollSpy = true }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const sectionIds = navLinks.map((link) => link.id);
  const activeId = useScrollSpy(enableScrollSpy ? sectionIds : [], 240);

  const getTo = (href: string) => (isHome ? href : `/${href}`);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="fixed z-[100] w-full bg-[var(--color-nav)]">
      <div className="mx-auto max-sm:w-[95%] sm:w-[90%]">
        <div className="flex flex-wrap items-center justify-between py-[1.3rem] text-[1.2rem] capitalize text-white max-sm:py-4">
          <Link
            to="/"
            className="text-[var(--primary-color)] font-semibold text-2xl uppercase tracking-tight"
            onClick={handleLinkClick}
          >
            Portfolio
          </Link>

          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="ml-4 cursor-pointer text-white"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          <ul
            className={`list-none transition-all duration-300 md:flex md:w-1/2 md:flex-row md:flex-nowrap md:items-center md:justify-between md:p-0 lg:w-1/2 ${
              menuOpen
                ? 'flex flex-col w-full items-center gap-2 sm:gap-4'
                : 'hidden md:flex'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = enableScrollSpy && isHome && activeId === link.id;

              return (
                <li key={link.id}>
                  <HashLink
                    smooth
                    scroll={scrollWithOffset}
                    to={getTo(link.href)}
                    onClick={handleLinkClick}
                    className={`inline-block px-0 text-white transition-all duration-200 hover:scale-110 max-sm:my-2 max-sm:mx-auto max-sm:text-center sm:max-md:mx-52 ${
                      isActive
                        ? 'scale-110 border-b border-[var(--primary-color)] !text-[var(--primary-color)]'
                        : ''
                    }`}
                  >
                    {link.label}
                  </HashLink>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:block">
              <ThemeToggle />
            </div>
        </div>
      </div>
    </nav>
  );
};
