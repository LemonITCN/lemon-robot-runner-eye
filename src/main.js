// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import Global from './Global'
import VueI18n from 'vue-i18n'
import axios from 'axios'
// 编译LemonRobot桌面版本时候引用
import '../static/operation-impl/lemon-robot-runner-desktop.js'
import store from './store'
import namespace from './namespace/index'

Vue.config.productionTip = false
Vue.prototype.global = Global

// 使用ElementUI
Vue.use(ElementUI)
Vue.use(VueI18n)
Vue.prototype.$ajax = axios
Vue.prototype.$NS = namespace

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    'zh': require('./common/language/zh'),
    'en': require('./common/language/en')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
