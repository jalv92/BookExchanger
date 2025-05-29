// src/components/Common/Spinner.jsx
import React from 'react';

export const Spinner = () => {
  // Basic CSS spinner
  const style = {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    borderLeftColor: 'var(--primary-color)',
    animation: 'spin 1s ease infinite',
  };
  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  return (
    <>
      <style>{keyframes}</style>
      <div style={style}>
        {/* Spinner Component Placeholder */}
      </div>
    </>
  );
};
