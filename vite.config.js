import {fileURLToPath, URL} from "node:url";
import {defineConfig} from "vite";

import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [vue()],
  sourcemap: true,
  build: {
    sourcemap: true,
  },
  css: {sourceMap: true, devSourcemap: true},
  plugins: [vue()],
  server: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
