/**
 * 是否展示Connector面板
 */
const GET_IS_SHOW_PANEL = 'LRC_GET_IS_SHOW_PANEL'
/**
 * 是否能发起连接
 * 只有当状态是DISCONNECTED的时候为true
 */
const GET_IS_CAN_START_CONNECT = 'LRC_GET_IS_CAN_START_CONNECT'
/**
 * 是否正在连接中
 */
const GET_IS_CONNECTING = 'LRC_GET_IS_CONNECTING'
/**
 * 是否能发起普通的网络要求
 * 如果是不是连接成功状态，就不允许发送普通网络请求
 */
const GET_IS_CAN_SEND_REQUEST = 'LRC_GET_IS_CAN_SEND_REQUEST'
/**
 * 获取LRC_KEY
 */
const GET_LRC_KEY = 'LRC_GET_LRC_KEY'
/**
 * 获取LRCK
 */
const GET_LRCK = 'LRC_GET_LRCK'
/**
 * 获取LRCS
 */
const GET_LRCS = 'LRC_GET_LRCS'
/**
 * 获取服务器连接地址
 */
const GET_ADDRESS = 'LRC_GET_ADDRESS'
/**
 * 获取LRC公开信息列表
 */
const GET_LRC_LIST = 'LRC_GET_LRC_LIST'
/**
 * 修改展示连接器面板的状态
 */
const MUT_SET_STATE = 'LRC_MUT_SET_STATE'
/**
 * 修改展示连接器面板的状态为断开连接
 */
const MUT_SET_STATE_DISCONNECTED = 'LRC_MUT_SET_STATE_DISCONNECTED'
/**
 * 修改展示连接器面板的状态为正在连接中
 */
const MUT_SET_STATE_CONNECTING = 'LRC_MUT_SET_STATE_CONNECTING'
/**
 * 修改展示连接器面板的状态为连接成功
 */
const MUT_SET_STATE_CONNECTED = 'LRC_MUT_SET_STATE_CONNECTED'
/**
 * 修改LRC key
 */
const MUT_SET_LRC_KEY = 'LRC_MUT_SET_LRC_KEY'
/**
 * 修改LRCK
 */
const MUT_SET_LRCK = 'LRC_MUT_SET_LRCK'
/**
 * 修改LRCS
 */
const MUT_SET_LRCS = 'LRC_MUT_SET_LRCS'
/**
 * 修改ADDRESS
 */
const MUT_SET_ADDRESS = 'LRC_MUT_SET_ADDRESS'
/**
 * 设置LRC公开信息列表的内容
 */
const MUT_SET_LRC_LIST = 'LRC_MUT_SET_LRC_LIST'
/**
 * 激活连接
 */
const ACT_CONN_ACTIVE = 'LRC_ACT_CONN_ACTIVE'
/**
 * 重置连接状态，当LRC被断开的时候调用
 */
const ACT_CONN_RESET = 'LRC_ACT_CONN_RESET'
/**
 * 恢复连接信息
 */
const ACT_RESTORE_CONN_INFO = 'LRC_ACT_RESTORE_CONN_INFO'
/**
 * 刷新LRC公开信息列表
 */
const ACT_REFRESH_LRC_LIST = 'LRC_ACT_REFRESH_LRC_LIST'

export default {
  GET_IS_SHOW_PANEL,
  GET_IS_CAN_START_CONNECT,
  GET_IS_CAN_SEND_REQUEST,
  GET_IS_CONNECTING,
  GET_LRC_KEY,
  GET_LRCK,
  GET_LRCS,
  GET_ADDRESS,
  GET_LRC_LIST,
  MUT_SET_STATE,
  MUT_SET_STATE_DISCONNECTED,
  MUT_SET_STATE_CONNECTING,
  MUT_SET_STATE_CONNECTED,
  MUT_SET_LRC_KEY,
  MUT_SET_LRCK,
  MUT_SET_LRCS,
  MUT_SET_ADDRESS,
  MUT_SET_LRC_LIST,
  ACT_CONN_ACTIVE,
  ACT_CONN_RESET,
  ACT_RESTORE_CONN_INFO,
  ACT_REFRESH_LRC_LIST
}
