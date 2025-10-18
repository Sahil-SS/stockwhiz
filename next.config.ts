import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint:{
    ignoreDuringBuilds: true,
  }, typeScript:{
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
