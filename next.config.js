/** @type {import('next').NextConfig} */
const nextConfig = {
  // Minimal configuration to avoid memory issues
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Disable source maps in production to reduce memory usage
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
