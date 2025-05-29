// src/components/Common/Button.jsx
import React from 'react';

export const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
  // Basic styling, can be expanded with CSS Modules or Tailwind
  const baseStyle = { padding: '0.5rem 1rem', borderRadius: '4px', border: 'none', cursor: 'pointer', margin: '0.25rem' };
  const primaryStyle = { backgroundColor: 'var(--button-primary-bg)', color: 'var(--button-primary-text)' };
  const secondaryStyle = { backgroundColor: 'var(--button-secondary-bg)', color: 'var(--button-secondary-text)', border: '1px solid var(--border-color)' };
  const style = variant === 'primary' ? { ...baseStyle, ...primaryStyle } : { ...baseStyle, ...secondaryStyle };

  return (
    <button type={type} onClick={onClick} style={style}>
      {children || 'Button Component Placeholder'}
    </button>
  );
};
