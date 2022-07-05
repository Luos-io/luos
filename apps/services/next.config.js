/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')(['@packages/services', '@packages/ui']);
const result = require('dotenv').config({
  path: `../../.env`,
});

console.log('NEXT-CONFIG env', result.parsed);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
  webpack5: true,
  env: result.parsed,
  compiler: {
    removeConsole: true,
  },
});
