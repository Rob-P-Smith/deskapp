import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  root: "src",
  base: "./",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
    },
    assetsDir: "assets",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@root": resolve(__dirname, "./"),
      "@electron": resolve(__dirname, "./platforms/electron"),
      "@react": resolve(__dirname, "./src"),
      "@server": resolve(__dirname, "./platforms/server"),
      "@ui": resolve(__dirname, "./src/ui"),
      "@core": resolve(__dirname, "./src/core"),
      "@hooks": resolve(__dirname, "./src/hooks")
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __IS_ELECTRON__: JSON.stringify(process.env.ELECTRON === "true"),
    __SERVER_URL__: JSON.stringify(
      process.env.VITE_SERVER_URL || "http://localhost:3001"
    ),
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});
