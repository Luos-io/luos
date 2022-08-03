console.log('[Apps/Services] Loading configurations from eslint-config-custom package...');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['custom', 'next/core-web-vitals'],
};
