module.exports = {
  system: {
    app_name: 'LemonRobot',
    cloud_name: 'LemonCloud',
    company_name: 'Lemon Information Technology Co., Ltd.',
    company_domain: 'LemonIT.CN'
  },
  common: {
    private_cloud: 'PrivateCloud',
    successful: 'Successful',
    failed: 'Failed',
    task_key: 'Task key',
    task_name: 'Task name',
    instruction_set_key: 'Instruction set key',
    instruction_set_name: 'Instruction set name',
    data_set_key: 'Data set key',
    data_set_name: 'Data set name',
    please_input: 'Please input',
    cancel: 'Cancel',
    create: 'Create',
    connect: 'Connect',
    saving: 'Saving',
    run: 'Run'
  },
  struct: {
    bar: {
      mainMenuBar: {
        task: 'Task editor',
        plugin: 'Plugin manager',
        executor: 'Executor',
        cloud: 'Cloud manager',
        system: 'System settings'
      },
      systemStateBar: {},
      taskCreateBar: {
        create_task_loading_title: 'The task is being created...',
        create_local_task: 'Create a local task',
        create_local_task_button_tip: 'Click the button to',
        create_dialog_task_key_placeholder: 'Please enter the Task key, English / number composition',
        create_dialog_task_name_placeholder: 'Please enter a short and clear name. Allow any language',
        task_creation: 'Task creation',
        local_task_create_error_msg_empty: 'Task key and task name can not be empty. Please check.'
      },
      taskListBar: {
        local: 'Local task list'
      },
      userInfoBar: {
        login_to: 'Login to ',
        register: 'Register',
        account: 'account'
      }
    },
    framework: {
      cloudManagerContainer: {},
      executorContainer: {},
      leftContainer: {},
      lrcContainer: {
        server_address: 'Server address',
        connector_tip_pre: 'You are not connected to ',
        connector_tip_end: ' server. Please input the connection information.',
        connect_failed_tip: 'LRC attempted connection failure because it could not connect to the server.',
        connect_disconnected_tip: 'LRC service has been disconnected, please reconnect',
        connect_connected_tip: 'LRC service connection success'
      },
      pluginManagerContainer: {},
      systemSettingsContainer: {},
      taskDetailContainer: {
        plugin_usage: 'Plugin usage',
        instruction_set: 'Instruction set manage',
        data_set: 'Data set manage'
      }
    }
  },
  task: {
    bar: {
      taskMenuBar: {
        uploadTask: 'Upload task'
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
        plugin_name: 'Plugin name',
        plugin_author: 'Plugin author',
        plugin_version: 'Plugin version',
        plugin_key: 'Plugin key'
      }
    }
  }
}
