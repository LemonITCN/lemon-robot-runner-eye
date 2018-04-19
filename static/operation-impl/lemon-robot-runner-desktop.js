/* eslint-disable no-unused-vars,no-undef */
/**
 * 系统交互实现类
 * LemonRobotRunner桌面版使用
 */
function LrOperation () {
  this.task = {}
  this.task.init = function () {
    // 主动拉取一次本地任务列表
    _lr.global.repo.taskList.local = _lr.task.localGetTask()
    if (_lr.global.repo.taskList.local.length > 0) {
      // 如果当前选中的任务列表不为空，那么默认开始编辑第一个
      _lr.global.repo.taskList.current.task = _lr.global.repo.taskList.local[0]
      // 设置默认编辑中的指令集标识
      _lr.global.repo.taskList.current.instruction_set_key = [_lr.global.repo.taskList.current.task.taskKey, 'main']
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
  this.task.localGetTask = function () {
    return JSON.parse(_lr_task.localGetTask())
  }
  /**
   * 从本地读取任务的指令集脚本
   * @param taskKey 任务标识
   * @param instructionSetKey 指令集标识
   * @returns {*} 指令集脚本
   */
  this.task.localReadTaskInstructionSetScript = function (taskKey, instructionSetKey) {
    return _lr_task.localReadTaskInstructionSetScriptFromHD(taskKey, instructionSetKey)
  }
  /**
   * 设置插件启用状态
   */
  this.task.onSetPluginEnableState = function (taskKey, pluginKey, state) {
    //
  }
  /**
   * 保存本地任务的指定指令集脚本语句
   *
   * @param taskKey              任务标识
   * @param instructionSetKey    指令集标识
   * @param instructionSetScript 指令集脚本语句
   * @return 是否保存成功的布尔值
   */
  this.task.localSaveInstructionSetScript = function (taskKey, instructionSetKey, instructionSetScript) {
    return _lr_task.localSaveInstructionSetScript(taskKey, instructionSetKey, instructionSetScript)
  }
  /**
   * 保存任务的基本信息到硬盘
   *
   * @param task 要保存基本信息的任务对象
   * @return 保存是否成功的布尔值
   */
  this.task.localSaveTaskBaseInfo = function (task) {
    return _lr_task.localSaveTaskBaseInfo(JSON.stringify(task))
  }
}

var _lr = new LrOperation()
