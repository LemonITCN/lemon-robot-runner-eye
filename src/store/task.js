import NS from '@/namespace'
import axios from 'axios'
import util from '@/util'
import define from '@/define'
import i18n from '@/lang'
import Vue from 'vue'

const lang = 'task.store.'

export default {
  state: {
    taskList: [],
    state: '',
    currentEditTask: {},
    currentInstructionSetList: [],
    currentInstructionSetKey: null,
    currentDataSetKey: ''
  },
  getters: {
    [NS.TASK.GET_TASK_LIST] (state) {
      return state.taskList
    },
    [NS.TASK.GET_CURRENT_STATE] (state) {
      return state.state
    },
    [NS.TASK.GET_CURRENT_EDIT_TASK] (state) {
      return state.currentEditTask
    },
    [NS.TASK.GET_CURRENT_INSTRUCTION_SET_LIST] (state) {
      return state.currentInstructionSetList
    },
    [NS.TASK.GET_CURRENT_INSTRUCTION_SET_KEY] (state) {
      return state.currentInstructionSetKey
    },
    [NS.TASK.GET_HAVE_EDITING_TASK] (state) {
      return state.currentEditTask !== null && state.currentEditTask.taskId !== undefined
    },
    [NS.TASK.GET_CURRENT_DATA_SET_KEY] (state) {
      return state.currentDataSetKey
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
    },
    [NS.TASK.MUT_SET_CURRENT_EDIT_TASK] (state, task) {
      state.currentEditTask = task
    },
    [NS.TASK.MUT_SET_CURRENT_INSTRUCTION_SET_LIST] (state, instructionSetList) {
      state.currentInstructionSetList = instructionSetList
    },
    [NS.TASK.MUT_SET_CURRENT_INSTRUCTION_SET_KEY] (state, instructionSetKey) {
      state.currentInstructionSetKey = instructionSetKey
    },
    [NS.TASK.MUT_SET_CLOSE_EDIT_TASK] (state) {
      state.currentInstructionSetKey = null
      state.currentInstructionSetList = null
      state.currentEditTask = null
    },
    [NS.TASK.MUT_PUT_EDITING_TASK_DATA_SET] (state, info) {
      if (state.currentEditTask !== null) {
        Vue.set(state.currentEditTask.dataSet, info.key, info.dataSet)
      }
    },
    [NS.TASK.MUT_SET_CURRENT_DATA_SET_KEY] (state, dataSetKey) {
      state.currentDataSetKey = dataSetKey
    }
  },
  actions: {
    [NS.TASK.ACT_REFRESH_TASK_LIST] (context, callbacks) {
      context.commit(NS.TASK.MUT_SET_STATE_PULLING)
      util.log.info('Prepare to refresh the task list')
      // 网络请求任务列表
      axios.get(define.URL.TASK.LIST)
        .then((res) => {
          context.commit(NS.TASK.MUT_SET_TASK_LIST, res.data.data)
          if (context.getters[NS.TASK.GET_TASK_LIST].length > 0) {
            context.commit(NS.TASK.MUT_SET_STATE_NORMAL)
          } else {
            context.commit(NS.TASK.MUT_SET_STATE_EMPTY)
          }
          if (callbacks && typeof callbacks.success === 'function') {
            callbacks.success()
          }
        })
        .catch(() => {
          context.commit(NS.TASK.MUT_SET_STATE_FAILED)
          if (callbacks && typeof callbacks.failed === 'function') {
            callbacks.failed()
          }
        })
    },
    [NS.TASK.ACT_REFRESH_INSTRUCTION_SET_LIST] (context, callbacks) {
      if (context.getters[NS.TASK.GET_HAVE_EDITING_TASK]) {
        // 有正在编辑的任务时候才可用
        context.commit(NS.TASK.MUT_SET_CURRENT_INSTRUCTION_SET_LIST, null)
        axios.get(define.URL.TASK.INSTRUCTION.LIST, {
          params: {
            taskId: context.getters[NS.TASK.GET_CURRENT_EDIT_TASK].taskId
          }
        })
          .then((res) => {
            context.commit(NS.TASK.MUT_SET_CURRENT_INSTRUCTION_SET_LIST, res.data.data)
            context.commit(NS.TASK.MUT_SET_CURRENT_INSTRUCTION_SET_KEY, define.STRING.MAIN_INSTRUCTION)
            if (callbacks && typeof callbacks.success === 'function') {
              callbacks.success()
            }
            util.tip.message_success(i18n.t(lang + 'instruction_set_list_refresh_success'))
          })
          .catch(() => {
            context.commit(NS.TASK.MUT_SET_CURRENT_INSTRUCTION_SET_LIST, [])
            if (callbacks && typeof callbacks.failed === 'function') {
              callbacks.failed()
            }
          })
      }
    },
    [NS.TASK.ACT_SAVE_CURRENT_EDITING_TASK] (context, info) {
      let task = null
      if (info && info.task) {
        task = info.task
      }
      task = task === null ? context.getters[NS.TASK.GET_CURRENT_EDIT_TASK] : task
      axios.post(define.URL.TASK.UPDATE, task)
        .then(() => {
          util.tip.message_success(i18n.t(lang + 'task_change_submit_success'))
          if (info && typeof info.success === 'function') {
            info.success()
          }
        })
        .catch(() => {
          if (info && typeof info.failed === 'function') {
            info.failed()
          }
        })
    },
    [NS.TASK.ACT_SAVE_INSTRUCTION_SET_SCRIPT] (content, info) {
      axios.post(define.URL.TASK.INSTRUCTION.SAVE_SCRIPT, info.task)
        .then(() => {
          util.tip.message_success(i18n.t(lang + 'instruction_set_script_save_success'))
          if (info && typeof info.success === 'function') {
            info.success()
          }
        })
        .catch(() => {
          if (info && typeof info.failed === 'function') {
            info.failed()
          }
        })
    }
  }
}