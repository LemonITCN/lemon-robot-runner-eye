<template>
  <div></div>
</template>

<script>
import Vue from 'vue'
const globalData = {
  // 用户信息，
  userInfo: {},
  // 云服务连接状态
  cloud_connect_state: {
    lemon: false,
    private: false
  },
  // 任务列表
  taskList: {
    // 本地任务
    local: [
      {
        taskKey: 'task001',
        taskName: '我的任务h1'
      }
    ],
    lemon: [
      {
        taskKey: 'task001',
        taskName: '我的任务h1'
      }
    ],
    private: [
      {
        taskKey: 'task001',
        taskName: '我的任务h1'
      }
    ]
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
  operation: {
    getTaskList: () => {
      return ''
    }
  }
}
</script>

<style scoped>
</style>
