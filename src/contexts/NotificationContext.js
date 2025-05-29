// src/contexts/NotificationContext.js
import React, { createContext, useState, useCallback } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]); // Array of notification objects

  // Example notification object: { id: Date.now(), message: 'Hello!', type: 'success' | 'error' | 'info' }

  const addNotification = useCallback((message, type = 'info') => {
    const newNotification = {
      id: Date.now() + Math.random(), // Ensure unique ID
      message,
      type,
    };
    setNotifications((prevNotifications) => [...prevNotifications, newNotification]);

    // Optional: Auto-remove notification after some time
    setTimeout(() => {
      removeNotification(newNotification.id);
    }, 5000); // Remove after 5 seconds
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  }, []);

  // Placeholder for a UI component to display notifications
  // You would typically create a <NotificationDisplay /> component that uses this context
  const NotificationDisplay = () => (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
      {notifications.map((notif) => (
        <div
          key={notif.id}
          style={{
            padding: '10px 15px',
            borderRadius: '5px',
            color: 'white',
            backgroundColor: notif.type === 'error' ? 'red' : notif.type === 'success' ? 'green' : 'blue',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          }}
          onClick={() => removeNotification(notif.id)}
        >
          {notif.message}
        </div>
      ))}
    </div>
  );


  return (
    <NotificationContext.Provider value={{ addNotification, removeNotification, notifications }}>
      {children}
      <NotificationDisplay /> {/* Render the display component here or in App.jsx */}
    </NotificationContext.Provider>
  );
};