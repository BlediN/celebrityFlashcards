import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/celebrity-flashcards-app/',   // MUST match repo name exactly
})
