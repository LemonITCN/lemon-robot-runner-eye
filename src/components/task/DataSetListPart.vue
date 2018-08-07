<template>
  <div class="data-set-list-part">
    <div class="data-set-item"
         v-for="dataSet in $store.getters[$NS.TASK.GET_CURRENT_EDIT_TASK].dataSetDefinitionList"
         @click="$store.commit($NS.TASK.MUT_SET_CURRENT_INSTRUCTION_SET_KEY, instructionSetKey)"
         :class="instructionSetKey === $store.getters[$NS.TASK.GET_CURRENT_INSTRUCTION_SET_KEY] ? 'instruction-set-item-selected' : ''"
         :key="instructionSetKey">
      {{instructionSetKey}}
      <div class="instruction-set-operation"
           v-if="instructionSetKey === $store.getters[$NS.TASK.GET_CURRENT_INSTRUCTION_SET_KEY] && instructionSetKey !== $define.STRING.MAIN_INSTRUCTION">
        <instruction-set-operate-part></instruction-set-operate-part>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DataSetListPart',
    data () {
      return {
        current_editing_data_set_key: ''
      }
    }
  }
</script>

<style scoped>
  .data-set-list-part {

  }
</style>