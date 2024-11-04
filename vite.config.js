import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react()],
  // root: 'src', // Définit 'src' comme dossier de source
  build: {
    outDir: './dist', // Définit 'dist' comme dossier de sortie à la racine
    emptyOutDir: true, // Vide le dossier de sortie avant chaque build

  },
})
