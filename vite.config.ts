import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 用相對路徑，部署到 GitHub Pages 子目錄（username.github.io/repo/）也能正確載入資源。
  base: './',
  plugins: [react()],
})
