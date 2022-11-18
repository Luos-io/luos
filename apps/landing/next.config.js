const withTM = require('next-transpile-modules')(['@packages/ui']);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
});
