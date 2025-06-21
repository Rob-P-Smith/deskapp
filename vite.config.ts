// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import electron from "vite-plugin-electron";
// import { resolve } from "path";

// export default defineConfig({
//   plugins: [
//     react(),
//     electron([
//       {
//         entry: "main.js",
//         onstart: (options) => {
//           options.startup();
//         },
//         vite: {
//           build: {
//             outDir: "dist-electron",
//           },
//         },
//       },
//     ]),
//   ],
//   root: "./src",
//   base: "./",
//   build: {
//     outDir: "../dist",
//     emptyOutDir: true,
//   },
//   resolve: {
//     alias: {
//       "@": resolve(__dirname, "./src"),
//       "@core": resolve(__dirname, "./src/core"),
//     },
//   },
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
  base: "./",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
