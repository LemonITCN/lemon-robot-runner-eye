<template>
    <div class="system-state-module">
      <div v-bind:class="cloud_lemon_state ? 'state-success' : 'state-failed'">
        <i v-bind:class="cloud_lemon_state ? 'el-icon-success' : 'el-icon-error'"></i>
        <span>{{cloud_lemon_state ? '成功' : '暂未'}}连接至柠檬云</span>
      </div>
      <div v-bind:class="cloud_private_state ? 'state-success' : 'state-failed'">
        <i v-bind:class="cloud_private_state ? 'el-icon-success' : 'el-icon-error'"></i>
        <span>{{cloud_private_state ? '成功' : '暂未'}}连接至私有云</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SystemStateModule',
  data () {
    return {
      cloud_lemon_state: true,
      cloud_private_state: false
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
}
.state-success{
  color: #67C23A;
}
.state-failed{
  color: #F56C6C;
}
</style>
