import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

import vue from "@vitejs/plugin-vue";

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
      assets: fileURLToPath(new URL("./src/assets", import.meta.url)),
      styles: fileURLToPath(new URL("./src/styles", import.meta.url)),
      icons: fileURLToPath(new URL("./src/icons", import.meta.url)),
      layouts: fileURLToPath(new URL("./src/layouts", import.meta.url)),
      ui: fileURLToPath(new URL("./src/components/ui", import.meta.url)),
      shared: fileURLToPath(new URL("./src/components/shared", import.meta.url)),
      common: fileURLToPath(new URL("./src/components/common", import.meta.url)),
      modules: fileURLToPath(new URL("./src/modules", import.meta.url)),
      api: fileURLToPath(new URL("./src/api", import.meta.url)),
      router: fileURLToPath(new URL("./src/router", import.meta.url)),
      pages: fileURLToPath(new URL("./src/pages", import.meta.url)),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
        additionalData: `
          @import "styles/variables/index.scss";
          @import "styles/functions/index.scss";
          @import "styles/mixins/index.scss";
        `,
      },
    },
  },
});
