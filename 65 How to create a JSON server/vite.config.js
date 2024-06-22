import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [
      'chunk-I4MZPW7S.js',
      'chunk-M324AGAM.js',
      'react-router-dom'
    ]
  }
});
