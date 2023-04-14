import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      fonts: path.resolve(__dirname, './src/fonts'),
      pages: path.resolve(__dirname, './src/pages'),
      components: path.resolve(__dirname, './src/components'),
      hooks: path.resolve(__dirname, './src/hooks'),
      images: path.resolve(__dirname, './src/images'),
      layout: path.resolve(__dirname, './src/layout'),
      configs: path.resolve(__dirname, './src/configs'),
    },
  },
  plugins: [react()],
});
