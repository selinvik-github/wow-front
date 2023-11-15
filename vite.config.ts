import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Specify the output directory for the production build
    minify: true, // Enable minification for production build
    sourcemap: false, // Disable sourcemaps for production build (optional)
    terserOptions: {
      compress: {
        drop_console: true, // Drop console.* statements in production
        drop_debugger: true, // Drop debugger statements in production
      },
    },
  },
});
