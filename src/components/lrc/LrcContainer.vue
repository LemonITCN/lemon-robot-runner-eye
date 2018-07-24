<template>
  <div class="lrc-container">
    <el-dialog
        :title="$t('app.app_name')"
        :visible.sync="$store.getters[$NS.LRC.GET_IS_SHOW_PANEL]"
        class="lrc-container-panel"
        width="30%" :before-close="dialogClose">
      <span>{{$t(lang + 'tip_pre') + $t('app.app_name') + $t(lang + 'tip_end')}}</span>
      <el-form>
        <el-form-item :label="$t(lang + 'server_address')">
          <el-input v-model="$store.state.lrc.address"></el-input>
        </el-form-item>
        <el-form-item label="LRCT">
          <el-input v-model="$store.state.lrc.lrct"></el-input>
        </el-form-item>
        <el-form-item label="LRCK">
          <el-input v-model="$store.state.lrc.lrck" type="textarea" :rows="4"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="connect"
                   :loading="!$store.getters[$NS.LRC.GET_IS_CAN_START_CONNECT]">{{$t('common.connect')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

  export default {
    name: 'LrcContainer',
    mounted () {
      this.$store.dispatch(this.$NS.LRC.ACT_RESTORE_CONN_INFO)
      this.connect()
    },
    methods: {
      /**
       * 发起连接请求
       */
      connect () {
        try {
          this.$store.dispatch(this.$NS.LRC.ACT_CONN_START)
        } catch (e) {
          this.$util.log.debug('LRC has an error during the connection：%O', e)
          this.$store.dispatch(this.$NS.LRC.ACT_CONN_RESET)
          this.$util.tip.notification_error(this.$t('common.failed'), this.$t(this.lang + 'connect_failed_tip'))
        }
      },
      dialogClose () {
        this.$util.log.debug('Refusing to close')
      }
    },
    computed: {
      lrcState () {
        return this.$store.state.lrc.state
      }
    },
    watch: {
      lrcState (state) {
        if (state === this.$NS.LRC.MUT_SET_STATE_DISCONNECTED) {
          this.$util.tip.notification_error('LRC', this.$t(this.lang + 'connect_disconnected_tip'))
        } else if (state === this.$NS.LRC.MUT_SET_STATE_CONNECTED) {
          this.$util.tip.notification_success('LRC', this.$t(this.lang + 'connect_connected_tip'))
        }
      }
    },
    data () {
      return {
        lang: 'lrc.lrcContainer.'
      }
    }
  }
</script>

<style scoped>
  .lrc-container-panel {
    z-index: 100000 !important;
  }

</style>
