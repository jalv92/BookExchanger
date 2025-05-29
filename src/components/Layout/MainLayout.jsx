// src/components/Layout/MainLayout.jsx
import React from 'react';
import { Navbar } from '../Common/Navbar';
import { Footer } from '../Common/Footer';
import { ThemeToggle } from '../ThemeSwitcher/ThemeToggle';
import '../../assets/styles/global.css';

const MainLayout = ({ children }) => {
  return (
    <div className="app-container">
      <div className="theme-wrapper">
        <Navbar />
        <div className="theme-toggle-container">
          <ThemeToggle />
        </div>
        <main className="main-content">
          <div className="container">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
