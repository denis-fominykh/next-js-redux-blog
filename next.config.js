/** @type {import('next').NextConfig} */
const path = require('path');

const withImages = require('next-images');

const nextConfig = withImages({
  reactStrictMode: true,
  exclude: path.resolve(__dirname, 'src/assets/images/svg'),
  images: {
    disableStaticImages: true,
  },
  pageExtensions: ['tsx'],
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            limit: 1000000,
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
  env: {
    NEXT_APP_NODE_ENV: process.env.NEXT_APP_NODE_ENV,
    NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL,
  },
});

module.exports = nextConfig;
