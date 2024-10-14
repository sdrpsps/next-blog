/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'static.bytespark.me' },
      { hostname: 'img.meituan.net' },
    ],
  },
}

export default nextConfig
