// src/components/Common/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeSwitcher/ThemeToggle'; // Adjust path
import { useAuth } from '../../hooks/useAuth'; // Adjust path

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={{ background: 'var(--nav-background-color)', padding: '1rem', color: 'var(--nav-text-color)', borderBottom: '1px solid var(--border-color)' }}>
      <Link to="/" style={{ marginRight: '1rem', color: 'inherit' }}>Home</Link>
      <Link to="/browse" style={{ marginRight: '1rem', color: 'inherit' }}>Browse Books</Link>
      {user && <Link to="/add-book" style={{ marginRight: '1rem', color: 'inherit' }}>Add Book</Link>}
      {user && <Link to="/profile" style={{ marginRight: '1rem', color: 'inherit' }}>Profile</Link>}
      {user && <Link to="/messages" style={{ marginRight: '1rem', color: 'inherit' }}>Messages</Link>}
      <ThemeToggle />
      <div style={{ float: 'right' }}>
        {user ? (
          <>
            <span style={{ marginRight: '1rem' }}>Welcome, {user.email}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginRight: '1rem', color: 'inherit' }}>Login</Link>
            <Link to="/register" style={{ color: 'inherit' }}>Register</Link>
          </>
        )}
      </div>
      {/* Navbar Component Placeholder */}
    </nav>
  );
};
export default Navbar;

// src/components/Common/Footer.jsx
// import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', marginTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
      Footer Component Placeholder &copy; {new Date().getFullYear()} Book Exchange
    </footer>
  );
};
export { Footer };

// src/components/Common/SearchBar.jsx
// import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <input type="search" placeholder="Search books..." onChange={(e) => onSearch && onSearch(e.target.value)} />
      SearchBar Component Placeholder
    </div>
  );
};
export { SearchBar };

// src/components/Common/FilterDropdown.jsx
// import React from 'react';

const FilterDropdown = ({ options, onFilterChange }) => {
  return (
    <select onChange={(e) => onFilterChange && onFilterChange(e.target.value)}>
      FilterDropdown Component Placeholder
      {/* {options?.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)} */}
    </select>
  );
};
export { FilterDropdown };

// src/components/Common/Button.jsx
// import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
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
export { Button };

// src/components/Common/Modal.jsx
// import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
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
export { Modal };

// src/components/Common/Spinner.jsx
// import React from 'react';

const Spinner = () => {
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
export { Spinner };