import NS from '@/namespace'
import axios from 'axios'
import util from '@/util'
import define from '@/define'

export default {
  state: {
    taskList: [],
    state: '',
    currentEditTask: {},
    currentInstructionSetList: [],
    currentInstructionSetKey: null
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
      state.currentEditTask = null
      state.currentInstructionSetList = null
      state.currentInstructionSetKey = null
    }
  },
  actions: {
    [NS.TASK.ACT_REFRESH_TASK_LIST] (context) {
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
          util.log.info(context)
        })
        .catch(() => {
          context.commit(NS.TASK.MUT_SET_STATE_FAILED)
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
            if (callbacks){
              // callbacks存在
              util.log.info(callbacks.success)
              try {
                callbacks.success()
              }catch (e){
                util.log.error(e)
                util.log.warn(NS.TASK.ACT_REFRESH_INSTRUCTION_SET_LIST + ' do not have success callback')
              }
            }
          })
          .catch(() => {
            context.commit(NS.TASK.MUT_SET_CURRENT_INSTRUCTION_SET_LIST, [])
            try {
              callbacks['failed']()
            }catch (e){
              util.log.warn(NS.TASK.ACT_REFRESH_INSTRUCTION_SET_LIST + ' do not have failed callback')
            }
          })
      }
    },
    [NS.TASK.ACT_SAVE_CURRENT_EDITING_TASK] (context, callbacks) {
      callbacks
    }
  }
}