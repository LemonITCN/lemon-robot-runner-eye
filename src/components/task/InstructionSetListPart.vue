<template>
  <div class="instruction-set-list-part">
    <el-tooltip
        :key="instructionSet.key"
        v-for="instructionSet in $store.getters[$NS.TASK.GET_CURRENT_EDIT_TASK].instructionSetList"
        class="item" effect="dark" :content="instructionSet.remark" placement="right">
      <div class="instruction-set-item instruction-set-item-selected">
        {{instructionSet.key}}
      </div>
    </el-tooltip>
    <instruction-set-add-part></instruction-set-add-part>
  </div>
</template>

<script>
  import InstructionSetAddPart from './InstructionSetAddPart.vue'

  export default {
    components: {InstructionSetAddPart},
    name: 'InstructionSetListPart',
  }
</script>

<style scoped>
  .instruction-set-list-part {
    overflow-y: scroll;
  }

  .instruction-set-item {
    padding: 14px 18px;
    border-bottom: 1px solid rgba(200, 200, 200, 0.2);
    cursor: pointer;
  }

  .instruction-set-item-selected {
    background: #d9eeff;
  }
</style>