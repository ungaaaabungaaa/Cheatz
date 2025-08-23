/** @type {import('next').NextConfig} */
const nextConfig = {
  // Minimal configuration to avoid memory issues
  images: {
    unoptimized: false,
  },
  // Disable source maps in production to reduce memory usage
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
