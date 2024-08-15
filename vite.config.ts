import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";

export default defineConfig({
  plugins: [react(), commonjs()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        server: "src/server.jsx", // Your server entry point
      },
      output: {
        format: "cjs", // CommonJS format
        entryFileNames: "[name].js", // Ensures server.js is used, not main.cjs
        dir: "dist/server", // Output directory for server-side code
      },
    },
    ssr: true, // Ensure server-side rendering is enabled
  },
  assetsInclude: ["**/*.PNG"], // Include PNG files
});
