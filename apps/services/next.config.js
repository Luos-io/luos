/** @type {import('next').NextConfig} */
module.exports = {
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
  transpilePackages: ['@packages/services', '@packages/ui'],
};
