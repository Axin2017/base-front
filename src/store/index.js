import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
Vue.use(Vuex)

const global = {
  namespaced: true,
  state: {
    userinfo: {},
    routerPath: '', // 路由路径
    htmlFontSize: 0, // html的字号大小
    executeMehod: [], // 地图mixin执行的方法名称
    resourceTreeAddedLayers: [], // 添加的图层
    // 带地图右侧面板
    rightPanelShow: false,
    rightPanelWidth: 0
  },
  getters: {
    userKey: state => {
      return state.userinfo.userKey // 调用产品中心的登录后，会有返回
    }
  },
  mutations: {
    setUserInfo(state, userinfo) {
      state.userinfo = userinfo
    },
    setRouterPath(state, routerPath) {
      state.routerPath = routerPath
    },
    setHtmlFontSize(state, fontSize) {
      state.htmlFontSize = fontSize
    },
    addExecuteFunName(state, methodProxy) {
      state.executeMehod.push(methodProxy)
    },
    setExecuteFunName(state, methodProxys) {
      state.executeMehod = methodProxys
    },
    // 右侧面板
    setRightPanelWidth(state, width) {
      state.rightPanelWidth = width
    },
    setRightPanelShow(state, show) {
      state.rightPanelShow = show
    },
    addResourceTreeLayer(state, layer) {
      state.resourceTreeAddedLayers.push(layer)
    },
    removeResourceTreeLayer(state, id) {
      const layers = state.resourceTreeAddedLayers
      for (let i = 0; i < layers.length; i++) {
        if (layers[i].id === id) {
          layers.splice(i, 1)
          break
        }
      }
    }
  }
}

export default new Vuex.Store({
  modules: {
    global,
    home
  }
})
