/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['custom'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
