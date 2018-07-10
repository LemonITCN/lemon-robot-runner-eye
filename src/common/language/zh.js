module.exports = {
  system: {
    app_name: '柠檬机器人',
    cloud_name: '柠檬云',
    company_name: '柠檬信息技术有限公司',
    company_domain: 'LemonIT.CN'
  },
  common: {
    private_cloud: '私有云',
    successful: '成功',
    failed: '失败',
    task_key: '任务标识',
    task_name: '任务名称',
    instruction_set_key: '指令集标识',
    instruction_set_name: '指令集名称',
    data_set_key: '数据集标识',
    data_set_name: '数据集名称',
    please_input: '请输入',
    cancel: '取消',
    create: '创建',
    connect: '连接',
    saving: '正在保存中',
    run: '运行'
  },
  struct: {
    bar: {
      mainMenuBar: {
        task: '任务编辑',
        plugin: '插件管理',
        executor: '执行器',
        cloud: '云端管理',
        system: '系统设置'
      },
      systemStateBar: {},
      taskCreateBar: {
        create_task_loading_title: '任务正在创建中...',
        create_local_task: '创建本地任务',
        create_local_task_button_tip: '点击按钮-',
        create_dialog_task_key_placeholder: '请输入任务标识，英文/数字组成',
        create_dialog_task_name_placeholder: '请输入一个简短而清晰的名称。允许任何语言',
        task_creation: '任务创建',
        local_task_create_error_msg_empty: '任务标识与任务名称均不能为空，请检查'
      },
      taskListBar: {
        local: '本地任务列表'
      },
      userInfoBar: {
        login_to: '登录到',
        register: '注册',
        account: '用户'
      }
    },
    framework: {
      cloudManagerContainer: {},
      executorContainer: {},
      leftContainer: {},
      lrcContainer: {
        server_address: '服務器地址',
        connector_tip_pre: '您还没有连接至',
        connector_tip_end: '服务，请您输入连接信息',
        connect_failed_tip: 'LRC尝试连接失败，无法连接至服务器',
        connect_disconnected_tip: 'LRC服务已断开，请重新连接',
        connect_connected_tip: 'LRC服务连接成功'
      },
      pluginManagerContainer: {},
      systemSettingsContainer: {},
      taskDetailContainer: {
        plugin_usage: '插件引用',
        instruction_set: '指令集管理',
        data_set: '数据集管理'
      }
    }
  },
  task: {
    bar: {
      taskMenuBar: {
        uploadTask: '上传任务'
      }
    },
    dataSet: {
      dataSetContent: {}
    },
    instruction: {
      instructionSetContent: {}
    },
    pluginUsage: {
      pluginUsageContent: {
        plugin_name: '插件名称',
        plugin_author: '插件作者',
        plugin_version: '插件版本',
        plugin_key: '插件标识'
      }
    }
  }
}
