<template>
  <div class="plugin-detail-part" @click.stop>
    {{plugin.config.key}}
  </div>
</template>

<script>
  export default {
    name: "PluginDetailPart",
    props: ['plugin'],
  }
</script>

<style scoped>
.plugin-detail-part{
  height: 400px;
  min-height: 400px;
  max-height: 400px;
  overflow-y: scroll;
}
</style>