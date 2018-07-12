/**
 * 是否展示Connector面板
 */
const GET_IS_SHOW_PANEL = 'GET_IS_SHOW_PANEL'
/**
 * 是否能发起连接
 * 只有当状态是DISCONNECTED的时候为true
 */
const GET_IS_CAN_START_CONNECT = 'GET_IS_CAN_START_CONNECT'
/**
 * 获取LRCT
 */
const GET_LRCT = ''
/**
 * 获取LRCK
 */
const GET_LRCK = ''
/**
 * 获取LRCS
 */
const GET_LRCS = ''
/**
 * 获取服务器连接地址
 */
const GET_ADDRESS = ''
/**
 * 修改展示连接器面板的状态
 */
const MUT_SET_STATE = 'MUT_SET_STATE'
/**
 * 修改展示连接器面板的状态为断开连接
 */
const MUT_SET_STATE_DISCONNECTED = 'MUT_SET_STATE_DISCONNECTED'
/**
 * 修改展示连接器面板的状态为正在建立WS长连接
 */
const MUT_SET_STATE_WSCONNING = 'MUT_SET_STATE_WSCONNING'
/**
 * 修改展示连接器面板的状态为正在激活
 */
const MUT_SET_STATE_ACTIVING = 'MUT_SET_STATE_ACTIVING'
/**
 * 修改展示连接器面板的状态为连接成功
 */
const MUT_SET_STATE_CONNECTED = 'MUT_SET_STATE_CONNECTED'
/**
 * 修改LRCT
 */
const MUT_SET_LRCT = 'MUT_SET_LRCT'
/**
 * 修改LRCK
 */
const MUT_SET_LRCK = 'MUT_SET_LRCK'
/**
 * 修改LRCS
 */
const MUT_SET_LRCS = 'MUT_SET_LRCS'
/**
 * 修改ADDRESS
 */
const MUT_SET_ADDRESS = 'MUT_SET_ADDRESS'
/**
 * 发起连接请求
 * 此时是发起Websocket长连接请求
 */
const ACT_CONN_START = 'ACT_CONN_START'
/**
 * 激活连接
 */
const ACT_CONN_ACTIVE = 'ACT_CONN_ACTIVE'
/**
 * 重置连接状态，当LRC被断开的时候调用
 */
const ACT_CONN_RESET = 'ACT_CONN_RESET'
/**
 * 恢复连接信息
 */
const ACT_RESTORE_CONN_INFO = 'ACT_RESTORE_CONN_INFO'

export default {
  GET_IS_SHOW_PANEL,
  GET_IS_CAN_START_CONNECT,
  GET_LRCT,
  GET_LRCK,
  GET_LRCS,
  GET_ADDRESS,
  MUT_SET_STATE,
  MUT_SET_STATE_DISCONNECTED,
  MUT_SET_STATE_WSCONNING,
  MUT_SET_STATE_ACTIVING,
  MUT_SET_STATE_CONNECTED,
  MUT_SET_LRCT,
  MUT_SET_LRCK,
  MUT_SET_LRCS,
  MUT_SET_ADDRESS,
  ACT_CONN_START,
  ACT_CONN_ACTIVE,
  ACT_CONN_RESET,
  ACT_RESTORE_CONN_INFO
}
