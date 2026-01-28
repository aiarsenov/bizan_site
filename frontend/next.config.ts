import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  // Для Docker production build
  output: 'standalone',
  
  // Конфигурация для Strapi images
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      // Добавить позже для production
      // {
      //   protocol: 'https',
      //   hostname: 'your-domain.com',
      //   pathname: '/uploads/**',
      // },
    ],
  },
};

export default nextConfig;
