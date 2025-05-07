import js from "@eslint/js"
import prettierConfig from "@vue/eslint-config-prettier"
import pluginVue from "eslint-plugin-vue"
import { defineConfig } from "eslint/config"
import globals from "globals"

export default defineConfig([
  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue", "**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/require-default-prop": "off",
    },
  },
  // {
  //   files: ["**/*.{js,mjs,cjs,vue}"],
  //   plugins: { js },
  //   extends: ["js/recommended"],
  // },
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: { globals: globals.browser },
  },
  prettierConfig,
])
