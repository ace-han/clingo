// please uncomment below imports and @type lines to get Type IntelliSense auto complete
// some how vscode's prettier plugin gets error when doing imports
// import { Options as PrettierConfig } from "prettier";
// import { PluginConfig as SortImportsConfig } from "@trivago/prettier-plugin-sort-imports";
// import { PluginOptions as TailwindcssConfig } from "prettier-plugin-tailwindcss";
// /** @type {PrettierConfig & SortImportsConfig & TailwindcssConfig} */

// with below dynamic imports, vscode prettier extension will work but code is ugly
// /** @type {import('prettier').Config & import('@trivago/prettier-plugin-sort-imports').PluginConfig & import('prettier-plugin-tailwindcss').PluginOptions} */
// using mjs in order to add comments
const config = {
  importOrder: [
    "^@/(.*)$",
    "^[./]",
    "^[./].*(?<!\\.(c|le|sc)ss)$", // anything that does not ends with .css, .less, or .scss
    "\\.(css|scss|less)$",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  tailwindConfig: "./tailwind.config.ts",
  tailwindFunctions: ["clsx", "cn"],
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss", // MUST come last
  ],
};

export default config;
