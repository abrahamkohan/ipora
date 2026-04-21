import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Exportar como sitio estático para Cloudflare Pages
  output: 'export',
  distDir: 'dist',
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
