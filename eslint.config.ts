// @ts-expect-error Could not find a declaration file for module 'eslint-plugin-import'.
import eslintPluginImport from "eslint-plugin-import";
import pluginVue from "eslint-plugin-vue";

import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
  },

  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },

  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,
  skipFormatting,

  {
    plugins: {
      eslintPluginImport,
    },
  },

  {
    rules: {
      "vue/block-order": [
        "error",
        {
          order: ["template", "script", "script[setup]", ["style[scoped]", "style"]],
        },
      ],
      "vue/component-definition-name-casing": ["error", "kebab-case"],
      "vue/define-macros-order": [
        "error",
        {
          order: ["defineOptions", "defineProps", "defineEmits", "defineModel", "defineSlots"],
          defineExposeLast: true,
        },
      ],
      "vue/attributes-order": [
        "error",
        {
          order: [
            "DEFINITION",
            "LIST_RENDERING",
            "CONDITIONALS",
            "RENDER_MODIFIERS",
            "GLOBAL",
            "UNIQUE",
            "SLOT",
            "TWO_WAY_BINDING",
            "OTHER_DIRECTIVES",
            ["ATTR_DYNAMIC", "ATTR_STATIC", "ATTR_SHORTHAND_BOOL"],
            "EVENTS",
            "CONTENT",
          ],
        },
      ],
      "vue/multi-word-component-names": "error",
      "vue/no-v-html": "warn",
      "vue/v-slot-style": ["error", "shorthand"],
      "vue/component-name-in-template-casing": ["error", "kebab-case"],
      "vue/custom-event-name-casing": ["error", "kebab-case"],
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "@typescript-eslint/no-wrapper-object-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "eslintPluginImport/order": [
        "error",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "object",
            "type",
          ],
          "pathGroups": [
            {
              pattern: "*",
              group: "external",
              position: "before",
            },
            {
              pattern: "assets/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "styles/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "layouts/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "icons/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "ui/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "shared/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "common/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "api/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "modules/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "router/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "pages/**",
              group: "internal",
              position: "after",
            },
          ],
          "pathGroupsExcludedImportTypes": ["builtin"],
          "newlines-between": "always",
          "alphabetize": {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
);
