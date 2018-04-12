<template>
  <div class="content-container-module">
    <el-tabs v-model="selectedTab" type="border-card" class="container-tab">
      <el-tab-pane label="插件管理" name="plugin">
        <plugin-content-module class="content-module"/>
      </el-tab-pane>
      <el-tab-pane label="指令集管理" name="instructionSet">
        <instruction-set-content-module class="content-module"/>
      </el-tab-pane>
      <el-tab-pane label="数据集管理" name="dataPool">角色管理</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import PluginContentModule from './PluginContentModule'
import InstructionSetContentModule from './InstructionSetContentModule'
export default {
  name: 'ContentContainerModule',
  components: {InstructionSetContentModule, PluginContentModule},
  data () {
    return {
      selectedTab: 'plugin'
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
