/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Ensure CSS is properly processed
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
