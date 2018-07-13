import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont/iconfont.css'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import store from './store'
import router from './routers'
import axios from 'axios'
import namespace from './namespace'
import util from './util'

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueI18n)

Vue.prototype.$ajax = axios
Vue.prototype.$NS = namespace
Vue.prototype.$util = util

Vue.config.productionTip = false

// 多语言
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('./lang/zh'),
    'en': require('./lang/en')
  }
})

new Vue({
  render: h => h(App),
  i18n,
  router,
  store
}).$mount('#app')
