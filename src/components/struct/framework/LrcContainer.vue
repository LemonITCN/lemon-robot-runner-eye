<template>
  <div class="lrc-container">
    <el-dialog
      :title="$t('system.app_name')"
      :visible.sync="$store.getters[$NS.CONNECTOR.GET_IS_SHOW_PANEL]"
      width="30%" :before-close="dialogClose">
      <span>{{$t('connector.connector_tip_pre') + $t('system.app_name') +  $t('connector.connector_tip_end')}}</span>
      <el-form>
        <el-form-item :label="$t('connector.server_address')">
          <el-input v-model="$store.state.connector.address"></el-input>
        </el-form-item>
        <el-form-item label="LRCT">
          <el-input v-model="$store.state.connector.lrct"></el-input>
        </el-form-item>
        <el-form-item label="LRCK">
          <el-input v-model="$store.state.connector.lrck" type="textarea" :rows="4"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="connect" :loading="!$store.getters[$NS.CONNECTOR.GET_IS_CAN_START_CONNECT]">{{$t('common.connect')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'LrcContainer',
  mounted () {
    this.$store.dispatch(this.$NS.CONNECTOR.ACT_RESTORE_CONN_INFO)
  },
  methods: {
    /**
     * 发起连接请求
     */
    connect () {
      try {
        this.$store.dispatch(this.$NS.CONNECTOR.ACT_CONN_START)
      } catch (e) {
        this.$util.log.debug('LRC has an error during the connection：%O', e)
        this.$store.dispatch(this.$NS.CONNECTOR.ACT_CONN_RESET)
        this.$util.tip.notification_error(this.$t('common.failed'), this.$t('connector.connect_failed_tip'))
      }
    },
    dialogClose () {
      this.$util.log.debug('Refusing to close')
    }
  },
  computed: {
    connectorState () {
      return this.$store.state.connector.state
    }
  },
  watch: {
    connectorState (state) {
      if (state === this.$NS.CONNECTOR.MUT_SET_STATE_DISCONNECTED) {
        this.$util.tip.notification_error('LRC', this.$t('connector.connect_disconnected_tip'))
      } else if (state === this.$NS.CONNECTOR.MUT_SET_STATE_CONNECTED) {
        this.$util.tip.notification_success('LRC', this.$t('connector.connect_connected_tip'))
      }
    }
  }
}
</script>

<style scoped>
  .connector-request {
  }

</style>
