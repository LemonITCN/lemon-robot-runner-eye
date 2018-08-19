<template>
  <div class="plugin-install-part">
    <plugin-upload-part class="plugin-upload-part"></plugin-upload-part>
    <el-table
        stripe
        :data="$store.getters[$NS.PLUGIN.GET_PLUGIN_LIST]">
      <el-table-column
          :label="$t(lang + 'column_name')"
          width="340">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.config.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
          :label="$t(lang + 'column_package')"
          width="340">
        <template slot-scope="scope">
          {{scope.row.config.packageName}}
        </template>
      </el-table-column>
      <el-table-column
          :label="$t(lang + 'column_version')"
          width="140">
        <template slot-scope="scope">
          <el-tag size="medium" type="success">{{ scope.row.config.version }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
          :label="$t(lang + 'column_key')">
        <template slot-scope="scope">
          <el-tag size="medium" type="info">{{ scope.row.config.key }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column :label="$t(lang + 'column_operate')" width="200">
        <template slot-scope="scope">
          <data-set-property-operate-part :index="scope.$index"></data-set-property-operate-part>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import PluginUploadPart from './PluginUploadPart.vue'

  export default {
    components: {PluginUploadPart},
    name: 'PluginInstalledPart',
    mounted () {
      this.$store.dispatch(this.$NS.PLUGIN.ACT_REFRESH_PLUGIN_LIST)
    },
    computed: {
      lrcState () {
        return this.$store.state.lrc.state
      }
    },
    watch: {
      lrcState (state) {
        // LRC重新连接成功的时候自动刷新插件列表
        if (state === this.$NS.LRC.MUT_SET_STATE_CONNECTED) {
          this.$store.dispatch(this.$NS.PLUGIN.ACT_REFRESH_PLUGIN_LIST)
        }
      }
    },
    data () {
      return {
        lang: 'plugin.pluginInstalledPart.'
      }
    }
  }
</script>

<style scoped>
  .plugin-upload-part {
    position: absolute;
    right: 50px;
    bottom: 50px;
  }
</style>