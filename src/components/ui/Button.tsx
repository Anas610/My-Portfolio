import type { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  download?: boolean;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
  children: ReactNode;
  external?: boolean;
}

export const Button = ({
  href,
  download,
  onClick,
  variant = 'primary',
  className = '',
  children,
  external,
}: ButtonProps) => {
  const base =
    'inline-flex items-center capitalize text-[1.1rem] font-semibold rounded-[2rem] cursor-pointer transition-all duration-300 border-2 border-[var(--primary-color)] px-8 py-3';

  const variants = {
    primary:
      'bg-[var(--primary-color)] text-white hover:bg-transparent hover:text-[var(--primary-color)]',
    outline:
      'bg-transparent text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
