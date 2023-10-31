import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
const root = process.cwd()

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(root, 'src'),
      pages: path.resolve(root, 'src/pages'),
      store: path.resolve(root, 'src/store'),
      components: path.resolve(root, 'src/components'),
      images: path.resolve(root, 'src/assets/images'),
      styles: path.resolve(root, 'src/assets/styles'),
      helpers: path.resolve(root, 'src/helpers'),
    },
  },
  server: {
    port: 3000,
  },
})
