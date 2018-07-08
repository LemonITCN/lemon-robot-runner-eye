<template>
  <div class="instruction-set-content-module">
    <el-menu
      :default-active="this.global.repo.taskList.current.instruction_set_key[1]"
      @select="onInstructionSetSelect"
      class="instruction-set-list">
      <el-menu-item
        v-for="instructionSet in this.global.repo.taskList.current.task.instructionSetList"
        :index="instructionSet.instructionSetKey"
        v-bind:key="instructionSet.instructionSetKey">
        <span slot="title">{{instructionSet.instructionSetKey}}</span>
      </el-menu-item>
    </el-menu>
    <div class="instruction-set-editor-wrapper">
      <div class="instruction-set-operation">
        {{$t(lang + '.operation_editing')}}: [ {{
        this.global.repo.taskList.current.instruction_set_key[0] + ' # ' +
        this.global.repo.taskList.current.instruction_set_key[1]
        }} ] .
        <template v-if="this.global.repo.taskList.current.instruction_set_key[1] !== 'main'">
        {{$t(lang + '.operation_delete')}}<el-button type="danger" icon="el-icon-delete" circle style="margin: 0 8px"></el-button>
        {{$t(lang + '.operation_edit')}}<el-button  type="primary" icon="el-icon-edit" circle style="margin: 0 8px"></el-button>
        </template>
        <template v-else>
          {{$t(lang + '.operation_main_disabled')}}
        </template>
      </div>
      <iframe id="editor-iframe" src="./static/editor/editor.html" frameborder="0" class="editor"></iframe>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
var instructionSetKeyWatch = function () {}
export default {
  name: 'InstructionSetContentModule',
  mounted () {
    instructionSetKeyWatch()
    // 先取消上一次的观察，再添加新的观察
    instructionSetKeyWatch = this.global.repo.$watch('taskList.current.instruction_set_key', function (val, oldVal) {
      // 编辑器iframe的window对象，通过此对象可以直接调用iframe嵌套的html的函数
      this.$util.globalLoading.show(this.$t('common.saving'))
      const editor = document.getElementById('editor-iframe').contentWindow
      if (oldVal && oldVal.length === 2) {
        // 保存当前的任务
        this.$util.log.debug('Save task instruction set:' + oldVal[0] + ' # ' + oldVal[1])
        _lr.task.localSaveInstructionSetScriptToHD(oldVal[0], oldVal[1], editor.getEditorContent())
      }
      this.$util.log.debug('Monitor the change of the instruction set in the editing: ' + this.global.repo.taskList.current.instruction_set_key + ' - old:' + oldVal)
      // 设置editor中新指令集的数据
      editor.setEditorContent(_lr.task.localReadTaskInstructionSetScriptFromHD(
        this.global.repo.taskList.current.task.taskKey,
        val[1]
      ))
      this.$util.globalLoading.hide()
    })
  },
  methods: {
    /**
     * 指令集被选择
     */
    onInstructionSetSelect (index, indexPath) {
      this.$util.log.debug('select instruction set : ' + index)
      this.global.repo.taskList.current.instruction_set_key = [this.global.repo.taskList.current.task.taskKey, index]
    }
  },
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
