// File: vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // optional custom port
  },
  resolve: {
    alias: {
      '@': '/src', // optional: for cleaner imports like '@/components/Login'
    },
  },
});
