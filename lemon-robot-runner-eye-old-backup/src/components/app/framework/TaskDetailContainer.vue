<template>
  <div class="task-detail-container">
    <task-menu-bar/>
    <el-tabs v-model="selectedTab" class="container-tab">
      <el-tab-pane :label="$t(lang + '.plugin_usage')" name="plugin">
        <plugin-content-module class="content-module"/>
      </el-tab-pane>
      <el-tab-pane :label="$t(lang + '.instruction_set')" name="instructionSet">
        <instruction-set-content-module class="content-module"/>
      </el-tab-pane>
      <el-tab-pane :label="$t(lang + '.dataSet')" name="dataPool"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import PluginContentModule from '../../task/pluginUsage/PluginUsageContent'
import InstructionSetContentModule from '../../task/instruction/InstructionSetContent'
import TaskMenuBar from '../../task/bar/TaskMenuBar'
export default {
  name: 'TaskDetailContainerModule',
  components: {InstructionSetContentModule, PluginContentModule, TaskMenuBar},
  data () {
    return {
      lang: 'struct.framework.taskDetailContainer',
      selectedTab: 'plugin'
    }
  },
  methods: {}
}

</script>
<style scoped>
  .task-detail-container{
    display: flex;
    flex-direction: column;
  }
  .container-tab{
    flex-grow: 1;
    margin: 0 14px;
    display: flex;
    flex-direction: column;
  }
  /*.container-tab{*/
    /*flex-grow: 1;*/
    /*display: flex;*/
    /*flex-direction: column;*/
    /*margin: 0 14px;*/
  /*}*/
  .container-tab >>> .el-tabs__content{
    flex-grow: 1;
    overflow-y: scroll;
    display: flex;
  }
  .container-tab >>> .el-tab-pane{
    display: flex;
    flex-grow: 1;
  }
</style>
