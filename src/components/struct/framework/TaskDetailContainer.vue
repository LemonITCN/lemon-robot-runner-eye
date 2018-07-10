<template>
  <div class="task-detail-container">
    <div>
      <div>
        <i class="el-icon-caret-right"></i>
        <div>运行</div>
      </div>
      <div>
        <i class="el-icon-caret-right"></i>
        <div>运行</div>
      </div>
    </div>
    <el-tabs v-model="selectedTab" class="container-tab">
      <el-tab-pane :label="$t(lang + '.plugin_manage')" name="plugin">
        <plugin-content-module class="content-module"/>
      </el-tab-pane>
      <el-tab-pane :label="$t(lang + '.instruction_set_manage')" name="instructionSet">
        <instruction-set-content-module class="content-module"/>
      </el-tab-pane>
      <el-tab-pane :label="$t(lang + '.data_set_manage')"  name="dataPool"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import PluginContentModule from '../../task/pluginUsage/PluginUsageContent'
import InstructionSetContentModule from '../../task/instruction/InstructionSetContent'
export default {
  name: 'TaskDetailContainerModule',
  components: {InstructionSetContentModule, PluginContentModule},
  data () {
    return {
      lang: 'main.content.content_container',
      selectedTab: 'plugin'
    }
  },
  methods: {}
}

</script>
<style scoped>
  .content-container{
    flex-grow: 1;
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
