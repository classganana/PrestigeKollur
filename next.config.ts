import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [384, 640, 828, 1080, 1200],
    remotePatterns:
      process.env.NEXT_PUBLIC_IMAGE_HOST == null ||
      process.env.NEXT_PUBLIC_IMAGE_HOST === ""
        ? []
        : [
            {
              protocol: "https",
              hostname: process.env.NEXT_PUBLIC_IMAGE_HOST,
            },
          ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
