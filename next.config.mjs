/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'static.bytespark.me' },
    ],
  },
  env: {
    BASE_URL: 'https://bytespark.me',
  },
}

export default nextConfig
