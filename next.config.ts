import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Configure images (using unoptimized for static export compatibility)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
