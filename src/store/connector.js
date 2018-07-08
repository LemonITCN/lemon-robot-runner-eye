import NS from '@/namespace'

export default {
  state: {
    state: false,
    address: '',
    lrct: '',
    lrck: '',
    lrcs: ''
  },
  getters: {
    [NS.CONNECTOR.GET_IS_SHOW_PANEL] (state) {
      return !state.state
    },
    [NS.CONNECTOR.GET_LRCT] (state) {
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
    [NS.CONNECTOR.ACT_CONN_SUCCESS] (context, connInfo) {
      context.commit(NS.CONNECTOR.MUT_SET_STATE, true)
      context.commit(NS.CONNECTOR.MUT_SET_LRCT, connInfo.lrct)
      context.commit(NS.CONNECTOR.MUT_SET_LRCK, connInfo.lrck)
      context.commit(NS.CONNECTOR.MUT_SET_LRCS, connInfo.lrcs)
      context.commit(NS.CONNECTOR.MUT_SET_ADDRESS, connInfo.address)
    },
    [NS.CONNECTOR.ACT_CONN_FAILED] (context) {
      context.commit(NS.CONNECTOR.MUT_SET_STATE, false)
      context.commit(NS.CONNECTOR.MUT_SET_LRCS, '')
    },
    [NS.CONNECTOR.ACT_RESTORE_CONN_INFO] (context, connInfo) {
      context.commit(NS.CONNECTOR.MUT_SET_STATE, false)
      context.commit(NS.CONNECTOR.MUT_SET_LRCT, connInfo.lrct)
      context.commit(NS.CONNECTOR.MUT_SET_LRCK, connInfo.lrck)
      context.commit(NS.CONNECTOR.MUT_SET_ADDRESS, connInfo.address)
    }
  }
}
