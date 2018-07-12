import Vue from 'vue'
import vuex from 'vuex'
import lrc from './lrc'
import globalLoading from './global-loading'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    lrc: lrc,
    globalLoading: globalLoading
  }
})
