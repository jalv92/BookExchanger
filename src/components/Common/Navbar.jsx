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

// Todos los demás componentes se han movido a sus propios archivos
// Footer.jsx, SearchBar.jsx, FilterDropdown.jsx, Button.jsx, Modal.jsx, Spinner.jsx