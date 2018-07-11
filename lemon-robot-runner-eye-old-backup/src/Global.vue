<template>
  <div></div>
</template>

<script>
/* eslint-disable no-undef */

import Vue from 'vue'
var globalData = {
  // 用户信息，
  userInfo: {},
  // 云服务连接状态
  cloud_connect_state: {
    lemon: false,
    private: false
  },
  // 任务列表
  taskList: {
    // 本地任务列表，编辑器只能编辑本地的任务
    local: [],
    // 柠檬云任务
    lemon: [
    ],
    // 私有云任务
    private: [
    ],
    // 使用中的状态
    current: {
      // 当前正在编辑的任务
      task: {},
      // 当前正在编辑的指令集标识
      instruction_set_key: ''
    }
  },
  // 已装插件列表
  pluginList: [
    {
      author: 'LemonIT.CN',
      version: '0.0.1',
      name: 'LemonRobot加密算法模块',
      introduce: 'LemonRobot的加密算法工具插件，本插件让LemonRobot拥有常用加密解密算法的计算能力，如RSA/AES/DES等等。',
      homepage: 'http://www.lemonit.cn',
      key: 'LrEncrypt'
    }
  ]
}
export default {
  repo: new Vue({
    data: globalData
  }),
  util: {
    /**
     *从指定任务列表中获取指定任务标识的任务对象
     */
    getTaskWithTaskKeyFromTaskList: function (taskKey, taskList) {
      for (var i = 0; i < taskList.length; i++) {
        if (taskList[i].taskKey === taskKey) {
          return taskList[i]
        }
      }
      return undefined
    }
  },
  operation: {
    getTaskList: () => {
      return ''
    }
  }
}
</script>

<style scoped>
</style>
