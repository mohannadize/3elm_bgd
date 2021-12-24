const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://raw.githubusercontent.com/mohannadize/3elm_bgd/master/docs/' : '',
}
