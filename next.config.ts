import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.itdg.com.br',
      },
      {
        protocol: 'https',
        hostname: 'i.panelinha.com.br',
      },
      {
        protocol: 'https',
        hostname: 'painacozinha.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'canaldareceita.com.br',
      },
    ],
  },
};

export default nextConfig;
