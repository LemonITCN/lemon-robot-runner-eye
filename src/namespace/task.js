/**
 * 获取任务列表
 */
const GET_TASK_LIST = 'GET_TASK_LIST'
/**
 * 获取当前的状态
 */
const GET_CURRENT_STATE = 'GET_CURRENT_STATE'

/**
 * 设置状态为：拉取任务列表完毕，但是为空，无任务
 */
const MUT_SET_STATE_EMPTY = 'MUT_SET_STATE_EMPTY'
/**
 * 设置状态为：正在拉取任务列表中
 */
const MUT_SET_STATE_PULLING = 'MUT_SET_STATE_PULLING'
/**
 * 设置状态为：拉取状态列表失败
 */
const MUT_SET_STATE_FAILED = 'MUT_SET_STATE_FAILED'
/**
 * 设置状态为：拉取状态列表完毕，存在数据
 */
const MUT_SET_STATE_NORMAL = 'MUT_SET_STATE_NORMAL'

/**
 * 从服务器刷新任务列表
 */
const ACT_REFRESH_TASK_LIST = 'ACT_REFRESH_TASK_LIST'

export default {
  GET_TASK_LIST,
  GET_CURRENT_STATE,
  MUT_SET_STATE_EMPTY,
  MUT_SET_STATE_PULLING,
  MUT_SET_STATE_FAILED,
  MUT_SET_STATE_NORMAL,
  ACT_REFRESH_TASK_LIST
}