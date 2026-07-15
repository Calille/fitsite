/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'cpanel-build',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.js',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // cPanel optimization
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  basePath: '',
  // Ensure all paths are relative
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
};

export default nextConfig;
