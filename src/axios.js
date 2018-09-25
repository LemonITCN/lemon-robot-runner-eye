import axios from 'axios'
import i18n from './lang'
import util from './util'
import namespace from './namespace'
import store from './store'
import define from './define'

// 拦截器，拦截所有请求 ，当超时的时候给出统一的提示
const RESPONSE_MSG_LANG = 'responseMsg.'
let CancelToken = axios.CancelToken
axios.interceptors.request.use(config => {
  // 如果当前LRC没有连接，那么除了LRC的请求之外的所有请求全部取消
  if ((config.url.indexOf(define.URL.LRC.ACTIVE) < 0) && !store.getters[namespace.LRC.GET_IS_CAN_SEND_REQUEST]) {
    config.cancelToken = new CancelToken(c => c(config.url))
  }
  return config
}, error => {
  util.tip.notification_error(i18n.t(RESPONSE_MSG_LANG + 'timeout'))
  return Promise.reject(error)
})
// 拦截器，拦截所有响应，当返回的数据中success为false的时候，将msg中的信息本地化处理后提示
axios.interceptors.response.use(res => {
  if (!res.data.success) {
    if (res.data.code === 30003) {
      // 会话失效，重置LRC
      store.dispatch(namespace.LRC.ACT_CONN_RESET)
      return Promise.reject(res)
    }
    util.tip.notification_error(i18n.t(RESPONSE_MSG_LANG + res.data.msg))
    return Promise.reject(res)
  }
  return res
}, (error) => {
  return Promise.reject(error)
})

export default axios