const proConfig = require('./webpack.pro.config')
const devConfig = require('./webpack.dev.config')


module.exports = {
  publicPath: './',
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return proConfig
    } else {
      return devConfig
    }
  }
}
