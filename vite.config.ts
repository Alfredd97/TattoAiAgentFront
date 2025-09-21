import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react' // Replace with your framework plugin (vue, svelte, etc.)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Replace with your framework plugin
  ],
  
  // Critical for proper asset paths in production
  base: './', // Use relative paths for deployment flexibility
  
  build: {
    outDir: 'dist', // Explicit output directory
    assetsDir: 'assets', // Put assets in root of dist (optional)
    emptyOutDir: true, // Clear dist folder on build
    sourcemap: true, // Enable sourcemaps for debugging
    manifest: true, // Generate build manifest
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  
  // Optional: Development server configuration
  server: {
    port: 3000,
    open: true
  },
  
  // Optional: CSS handling
  css: {
    devSourcemap: true
  }
})