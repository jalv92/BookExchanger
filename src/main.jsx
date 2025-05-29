// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './contexts/ThemeContext';
import App from './App.jsx';
import './assets/styles/global.css'; // Import global styles

// Aplicar la clase inicial del tema si no está ya configurada
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.className = savedTheme;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
