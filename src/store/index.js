import Vue from 'vue'
import vuex from 'vuex'
import connector from './connector'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    connector: connector
  }
})
