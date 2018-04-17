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
    local: [],
    // 柠檬云任务
    lemon: [
      {
        taskKey: 'task001',
        taskName: '我的任务h1'
      }
    ],
    // 私有云任务
    private: [
      {
        taskKey: 'task001',
        taskName: '我的任务h1'
      }
    ],
    // 使用中的状态
    current: {
      // 正在使用中的任务列表，根据选项不同，把本地任务、柠檬云任务、私有云任务列表置入此list中
      list: [],
      // 当前正在编辑的任务
      task: {}
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
  operation: {
    getTaskList: () => {
      return ''
    }
  }
}
</script>

<style scoped>
</style>
