<template>
  <div class="system-settings-container">
    <el-tabs type="border-card" class="container-tab">
      <el-tab-pane label="调试" name="debug">
        <div>hello local</div>
      </el-tab-pane>
      <el-tab-pane label="生产运行" name="production">
        <div>plugin store</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'SystemSettingsContainer',
  components: {},
  mounted () {
    console.log('liuri modunted')
  },
  data () {
    return {
    }
  },
  methods: {}
}

</script>
<style scoped>
  .system-settings-container{
    display: flex;
    flex-direction: column;
  }
  .container-tab{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  .container-tab >>> .el-tabs__content{
    flex-grow: 1;
    overflow-y: scroll;
  }
</style>
