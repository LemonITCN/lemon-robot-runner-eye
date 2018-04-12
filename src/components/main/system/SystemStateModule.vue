<template>
    <div class="system-state-module">
      <div v-bind:class="this.global.repo.cloud_connect_state.lemon ? 'state-success' : 'state-failed'"
      @click="hello">
        <i v-bind:class="this.global.repo.cloud_connect_state.lemon ? 'el-icon-success' : 'el-icon-error'"></i>
        <span>柠檬云</span>
      </div>
      <div v-bind:class="this.global.repo.cloud_connect_state.private ? 'state-success' : 'state-failed'">
        <i v-bind:class="this.global.repo.cloud_connect_state.private ? 'el-icon-success' : 'el-icon-error'"></i>
        <span>私有云</span>
      </div>
    </div>
</template>

<script>

export default {
  name: 'SystemStateModule',
  methods: {
    hello () {
      this.global.repo.pluginList.push({
        author: 'LemonIT.CN',
        version: '0.0.1',
        name: 'LemonRobot加密算法模块',
        introduce: 'LemonRobot的加密算法工具插件，本插件让LemonRobot拥有常用加密解密算法的计算能力，如RSA/AES/DES等等。',
        homepage: 'http://www.lemonit.cn',
        key: 'LrEncrypt'
      })
      /* eslint-disable no-undef */
      LrOperation.hello('123123123')
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.system-state-module{
  color: #67C23A;
  font-size: 14px;
  padding: 10px 0 0 50px;
}
.system-state-module div{
  margin-bottom: 10px;
  cursor: pointer;
  display: inline-block;
  margin-right: 30px;
}
.state-success{
  color: #67C23A;
}
.state-failed{
  color: #F56C6C;
}
</style>
