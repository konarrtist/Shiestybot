/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', 
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  experimental: {
    // This is the specific fix for Code 137 on low-RAM servers
    webpackMemoryOptimizations: true, 
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.cache = false; // Prevents RAM spikes
    }
    return config;
  },
};

export default nextConfig;
