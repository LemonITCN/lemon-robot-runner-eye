<template>
  <div class="plugin-manager-container-module">
    <el-tabs type="border-card" class="container-tab">
      <el-tab-pane label="本地插件" name="plugin">
        <div>hello local</div>
      </el-tab-pane>
      <el-tab-pane label="插件商店" name="plugingogo">
        <div>plugin store</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'PluginManagerContainerModule',
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
  .content-container-module{
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
