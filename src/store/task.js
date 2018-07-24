import NS from '@/namespace'
import axios from 'axios'
import util from '@/util'

export default {
  state: {
    taskList: [],
    state: ''
  },
  getter: {
    [NS.TASK.GET_TASK_LIST] (state) {
      return state.taskList
    }
  },
  mutations: {
    [NS.TASK.MUT_SET_STATE_EMPTY] (state) {
      state.state = NS.TASK.MUT_SET_STATE_EMPTY
    },
    [NS.TASK.MUT_SET_STATE_PULLING] (state) {
      state.state = NS.TASK.MUT_SET_STATE_PULLING
    },
    [NS.TASK.MUT_SET_STATE_FAILED] (state) {
      state.state = NS.TASK.MUT_SET_STATE_FAILED
    },
    [NS.TASK.MUT_SET_STATE_NORMAL] (state) {
      state.state = NS.TASK.MUT_SET_STATE_NORMAL
    }
  },
  actions: {
    [NS.TASK.ACT_REFRESH_TASK_LIST] (context) {
      util.log.info('Prepare to refresh the task list')
      if (context.rootState.lrc.address === '') {
        util.log.warn('LRC has not established a connection and cannot request a task list')
      }
      // util.log.info(context.rootState.lrc.address)
      util.log.info(axios.defaults.baseURL)
    }
  }
}