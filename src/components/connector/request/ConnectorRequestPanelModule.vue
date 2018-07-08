<template>
  <div class="connector-request-module">
    <el-dialog
      :title="$t('system.app_name')"
      :visible.sync="$store.getters[$NS.CONNECTOR.GET_IS_SHOW_PANEL]"
      width="30%">
      <span>{{$t('connector.connector_tip_pre') + $t('system.app_name') +  $t('connector.connector_tip_end')}}</span>
      <el-form>
        <el-form-item :label="$t('connector.server_address')">
          <el-input v-model="connector.address"></el-input>
        </el-form-item>
        <el-form-item label="LRCT">
          <el-input v-model="connector.lrct"></el-input>
        </el-form-item>
        <el-form-item label="LRCK">
          <el-input v-model="connector.lrck" type="textarea" :rows="4"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="connect">{{$t('common.connect')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ConnectorRequestPanelModule',
  mounted () {
    this.connector.address = localStorage.getconnector_address
    this.connector.lrct = localStorage.getconnector_lrct
    this.connector.lrck = localStorage.getconnector_lrck
    console.log(this.$NS.CONNECTOR.GET_IS_SHOW_PANEL)
  },
  methods: {
    connect () {
      this.$store.dispatch(this.$NS.CONNECTOR.ACT_CONN_SUCCESS, {
        state: true
      })
    }
  },
  data () {
    return {
      connector: {
        address: '',
        lrct: '',
        lrck: ''
      }
    }
  }
}
</script>

<style scoped>
  .connector-request-module {
  }

</style>
