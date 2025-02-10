import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // Add support for TypeScript .d.ts files if it's missing
    config.module.rules.push({
      test: /\.d\.ts$/,
      use: 'raw-loader',  // Allows .d.ts files to be treated as raw content
    });

    return config;
  },
};

export default nextConfig;
