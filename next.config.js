/** @type {import('next').NextConfig} */
const nextConfig = {
  exportTrailingSlash: true,

  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
  reactStrictMode: false,
  images: {
    domains: ['img.timelessq.com','localhost','vip.lz-cdn16.com'],
  },
  staticPageGenerationTimeout:60
}

module.exports = nextConfig
