// src/services/auth.service.js
import { supabase } from '../config/supabaseClient'; // Adjust path

export const signInWithEmail = async (email, password) => {
  // This is now handled by AuthContext, but you can keep service wrappers if preferred
  console.log('auth.service: signInWithEmail called. Use useAuth().login() instead.');
  return supabase.auth.signInWithPassword({ email, password });
};

export const signUpNewUser = async (email, password, metadata = {}) => {
  console.log('auth.service: signUpNewUser called. Use useAuth().register() instead.');
  return supabase.auth.signUp({ email, password, options: { data: metadata } });
};

export const signOutUser = async () => {
  console.log('auth.service: signOutUser called. Use useAuth().logout() instead.');
  return supabase.auth.signOut();
};

export const getCurrentUser = async () => {
  console.log('auth.service: getCurrentUser. Use useAuth().user instead.');
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

// src/services/books.service.js
// import { supabase } from '../config/supabaseClient'; // Adjust path

export const getAllBooks = async () => {
  const { data, error } = await supabase.from('books').select('*');
  if (error) console.error('Error fetching books:', error);
  return { data, error };
};

export const getBookById = async (id) => {
  const { data, error } = await supabase.from('books').select('*').eq('id', id).single();
  if (error) console.error(`Error fetching book ${id}:`, error);
  return { data, error };
};

export const addBook = async (bookData) => {
  const { data, error } = await supabase.from('books').insert([bookData]).select();
  if (error) console.error('Error adding book:', error);
  return { data, error };
};

// src/services/users.service.js
// import { supabase } from '../config/supabaseClient'; // Adjust path

export const getUserProfile = async (userId) => {
  // Assuming you have a 'profiles' table linked to auth.users
  const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single();
  if (error) console.error(`Error fetching profile for user ${userId}:`, error);
  return { data, error };
};

export const updateUserProfile = async (userId, profileData) => {
  const { data, error } = await supabase.from('profiles').update(profileData).eq('id', userId).select();
  if (error) console.error(`Error updating profile for user ${userId}:`, error);
  return { data, error };
};

// src/services/exchanges.service.js
// import { supabase } from '../config/supabaseClient'; // Adjust path

export const createExchangeRequest = async (exchangeData) => {
  const { data, error } = await supabase.from('exchanges').insert([exchangeData]).select();
  if (error) console.error('Error creating exchange request:', error);
  return { data, error };
};

export const getUserExchanges = async (userId) => {
  // Example: fetch exchanges where user is requester or owner
  const { data, error } = await supabase
    .from('exchanges')
    .select('*')
    .or(`requester_id.eq.${userId},owner_id.eq.${userId}`);
  if (error) console.error(`Error fetching exchanges for user ${userId}:`, error);
  return { data, error };
};

// src/services/messages.service.js
// import { supabase } from '../config/supabaseClient'; // Adjust path

export const getMessagesForExchange = async (exchangeId) => {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .eq('exchange_id', exchangeId)
    .order('created_at', { ascending: true });
  if (error) console.error(`Error fetching messages for exchange ${exchangeId}:`, error);
  return { data, error };
};

export const sendMessage = async (messageData) => {
  const { data, error } = await supabase.from('messages').insert([messageData]).select();
  if (error) console.error('Error sending message:', error);
  return { data, error };
};