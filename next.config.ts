import type { NextConfig } from "next";

/** Static HTML export — deploy `out/` to any static host (e.g. cPanel). */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
