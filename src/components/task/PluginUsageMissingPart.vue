<template>
  <div class="plugin-usage-missing-part">
    <el-table
        :data="missingPluginInfoList"
        stripe>
      <el-table-column
          prop="storeName"
          :label="$t(lang + 'column_source')"
          width="180">
      </el-table-column>
      <el-table-column
          prop="pluginPackageName"
          :label="$t(lang + 'column_package')">
      </el-table-column>
      <el-table-column
          prop="pluginVersion"
          :label="$t(lang + 'column_version')"
          width="120">
      </el-table-column>
      <el-table-column
          :label="$t(lang + 'column_operate')"
          width="140">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="removeDep(scope.$index)">{{$t(lang + 'operate_remove')}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import TaskPluginUsageUpdate from "../../model/TaskPluginUsageUpdate";

  export default {
    name: 'PluginUsageMissingPart',
    props: ['missingPluginStrList'],
    mounted() {
      let self = this
      this.missingPluginStrList.forEach((item) => {
        let infoArr = item.split('|')
        let usageUpdate = new TaskPluginUsageUpdate()
        usageUpdate.taskKey = this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].taskKey
        usageUpdate.enabledState = false
        usageUpdate.pluginStoreCode = infoArr[0]
        usageUpdate.pluginPackageName = infoArr[1]
        usageUpdate.pluginVersion = infoArr[2]
        usageUpdate.storeName = infoArr[0] === '!' ? this.$t(this.lang + 'user_upload') : (this.$t(this.lang + 'plugin_store') + '[' + infoArr[0] + ']')
        self.missingPluginInfoList.push(usageUpdate)
      })
    },
    methods: {
      removeDep(index) {
        let self = this
        this.$confirm(this.$t(this.lang + 'operate_remove_tip'), this.$t(this.lang + 'operate_remove'), {
          confirmButtonText:  this.$t('common.delete'),
          cancelButtonText:  this.$t('common.cancel'),
          type: 'warning'
        }).then(() => {
          this.$store.dispatch(this.$NS.TASK.ACT_UPDATE_CURRENT_TASK_PLUGIN_USAGE, {
            pluginUsageUpdate: self.missingPluginInfoList[index],
            success() {
              self.$util.log.info('触发父类方法')
              self.$emit('parentRefreshState')
              self.$util.tip.message_success(self.$t(self.lang + 'operate_remove_success'))
              self.$util.array.removeFromArray(self.missingPluginInfoList, self.missingPluginInfoList[index])
              self.$store.dispatch(self.$NS.TASK.ACT_UPDATE_CURRENT_TASK_PLUGIN_USAGE)
            }
          })
        })
      }
    },
    data() {
      return {
        lang: 'task.pluginUsageMissingPart.',
        missingPluginInfoList: []
      }
    }
  }
</script>

<style scoped>
</style>