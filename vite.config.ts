import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(), // JSX moderno
  ],
  build: {
    target: 'esnext',
    outDir: 'dist',
    minify: 'esbuild', // Minificación rápida
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
