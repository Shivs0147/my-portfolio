import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
<<<<<<< HEAD
  base: "/my-portfolio"
=======
  base: "/myportfolio"
>>>>>>> baa051b (Updated resume link/content in Home.jsx)
})
