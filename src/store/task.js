import NS from '@/namespace'
import axios from 'axios'
import util from '@/util'

export default {
  state: {
    taskList: [],
    state: ''
  },
  getters: {
    [NS.TASK.GET_TASK_LIST] (state) {
      return state.taskList
    },
    [NS.TASK.GET_CURRENT_STATE] (state) {
      return state.state
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
    },
    [NS.TASK.MUT_SET_TASK_LIST] (state, taskList) {
      state.taskList = taskList
    }
  },
  actions: {
    [NS.TASK.ACT_REFRESH_TASK_LIST] (context) {
      context.commit(NS.TASK.MUT_SET_STATE_PULLING)
      util.log.info('Prepare to refresh the task list')
      // 网络请求任务列表
      axios.get('/task/list')
        .then((res) => {
          context.commit(NS.TASK.MUT_SET_TASK_LIST, res.data.data)
          if (context.getters[NS.TASK.GET_TASK_LIST].length > 0) {
            context.commit(NS.TASK.MUT_SET_STATE_NORMAL)
          } else {
            context.commit(NS.TASK.MUT_SET_STATE_EMPTY)
          }
          util.log.info(context)
        })
        .catch(() => {
          context.commit(NS.TASK.MUT_SET_STATE_FAILED)
        })
    }
  }
}