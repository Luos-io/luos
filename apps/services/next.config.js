/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')(['@packages/services', '@packages/ui']);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
  basePath: '/app',
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
