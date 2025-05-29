// src/components/Common/Modal.jsx
import React from 'react';

export const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 100
    }}>
      <div style={{ background: 'var(--modal-background-color)', padding: '20px', borderRadius: '8px', minWidth: '300px', boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}>
        <h2>{title || 'Modal Title'}</h2>
        {children}
        <button onClick={onClose} style={{marginTop: '10px'}}>Close Modal</button>
        {/* Modal Component Placeholder */}
      </div>
    </div>
  );
};
