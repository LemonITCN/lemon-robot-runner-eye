module.exports = {
  system: {
    app_name: '柠檬机器人',
    cloud_name: '柠檬云',
    company_name: '柠檬信息技术有限公司',
    company_domain: 'LemonIT.CN'
  },
  connector: {
    server_address: '服務器地址',
    connector_tip_pre: '您还没有连接至',
    connector_tip_end: '服务，请您输入连接信息',
    connect_failed_tip: 'LRC尝试连接失败，无法连接至服务器',
    connect_disconnected_tip: 'LRC服务已断开，请重新连接',
    connect_connected_tip: 'LRC服务连接成功'
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
    saving: '正在保存中'
  },
  main: {
    content: {
      content_container: {
        plugin_manage: '插件管理',
        instruction_set_manage: '指令集管理',
        data_set_manage: '数据集管理'
      },
      control_buttons: {
        run: '运行',
        upload_to: '上传到',
        store: '商店',
        add_instruction_set: '添加指令集',
        add_data_set: '添加数据集'
      },
      data_set_content: {},
      instruction_set_content: {
        operation_editing: '正在编辑中',
        operation_delete: '您可以选择删除它',
        operation_edit: '或修改它的基本信息',
        operation_main_disabled: '主函数[main]不可以进行修改或删除操作'
      },
      plugin_content: {
        plugin_name: '插件名称',
        plugin_author: '作者',
        plugin_version: '版本',
        plugin_key: '插件标识'
      }
    },
    system: {
      system_bar: {
      },
      system_state: {},
      task_list: {
        local: '本地任务列表'
      },
      task_create: {
        create_task_loading_title: '任务正在创建中...',
        create_local_task: '创建本地任务',
        create_local_task_button_tip: '点击按钮-',
        create_dialog_task_key_placeholder: '请输入任务标识，英文/数字组成',
        create_dialog_task_name_placeholder: '请输入一个简短而清晰的名称。允许任何语言',
        task_creation: '任务创建',
        local_task_create_error_msg_empty: '任务标识与任务名称均不能为空，请检查'
      },
      user: {
        login_to: '登录到',
        register: '注册',
        account: '用户'
      }
    }
  }
}
