import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      // Remove 'axios' from external to include it in the build
      external: [],
    },
  },
  resolve: {
    alias: {
      axios: 'node_modules/axios/dist/axios.min.js', // Ensure this path is correct
    },
  },
});