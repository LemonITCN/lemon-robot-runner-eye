import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont/iconfont.css'
import '@/assets/general/general.css'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import store from './store'
import router from './routers'
import axios from './axios'
import namespace from './namespace'
import util from './util'
import define from './define'
import i18n from './lang'

Vue.use(ElementUI)
Vue.use(Vuex)

Vue.prototype.$axios = axios
Vue.prototype.$NS = namespace
Vue.prototype.$util = util
Vue.prototype.$define = define
Vue.prototype.heartbeatTimer = null

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  i18n,
  router,
  store
}).$mount('#app')
