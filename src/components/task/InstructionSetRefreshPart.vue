<template>
  <div class="instruction-set-refresh-part">
    <el-tooltip class="item" effect="dark" :content="$t(lang + 'refresh_button_tip')" placement="top">
      <el-button class="instruction-set-refresh-button"
                 type="success"
                 @click="$store.dispatch($NS.TASK.ACT_REFRESH_INSTRUCTION_SET_LIST)"
                 icon="el-icon-refresh" circle></el-button>
    </el-tooltip>
  </div>
</template>

<script>
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button.vue'

  export default {
    components: {ElButton},
    name: 'InstructionSetRefreshPart',
    data () {
      return {
        lang: 'task.instructionSetRefreshPart.'
      }
    }
  }
</script>

<style scoped>
  .instruction-set-refresh-part {
    text-align: center;
  }

  .instruction-set-refresh-button {
    font-size: 20px;
  }
</style>