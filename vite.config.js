import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import crypto from 'crypto-browserify';

export default defineConfig({
  plugins: [react()],
  define: {
    'global.crypto': crypto,
  },
  base: '/portifolio/',
});
