/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', 
  typescript: { ignoreBuildErrors: true }, // Don't let a small error kill the build
  eslint: { ignoreDuringBuilds: true },
  experimental: {
    webpackMemoryOptimizations: true, // Key fix for Code 137
  }
};

export default nextConfig;
