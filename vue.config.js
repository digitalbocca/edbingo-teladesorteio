'use strict'

module.exports = {
  outputDir: 'docs',
  productionSourceMap: false,
  baseUrl: process.env.NODE_ENV === 'production' ? '' : '/'
}
