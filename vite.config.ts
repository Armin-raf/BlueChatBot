import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/BlueChatBot/',   // <--- GANZ WICHTIG
  plugins: [react()],
})
