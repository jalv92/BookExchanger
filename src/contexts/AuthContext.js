// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../config/supabaseClient'; // Adjust path as necessary

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const login = async (email, password) => {
    setAuthError(null);
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error('Login error:', error.message);
      setAuthError(error.message);
    }
    setLoading(false);
    return { error };
  };

  const register = async (email, password, additionalData = {}) => {
    setAuthError(null);
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: additionalData, // e.g., { username: 'testuser' }
      },
    });
    if (error) {
      console.error('Registration error:', error.message);
      setAuthError(error.message);
    }
    // Note: Supabase might require email confirmation by default.
    // User object will be available in `data.user`
    setLoading(false);
    return { user: data?.user, error };
  };

  const logout = async () => {
    setAuthError(null);
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Logout error:', error.message);
      setAuthError(error.message);
    }
    return { error };
  };

  const value = {
    user,
    loading,
    authError,
    login,
    register,
    logout,
    // You can add more auth related functions here e.g. passwordReset, updateUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};