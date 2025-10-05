/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["clasor-content-preview", "yet-another-react-lightbox"],
  experimental: {
    esmExternals: 'loose'
  },
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'clasor-content-preview$': 'clasor-content-preview/dist/clasor-content-preview.esm.js',
    };
    return config;
  },
};

export default nextConfig;
