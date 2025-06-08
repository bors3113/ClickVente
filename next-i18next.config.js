module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'de', 'ar'],
    localeDetection: true,
  },
  fallbackLng: {
    default: ['en'],
  },
  debug: false,
  reloadOnPrerender: process.env.NODE_ENV === 'development',
} 