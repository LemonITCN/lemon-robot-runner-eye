<template>
  <div class="instruction-set-content-module">
    <el-menu
      default-active="2"
      class="instruction-set-list">
      <el-menu-item v-for="(insSet , insSetIndex) in 12" :index="insSetIndex+''" v-bind:key="insSetIndex">
        <span slot="title">指令集000{{insSet}}</span>
      </el-menu-item>
    </el-menu>
    <div class="instruction-set-editor-wrapper">
      <div class="instruction-set-operation">
        正在编辑指令集：[ main ] 。您可以选择删除它：
        <el-button type="danger" icon="el-icon-delete" circle style="margin-right: 20px"></el-button>
        或者修改它的基本信息：
        <el-button  type="primary" icon="el-icon-edit" circle></el-button>
      </div>
      <iframe src="./static/editor/editor.html" frameborder="0" class="editor"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstructionSetContentModule'
}
</script>

<style scoped>
  .instruction-set-content-module {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }
  .instruction-set-list {
    min-width: 200px;
    overflow-y: scroll;
  }
  .instruction-set-editor-wrapper{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: #faf8f5;
  }
  .instruction-set-operation{
    color: #444;
    padding: 10px 30px;
    font-size: 12px;
  }
  .editor {
    flex-grow: 1;
  }
</style>
