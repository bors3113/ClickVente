/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'fr', 'ar'],
    defaultLocale: 'en',
    localeDetection: false,
  },
}

module.exports = nextConfig 