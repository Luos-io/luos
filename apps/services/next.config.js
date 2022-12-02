/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')(['@packages/services', '@packages/ui']);
const result = require('dotenv-vault').config({
  path: `../../.env`,
});

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
  basePath: '/app',
  env: result.parsed,
  // compiler: {
  //   removeConsole: true,
  // },
  async redirects() {
    return [
      {
        basePath: false,
        source: '/api/telemetry',
        destination: '/app/api/telemetry',
        permanent: true,
      },
    ];
  },
});
