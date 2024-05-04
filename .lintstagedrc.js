// https://nextjs.org/docs/basic-features/eslint#lint-staged

// config below stuff in a separate file instead of in package.json `lint-staged` section
// for better comments functionality and good for future reference
const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
  // copied from saleor.storefront
  "*.*": "prettier --write --ignore-unknown",
};
