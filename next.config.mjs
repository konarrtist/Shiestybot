/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack is now stable in Next.js 16 and belongs here
  turbopack: {
    // You can add custom rules here if needed
  },

  experimental: {
    // Keep this empty for now to avoid the 'Unrecognized key' warning
  },

  // Recommended: helps with build sizes on Vercel
  reactStrictMode: true,
};

export default nextConfig;
