// src/components/ThemeSwitcher/ThemeToggle.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
      title={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
    >
      {theme === 'light' ? (
        <FiMoon size={20} className="theme-icon" />
      ) : (
        <FiSun size={20} className="theme-icon" />
      )}
      <span className="sr-only">
        {theme === 'light' ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'}
      </span>
    </button>
  );
};

export default ThemeToggle;
