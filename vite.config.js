import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://test1.zarvisgenix.com/zarvisge/temp8/',
  plugins: [react()],
})
