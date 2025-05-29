// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout'; // Adjust path
import { ThemeProvider } from './contexts/ThemeContext.jsx'; // Actualizado a .jsx
import { AuthProvider, AuthContext } from './contexts/AuthContext.jsx'; // Actualizado a .jsx
import { NotificationProvider } from './contexts/NotificationContext.jsx'; // Actualizado a .jsx

// Import Pages
import { HomePage } from './pages/HomePage';
import { BrowseBooksPage } from './pages/BrowseBooksPage';
import { BookDetailPage } from './pages/BookDetailPage';
import { AddBookPage } from './pages/AddBookPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { MessagesPage } from './pages/MessagesPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { SettingsPage } from './pages/SettingsPage';
import { NotFoundPage } from './pages/NotFoundPage'; // Example 404

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = React.useContext(AuthContext);

  if (loading) {
    return <div>Loading authentication state...</div>; // Or a spinner
  }

  if (!user) {
    // User not authenticated, redirect to login
    // You can pass the current location to redirect back after login
    // import { useLocation } from 'react-router-dom';
    // const location = useLocation();
    // return <Navigate to="/login" state={{ from: location }} replace />;
    return <Navigate to="/login" replace />;
  }
  return children;
};


function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NotificationProvider> {/* Wrap with NotificationProvider */}
          <Router>
            <MainLayout>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/browse" element={<BrowseBooksPage />} />
                <Route path="/book/:bookId" element={<BookDetailPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* Protected Routes */}
                <Route 
                  path="/add-book" 
                  element={
                    <ProtectedRoute>
                      <AddBookPage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/profile" 
                  element={
                    <ProtectedRoute>
                      <UserProfilePage />
                    </ProtectedRoute>
                  } 
                />
                {/* Example for viewing other user profiles, could be public or protected */}
                {/* <Route path="/profile/:userId" element={<UserProfilePage />} /> */}
                <Route 
                  path="/messages" 
                  element={
                    <ProtectedRoute>
                      <MessagesPage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/settings" 
                  element={
                    <ProtectedRoute>
                      <SettingsPage />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Catch-all for 404 */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </MainLayout>
          </Router>
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
