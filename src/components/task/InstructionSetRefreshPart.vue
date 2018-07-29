<template>
  <div class="instruction-set-refresh-part">
    <el-button class="instruction-set-refresh-button"
               type="success"
               @click="$store.dispatch($NS.TASK.ACT_REFRESH_INSTRUCTION_SET_LIST)"
               icon="el-icon-refresh" circle></el-button>
  </div>
</template>

<script>
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button.vue'

  export default {
    components: {ElButton},
    name: 'InstructionSetRefreshPart'
  }
</script>

<style scoped>
  .instruction-set-refresh-part {
    text-align: center;
  }

</style>