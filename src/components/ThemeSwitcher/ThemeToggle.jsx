// src/components/ThemeSwitcher/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../../hooks/useTheme'; // Adjust path

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{ padding: '0.5rem', background: 'var(--secondary-color)', color: 'var(--text-color)', border: '1px solid var(--border-color)', borderRadius: '4px' }}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      {/* ThemeToggle Component Placeholder */}
    </button>
  );
};
export default ThemeToggle;
