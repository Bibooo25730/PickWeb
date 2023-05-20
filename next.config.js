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
    domains: ['img.timelessq.com','localhost','vip.lz-cdn16.com','imgurl.ink','s3.bmp.ovh','162.14.108.172'],
  },
  staticPageGenerationTimeout:60
}

module.exports = nextConfig
