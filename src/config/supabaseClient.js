// src/config/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Obtener las variables de entorno
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Verificar si estamos en desarrollo o producción
const isDevelopment = import.meta.env.DEV;

// Manejar la ausencia de variables de entorno
if (!supabaseUrl || !supabaseAnonKey) {
  const errorMessage = "Supabase URL or Anon Key is missing. Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your environment variables.";
  
  // En desarrollo, lanzar un error
  if (isDevelopment) {
    console.error(errorMessage);
    throw new Error(errorMessage);
  } else {
    // En producción, mostrar un mensaje en la consola pero no detener la aplicación
    console.error("ERROR DE CONFIGURACIÓN: " + errorMessage);
    console.error("Por favor, configura las variables de entorno en Netlify:");
    console.error("1. Ve a la configuración de tu sitio en Netlify");
    console.error("2. Build & deploy → Environment → Environment variables");
    console.error("3. Añade VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY");
  }
}

// Crear el cliente de Supabase, incluso con valores vacíos para evitar errores de compilación
export const supabase = createClient(
  supabaseUrl || 'https://placeholder-url.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);
