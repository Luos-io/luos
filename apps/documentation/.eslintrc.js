/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['custom'],
  settings: {
    'mdx/code-blocks': true,
    'mdx/language-mapper': {},
  },
};
