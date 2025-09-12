import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label={`Activar modo ${darkMode ? 'claro' : 'oscuro'}`}
      className="p-2 rounded-full transition-colors duration-300
                 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow
                 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <span className="text-lg">{darkMode ? '🌙' : '☀️'}</span>
    </button>
  );
}