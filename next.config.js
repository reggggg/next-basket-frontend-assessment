/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ]
  }
}

module.exports = nextConfig
