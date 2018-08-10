<template>
  <div class="data-set-operate-part" @click.stop>
    <el-tooltip class="item" effect="dark" :content="$t(lang + 'reinfo')" placement="top">
      <el-button icon="el-icon-edit" @click="reinfoPanelState = true" size="mini" circle></el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" :content="$t(lang + 'delete')" placement="top">
      <el-button icon="el-icon-delete" @click="deletePanelState = true" size="mini"
                 circle></el-button>
    </el-tooltip>
    <!--修改数据集基本信息的对话框-->
    <el-dialog
        @open="handle_open"
        :title="$t(lang + 'reinfo')"
        :visible.sync="reinfoPanelState"
        class="form-dialog">
      <el-form :ref="formName" :model="dataSet" :rules="rules" label-width="140px">
        <el-form-item :label="$t(lang + 'data_set_key')" prop="key" class="dialog-field">
          <el-input :placeholder="$t(lang + 'data_set_key_placeholder')"
                    v-model="dataSet.key"></el-input>
        </el-form-item>
        <el-form-item :label="$t(lang + 'data_set_remark')">
          <el-input
              type="textarea"
              rows="6"
              :placeholder="$t(lang + 'data_set_remark_placeholder')"
              class="dialog-field"
              v-model="dataSet.model.remark">
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="reinfoPanelState = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="reinfoDataSet">{{$t('common.modify')}}</el-button>
      </span>
    </el-dialog>
    <!--修改数据集基本信息的对话框 结束-->
    <!--删除数据集的确认对话框-->
    <el-dialog
        :title="$t(lang + 'delete')"
        :visible.sync="deletePanelState"
        width="30%">
      <span>{{$t(lang + 'delete_tip')}}【 {{$store.getters[$NS.TASK.GET_CURRENT_DATA_SET_KEY]}} 】</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deletePanelState = false">{{$t('common.cancel')}}</el-button>
        <el-button type="danger" @click="deleteDataSet">{{$t('common.delete')}}</el-button>
      </span>
    </el-dialog>
    <!--删除数据集的确认对话框 结束-->
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'dataSetOperatePart',
    methods: {
      handle_open () {
        this.oldDataSetKey = this.$store.getters[this.$NS.TASK.GET_CURRENT_DATA_SET_KEY]
        this.dataSet.key = this.$store.getters[this.$NS.TASK.GET_CURRENT_DATA_SET_KEY]
        this.dataSet.model = Object.assign({}, this.$store.getters[this.$NS.TASK.GET_CURRENT_DATA_SET])
      },
      reinfoDataSet () {
        this.$refs[this.formName].validate((valid) => {
          if (valid) {
            if (this.oldDataSetKey !== this.dataSet.key) {
              // 被修改了
              if (this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].dataSet.hasOwnProperty(this.dataSet.key)) {
                this.$util.tip.notification_error(this.$t(this.lang + 'data_set_key_exists_tip'))
                return
              }
              // 没重名，继续修改指令集名称
              this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].dataSet[this.dataSet.key] = this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].dataSet[this.oldDataSetKey]
              // 删除原有名称的数据集
              this.$store.commit(this.$NS.TASK.MUT_SET_CURRENT_DATA_SET_KEY, this.dataSet.key)
              delete this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].dataSet[this.oldDataSetKey]
            }
            this.$store.getters[this.$NS.TASK.GET_CURRENT_DATA_SET].remark = this.dataSet.model.remark
            this.$store.dispatch(this.$NS.TASK.ACT_SAVE_CURRENT_EDITING_TASK)
            this.reinfoPanelState = false
          }
        })
      },
      deleteDataSet () {
        Vue.delete(this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].dataSet, this.$store.getters[this.$NS.TASK.GET_CURRENT_DATA_SET_KEY])
        this.$store.dispatch(this.$NS.TASK.ACT_SAVE_CURRENT_EDITING_TASK)
        // 让第一个默认选中
        let keys = Object.keys(this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].dataSet)
        if (keys.length > 0) {
          this.$store.commit(this.$NS.TASK.MUT_SET_CURRENT_DATA_SET_KEY, keys[0])
        }
        this.deletePanelState = false
      }
    },
    data () {
      return {
        lang: 'task.dataSetOperatePart.',
        reinfoPanelState: false,
        deletePanelState: false,
        formName: 'dataSet',
        dataSet: {
          key: '',
          model: ''
        },
        oldDataSetKey: '',
        rules: {
          key: this.$define.RULES.COMMON_KEY
        }
      }
    }
  }
</script>

<style scoped>
  .data-set-operate-part {
  }
</style>