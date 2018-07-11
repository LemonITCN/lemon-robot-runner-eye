import Vue from 'vue'
import vuex from 'vuex'
import connector from './connector'
import globalLoading from './global-loading'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    connector: connector,
    globalLoading: globalLoading
  }
})
