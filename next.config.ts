import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Per-project dev caches — set via `NEXT_DIST_DIR` in `npm run dev:prestige` / `dev:godrej`. */
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  /** Copies a minimal `.next/standalone/` tree plus `server.js` for long-running `/ node` hosts (EC2). */
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [384, 640, 828, 1080, 1200],
    /** Explicit qualities used across Image components — required in Next.js 16+. */
    qualities: [75, 78, 80, 82, 84, 86, 90, 92],
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
