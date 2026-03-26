import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vitePrerenderPlugin } from 'vite-prerender-plugin';

export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      prerenderRoutes: ['/'],
    }),
    {
      name: 'force-exit',
      closeBundle() {
        setTimeout(() => process.exit(0), 1000);
      },
    },
  ],
  base: '/',
});
