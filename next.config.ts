import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force Webpack instead of Turbopack
  webpack: (config) => {
    return config;
  }
};

export default nextConfig;
