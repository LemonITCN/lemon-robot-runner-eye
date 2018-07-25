<template>
  <div class="instruction-set-add-part">
    <div class="instruction-set-add-button"><i class="el-icon-plus"></i> {{$t(lang + 'add')}}</div>
  </div>
</template>

<script>
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button.vue'

  export default {
    components: {ElButton},
    name: 'InstructionSetAddPart',
    data () {
      return {
        lang: 'task.instructionSetAddPart.'
      }
    }
  }
</script>

<style scoped>
  .instruction-set-add-part {
    text-align: center;
  }

  .instruction-set-add-button {
    padding: 14px;
    cursor: pointer;
    color: #578fbb;
  }

  .instruction-set-add-button:hover {
    color: #0e58bb;
  }
</style>