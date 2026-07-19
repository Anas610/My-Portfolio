import { getCurrentYear } from '../../utils/experience';

export const Footer = () => {
  const year = getCurrentYear();

  return (
    <footer className="bg-(--color-nav) py-[1.3rem] text-center leading-normal text-white">
      <p>
        © Copyright {year} All rights reserved. <br /> Made with ♥ by Anas.
      </p>
    </footer>
  );
};
