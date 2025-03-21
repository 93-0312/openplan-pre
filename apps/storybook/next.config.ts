import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    externalDir: true, // Monorepo에서 외부 디렉토리 불러오기 허용
  },
};

export default nextConfig;
