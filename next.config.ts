// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.bbci.co.uk",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.cnn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.politico.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.politico.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
