<template>
  <div class="content-container-module">
    <el-tabs v-model="activeName" type="border-card" class="container-tab">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'ContentContainerModule',
  data () {
    return {}
  },
  methods: {}
}

</script>
<style scoped>
  .content-container-module{
    display: flex;
    flex-direction: column;
  }
  .container-tab{
    flex-grow: 1;
  }
</style>
