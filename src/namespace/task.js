/**
 * 获取任务列表
 */
const GET_TASK_LIST = 'TASK_GET_TASK_LIST'
/**
 * 获取当前的状态
 */
const GET_CURRENT_STATE = 'TASK_GET_CURRENT_STATE'
/**
 * 获取当前正在编辑的任务
 */
const GET_CURRENT_EDIT_TASK = 'TASK_GET_CURRENT_EDIT_TASK'
/**
 * 获取当前是否正在编辑中的任务
 */
const GET_HAVE_EDITING_TASK = 'TASK_GET_HAVE_EDITING_TASK'

/**
 * 设置状态为：拉取任务列表完毕，但是为空，无任务
 */
const MUT_SET_STATE_EMPTY = 'TASK_MUT_SET_STATE_EMPTY'
/**
 * 设置状态为：正在拉取任务列表中
 */
const MUT_SET_STATE_PULLING = 'TASK_MUT_SET_STATE_PULLING'
/**
 * 设置状态为：拉取状态列表失败
 */
const MUT_SET_STATE_FAILED = 'TASK_MUT_SET_STATE_FAILED'
/**
 * 设置状态为：拉取状态列表完毕，存在数据
 */
const MUT_SET_STATE_NORMAL = 'TASK_MUT_SET_STATE_NORMAL'
/**
 * 保存任务列表
 */
const MUT_SET_TASK_LIST = 'TASK_MUT_SET_TASK_LIST'
/**
 * 设置当前正在编辑的任务
 */
const MUT_SET_CURRENT_EDIT_TASK = 'TASK_MUT_SET_CURRENT_EDIT_TASK'
/**
 * 关闭当前正在编辑的任务
 */
const MUT_SET_CLOSE_EDIT_TASK = 'TASK_MUT_SET_CLOSE_EDIT_TASK'

/**
 * 从服务器刷新任务列表
 */
const ACT_REFRESH_TASK_LIST = 'TASK_ACT_REFRESH_TASK_LIST'

export default {
  GET_TASK_LIST,
  GET_CURRENT_STATE,
  GET_CURRENT_EDIT_TASK,
  GET_HAVE_EDITING_TASK,
  MUT_SET_STATE_EMPTY,
  MUT_SET_STATE_PULLING,
  MUT_SET_STATE_FAILED,
  MUT_SET_STATE_NORMAL,
  MUT_SET_TASK_LIST,
  MUT_SET_CURRENT_EDIT_TASK,
  MUT_SET_CLOSE_EDIT_TASK,
  ACT_REFRESH_TASK_LIST
}