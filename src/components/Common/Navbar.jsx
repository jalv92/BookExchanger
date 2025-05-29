// src/components/Common/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeSwitcher/ThemeToggle';
import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <Link to="/">
              <span className="logo-icon">📚</span>
              <span className="logo-text">BookExchange</span>
            </Link>
          </div>

          <div className="navbar-mobile-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <div className="navbar-links">
              <Link to="/browse" className="navbar-link">Browse Books</Link>
              <Link to="/my-library" className="navbar-link">My Library</Link>
              <Link to="/messages" className="navbar-link">Messages</Link>
              {user && <Link to="/add-book" className="navbar-link">List a Book</Link>}
            </div>

            <div className="navbar-actions">
              <ThemeToggle />
              
              {user ? (
                <div className="user-menu">
                  <Link to="/profile" className="user-profile">
                    <img 
                      src={user.avatar_url || 'https://via.placeholder.com/40'} 
                      alt="Profile" 
                      className="user-avatar" 
                    />
                  </Link>
                  <button onClick={logout} className="btn btn-secondary logout-btn">
                    Logout
                  </button>
                </div>
              ) : (
                <div className="auth-buttons">
                  <Link to="/login" className="btn btn-secondary">Login</Link>
                  <Link to="/register" className="btn btn-primary">Register</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          background: var(--nav-background-color);
          padding: 0.75rem 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
        }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo a {
          display: flex;
          align-items: center;
          color: var(--nav-text-color);
          font-weight: 700;
          font-size: 1.25rem;
          text-decoration: none;
        }

        .logo-icon {
          margin-right: 0.5rem;
          font-size: 1.5rem;
        }

        .navbar-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .navbar-links {
          display: flex;
          gap: 1.5rem;
        }

        .navbar-link {
          color: var(--nav-text-color);
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s ease;
          position: relative;
        }

        .navbar-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: var(--primary-color);
          transition: width 0.3s ease;
        }

        .navbar-link:hover {
          color: var(--primary-color);
        }

        .navbar-link:hover:after {
          width: 100%;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .auth-buttons {
          display: flex;
          gap: 0.75rem;
        }

        .user-menu {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .user-avatar {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--primary-color);
        }

        .navbar-mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }

        .navbar-mobile-toggle span {
          display: block;
          width: 25px;
          height: 3px;
          background-color: var(--nav-text-color);
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        @media (max-width: 768px) {
          .navbar-mobile-toggle {
            display: flex;
          }

          .navbar-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background: var(--nav-background-color);
            padding: 1rem;
            gap: 1rem;
            border-bottom: 1px solid var(--border-color);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .navbar-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .navbar-links, .navbar-actions {
            flex-direction: column;
            width: 100%;
          }

          .auth-buttons, .user-menu {
            flex-direction: column;
            width: 100%;
          }

          .auth-buttons .btn, .logout-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;