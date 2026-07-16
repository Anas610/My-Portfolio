import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { SocialLink } from '../../types';
import { isValidUrl } from '../../utils/links';
import { getIcon } from '../../utils/icons';

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

export const SocialLinks = ({ links, className = '' }: SocialLinksProps) => {
  const visibleLinks = links.filter((link) => isValidUrl(link.href));

  return (
    <div className={`flex justify-between w-[18rem] mx-auto ${className}`}>
      {visibleLinks.map((link) => {
        const icon = getIcon(link.icon);
        if (!icon) return null;

        return (
          <div
            key={link.id}
            className="flex h-[2.8rem] w-[2.8rem] cursor-pointer items-center justify-center rounded-full border-2 border-[var(--primary-color)] opacity-30 transition-opacity duration-200 hover:opacity-100"
          >
            <a
              href={link.href}
              title={link.label}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="text-[var(--primary-color)]"
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          </div>
        );
      })}
    </div>
  );
};
