/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@heroicons/react', 'lucide-react'],
  },
  images: {
    formats: ['image/webp'],
  },
};

export default nextConfig;