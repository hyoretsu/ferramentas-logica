/* eslint-disable import/no-extraneous-dependencies */
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';
import { NextConfig } from 'next/dist/next-server/server/config';
import webpack from 'webpack';

const nextConf = (phase: string): NextConfig => {
 // @ts-ignore
 const baseConf: NextConfig = {
  eslint: {
   ignoreDuringBuilds: true,
  },
  i18n: {
   locales: ['en', 'pt'],
   defaultLocale: 'en',
  },
  images: {
   domains: [''],
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
   ignoreBuildErrors: true,
  },
  webpack: (config: webpack.Configuration) => {
   config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
   });
   Object.assign(config.optimization.splitChunks, {
    cacheGroups: {
     ui: {
      test: /node_modules\/.pnpm\/(react-icons.*\/).*/,
      name: 'ui',
      chunks: 'all',
     },
    },
   });

   return config;
  },
 };

 // Dev-specific settings
 if (phase === PHASE_DEVELOPMENT_SERVER) {
  Object.assign(baseConf, {});
 } else {
  Object.assign(baseConf, {});
 }

 return baseConf;
};

export default nextConf;
