<template>
  <div class="instruction-set-list-part"
       :loading="$store.getters[$NS.TASK.GET_CURRENT_INSTRUCTION_SET_LIST] === null">
    <div class="instruction-set-item"
         @click="$store.commit($NS.TASK.MUT_SET_CURRENT_INSTRUCTION_SET_KEY, instructionSetKey)"
         :class="instructionSetKey === $store.getters[$NS.TASK.GET_CURRENT_INSTRUCTION_SET_KEY] ? 'instruction-set-item-selected' : ''"
         :key="instructionSetKey"
         v-for="instructionSetKey in $store.getters[$NS.TASK.GET_CURRENT_INSTRUCTION_SET_LIST]">
      {{instructionSetKey}}
      <div class="instruction-set-operation"
           v-if="instructionSetKey === $store.getters[$NS.TASK.GET_CURRENT_INSTRUCTION_SET_KEY]">
        <el-button icon="el-icon-edit" size="mini" circle=""></el-button>
        <el-button icon="el-icon-delete" size="mini" circle=""></el-button>
      </div>
    </div>
    <instruction-set-add-part></instruction-set-add-part>
    <instruction-set-refresh-part class="instruction-set-refresh-part"></instruction-set-refresh-part>
  </div>
</template>

<script>
  import InstructionSetAddPart from './InstructionSetAddPart.vue'
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button.vue'
  import InstructionSetRefreshPart from './InstructionSetRefreshPart.vue'

  export default {
    components: {
      InstructionSetRefreshPart,
      ElButton,
      InstructionSetAddPart
    },
    name: 'InstructionSetListPart',
    mounted () {
      this.$store.dispatch(this.$NS.TASK.ACT_REFRESH_INSTRUCTION_SET_LIST)
    }
  }
</script>

<style scoped>
  .instruction-set-list-part {
    overflow-y: scroll;
    position: relative;
  }

  .instruction-set-item {
    padding: 14px 18px;
    border-bottom: 1px solid rgba(200, 200, 200, 0.2);
    cursor: pointer;
    position: relative;
  }

  .instruction-set-item-selected {
    background: #d9eeff;
  }

  .instruction-set-operation {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .instruction-set-refresh-part {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }

</style>