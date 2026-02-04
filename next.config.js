const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Configure remote image domains for next/image
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.luxarte.pl',
        pathname: '/wp-content/uploads/**',
      },
    ],
    // Enable image optimization
    formats: ['image/avif', 'image/webp'],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // Image sizes for smaller images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Optimize fonts
  optimizeFonts: true,

  // Production optimizations
  poweredByHeader: false,

  // Enable experimental features if needed
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['@/components'],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
