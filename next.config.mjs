/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // 🔑 esta linha faz o Next gerar a pasta "out"

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
