// src/components/Common/Footer.jsx
import React from 'react';

export const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', marginTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
      Footer Component Placeholder &copy; {new Date().getFullYear()} Book Exchange
    </footer>
  );
};
