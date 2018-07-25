import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont/iconfont.css'
import '@/assets/general/general.css'
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
const RESPONSE_MSG_LANG = 'responseMsg.'
let CancelToken = axios.CancelToken
axios.interceptors.request.use(config => {
  // 如果当前LRC没有连接，那么除了LRC的请求之外的所有请求全部取消
  if ((config.url.indexOf('lrc') < 0) && !store.getters[namespace.LRC.GET_IS_CAN_SEND_REQUEST]) {
    config.cancelToken = new CancelToken(c => c(config.url))
  }
  return config
}, error => {
  util.tip.notification_error(i18n.t(RESPONSE_MSG_LANG + 'timeout'))
  return Promise.reject(error)
})
// 拦截器，拦截所有响应，当返回的数据中success为false的时候，将msg中的信息本地化处理后提示
axios.interceptors.response.use(res => {
  // // 如果当前LRC没有连接，那么除了LRC的所有请求都会被拒接，返回一个空对象
  // if ((res.config.url.indexOf('lrc') < 0) && !store.getters[namespace.LRC.GET_IS_CAN_SEND_REQUEST]) {
  //   // 返回对象里面加装data，防止后面程序报错
  //   return {data: {}}
  // }
  if (!res.data.success) {
    util.tip.notification_error(i18n.t(RESPONSE_MSG_LANG + res.data.msg))
  }
  return res
}, (error) => {
  return Promise.reject(error)
})

new Vue({
  render: h => h(App),
  i18n,
  router,
  store
}).$mount('#app')
