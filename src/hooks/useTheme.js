// src/hooks/useTheme.js
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.jsx'; // Actualizado a .jsx

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};