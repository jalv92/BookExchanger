// src/hooks/useSupabase.js
import { supabase } from '../config/supabaseClient'; // Adjust path as necessary

// This hook simply provides direct access to the Supabase client.
// You might expand this or create more specific data-fetching hooks.
export const useSupabase = () => {
  return supabase;
};
