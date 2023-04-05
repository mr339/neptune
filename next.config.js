/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  sassOptions: {
    additionalData: `@use 'styles/sass/common' as *;`,
  },
  swcMinify: true,
  i18n,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  publicRuntimeConfig: {
    CALLBACK_URL: process.env.CALLBACK_URL,
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    REDIRECT_URL: process.env.NEXT_REDIRECT_URL,
    GOOGLE_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    GOOGLE_SECRET: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    FACEBOOK_ID: process.env.NEXT_PUBLIC_FB_CLIENT_ID,
    FACEBOOK_SECRET: process.env.NEXT_PUBLIC_FB_SECRET,
  },
};

module.exports = nextConfig;
