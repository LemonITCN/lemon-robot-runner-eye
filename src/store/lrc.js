import NS from '@/namespace'
import axios from 'axios'
import util from '@/util'
import JSEncrypt from 'jsencrypt/bin/jsencrypt'
import define from '@/define'
import Vue from 'vue'

export default {
  state: {
    state: '',
    address: '',
    lrcKey: '',
    lrck: '',
    lrcs: '',
    lrcList: []
  },
  getters: {
    [NS.LRC.GET_IS_SHOW_PANEL](state) {
      return state.state !== NS.LRC.MUT_SET_STATE_CONNECTED
    },
    [NS.LRC.GET_IS_CONNECTING](state) {
      return state.state === NS.LRC.MUT_SET_STATE_CONNECTING
    },
    [NS.LRC.GET_IS_CAN_SEND_REQUEST](state) {
      return state.state === NS.LRC.MUT_SET_STATE_CONNECTED
    },
    [NS.LRC.GET_LRC_KEY](state) {
      return state.lrcKey
    },
    [NS.LRC.GET_LRCK](state) {
      return state.lrck
    },
    [NS.LRC.GET_LRCS](state) {
      return state.lrcs
    },
    [NS.LRC.GET_ADDRESS](state) {
      return state.address
    },
    [NS.LRC.GET_LRC_LIST](state) {
      return state.lrcList
    }
  },
  mutations: {
    [NS.LRC.MUT_SET_STATE_DISCONNECTED](state) {
      state.state = NS.LRC.MUT_SET_STATE_DISCONNECTED
    },
    [NS.LRC.MUT_SET_STATE_CONNECTED](state) {
      state.state = NS.LRC.MUT_SET_STATE_CONNECTED
    },
    [NS.LRC.MUT_SET_STATE_CONNECTING](state) {
      state.state = NS.LRC.MUT_SET_STATE_CONNECTING
    },
    [NS.LRC.MUT_SET_LRC_KEY](state, lrcKey) {
      state.lrcKey = lrcKey
    },
    [NS.LRC.MUT_SET_LRCK](state, lrck) {
      state.lrck = lrck
    },
    [NS.LRC.MUT_SET_LRCS](state, lrcs) {
      state.lrcs = lrcs
    },
    [NS.LRC.MUT_SET_ADDRESS](state, address) {
      state.address = address
    },
    [NS.LRC.MUT_SET_LRC_LIST](state, lrcList) {
      state.lrcList = lrcList
    }
  },
  actions: {
    [NS.LRC.ACT_CONN_ACTIVE](context) {
      util.log.info('Start active lrc...')
      context.commit(NS.LRC.MUT_SET_STATE_CONNECTING)
      let jsEncrypt = new JSEncrypt()
      jsEncrypt.setPublicKey('-----BEGIN RSA PRIVATE KEY-----' + context.state.lrck + '-----END RSA PRIVATE KEY-----')
      // 设置基础URL，供全局使用
      axios.defaults.baseURL = context.state.address
      // axios.defaults.headers = {"lrcs": lrcs}
      let lrcs = util.uuid.random()
      axios.post(define.URL.LRC.ACTIVE, {
        'lrcKey': context.state.lrcKey,
        'lrcs': jsEncrypt.encrypt(lrcs),
        'clientType': 0
      })
        .then((res) => {
          if (res.data.success) {
            context.commit(NS.LRC.MUT_SET_LRCS, lrcs)
            localStorage.connector_address = context.state.address
            localStorage.connector_lrc_key = context.state.lrcKey
            localStorage.connector_lrck = context.state.lrck
            axios.defaults.headers.lrcs = lrcs
            util.log.info('LRC successful connection')
            Vue.prototype.heartbeatTimer = setInterval(() => {
              util.log.info('Heartbeat to server.')
              // 发送心跳包
              axios.post(define.URL.LRC.HEARTBEAT, {})
                .catch(() => {
                  util.log.error('Heartbeat failed! Reset LRC')
                  context.dispatch(NS.LRC.ACT_CONN_RESET)  
                })
            }, res.data.data.heartbeatLength * 1000)
            util.log.info('Start heartbeat module: ' + res.data.data.heartbeatLength)
            context.commit(NS.LRC.MUT_SET_STATE_CONNECTED)
          } else {
            context.commit(NS.LRC.MUT_SET_STATE_DISCONNECTED)
          }
        })
        .catch(() => {
          context.commit(NS.LRC.MUT_SET_STATE_DISCONNECTED)
        })
    },
    [NS.LRC.ACT_CONN_RESET](context) {
      context.commit(NS.LRC.MUT_SET_STATE_DISCONNECTED)
      context.commit(NS.LRC.MUT_SET_LRCS, '')
      if (Vue.prototype.heartbeatTimer !== null) {
        clearInterval(Vue.prototype.heartbeatTimer)
        Vue.prototype.heartbeatTimer = null
      }
      context.state.globalWs = null
    },
    [NS.LRC.ACT_RESTORE_CONN_INFO](context) {
      context.commit(NS.LRC.MUT_SET_STATE_DISCONNECTED)
      context.commit(NS.LRC.MUT_SET_LRC_KEY, localStorage.connector_lrc_key)
      context.commit(NS.LRC.MUT_SET_LRCK, localStorage.connector_lrck)
      context.commit(NS.LRC.MUT_SET_ADDRESS, localStorage.connector_address)
    },
    [NS.LRC.ACT_REFRESH_LRC_LIST](context) {
      axios.get(define.URL.LRC.LIST)
        .then((res) => {
          context.commit(NS.LRC.MUT_SET_LRC_LIST, res.data.data)
        })
    }
  }
}
