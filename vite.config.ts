import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Serve from the root
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  publicDir: 'public',
});