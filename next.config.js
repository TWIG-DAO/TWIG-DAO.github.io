const isProd = process.env.NODE_ENV === 'production'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/TWIG-DAO.github.io/' : '' // TODO: temp for github page
}

module.exports = nextConfig
