// src/components/Common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">BookExchange</h3>
            <p className="footer-description">
              Plataforma para el intercambio de libros físicos y digitales entre lectores de todo el mundo.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Enlaces</h3>
            <ul className="footer-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/browse">Explorar libros</Link></li>
              <li><Link to="/add-book">Listar un libro</Link></li>
              <li><Link to="/about">Acerca de</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contacto</h3>
            <ul className="footer-links">
              <li><a href="mailto:info@bookexchange.com">info@bookexchange.com</a></li>
              <li><a href="https://twitter.com/bookexchange" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com/bookexchange" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BookExchange. Todos los derechos reservados.</p>
          <p>Versión 0.3.0</p>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background-color: var(--secondary-bg-color);
          padding: 3rem 0 1.5rem;
          border-top: 1px solid var(--border-color);
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-title {
          font-size: var(--font-size-lg);
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }
        
        .footer-title:after {
          content: '';
          position: absolute;
          width: 40px;
          height: 2px;
          background: var(--primary-color);
          bottom: -8px;
          left: 0;
        }
        
        .footer-description {
          opacity: 0.8;
          margin-bottom: 1.5rem;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        
        .footer-links a {
          color: var(--text-color);
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        
        .footer-links a:hover {
          opacity: 1;
          color: var(--primary-color);
          text-decoration: none;
        }
        
        .footer-bottom {
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          opacity: 0.7;
          font-size: var(--font-size-sm);
        }
        
        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }
        }
      `}</style>
    </footer>
  );
};
