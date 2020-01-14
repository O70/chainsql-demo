'use strict'

module.exports = {
  lintOnSave: process.env.NODE_ENV === 'development',
  configureWebpack: {
    name: 'ChainSQL DEMO'
  }
}
