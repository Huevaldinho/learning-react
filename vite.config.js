import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
//default base was: '/learning-react/' 
//base changed to "/" because I was having issues with the default one.
export default defineConfig({
  plugins: [react()],
  base:'/'
})
