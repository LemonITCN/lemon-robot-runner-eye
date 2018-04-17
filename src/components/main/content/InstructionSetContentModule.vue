<template>
  <div class="instruction-set-content-module">
    <el-menu
      default-active="2"
      class="instruction-set-list">
      <el-menu-item v-for="instructionSet in this.global.repo.taskList.current.task.instructionSetList" :index="instructionSet.instructionSetKey+''" v-bind:key="instructionSet.instructionSetKey">
        <span slot="title">{{instructionSet.instructionSetKey}}</span>
      </el-menu-item>
    </el-menu>
    <div class="instruction-set-editor-wrapper">
      <div class="instruction-set-operation">
        {{$t(lang + '.operation_editing')}}: [ main ] .
        {{$t(lang + '.operation_delete')}}<el-button type="danger" icon="el-icon-delete" circle style="margin: 0 8px"></el-button>
        {{$t(lang + '.operation_edit')}}<el-button  type="primary" icon="el-icon-edit" circle style="margin: 0 8px"></el-button>
      </div>
      <iframe src="./static/editor/editor.html" frameborder="0" class="editor"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InstructionSetContentModule',
  data () {
    return {
      lang: 'main.content.instruction_set_content'
    }
  }
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
