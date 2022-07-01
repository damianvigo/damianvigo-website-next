/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: false,
  images: {
    domains: ['i.imgur.com', 'picsum.photos', 'www.svgrepo.com'],
  },
  experimental: {
    forceSwcTransforms: true,
  },
});
