# 环境与配置
框架开发中主要使用到的环境以及配置

## 框架开发环境

### 脚手架版本
```
@vue/cli v3.6.3
```

### 开发环境
```
vscode 最新版
nodejs v10.1.0
npm v6.0.1
```


## 配置

### eslint配置
eslint是前端开发中比较流行的代码规范自动检查工具，通过预先设置一些规则，它可以帮助你在编码过程中自动检测出不符合规则的代码，从而减少错误，增加代码的规范和可读性，提升团队协作的效率

#### 配置文件
eslint配置文件为项目根目录下的`.eslintrc.js`，该文件返回一个对象，eslint在代码更新的时候，会自动根据该配置进行代码检测

#### 全局变量配置
`globals`属性为全局变量配置，此属性的值为一个对象。

当在html页面中通过script标记引入了第三方插件， 调用的时候通常都是通过全局变量的方式调用的。此时eslint会报错，未申明变量。在eslint中配置该选项即可解决这个问题

该属性的值为一个对象，其中，对象的key即为全局变量的名字,值为boolean，表示是否为全局对象。

eg:
```
globals: {
  $: true
} 
```

#### 代码检测规则配置
eslint的代码规则很多，配置的时候请查阅参考文档 [eslint rules配置](https://eslint.org/docs/rules/)

eg:
```
rules: {
  'comma-dangle': 2, //是否允许对象中出现结尾逗号
}
```

### postcss配置
postcss是一个用 JavaScript 工具和插件转换 CSS 代码的工具，他能够对代码中的css进行浏览器前缀补全，翻译高版本的css特性，css模块化等操作。同时本身也提供多种插件

#### 配置文件
postcss的配置文件为项目根目录下的`postcss.config.js`

#### postcss-plugin-px2rem 配置

