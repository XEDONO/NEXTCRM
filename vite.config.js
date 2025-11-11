import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/NEXTCRM/', // This is the subfolder on GitHub Pages
  build: {
    rollupOptions: {
      input: 'index.html' // Explicitly set the entry point
    }
  }
})