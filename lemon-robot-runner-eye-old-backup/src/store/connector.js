import NS from '@/namespace'
import axios from 'axios'
import util from '@/util'
import JSEncrypt from 'jsencrypt/bin/jsencrypt'

export default {
  state: {
    // state: 0 已断开 ， 1 正在建立WS连接 ，2 正在激活 ，3 Connector已激活完毕
    state: 0,
    address: '',
    lrct: '',
    lrck: '',
    lrcs: '',
    globalWs: null
  },
  getters: {
    [NS.CONNECTOR.GET_IS_SHOW_PANEL] (state) {
      return state.state !== NS.CONNECTOR.MUT_SET_STATE_CONNECTED
    },
    [NS.CONNECTOR.GET_IS_CAN_START_CONNECT] (state) {
      return state.state === NS.CONNECTOR.MUT_SET_STATE_DISCONNECTED
    },
    [NS.CONNECTOR.GET_LRC_KEY] (state) {
      return state.lrct
    },
    [NS.CONNECTOR.GET_LRCK] (state) {
      return state.lrck
    },
    [NS.CONNECTOR.GET_LRCS] (state) {
      return state.lrcs
    },
    [NS.CONNECTOR.GET_ADDRESS] (state) {
      return state.address
    }
  },
  mutations: {
    [NS.CONNECTOR.MUT_SET_STATE] (state, connState) {
      state.state = connState
    },
    [NS.CONNECTOR.MUT_SET_STATE_DISCONNECTED] (state) {
      state.state = NS.CONNECTOR.MUT_SET_STATE_DISCONNECTED
    },
    [NS.CONNECTOR.MUT_SET_STATE_WSCONNING] (state) {
      state.state = NS.CONNECTOR.MUT_SET_STATE_WSCONNING
    },
    [NS.CONNECTOR.MUT_SET_STATE_ACTIVING] (state) {
      state.state = NS.CONNECTOR.MUT_SET_STATE_ACTIVING
    },
    [NS.CONNECTOR.MUT_SET_STATE_CONNECTED] (state) {
      state.state = NS.CONNECTOR.MUT_SET_STATE_CONNECTED
    },
    [NS.CONNECTOR.MUT_SET_LRCT] (state, lrct) {
      state.lrct = lrct
    },
    [NS.CONNECTOR.MUT_SET_LRCK] (state, lrck) {
      state.lrck = lrck
    },
    [NS.CONNECTOR.MUT_SET_LRCS] (state, lrcs) {
      state.lrcs = lrcs
    },
    [NS.CONNECTOR.MUT_SET_ADDRESS] (state, address) {
      state.address = address
    }
  },
  actions: {
    [NS.CONNECTOR.ACT_CONN_START] (context) {
      // 开始发起客户端连接
      util.log.info('Start LRC...')
      context.commit(NS.CONNECTOR.MUT_SET_STATE_WSCONNING)
      // 随机生成LRCS
      let lrcs = util.uuid.random()
      // 首先保存连接数据
      context.commit(NS.CONNECTOR.MUT_SET_LRCS, lrcs)
      // 然后发起WS连接
      let wsUrl = context.state.address.replace('https:', 'ws:').replace('http:', 'ws:') + '/websocket'
      context.state.globalWs = new WebSocket(wsUrl)
      context.state.globalWs.onmessage = ev => {
        let data = JSON.parse(ev.data)
        util.log.debug('Receive LemonRobot server msg : %O', data)
        if (data.type === 'active_code_distribute') {
          // 计算LRCS的加密数据，并调用激活过程
          let jsEncrypt = new JSEncrypt()
          jsEncrypt.setPublicKey('-----BEGIN RSA PRIVATE KEY-----' + context.state.lrck + '-----END RSA PRIVATE KEY-----')
          context.dispatch(NS.CONNECTOR.ACT_CONN_ACTIVE, {
            encryptedLrcs: jsEncrypt.encrypt(lrcs),
            activeCode: data.data
          })
        } else {
          console.log(data)
        }
      }
      // ws连接关闭后重置连接
      context.state.globalWs.onclose = () => {
        context.dispatch(NS.CONNECTOR.ACT_CONN_RESET)
      }
    },
    [NS.CONNECTOR.ACT_CONN_ACTIVE] (context, connInfo) {
      util.log.info('Start active connector...')
      context.commit(NS.CONNECTOR.MUT_SET_STATE_ACTIVING)
      axios.post(context.state.address + '/connector/active', {
        'lrct': context.state.lrct,
        'lrcs': connInfo.encryptedLrcs,
        'activeCode': connInfo.activeCode
      })
        .then((res) => {
          if (res.data.success) {
            localStorage.connector_address = context.state.address
            localStorage.connector_lrct = context.state.lrct
            localStorage.connector_lrck = context.state.lrck
            util.log.info('LRC successful connection')
            context.commit(NS.CONNECTOR.MUT_SET_STATE_CONNECTED)
          } else {
            context.commit(NS.CONNECTOR.MUT_SET_STATE_DISCONNECTED)
          }
        })
        .catch(() => {
          context.commit(NS.CONNECTOR.MUT_SET_STATE_DISCONNECTED)
        })
    },
    [NS.CONNECTOR.ACT_CONN_RESET] (context) {
      context.commit(NS.CONNECTOR.MUT_SET_STATE_DISCONNECTED)
      context.commit(NS.CONNECTOR.MUT_SET_LRCS, '')
      context.state.globalWs = null
    },
    [NS.CONNECTOR.ACT_RESTORE_CONN_INFO] (context) {
      context.commit(NS.CONNECTOR.MUT_SET_STATE_DISCONNECTED)
      context.commit(NS.CONNECTOR.MUT_SET_LRCT, localStorage.connector_lrct)
      context.commit(NS.CONNECTOR.MUT_SET_LRCK, localStorage.connector_lrck)
      context.commit(NS.CONNECTOR.MUT_SET_ADDRESS, localStorage.connector_address)
    }
  }
}
