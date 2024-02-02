import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      presets: [],
      // Your plugins run before any built-in transform (eg: Fast Refresh)
      plugins: ["babel-plugin-syntax-hermes-parser"],
      // Use .babelrc files
      babelrc: true,
      // Use babel.config.js files
      configFile: true,
    }
})],
})
