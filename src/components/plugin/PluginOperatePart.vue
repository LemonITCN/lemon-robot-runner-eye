<template>
  <div class="plugin-operate-part">
    <el-button size="mini" type="danger">{{$t(lang + 'uninstall')}}</el-button>
  </div>
</template>

<script>
  export default {
    name: 'PluginOperatePart',
    props: ['index'],
    data () {
      return {
        lang: 'plugin.pluginOperatePart.'
      }
    }
  }
</script>

<style scoped>

</style>