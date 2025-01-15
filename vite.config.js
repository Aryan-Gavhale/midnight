// https://vite.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Set the warning limit to 1000 KB (or any desired size)
    chunkSizeWarningLimit: 1000, // Size in KB
  },
});
