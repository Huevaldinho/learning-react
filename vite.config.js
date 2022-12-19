import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//base era: '/learning-react/' 
//lo cambie porque me jodia las rutas
export default defineConfig({
  plugins: [react()],
  base:'/'
})
