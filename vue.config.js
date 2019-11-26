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
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/theme-blue.scss";'
      }
    }
  },
  devServer: {
    proxy: {
      '^/arcgis88': {
        target: 'http://ghonline.geo-k.cn:88',
        changeOrigin: true,
        pathRewrite: {
          '^/arcgis88': ''// rewrite path
        }
      },
      '^/arcgis6080': {
        target: 'http://ghonline.geo-k.cn:6080',
        changeOrigin: true,
        pathRewrite: {
          '^/arcgis6080': ''// rewrite path
        }
      }
    }
  }
}
