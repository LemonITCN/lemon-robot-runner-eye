export default{
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
    cancel: 'Cancel',
    create: 'Create',
    modify: 'Modify',
    delete: 'Delete',
    connect: 'Connect',
    saving: 'Saving',
    run: 'Run',
    dateStr: 'yyyy-MM-dd hh:mm:ss'
  },
  responseMsg: {
    timeout: 'Sorry, the connection server timed out',
    error: 'Sorry, the server response parsing exception',
    lrc_disconnected: 'The LRC connection to the server has been disconnected and the request could not be completed',
    task_operate_failed_server_error: 'Sorry, the task operation failed, the server internal error',
    instruction_set_operate_failed_key_exists: 'Sorry, the instruction set operation failed, because the instruction set key you provided already exists.',
    task_operate_failed_not_exists: 'Sorry, the task operation failed, the task you want to operate no longer exists.',
    task_update_base_info_mismatch: 'Sorry, the basic information of the update task failed, because the basic information of the task is not allowed to be modified.',
    instruction_set_not_exists: 'Sorry, the instruction set does not exist and cannot be operated.',
    instruction_set_main_cannot_change: 'Sorry, the main instruction set cannot delete or modify key'
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
  task: {
    store: {
      instruction_set_list_refresh_success: 'The instruction set list is refreshed successfully.'
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
    taskEditPart: {
      mTitle: 'Task editor',
      mIntro: 'You can write your instruction set and data set through the task editor.',
      instruction: 'Instruction set',
      data: 'Data set'
    },
    instructionSetPart: {
      loading_script: 'Loading instruction set script...'
    },
    instructionSetAddPart: {
      add: 'Add instruction set',
      instruction_set_key: 'Instruction set key',
      instruction_set_key_placeholder: 'Please input instruction set key',
      tip_add_success: 'The instruction set was created successfully.'
    },
    instructionSetOperatePart: {
      rekey: 'Modify the instruction set key',
      delete: 'Delete this instruction set',
      instruction_set_key: 'Instruction set key',
      instruction_set_key_placeholder: 'Please enter a new instruction set key',
      rekey_success: 'Modify instruction set key success!',
      delete_tip: 'Are you sure you want to delete this instruction set?',
      delete_success: 'The instruction set was deleted successfully!'
    }
  },
  executor: {},
  plan: {},
  cloud: {},
  plugin: {
    pluginContainer: {
      mTitle: 'Plugin manager',
      mIntro: 'Here, you can manage your local plugins, or you can access plugin stores to install new plugins online.',
      installed: 'Installed plugin',
      store: 'Plugin store'
    }
  },
  data: {},
  logs: {},
  system: {}
}
