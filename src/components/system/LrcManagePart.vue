<template>
  <div class="lrc-manage-part">
    <el-table
        stripe
        :data="$store.getters[$NS.LRC.GET_LRC_LIST]">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" class="lrc-detail">
            <el-form-item :label="$t(lang + 'intro')">
              <span>{{ props.row.intro }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
          :label="$t(lang + 'column_lrcKey')"
          width="430">
        <template slot-scope="scope">
          <span style="margin-left: 10px;">{{ scope.row.lrcKey}}</span>
        </template>
      </el-table-column>
      <el-table-column
          :label="$t(lang + 'column_createTime')"
          width="230">
        <template slot-scope="scope">
          {{$util.date.unixTimeStampToLocalStr(scope.row.createTime,$t('common.dateStr'))}}
        </template>
      </el-table-column>
      <el-table-column
          :label="$t(lang + 'column_type')">
        <template slot-scope="scope">
          <el-tag size="medium" type="success">{{ clientTypeMapping[scope.row.type] }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column :label="$t(lang + 'column_operate')" width="260">
        <template slot-scope="scope">
          <lrc-operate-part :index="scope.$index"></lrc-operate-part>
        </template>
      </el-table-column>
    </el-table>
    <lrc-create-part class="task-create-part"></lrc-create-part>
  </div>
</template>

<script>
  import LrcOperatePart from "./LrcOperatePart";
  import LrcCreatePart from "./LrcCreatePart";

  export default {
    name: "PluginStorePart",
    components: {LrcCreatePart, LrcOperatePart},
    mounted() {
      this.$store.dispatch(this.$NS.LRC.ACT_REFRESH_LRC_LIST)
    },
    computed: {
      lrcState() {
        return this.$store.state.lrc.state
      }
    },
    watch: {
      lrcState(state) {
        // LRC重新连接成功的时候自动刷新列表
        if (state === this.$NS.LRC.MUT_SET_STATE_CONNECTED) {
          this.$store.dispatch(this.$NS.LRC.ACT_REFRESH_LRC_LIST)
        }
      }
    },
    data() {
      return {
        lang: 'system.lrcManagePart.',
        clientTypeMapping: ['LR RUNNER EYE', 'DISPATCHER']
      }
    }
  }
</script>

<style scoped>
  .lrc-detail >>> label {
    color: #99a9bf;
    width: 120px;
  }

  .lrc-detail .el-form-item {
    width: 100%;
    margin-right: 0;
    margin-bottom: 0;
  }

  .task-create-part {
    text-align: center;
    margin-top: 10px;
  }
</style>