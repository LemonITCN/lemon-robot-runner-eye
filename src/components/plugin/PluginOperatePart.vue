<template>
  <div class="plugin-operate-part" @click.stop>
    <el-button size="mini" type="danger" @click="uninstall_confirm">{{$t(lang + 'uninstall')}}</el-button>
  </div>
</template>

<script>
  export default {
    name: 'PluginOperatePart',
    props: ['index'],
    methods: {
      uninstall_confirm () {
        this.$confirm(this.$t(this.lang + 'uninstall_confirm'), this.$t(this.lang + 'uninstall'), {
          confirmButtonText: this.$t(this.lang + 'uninstall'),
          cancelButtonText: this.$t('common.cancel'),
          type: 'warning'
        }).then(() => {
          let plugin = this.$store.getters[this.$NS.PLUGIN.GET_PLUGIN_LIST][this.index]
          let self = this
          this.$axios.delete(this.$define.URL.PLUGIN.DELETE, {
            data: {
              packageName: plugin.config.packageName,
              version: plugin.config.version,
              store: plugin.store
            }
          }).then(() => {
            self.$store.dispatch(self.$NS.PLUGIN.ACT_REFRESH_PLUGIN_LIST)
            self.$util.tip.notification_success(self.$t(self.lang + 'uninstall_success'))
          })
        }).catch((e) => {
          this.$util.log.info(e)
        })
      }
    },
    data () {
      return {
        lang: 'plugin.pluginOperatePart.'
      }
    }
  }
</script>

<style scoped>

</style>