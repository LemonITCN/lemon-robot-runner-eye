<template>
  <div class="connector-request-module">
    <el-dialog
      :title="$t('system.app_name')"
      :visible.sync="$store.getters[$NS.CONNECTOR.GET_IS_SHOW_PANEL]"
      width="30%">
      <span>{{$t('connector.connector_tip_pre') + $t('system.app_name') +  $t('connector.connector_tip_end')}}</span>
      <el-form :model="connector">
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
import JSEncrypt from 'jsencrypt/bin/jsencrypt'
export default {
  name: 'ConnectorRequestPanelModule',
  mounted () {
    this.connector.address = localStorage.connector_address
    this.connector.lrct = localStorage.connector_lrct
    this.connector.lrck = localStorage.connector_lrck
  },
  methods: {
    /**
     * 发起连接请求
     */
    connect () {
      let jsEncrypt = new JSEncrypt()
      jsEncrypt.setPublicKey('-----BEGIN RSA PRIVATE KEY-----' + this.connector.lrck + '-----END RSA PRIVATE KEY-----')
      let lrcs = this.$util.uuid.random()
      let encryptedLrcs = jsEncrypt.encrypt(lrcs)
      this.$util.log.debug('LRCK = %O , LRCS = %O , Encrypted LRCS = %O', this.connector.lrck, lrcs, encryptedLrcs)
      this.$store.commit(this.$NS.CONNECTOR.MUT_SET_LRCT, this.connector.lrct)
      this.$ajax.defaults.baseURL = this.connector.address
      this.$ajax.defaults.headers.common['lrct'] = this.connector.lrct
      this.$ajax.post('/connector/request', {
        lrcs: encryptedLrcs
      })
        .then((res) => {
          if (res.data.success) {
            localStorage.connector_address = this.connector.address
            localStorage.connector_lrct = this.connector.lrct
            localStorage.connector_lrck = this.connector.lrck
            this.$store.dispatch(this.$NS.CONNECTOR.ACT_CONN_SUCCESS, {
              state: true,
              address: this.connector.address,
              lrct: this.connector.lrct,
              lrck: this.connector.lrck
            })
          }
        })
        .catch((err) => {
          this.$util.log.error(err)
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
