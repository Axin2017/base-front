const path = require('path')

module.exports = {
  title: 'vue-tx',
  description: 'vue-tx',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    sidebar: [['/', 'Start'], ['/developingStanderd/developingStanderd.md', '开发规范/约定']],
    sidebarDepth: 2
  },
  dest: path.resolve('public', 'docs'),
  base: '/docs/'
}
