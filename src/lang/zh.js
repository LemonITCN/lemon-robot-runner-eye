export default {
  app: {
    app_name: '柠檬机器人',
    cloud_name: '柠檬云',
    company_name: '柠檬信息技术有限公司',
    company_domain: 'LemonIT.CN'
  },
  common: {
    private_cloud: '私有云',
    successful: '成功',
    failed: '失败',
    task_id: '任务ID',
    task_key: '任务关键字',
    task_name: '任务名称',
    instruction_set_key: '指令集标识',
    instruction_set_name: '指令集名称',
    please_input: '请输入',
    iknow: '我知道了',
    cancel: '取消',
    create: '创建',
    modify: '修改',
    delete: '删除',
    connect: '连接',
    saving: '正在保存中',
    upload: '上传',
    choose_file: '选择文件',
    run: '运行',
    hide: '隐藏',
    dateStr: 'yyyy年MM月dd日 hh:mm:ss',
    upload_view: {
      tip_choose_file: '请单击[选择文件]按钮以选择要上载的文件',
      tip_upload_file: '请点击[上传文件]按钮来上传已选中的文件 : ',
      tip_uploading: '文件正在上传中 : ',
      tip_deal_process: '服务器正在处理您上传的数据，请稍候...'
    }
  },
  rules: {
    common_key: '该字段为必填项，且要求：长度：1-64，字母开头，只允许含有字母、数字、下划线',
    common_name: '该字段为必填项，且要求：长度：1-64，支持输入任意字符',
    common_ipv4: '该字段为必填项，且要求填写标准的IPV4格式的地址'
  },
  responseMsg: {
    timeout: '对不起，连接服务器超时',
    error: '对不起，服务器响应解析异常',
    lrc_disconnected: '与服务器的LRC连接已断开，无法完成请求',
    task_operate_failed_server_error: '对不起，任务操作失败，服务器内部错误',
    instruction_set_operate_failed_key_exists: '对不起，指令集操作失败，您提供的指令集关键字已经存在',
    task_operate_failed_not_exists: '对不起，任务操作失败，您要操作的任务已经不存在',
    task_update_base_info_mismatch: '对不起，更新任务基本信息失败，任务基础信息不允许被修改',
    instruction_set_not_exists: '对不起，指令集不存在，无法进行操作',
    instruction_set_main_cannot_change: '对不起，主指令集不能进行删除或修改关键字等操作',
    common_name_illegal: '对不起，操作失败，您提供的名称不合法'
  },
  operator: {
    userPart: {
      login_to: '登录到',
      sign_up: '立即创建用户'
    },
    cloudPart: {},
    mainMenuPart: {
      task: '任务编辑器',
      dispatcher: '调度节点',
      plan: '计划',
      cloud: '云端管理',
      plugin: '插件管理',
      data: '数据中心',
      logs: '日志',
      system: '系统设置'
    },
    technologySupportPart: {},
  },
  lrc: {
    lrcContainer: {
      server_address: '服務器地址',
      tip_pre: '您还没有连接至',
      tip_end: '服务，请您输入连接信息',
      connect_failed_tip: 'LRC尝试连接失败，无法连接至服务器',
      connect_disconnected_tip: 'LRC服务已断开，请重新连接',
      connect_connected_tip: 'LRC服务连接成功'
    }
  },
  define: {
    options: {}
  },
  task: {
    taskMenuPart: {
      menu: '菜单',
      execute: '模拟执行任务',
      export: '导出任务包'
    },
    store: {
      instruction_set_list_refresh_success: '指令集列表刷新成功',
      task_change_submit_success: '任务的修改已提交成功',
      instruction_set_script_save_success: '任务指令集脚本保存成功!',
    },
    taskSelectorContainer: {
      main_title: '请您选择一个要编辑的任务',
      sub_title1: '您可以在下面的列表中选择已添加的任务进行编辑',
      sub_title2: '或者您也可以点击添加任务按钮来创建一个新的任务'
    },
    taskCreatePart: {
      create_task: '创建任务',
      task_key: '任务标识',
      task_name: '任务名称',
      task_key_placeholder: '仅允许由英文、数字、下划线组成',
      task_name_placeholder: '请输入一个简短而清晰的名称',
      create_task_loading: '任务正在创建中，请稍候...',
      create_task_success: '任务创建成功'
    },
    taskListPart: {
      task_list_tip_empty: '当前没有可以编辑的任务',
      task_list_tip_pulling: '正在从服务器中获取任务列表...',
      task_list_tip_failed: '从服务器端获取任务列表失败',
      task_create_time: '任务创建时间'
    },
    taskOperatePart: {
      rename: '修改这个任务的名称',
      delete: '删除这个任务',
      task_name: '任务名称',
      task_name_placeholder: '请您输入新的任务名称',
      rename_success: '任务名称修改成功！',
      delete_tip: '您确定要删除这个任务吗?删除任务的同时该任务所关联的所有信息（包括已经执行后产生的数据）也会被一同删除。',
      delete_success: '任务删除成功!'
    },
    taskEditPart: {
      mTitle: '任务编辑器',
      mIntro: '你可以通过任务编辑器来编写您的指令集、数据集',
      parameter: '参数定义',
      instruction: '指令集',
      plugin: '插件引用',
      instance: '任务实例'
    },
    parameterPart: {
      column_name: '参数名称',
      column_is_binary: '是否为二进制',
      column_is_required: '是否为必填项',
      column_introduce: '参数描述',
      column_operate: '操作'
    },
    parameterAddPart: {
      add: '添加参数定义',
      parameter_name: '参数名称',
      parameter_name_placeholder: '请您输入参数名称',
      parameter_is_binary: '是否为二进制数据',
      parameter_regex: '正则表达式',
      parameter_regex_placeholder: '请您输入该字段的正则表达式规则',
      parameter_is_required: '是否为必填项',
      parameter_introduce: '参数描述',
      parameter_introduce_placeholder: '请您输入对该参数作用的描述',
      tip_add_success: '参数定义创建成功',
      parameter_already_exists: '您输入的参数名称已存在'
    },
    parameterOperatePart: {
      modify: '修改参数定义信息',
      delete: '删除这个参数定义',
      template: '编辑模板',
      parameter_name: '参数名称',
      parameter_name_placeholder: '请您输入参数名称',
      parameter_is_binary: '是否为二进制',
      parameter_regex: '正则表达式',
      parameter_regex_placeholder: '请您输入该字段的正则表达式规则',
      parameter_is_required: '是否为必填项',
      parameter_introduce: '参数描述',
      parameter_introduce_placeholder: '请您对这个参数进行简单的描述',
      delete_tip: '您确定要删除这个参数定义吗?',
      parameter_already_exists: '您新填写的参数名称已存在，请更换。',
    },
    parameterTemplatePart: {
      json: '编辑JSON模板',
      bin: '上传二进制模板',
      none_uploaded: '该参数您还没有上传过任何二进制模板',
      have_uploaded: '当前库中存在您上传的二进制模板，文件名为：',
      tip_upload_success: 'Bin文件模板已成功上传！'
    },
    instructionSetPart: {
      loading_script: '正在加载指令集脚本...',
      save_button_tip: '点击这个按钮来保存正在编辑中的指令集脚本，或者您也可以使用快捷键Ctrl+S来保存',
    },
    instructionSetAddPart: {
      add: '添加指令集',
      instruction_set_name: '指令集名称',
      instruction_set_name_placeholder: '请输入指令集名称字符串',
      tip_add_success: '指令集创建成功'
    },
    instructionSetRefreshPart: {
      refresh_button_tip: '点击这个按钮来刷新指令集列表'
    },
    instructionSetOperatePart: {
      rename: '修改指令集名称',
      delete: '删除这个指令集',
      instruction_set_name: '指令集名称',
      instruction_set_name_placeholder: '请您输入新的指令集名称',
      rename_success: '修改指令集名称成功!',
      delete_tip: '确认要删除这个指令集吗？',
      delete_success: '指令集删除成功!'
    },
    pluginUsagePart: {
      column_name: '插件名称',
      column_package: '插件包名',
      column_version: '版本号',
      column_key: '插件关键字',
      column_enable_state: '启用状态',
      detail_introduce: '插件介绍: ',
      detail_store: '插件来源商店: ',
      user_upload: '用户自行上传',
      no_plugin: '系统中还没有安装任何插件',
      missing_plugin: '当前任务所依赖的插件有一部分没有被安装，这将导致相关实例无法被运行。',
      missing_plugin_manage: '您可以点击这里进行管理',
      missing_plugin_manage_title: '缺失插件管理'
    },
    pluginUsageMissingPart: {
      user_upload: '用户自行上传',
      plugin_store: '插件商店',
      column_source: '插件来源',
      column_package: '插件包名',
      column_version: '插件版本',
      column_operate: '操作',
      operate_remove: '移除依赖关系',
      operate_remove_tip: '您确定要移除这个依赖关系吗？此操作不可撤销。',
      operate_remove_success: '依赖关系删除成功'
    }
  },
  executor: {},
  plan: {},
  cloud: {},
  plugin: {
    pluginPart: {
      mTitle: '插件管理器',
      mIntro: '在这里，您可以对您本地的插件进行管理，也可以访问插件商店来在线安装新的插件',
      installed: '已安装插件',
      store: '插件商店'
    },
    pluginUploadPart: {
      upload: '上传插件包',
      upload_success: '插件上传成功！',
      plugin_name: '插件名称: ',
      plugin_key: '插件关键字: ',
      plugin_version: '版本号: ',
      function_package_count: '功能包数量: ',
      plugin_introduce: '插件介绍: '
    },
    pluginInstalledPart: {
      column_name: '插件名称',
      column_package: '插件包名',
      column_version: '版本号',
      column_key: '插件关键字',
      column_operate: '操作',
      detail_introduce: '插件介绍: ',
      detail_store: '插件来源商店: ',
      user_upload: '用户自行上传',
      no_plugin: '系统中还没有安装任何插件'
    },
    pluginOperatePart: {
      uninstall: '卸载',
      uninstall_confirm: '您确定要卸载这个插件吗？卸载后，所有依赖该插件的任务将会无法执行（不会影响已经开始运行的任务）。',
      uninstall_success: '插件已经成功被卸载！'
    }
  },
  data: {},
  logs: {},
  system: {
    systemPart: {
      mTitle: '系统设置',
      mIntro: '在这里，你可以对系统的各种参数进行配置，让系统更加得心应手',
      lrc: 'LRC管理器'
    },
    lrcManagePart: {
      column_lrcKey: 'LRC Key',
      column_createTime: '创建时间',
      column_type: '客户端类型',
      column_operate: '操作',
      intro: 'LRC简介: ',
    },
    lrcOperatePart: {
      view_publicKey: '查看公钥',
      delete_confirm: '您确认要删除这个LRC连接配置吗？删除后使用该LRC所建立连接的客户端将会自动被断开连接！该操作不可逆！'
    },
    lrcCreatePart: {
      create: '创建新的LRC信息',
      field_type: '客户端类型',
      field_intro: 'LRC简介',
      field_ip_white_list: 'IP白名单列表',
      field_ip_item: 'Ip地址',
      add_ip_item: '增加一条IP地址'
    }
  }
}
