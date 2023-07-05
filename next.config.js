/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig;