import { fileURLToPath, URL } from "node:url";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5173,
  },

  base: process.env.NODE_ENV === "production" ? "/noty-client/" : "/",

  plugins: [vue(), vueDevTools()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
