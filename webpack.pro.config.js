const DocsOutPutPlugin = require('./webpackPlugins/DocsOutPutPlugin')

module.exports = {
  plugins: [
    new DocsOutPutPlugin({
      basePath: __dirname,
      output: 'docsOutput', // 导出的目标目录
      dir: 'docs' // 包含md文档的顶层目录
    })
  ]
}
