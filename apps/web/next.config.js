/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  images: {
    domains: ["picsum.photos"],
  },
};

export default nextConfig;
