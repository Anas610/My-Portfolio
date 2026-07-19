import { useTheme } from '../../context/ThemeContext';
import { getIcon } from '../../utils/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const sunIcon = getIcon('sun');
  const moonIcon = getIcon('moon');

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="ml-4 cursor-pointer text-white transition-colors duration-300 hover:text-(--primary-color)"
    >
      <FontAwesomeIcon icon={theme === 'light' ? moonIcon! : sunIcon!} />
    </button>
  );
};
