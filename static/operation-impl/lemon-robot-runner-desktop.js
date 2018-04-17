/* eslint-disable no-unused-vars,no-undef */
/**
 * 系统交互实现类
 * LemonRobotRunner桌面版使用
 */
function LrOperation () {
  this.task = {}
  this.task.init = function () {
    // 主动拉取一次本地任务列表
    _lr.global.repo.taskList.local = _lr.task.localGetList()
    // 设置默认选择本地任务列表
    _lr.global.repo.taskList.current.list = _lr.global.repo.taskList.local
    if (_lr.global.repo.taskList.current.list.length > 0) {
      // 如果当前选中的任务列表不为空，那么默认开始编辑第一个
      _lr.global.repo.taskList.current.task = _lr.global.repo.taskList.current.list[0]
    }
  }
  /**
   * 创建任务
   * @param taskKey 任务标识
   * @param taskName 任务名称
   * @returns {*}
   */
  this.task.localCreateTask = function (taskKey, taskName) {
    return _lr_task.localCreateTask(taskKey, taskName)
  }
  /**
   * 获取任务列表
   */
  this.task.localGetList = function () {
    return JSON.parse(_lr_task.localGetTask())
  }
  /**
   * 设置插件启用状态
   */
  this.task.onSetPluginEnableState = function (taskKey, pluginKey, state) {
    //
  }
  /**
   * 保存任务
   */
  this.task.localSave = function (task) {
    //
  }
}

var _lr = new LrOperation()
