import commonjs from "vite-plugin-commonjs";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Determine if we are building for the server or client
export default defineConfig(({ isSsrBuild }) => {
  return {
    plugins: [react(), !isSsrBuild && commonjs()].filter(Boolean),
    ssr: {
      noExternal: ["react-helmet-async"],
    },
    build: {
      outDir: isSsrBuild ? "dist/server" : "dist/client",
      rollupOptions: {
        output: {
          format: isSsrBuild ? "cjs" : "es",
          entryFileNames: isSsrBuild ? "[name].cjs" : "[name].js",
        },
        external: isSsrBuild ? ["react-router-dom/server"] : [],
      },
    },
    assetsInclude: ["**/*.PNG"],
  };
});
