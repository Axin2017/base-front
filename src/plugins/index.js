import cidPlugin from './cidPlugin'

function registerCustomPlugins(vue) {
  vue.use(cidPlugin)
}

export { registerCustomPlugins }
