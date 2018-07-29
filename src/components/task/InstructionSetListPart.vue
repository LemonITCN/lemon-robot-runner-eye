<template>
  <div class="instruction-set-list-part">
    <div class="instruction-set-item"
         @click="$store.commit($NS.TASK.MUT_SET_CURRENT_INSTRUCTION_SET_KEY, instructionSetKey)"
         :class="instructionSetKey === $store.getters[$NS.TASK.GET_CURRENT_INSTRUCTION_SET_KEY] ? 'instruction-set-item-selected' : ''"
         :key="instructionSetKey"
         v-for="instructionSetKey in $store.getters[$NS.TASK.GET_CURRENT_INSTRUCTION_SET_LIST]">
      {{instructionSetKey}}
    </div>
    <instruction-set-add-part></instruction-set-add-part>
  </div>
</template>

<script>
  import InstructionSetAddPart from './InstructionSetAddPart.vue'

  export default {
    components: {InstructionSetAddPart},
    name: 'InstructionSetListPart',
    mounted () {
      this.$store.dispatch(this.$NS.TASK.ACT_REFRESH_INSTRUCTION_SET_LIST)
    }
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