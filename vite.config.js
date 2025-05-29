import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    // Incluir todos los archivos .jsx y .js en src
    include: ['**/*.jsx', '**/*.js'],
  })],
  resolve: {
    extensions: ['.js', '.jsx', '.json'] // Asegurar que Vite resuelva estos tipos de archivo
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'] // Asegurar que estas dependencias se optimicen
  }
});
