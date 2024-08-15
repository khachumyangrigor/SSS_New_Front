import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";

export default defineConfig({
  plugins: [react(), commonjs()],
  build: {
    outDir: "dist/server",
    ssr: "src/server.jsx",
    rollupOptions: {
      output: {
        format: "cjs",
        entryFileNames: "main.cjs",
      },
    },
  },
  assetsInclude: ["**/*.PNG"],
});
