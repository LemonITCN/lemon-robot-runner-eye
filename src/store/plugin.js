import NS from '@/namespace'
import axios from 'axios'
import util from '@/util'
import define from '@/define'

export default {
  state: {
    pluginList: []
  },
  getters: {
    [NS.PLUGIN.GET_PLUGIN_LIST] (state) {
      return state.pluginList
    }
  },
  mutations: {
    [NS.PLUGIN.MUT_SET_PLUGIN_LIST] (state, pluginList) {
      state.pluginList = pluginList
    }
  },
  actions: {
    [NS.PLUGIN.ACT_REFRESH_PLUGIN_LIST] (context, callbacks) {
      util.log.info('Prepare to refresh the plugin list')
      axios.get(define.URL.PLUGIN.LIST)
        .then((res) => {
          context.commit(NS.PLUGIN.MUT_SET_PLUGIN_LIST, res.data.data)
          if (callbacks && typeof callbacks.success === 'function') {
            callbacks.success()
          }
        })
        .catch(() => {
          if (callbacks && typeof callbacks.failed === 'function') {
            callbacks.failed()
          }
        })
    }
  }
}