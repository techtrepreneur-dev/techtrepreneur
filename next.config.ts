import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  serverExternalPackages: ['@prisma/client', 'prisma'],

  outputFileTracingIncludes: {
    // Target all serverless functions (like /api routes and getServerSideProps)
    '/*': ['./node_modules/.prisma/client/**/*'],
  },
}

export default nextConfig