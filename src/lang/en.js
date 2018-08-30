export default {
  app: {
    app_name: 'LemonRobot',
    cloud_name: 'LemonCloud',
    company_name: 'Lemon Information Technology Co., Ltd.',
    company_domain: 'LemonIT.CN'
  },
  common: {
    private_cloud: 'PrivateCloud',
    successful: 'Successful',
    failed: 'Failed',
    task_id: 'Task id',
    task_name: 'Task name',
    instruction_set_key: 'Instruction set key',
    instruction_set_name: 'Instruction set name',
    data_set_key: 'Data set key',
    data_set_name: 'Data set name',
    please_input: 'Please input',
    iknow: 'I Know',
    cancel: 'Cancel',
    create: 'Create',
    modify: 'Modify',
    delete: 'Delete',
    connect: 'Connect',
    saving: 'Saving',
    choose_file: 'Choose File',
    upload: 'Upload',
    run: 'Run',
    hide: 'Hide',
    dateStr: 'yyyy-MM-dd hh:mm:ss',
    upload_view: {
      tip_choose_file: 'Please click the [Choose File] button to select a file to upload',
      tip_upload_file: 'Please click the [Upload] button to upload selected file : ',
      tip_uploading: 'Uploading the file : ',
    }
  },
  responseMsg: {
    timeout: 'Sorry, the connection server timed out',
    error: 'Sorry, the server response parsing exception',
    lrc_disconnected: 'The LRC connection to the server has been disconnected and the request could not be completed',
    task_operate_failed_server_error: 'Sorry, the task operation failed, the server internal error',
    instruction_set_operate_failed_key_exists: 'Sorry, the instruction set operation failed, because the instruction set key you provided already exists.',
    task_operate_failed_not_exists: 'Sorry, the task operation failed, the task you want to operate not exists.',
    task_update_base_info_mismatch: 'Sorry, the basic information of the update task failed, because the basic information of the task is not allowed to be modified.',
    instruction_set_not_exists: 'Sorry, the instruction set does not exist and cannot be operated.',
    instruction_set_main_cannot_change: 'Sorry, the main instruction set cannot delete or modify key',
    common_name_illegal: 'Sorry, the operation failed, the name you provided is illegal.'
  },
  rules: {
    common_key: 'This field is required and requires: length: 1-64, beginning with a letter, only letters, numbers, and underscores are allowed.',
    common_name: 'This field is required and requires: length: 1-64 and allow any character to be filled in.'
  },
  operator: {
    userPart: {
      login_to: 'Login to ',
      sign_up: 'Create a user now!'
    },
    cloudPart: {},
    mainMenuPart: {
      task: 'Task editor',
      executor: 'Executor',
      plan: 'Plan',
      cloud: 'Cloud manager',
      plugin: 'Plugin manager',
      data: 'Data center',
      logs: 'Logs',
      system: 'System settings'
    },
    technologySupportPart: {}
  },
  lrc: {
    lrcContainer: {
      server_address: 'Server address',
      tip_pre: 'You are not connected to ',
      tip_end: ' server. Please input the connection information.',
      connect_failed_tip: 'LRC attempted connection failure because it could not connect to the server.',
      connect_disconnected_tip: 'LRC service has been disconnected, please reconnect',
      connect_connected_tip: 'LRC service connection success'
    }
  },
  define: {
    options: {
      data_set_property_type_str: 'STRING',
      data_set_property_type_num: 'NUMBER',
      data_set_property_type_bin: 'BINARY',
    }
  },
  task: {
    taskMenuPart: {
      menu: 'Menu',
      execute: 'Simulate execute',
      export: 'Export task package'
    },
    store: {
      instruction_set_list_refresh_success: 'The instruction set list is refreshed successfully.',
      task_change_submit_success: 'The modification of the task has been successfully submitted',
      instruction_set_script_save_success: 'The task instruction set script was saved successfully.',
    },
    taskSelectorContainer: {
      main_title: 'Please choose a task to edit',
      sub_title1: 'You can select the tasks you have added in the list below to edit them.',
      sub_title2: 'Or you can click the add task button to create a new task.'
    },
    taskCreatePart: {
      create_task: 'Create task',
      task_key: ' Task key',
      task_name: 'Task name',
      task_key_placeholder: 'Only allowed to consist of English, numbers, and underscores.',
      task_name_placeholder: 'Please enter a short and clear name',
      create_task_loading: 'Creating a task, please wait...',
      create_task_success: 'Task created successfully'
    },
    taskListPart: {
      task_list_tip_empty: 'There are currently no tasks to edit',
      task_list_tip_pulling: 'Getting task list from server...',
      task_list_tip_failed: 'Getting the task list from the server side failed',
      task_create_time: 'Task creation time'
    },
    taskOperatePart: {
      rename: 'Modify the task name',
      delete: 'Delete this task',
      task_name: 'Task name',
      task_name_placeholder: 'Please enter a new task name',
      rename_success: 'Modify task name success!',
      delete_tip: 'Are you sure you want to delete this task? All the information associated with the task (including the data that has been generated since it was deleted) will also be deleted.',
      delete_success: 'The task was deleted successfully!'
    },
    taskEditPart: {
      mTitle: 'Task editor',
      mIntro: 'You can write your instruction set and data set through the task editor.',
      parameter: 'Parameter define',
      instruction: 'Instruction set',
      plugin: 'Plugins usage',
      data: 'Data set'
    },
    parameterPart: {
      column_name: 'Parameter name',
      column_is_binary: 'Is binary',
      column_is_required: 'Is required',
      column_remark: 'Parameter remark',
      column_operate: 'Operate'
    },
    parameterAddPart: {
      add: 'Add parameter define',
      parameter_name: 'Parameter name',
      parameter_name_placeholder: 'Please enter a parameter name',
      parameter_is_binary: 'Is binary',
      parameter_is_required: 'Is required',
      parameter_remark: 'Parameter remark',
      parameter_remark_placeholder: 'Please enter the parameter remark',
      tip_add_success: 'The parameter added successfully',
      parameter_already_exists: 'Parameter name already exists',
    },
    parameterOperatePart: {
      modify: 'Modify parameter info',
      delete: 'Delete the parameter',
      template: 'Eidt template',
      parameter_name: 'Parameter name',
      parameter_name_placeholder: 'Please enter a parameter name',
      parameter_is_binary: 'Is binary',
      parameter_is_required: 'Is required',
      parameter_remark: 'Parameter remark',
      parameter_remark_placeholder: 'Please enter the parameter remark',
      delete_tip: 'Are you sure you want to delete this parameter?',
      parameter_already_exists: 'Your newly set parameter name already exists',
    },
    parameterTemplatePart: {
      json: 'Edit JSON template',
      bin: 'Upload BIN template',
      none_uploaded: 'You have not uploaded any binary templates for this parameter.',
      have_uploaded: 'The binary template you uploaded exists in the current library. The file name is: ',
      tip_upload_success: 'Bin file template has uploaded successfully!'
    },
    instructionSetPart: {
      loading_script: 'Loading instruction set script...',
      save_button_tip: 'Click this button to save the instruction set script being edited, or you can use the shortcut Ctrl+S to save',
    },
    instructionSetAddPart: {
      add: 'Add instruction set',
      instruction_set_key: 'Instruction set key',
      instruction_set_key_placeholder: 'Please input instruction set key',
      tip_add_success: 'The instruction set was created successfully.'
    },
    instructionSetRefreshPart: {
      refresh_button_tip: 'Click this button to refresh the instruction set list'
    },
    instructionSetOperatePart: {
      rekey: 'Modify the instruction set key',
      delete: 'Delete this instruction set',
      instruction_set_key: 'Instruction set key',
      instruction_set_key_placeholder: 'Please enter a new instruction set key',
      rekey_success: 'Modify instruction set key success!',
      delete_tip: 'Are you sure you want to delete this instruction set?',
      delete_success: 'The instruction set was deleted successfully!'
    },
    pluginUsagePart: {
      column_name: 'Plugin name',
      column_package: 'Package name',
      column_version: 'Version',
      column_key: 'Plugin key',
      column_enable_state: 'Enable state',
      detail_introduce: 'Plugin introduce: ',
      detail_store: 'Source store: ',
      user_upload: 'User upload',
      no_plugin: 'No plugins have been installed in the system.'
    },
    dataSetAddPart: {
      add: 'Add data set',
      data_set_key: 'Data set key',
      data_set_key_placeholder: 'Please input data set key',
      data_set_remark: 'Data set remark',
      data_set_remark_placeholder: 'Please input data set remark',
      tip_add_success: 'The data set was created successfully.'
    },
    dataSetOperatePart: {
      reinfo: 'Modify the data set base info',
      delete: 'Delete this data set',
      data_set_key: 'Data set key',
      data_set_key_placeholder: 'Please enter a new data set key',
      data_set_remark: 'Data set remark',
      data_set_remark_placeholder: 'Please enter a new data set remark',
      reinfo_success: 'Modify data set base info success!',
      delete_tip: 'Are you sure you want to delete this data set?',
      delete_success: 'The data set was deleted successfully!',
      data_set_key_exists_tip: 'The new dataset name you entered already exists. Please re-edit'
    },
    dataSetPropertyListPart: {
      column_data_set_key: 'Property key',
      column_data_set_type: 'Property type',
      column_data_set_remark: 'Property remark',
      column_data_set_operate: 'Operate'
    },
    dataSetPropertyAddPart: {
      add: 'Add data set property',
      data_set_property_key: 'Property key',
      data_set_property_key_placeholder: 'Please input data set property key',
      data_set_property_type: 'Property type',
      data_set_property_remark: 'Property remark',
      data_set_property_remark_placeholder: 'Please input data set property remark',
      tip_add_success: 'The data set property was created successfully.',
      data_set_property_already_exists: 'Data set property key already exists'
    },
    dataSetPropertyOperatePart: {
      modify: 'Modify data set property info',
      delete: 'Delete data set property',
      data_set_property_key: 'Property key',
      data_set_property_key_placeholder: 'Please input a new data set property key',
      data_set_property_type: 'Property type',
      data_set_property_remark: 'Property remark',
      data_set_property_remark_placeholder: 'Please input data set property remark',
      tip_modify_success: 'The data set property was modified successfully.',
      tip_delete_success: 'The data set property was deleted successfully.',
      delete_tip: 'Are you sure you want to delete this data set property?',
      data_set_property_already_exists: 'Your newly set data set property key already exists'
    }
  },
  executor: {},
  plan: {},
  cloud: {},
  plugin: {
    pluginPart: {
      mTitle: 'Plugin manager',
      mIntro: 'Here, you can manage your local plugins, or you can access plugin stores to install new plugins online.',
      installed: 'Installed plugin',
      store: 'Plugin store'
    },
    pluginUploadPart: {
      upload: 'Upload plugin package',
      upload_success: 'Plugin upload success!',
      plugin_name: 'Plugin name: ',
      plugin_key: 'Plugin key: ',
      plugin_version: 'Version: ',
      plugin_introduce: 'Introduce: ',
      function_package_count: 'Function package count: '
    },
    pluginInstalledPart: {
      column_name: 'Plugin name',
      column_package: 'Package name',
      column_version: 'Version',
      column_key: 'Plugin key',
      column_operate: 'Operate',
      detail_introduce: 'Plugin introduce: ',
      detail_store: 'Source store: ',
      user_upload: 'User upload',
      no_plugin: 'No plugins have been installed in the system.'
    },
    pluginOperatePart: {
      uninstall: 'Uninstall',
      uninstall_confirm: 'Are you sure you want to uninstall this plugin? After uninstalling, all tasks that depend on the plugin will not be executed (it will not affect the tasks that have already started running).',
      uninstall_success: 'The plugin has been successfully uninstalled!'
    }
  },
  data: {},
  logs: {},
  system: {
    systemPart: {
      mTitle: 'System settings',
      mIntro: 'Here, you can configure the various parameters of the system to make the system more convenient.',
      lrc: 'LRC Manager'
    },
    lrcManagePart: {
      column_lrct: 'LRCT',
      column_createTime: 'Create time',
      column_type: 'Client type',
      column_operate: 'Operate',
      intro: 'LRC Introduce: ',
    },
    lrcOperatePart: {
      view_lrck: 'View LRCK',
      delete_confirm: 'Are you sure you want to delete this LRC connection configuration? Clients that use the LRC to establish a connection after deletion will be automatically disconnected! This operation is irreversible!'
    },
    lrcCreatePart: {
      create: 'Create a new LRC info'
    }
  }
}
