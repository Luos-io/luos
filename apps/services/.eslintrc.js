/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['custom', 'plugin:@typescript-eslint/recommended', 'next/core-web-vitals'],
  plugins: ['@typescript-eslint'],
};
