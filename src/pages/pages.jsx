// src/pages/HomePage.jsx
import React from 'react';
export const HomePage = () => <div>HomePage Placeholder</div>;

// src/pages/BrowseBooksPage.jsx
// import React from 'react';
export const BrowseBooksPage = () => <div>BrowseBooksPage Placeholder</div>;

// src/pages/BookDetailPage.jsx
// import React from 'react';
import { useParams } from 'react-router-dom';
export const BookDetailPage = () => {
  const { bookId } = useParams();
  return <div>BookDetailPage Placeholder for Book ID: {bookId}</div>;
};

// src/pages/AddBookPage.jsx
// import React from 'react';
export const AddBookPage = () => <div>AddBookPage Placeholder</div>;

// src/pages/UserProfilePage.jsx
// import React from 'react';
// import { useParams } from 'react-router-dom'; // If viewing other profiles
export const UserProfilePage = () => {
  // const { userId } = useParams(); // Example for viewing other profiles
  return <div>UserProfilePage Placeholder</div>;
};

// src/pages/MessagesPage.jsx
// import React from 'react';
export const MessagesPage = () => <div>MessagesPage Placeholder</div>;

// src/pages/LoginPage.jsx
// import React from 'react';
import { AuthForm } from '../components/Auth/AuthForm'; // Adjust path
import { useAuth } from '../hooks/useAuth'; // Adjust path
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const { login, loading, authError } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const { error } = await login(email, password);
    if (!error) {
      navigate('/profile'); // Or wherever you want to redirect after login
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <AuthForm isLoginMode={true} onSubmit={handleLogin} />
      {loading && <p>Loading...</p>}
      {authError && <p style={{color: 'red'}}>Error: {authError}</p>}
      <div>LoginPage Placeholder</div>
    </div>
  );
};

// src/pages/RegisterPage.jsx
// import React from 'react';
// import { AuthForm } from '../components/Auth/AuthForm'; // Adjust path
// import { useAuth } from '../hooks/useAuth'; // Adjust path
// import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const { register, loading, authError } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // You might want to get username or other fields from AuthForm
    const { error } = await register(email, password);
    if (!error) {
      // Potentially navigate to login or a "please confirm email" page
      navigate('/login');
      alert('Registration successful! Please check your email to confirm (if enabled).');
    }
  };
  return (
    <div>
      <h2>Register</h2>
      <AuthForm isLoginMode={false} onSubmit={handleRegister} />
      {loading && <p>Loading...</p>}
      {authError && <p style={{color: 'red'}}>Error: {authError}</p>}
      <div>RegisterPage Placeholder</div>
    </div>
  );
};

// src/pages/SettingsPage.jsx
// import React from 'react';
export const SettingsPage = () => <div>SettingsPage Placeholder</div>;

// src/pages/NotFoundPage.jsx (Example of a 404 page)
// import React from 'react';
export const NotFoundPage = () => <div>404 - Page Not Found Placeholder</div>;