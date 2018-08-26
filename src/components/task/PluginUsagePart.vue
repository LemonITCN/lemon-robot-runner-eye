<template>
  <div class="plugin-usage-part">
    <el-table
        stripe
        @cell-click="showPluginDetail"
        :cell-style="{cursor: 'pointer'}"
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
      <el-table-column
          :label="$t(lang + 'column_enable_state')"
          class-name="operate"
          width="200" @click.stop>
        <template slot-scope="scope">
          <el-switch
              v-model="enable_state[scope.$index]"
              @change="onEnabledChange(scope)"
              active-color="#13ce66">
          </el-switch>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
        :title="showDetailPlugin === null ? '' : showDetailPlugin.config.name"
        :visible.sync="pluginDetailPanelState"
        width="720">
      <plugin-detail-part v-if="showDetailPlugin !== null" :plugin="showDetailPlugin"></plugin-detail-part>
      <span slot="footer" class="dialog-footer">
        <el-button @click="pluginDetailPanelState = false">{{$t('common.iknow')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import PluginDetailPart from '../plugin/PluginDetailPart.vue'

  export default {
    components: {PluginDetailPart},
    name: 'PluginUsagePart',
    mounted () {
      let self = this
      this.$store.dispatch(this.$NS.PLUGIN.ACT_REFRESH_PLUGIN_LIST, {
        success () {
          let pluginStrArr = []
          let pluginArr = self.$store.getters[self.$NS.PLUGIN.GET_PLUGIN_LIST]
          for (let i = 0; i < pluginArr.length; i++) {
            pluginStrArr[i] = self.createPluginStr(pluginArr[i])
          }
          let enabledPluginStrs = self.$store.getters[self.$NS.TASK.GET_CURRENT_EDIT_TASK].pluginsUsage
          enabledPluginStrs.forEach(pluginStr => {
            let index = pluginStrArr.indexOf(pluginStr)
            if (index >= 0) {
              self.enable_state[index] = true
            }
          })
        }
      })
    },
    methods: {
      createPluginStr (plugin) {
        return plugin.config.packageName + '#' + plugin.config.version + '@' + plugin.store
      },
      onEnabledChange (state) {
        let plugin = this.$store.getters[this.$NS.PLUGIN.GET_PLUGIN_LIST][state.$index]
        let pluginStr = this.createPluginStr(plugin)
        let enabledPluginStrs = this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].pluginsUsage
        let containThePlugin = this.$util.array.containsInArray(enabledPluginStrs, pluginStr)
        if (!containThePlugin && this.enable_state[state.$index]) {
          // 当前未启用，想启用
          enabledPluginStrs.push(pluginStr)
        }
        if (containThePlugin && !this.enable_state[state.$index]) {
          // 当前已启动，想取消
          this.$util.array.removeFromArray(enabledPluginStrs, pluginStr)
        }
        this.$store.dispatch(this.$NS.TASK.ACT_SAVE_CURRENT_EDITING_TASK)
        this.$util.log.info(pluginStr + ' - ' + this.enable_state[state.$index])
      },
      /**
       * 展示插件详情
       */
      showPluginDetail (row, column) {
        if (column.className !== 'operate') {
          this.showDetailPlugin = row
          this.pluginDetailPanelState = true
        }
      }
    },
    data () {
      return {
        lang: 'task.pluginUsagePart.',
        enable_state: [],
        pluginDetailPanelState: false,
        showDetailPlugin: null
      }
    }
  }
</script>

<style scoped>
  .plugin-detail > > > label {
    color: #99a9bf;
    width: 120px;
  }

  .plugin-detail .el-form-item {
    width: 100%;
    margin-right: 0;
    margin-bottom: 0;
  }

  .contentRow {
    cursor: pointer !important;
  }
</style>