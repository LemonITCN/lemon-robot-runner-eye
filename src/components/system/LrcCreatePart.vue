<template>
  <div class="lrc-operate-part">
    <el-button type="text" icon="el-icon-plus" @click="createLrcDialogState = true">{{$t(lang + 'create')}}</el-button>
  </div>
</template>

<script>

  export default {
    name: "LrcCreatePart",
    methods: {},
    data() {
      return {
        lang: 'system.lrcCreatePart.',
        createLrcDialogState: false
      }
    }
  }
</script>

<style scoped>
  .lrc-operate-part {
  }

</style>