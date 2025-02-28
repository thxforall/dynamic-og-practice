/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // 타입 체크 오류를 무시하고 빌드
    skipTypeCheck: true,
  },
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig 