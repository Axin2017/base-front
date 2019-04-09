module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    "space-before-function-paren": "off", // 方法括号前加空格
    "space-before-blocks":"off" //块前加空格
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
  // eslint vscode插件配置，方便保存的时候自动格式化代码
  /* 
  "eslint.autoFixOnSave": true,
  "eslint.options": {
    "extensions": [".js", ".vue"]
  },
  "eslint.validate": [
    "javascript",
    {
      "language": "vue",
      "autoFix": true
    },
    "html",
    "vue"
  ]
  */
}
