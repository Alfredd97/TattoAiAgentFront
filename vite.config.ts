import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  return {
    plugins: [react()],
    base: isProduction ? '/minimalist-web/' : '/',
    define: {
      'process.env.NODE_ENV': isProduction ? '"production"' : '"development"',
    },
    server: {
      port: 5173,
      host: true,
    },
  };
});