import Vue from 'vue'
import vuex from 'vuex'
import lrc from './lrc'
import task from './task'
import plugin from './plugin'
import globalLoading from './global-loading'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    lrc: lrc,
    task: task,
    plugin: plugin,
    globalLoading: globalLoading
  }
})
