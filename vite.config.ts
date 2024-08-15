import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";

export default defineConfig({
  plugins: [react(), commonjs()],
  optimizeDeps: {
    include: ["@vite-mono/lib-cjs"],
  },
  build: {
    commonjsOptions: {
      include: [/lib-cjs/, /node_modules/],
    },
  },
  assetsInclude: ["**/*.PNG"],
});
