// src/components/Layout/MainLayout.jsx
import React from 'react';
import Navbar from '../Common/Navbar';
import { Footer } from '../Common/Footer.jsx';
import '../../assets/styles/global.css';

const MainLayout = ({ children }) => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
