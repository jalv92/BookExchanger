// src/components/Layout/MainLayout.jsx
import React from 'react';
import Navbar from '../Common/Navbar'; // Adjust path
import { Footer } from '../Common/Footer'; // Adjust path

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ padding: '1rem 2rem', minHeight: 'calc(100vh - 120px)' /* Adjust based on Nav/Footer height */ }}>
        {/* MainLayout Component Placeholder */}
        {children}
      </main>
      <Footer />
    </>
  );
};
export default MainLayout;
