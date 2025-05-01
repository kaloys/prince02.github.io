import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/prince02.github.io/",
  plugins: [react()],
})
