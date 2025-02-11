import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Add environment variables
  env: {
    NEXT_PUBLIC_OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  },

  reactStrictMode: true,
};

export default nextConfig;
