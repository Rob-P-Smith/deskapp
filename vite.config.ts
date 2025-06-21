import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import electron from "vite-plugin-electron";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    electron({
      entry: "main.js",
      vite: {
        build: {
          outDir: "dist-electron",
          sourcemap: process.env.NODE_ENV === "development",
        },
      },
    }),
  ],
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src/core"),
      "@views": resolve(__dirname, "./src/core/views"),
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
});
