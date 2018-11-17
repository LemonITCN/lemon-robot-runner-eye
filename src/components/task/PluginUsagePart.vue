<template>
  <div class="plugin-usage-part">
    <el-alert
        v-show="pluginMissingList.length > 0"
        :title="$t(lang + 'missing_plugin')"
        type="error"
        :closable="false">
      <el-button size="small" type="text" @click="manageMissingPlugin">{{$t(lang + 'missing_plugin_manage')}}
      </el-button>
    </el-alert>
    <el-table
        class="plugin-usage-list"
        stripe
        @cell-click="showPluginDetail"
        v-loading="pluginUsageLoading"
        :cell-style="{cursor: 'pointer'}"
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
      <el-table-column
          :label="$t(lang + 'column_enable_state')"
          class-name="operate"
          width="200" @click.stop>
        <template slot-scope="scope">
          <el-switch
              v-model="enableState[scope.$index]"
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
    <el-dialog :title="$t(lang + 'missing_plugin_manage_title')" :visible.sync="pluginMissingManagePanelState">
      <plugin-usage-missing-part :missing-plugin-str-list="pluginMissingList" @parentRefreshState="refreshState"></plugin-usage-missing-part>
    </el-dialog>
  </div>
</template>

<script>
  import PluginDetailPart from '../plugin/PluginDetailPart.vue'
  import TaskPluginUsageUpdate from "../../model/TaskPluginUsageUpdate";
  import PluginUsageMissingPart from "./PluginUsageMissingPart";

  export default {
    components: {PluginUsageMissingPart, PluginDetailPart},
    name: 'PluginUsagePart',
    mounted() {
      this.refreshState()
    },
    methods: {
      onEnabledChange(state) {
        let plugin = this.$store.getters[this.$NS.PLUGIN.GET_PLUGIN_LIST][state.$index]
        let pluginUsageUpdate = new TaskPluginUsageUpdate()
        pluginUsageUpdate.taskKey = this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].taskKey
        pluginUsageUpdate.enabledState = this.enableState[state.$index]
        pluginUsageUpdate.pluginPackageName = plugin.config.packageName
        pluginUsageUpdate.pluginStoreCode = plugin.store
        pluginUsageUpdate.pluginVersion = plugin.config.version
        let self = this
        this.$store.dispatch(this.$NS.TASK.ACT_UPDATE_CURRENT_TASK_PLUGIN_USAGE, {
          pluginUsageUpdate: pluginUsageUpdate,
          success() {
            self.util.log.info('Plugin usage state [%O] change success!', pluginUsageUpdate)
          }
        })
      },
      /**
       * 展示插件详情
       */
      showPluginDetail(row, column) {
        if (column.className !== 'operate') {
          this.showDetailPlugin = row
          this.pluginDetailPanelState = true
        }
      },
      manageMissingPlugin() {
        this.pluginMissingManagePanelState = true
      },
      refreshState() {
        this.$util.log.info('刷新')
        this.pluginUsageLoading = true
        let self = this
        this.$store.dispatch(this.$NS.PLUGIN.ACT_REFRESH_PLUGIN_LIST, {
          success() {
            self.$store.dispatch(self.$NS.TASK.ACT_REFRESH_CURRENT_TASK_PLUGIN_USAGE, {
              success() {
                // 刷新插件列表完毕，刷新插件使用情况完毕，开始进行插件使用情况的计算
                let pluginList = self.$store.getters[self.$NS.PLUGIN.GET_PLUGIN_LIST]
                let pluginUsageStrList = []
                self.$store.getters[self.$NS.TASK.GET_CURRENT_TASK_PLUGIN_USAGE].forEach((item) => {
                  let usageStr = item.pluginStoreCode + '|' + item.pluginPackageName + '|' + item.pluginVersion
                  pluginUsageStrList.push(usageStr)
                })
                for (let i = 0; i < pluginList.length; i++) {
                  let plugini = pluginList[i]
                  let pluginiStr = plugini.store + '|' + plugini.config.packageName + '|' + plugini.config.version
                  self.enableState[i] = self.$util.array.containsInArray(pluginUsageStrList, pluginiStr)
                  // 已经开启的插件说明已经被安装，那么稍后usage数组中剩下的插件即为没安装的插件
                  self.$util.array.removeFromArray(pluginUsageStrList, pluginiStr)
                }
                self.pluginUsageLoading = false
                self.$util.log.info('Find missing plugins [%O] count: ' + pluginUsageStrList.length, pluginUsageStrList)
                if (pluginUsageStrList.length === 0){
                  self.$util.log.info('Missing plugins clear, auto close missing plugins manage panel!')
                  self.pluginMissingManagePanelState = false
                }
                self.pluginMissingList = pluginUsageStrList
              }
            })
          }
        })
      }
    },
    data() {
      return {
        lang: 'task.pluginUsagePart.',
        enableState: [],
        pluginMissingList: [],
        pluginDetailPanelState: false,
        pluginMissingManagePanelState: false,
        showDetailPlugin: null,
        pluginUsageLoading: false
      }
    }
  }
</script>

<style scoped>
  .plugin-detail >>> label {
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