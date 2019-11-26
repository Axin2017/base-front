# 项目结构
开发过程中，请按照如下约定将项目各个模块分别放置于固定的结构

## 项目总体结构
```
docs                --开发文档
public              --不经webpack打包的静态资源
src                 --源代码
  api                 --网络请求
  assets              --静态资源
  components          --公共组件
  plugins             --vue插件
  router              --路由
  styles              --公共样式文件
  utils               --工具方法
  views               --视图
  vuex                --数据/状态管理
  App.vue             --系统根组件
  main.js             --系统入口
.eslintrc.js        --eslint规则配置
```
::: tip 为什么要保持项目结构清晰
保持项目代码结构清晰，有利于我们对代码整体的阅读，把握，维护。有助于项目中模块的独立，移植，职能清晰。
:::