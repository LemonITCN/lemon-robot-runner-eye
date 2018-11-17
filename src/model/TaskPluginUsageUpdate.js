let TaskPluginUsageUpdate = class Parameter {

  constructor() {
    this.taskKey = ''
    this.pluginStoreCode = ''
    this.pluginPackageName = ''
    this.pluginVersion = ''
    this.enabledState = ''
  }

  toJSON() {
    return {
      taskKey: this.taskKey,
      pluginStoreCode: this.pluginStoreCode,
      pluginPackageName: this.pluginPackageName,
      pluginVersion: this.pluginVersion,
      enabledState: this.enabledState,
    }
  }
}

export default TaskPluginUsageUpdate