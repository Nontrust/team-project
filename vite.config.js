import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
dotenv.config()
export default defineConfig({
  server: {
    strictPort: true,
    port: process.env.VITE_FRONT_PORT
  },
  plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
