const withTM = require('next-transpile-modules')([]);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
});
