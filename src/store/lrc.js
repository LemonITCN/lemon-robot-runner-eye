import NS from '@/namespace'
import axios from 'axios'
import util from '@/util'
import JSEncrypt from 'jsencrypt/bin/jsencrypt'
import define from '@/define'

export default {
  state: {
    // state: 0 已断开 ， 1 正在建立WS连接 ，2 正在激活 ，3 Connector已激活完毕
    state: NS.LRC.MUT_SET_STATE_DISCONNECTED,
    address: '',
    lrct: '',
    lrck: '',
    lrcs: '',
    globalWs: null
  },
  getters: {
    [NS.LRC.GET_IS_SHOW_PANEL](state) {
      return state.state !== NS.LRC.MUT_SET_STATE_CONNECTED
    },
    [NS.LRC.GET_IS_CAN_START_CONNECT](state) {
      return state.state === NS.LRC.MUT_SET_STATE_DISCONNECTED
    },
    [NS.LRC.GET_IS_CAN_SEND_REQUEST](state) {
      return state.state === NS.LRC.MUT_SET_STATE_CONNECTED
    },
    [NS.LRC.GET_LRCT](state) {
      return state.lrct
    },
    [NS.LRC.GET_LRCK](state) {
      return state.lrck
    },
    [NS.LRC.GET_LRCS](state) {
      return state.lrcs
    },
    [NS.LRC.GET_ADDRESS](state) {
      return state.address
    }
  },
  mutations: {
    [NS.LRC.MUT_SET_STATE](state, connState) {
      state.state = connState
    },
    [NS.LRC.MUT_SET_STATE_DISCONNECTED](state) {
      state.state = NS.LRC.MUT_SET_STATE_DISCONNECTED
    },
    [NS.LRC.MUT_SET_STATE_WSCONNING](state) {
      state.state = NS.LRC.MUT_SET_STATE_WSCONNING
    },
    [NS.LRC.MUT_SET_STATE_ACTIVING](state) {
      state.state = NS.LRC.MUT_SET_STATE_ACTIVING
    },
    [NS.LRC.MUT_SET_STATE_CONNECTED](state) {
      state.state = NS.LRC.MUT_SET_STATE_CONNECTED
    },
    [NS.LRC.MUT_SET_LRCT](state, lrct) {
      state.lrct = lrct
    },
    [NS.LRC.MUT_SET_LRCK](state, lrck) {
      state.lrck = lrck
    },
    [NS.LRC.MUT_SET_LRCS](state, lrcs) {
      state.lrcs = lrcs
    },
    [NS.LRC.MUT_SET_ADDRESS](state, address) {
      state.address = address
    }
  },
  actions: {
    [NS.LRC.ACT_CONN_START](context) {
      // 开始发起客户端连接
      util.log.info('Start LRC...')
      context.commit(NS.LRC.MUT_SET_STATE_WSCONNING)
      // 随机生成LRCS
      let lrcs = util.uuid.random()
      // 首先保存连接数据
      context.commit(NS.LRC.MUT_SET_LRCS, lrcs)
      // 然后发起WS连接
      let wsUrl = context.state.address.replace('https:', 'ws:').replace('http:', 'ws:') + define.URL.WEB_SOCKET
      context.state.globalWs = new WebSocket(wsUrl)
      context.state.globalWs.onmessage = ev => {
        let data = JSON.parse(ev.data)
        util.log.debug('Receive LemonRobot server msg : %O', data)
        if (data.type === 'active_code_distribute') {
          // 计算LRCS的加密数据，并调用激活过程
          let jsEncrypt = new JSEncrypt()
          jsEncrypt.setPublicKey('-----BEGIN RSA PRIVATE KEY-----' + context.state.lrck + '-----END RSA PRIVATE KEY-----')
          context.dispatch(NS.LRC.ACT_CONN_ACTIVE, {
            encryptedLrcs: jsEncrypt.encrypt(lrcs),
            activeCode: data.data
          })
        } else {
          // 不是激活码分发过程
        }
      }
      // ws连接关闭后重置连接
      context.state.globalWs.onclose = () => {
        context.dispatch(NS.LRC.ACT_CONN_RESET)
      }
    },
    [NS.LRC.ACT_CONN_ACTIVE](context, connInfo) {
      util.log.info('Start active lrc...')
      context.commit(NS.LRC.MUT_SET_STATE_ACTIVING)
      // 设置基础URL，供全局使用
      axios.defaults.baseURL = context.state.address
      axios.post(define.URL.LRC.ACTIVE, {
        'lrct': context.state.lrct,
        'lrcs': connInfo.encryptedLrcs,
        'activeCode': connInfo.activeCode,
        'clientType': 0
      })
        .then((res) => {
          if (res.data.success) {
            localStorage.connector_address = context.state.address
            localStorage.connector_lrct = context.state.lrct
            localStorage.connector_lrck = context.state.lrck
            axios.defaults.headers = {}
            util.log.info('LRC successful connection')
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
      context.state.globalWs = null
    },
    [NS.LRC.ACT_RESTORE_CONN_INFO](context) {
      context.commit(NS.LRC.MUT_SET_STATE_DISCONNECTED)
      context.commit(NS.LRC.MUT_SET_LRCT, localStorage.connector_lrct)
      context.commit(NS.LRC.MUT_SET_LRCK, localStorage.connector_lrck)
      context.commit(NS.LRC.MUT_SET_ADDRESS, localStorage.connector_address)
    }
  }
}
