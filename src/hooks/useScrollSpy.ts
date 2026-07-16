import { useEffect, useState } from 'react';

export const useScrollSpy = (sectionIds: string[], offset = 240) => {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (const section of sections) {
        const top = section.offsetTop - offset;
        const height = section.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          setActiveId(section.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
};
