<template>
  <div class="plugin-install-part">
    <plugin-upload-part class="plugin-upload-part"></plugin-upload-part>
    <el-table
        stripe
        :empty-text="$t(lang + 'no_plugin')"
        :data="$store.getters[$NS.PLUGIN.GET_PLUGIN_LIST]">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="plugin-detail">
            <el-form-item :label="$t(lang + 'detail_store')">
              <span>{{ props.row.store.length === 1 ? $t(lang + 'user_upload') : props.row.store }}</span>
            </el-form-item>
            <el-form-item :label="$t(lang + 'detail_introduce')">
              <span>{{ props.row.config.introduce }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
          :label="$t(lang + 'column_name')"
          width="330">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.config.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
          :label="$t(lang + 'column_package')"
          width="330">
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
          width="140"
          :label="$t(lang + 'column_key')">
        <template slot-scope="scope">
          <el-tag size="medium" type="info">{{ scope.row.config.key }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column :label="$t(lang + 'column_operate')" width="200">
        <template slot-scope="scope">
          <plugin-operate-part :index="scope.$index"></plugin-operate-part>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import PluginUploadPart from './PluginUploadPart.vue'
  import PluginOperatePart from './PluginOperatePart.vue'

  export default {
    components: {
      PluginOperatePart,
      PluginUploadPart
    },
    name: 'PluginInstalledPart',
    mounted() {
      this.$store.dispatch(this.$NS.PLUGIN.ACT_REFRESH_PLUGIN_LIST)
    },
    computed: {
      lrcState() {
        return this.$store.state.lrc.state
      }
    },
    watch: {
      lrcState(state) {
        // LRC重新连接成功的时候自动刷新插件列表
        if (state === this.$NS.LRC.MUT_SET_STATE_CONNECTED) {
          this.$store.dispatch(this.$NS.PLUGIN.ACT_REFRESH_PLUGIN_LIST)
        }
      }
    },
    data() {
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

  .plugin-detail >>> label {
    color: #99a9bf;
    width: 120px;
  }

  .plugin-detail .el-form-item {
    width: 100%;
    margin-right: 0;
    margin-bottom: 0;
  }
</style>