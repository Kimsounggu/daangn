/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.kr.gcp-karroter.net",
      },
    ],
  },
};

export default nextConfig;
