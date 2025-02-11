import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // Custom webpack config (e.g., handling .d.ts files)
    config.module.rules.push({
      test: /\.d\.ts$/,
      type: 'asset/source',
    });

    return config;
  },
  // Add environment variables
  env: {
    NEXT_PUBLIC_OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  },
  
  // Correct way to enable Turbopack
  experimental: {
    turbo: {
      enabled: true,  // Correct way to enable Turbopack
    },
  },
  reactStrictMode: true,
};

export default nextConfig;
