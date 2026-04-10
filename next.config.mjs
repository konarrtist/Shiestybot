/** @type {import('next').NextConfig} */
const nextConfig = {
  // Move Turbopack to the root level if you need custom rules.
  // If you don't have custom rules, you can delete this block entirely.
  turbopack: {
    // any custom rules go here
  },

  experimental: {
    // Only put newer experimental features here. 
    // Do NOT put 'turbopack' or 'turbo' here.
  },
};

export default nextConfig;
