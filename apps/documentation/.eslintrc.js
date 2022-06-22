/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['custom', 'plugin:@docusaurus/recommended'],
  plugins: ['@docusaurus'],
  settings: {
    'mdx/code-blocks': true,
    'mdx/language-mapper': {},
  },
};
