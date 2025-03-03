import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsConfigPaths from 'vite-plugin-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tsConfigPaths()],
  resolve: {
    alias: {
      '@assets/*': "/src/assets/*",
      '@components/*': "/src/components/*",
      '@ui/*': "/src/ui/*",
      '@utils/*': "/src/utils/*",
      '@tipos/*': "src/types/*",
      "@store/*": "src/store/*",
      "@routes": "src/routes",
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  }
})
