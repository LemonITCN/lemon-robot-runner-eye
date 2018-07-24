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

Vue.prototype.$axios = axios
Vue.prototype.$NS = namespace
Vue.prototype.$util = util

Vue.config.productionTip = false

// 多语言
const i18n = new VueI18n({
  locale: 'en',
  messages: {
    'zh': require('./lang/zh'),
    'en': require('./lang/en')
  }
})

// 拦截器，拦截所有请求 ，当超时的时候给出统一的提示
axios.interceptors.request.use(config => {
  return config
}, error => {
  util.tip.notification_error(i18n.t('responseMsg.timeout'))
  return Promise.reject(error)
})
// 拦截器，拦截所有响应，当返回的数据中success为false的时候，将msg中的信息本地化处理后提示
axios.interceptors.response.use(res => {
  if (!res.data.success) {
    util.tip.notification_error(i18n.t('responseMsg.' + res.data.msg))
  }
  return res
}, error => {
  util.tip.notification_error(i18n.t('responseMsg.error'))
  return Promise.reject(error)
})

new Vue({
  render: h => h(App),
  i18n,
  router,
  store
}).$mount('#app')
