const { locales } = require('./lib/locales')

const buildRewrite = ({ path, dest }) => ({
  source: `/(${locales.join('|')})+/${path}`,
  destination: dest,
  locale: false,
})

const buildRedirect = ({ path, dest }) => ({
  source: `/(${locales.join('|')})+/${path}`,
  destination: dest,
  locale: false,
  permanent: false,
})

const rw = [
  {
    path: 'count.js',
    dest: 'https://gc.zgo.at/count.js',
  },
  {
    path: 'goat',
    dest: 'https://pablopunk.goatcounter.com/count',
  },
]

const rd = [
  {
    path: 'cv',
    dest: 'https://cv.pablopunk.com',
  },
  {
    path: 'books',
    dest: 'https://www.notion.so/Books-9de297d7668e4498a9769421d29889b8',
  },
  {
    path: 'illustrations',
    dest:
      'https://www.notion.so/pablopunk/Drawings-0c241704f0ea48d39591ca3bf1483966',
  },
  {
    path: 'drawings',
    dest:
      'https://www.notion.so/pablopunk/Drawings-0c241704f0ea48d39591ca3bf1483966',
  },
  {
    path: 'photos',
    dest: 'https://www.pexels.com/@pablopunk',
  },
]

module.exports = {
  env: {
    DATOCMS_API_TOKEN: process.env.DATOCMS_API_TOKEN,
  },
  i18n: {
    locales,
    defaultLocale: 'en',
  },
  async rewrites() {
    return rw.map(buildRewrite)
  },
  async redirects() {
    return rd.map(buildRedirect)
  },
}
