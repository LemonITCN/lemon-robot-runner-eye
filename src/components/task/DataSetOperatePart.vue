<template>
  <div class="data-set-operate-part" @click.stop>
    <el-tooltip class="item" effect="dark" :content="$t(lang + 'reinfo')" placement="top">
      <el-button icon="el-icon-edit" @click="reinfo_data_set_panel_state = true" size="mini" circle></el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" :content="$t(lang + 'delete')" placement="top">
      <el-button icon="el-icon-delete" @click="delete_data_set_panel_state = true" size="mini"
                 circle></el-button>
    </el-tooltip>
    <!--修改数据集基本信息的对话框-->
    <el-dialog
        @open="handle_open"
        :title="$t(lang + 'reinfo')"
        :visible.sync="reinfo_data_set_panel_state"
        width="50%">
      <div>
        <el-input :placeholder="$t(lang + 'data_set_key_placeholder')" class="dialog-field"
                  v-model="data_set_key">
          <template slot="prepend">{{$t(lang + 'data_set_key')}}</template>
        </el-input>
        <el-input :placeholder="$t(lang + 'data_set_remark_placeholder')" class="dialog-field"
                  v-model="data_set_remark">
          <template slot="prepend">{{$t(lang + 'data_set_remark')}}</template>
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="reinfo_data_set_panel_state = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="reinfo_data_set">{{$t('common.modify')}}</el-button>
      </span>
    </el-dialog>
    <!--修改数据集基本信息的对话框 结束-->
    <!--删除数据集的确认对话框-->
    <el-dialog
        :title="$t(lang + 'delete')"
        :visible.sync="delete_data_set_panel_state"
        width="30%">
      <span>{{$t(lang + 'delete_tip')}}【 {{$store.getters[$NS.TASK.GET_CURRENT_DATA_SET_KEY]}} 】</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delete_data_set_panel_state = false">{{$t('common.cancel')}}</el-button>
        <el-button type="danger" @click="delete_data_set">{{$t('common.delete')}}</el-button>
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
        this.old_data_set_key = this.$store.getters[this.$NS.TASK.GET_CURRENT_DATA_SET_KEY]
        this.data_set_key = this.$store.getters[this.$NS.TASK.GET_CURRENT_DATA_SET_KEY]
        this.data_set_remark = this.$store.getters[this.$NS.TASK.GET_CURRENT_DATA_SET].remark
      },
      reinfo_data_set () {
        if (this.old_data_set_key !== this.data_set_key) {
          // 被修改了
          if (this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].dataSet.hasOwnProperty(this.data_set_key)) {
            this.$util.tip.notification_error(this.$t(this.lang + 'data_set_key_exists_tip'))
            return
          }
          // 没重名，继续修改指令集名称
          this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].dataSet[this.data_set_key] = this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].dataSet[this.old_data_set_key]
          // 删除原有名称的数据集
          this.$store.commit(this.$NS.TASK.MUT_SET_CURRENT_DATA_SET_KEY, this.data_set_key)
          delete this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].dataSet[this.old_data_set_key]
        }
        this.$store.getters[this.$NS.TASK.GET_CURRENT_DATA_SET].remark = this.data_set_remark
        this.$store.dispatch(this.$NS.TASK.ACT_SAVE_CURRENT_EDITING_TASK)
        this.reinfo_data_set_panel_state = false
      },
      delete_data_set () {
        Vue.delete(this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].dataSet, this.$store.getters[this.$NS.TASK.GET_CURRENT_DATA_SET_KEY])
        this.$store.dispatch(this.$NS.TASK.ACT_SAVE_CURRENT_EDITING_TASK)
        // 让第一个默认选中
        let keys = Object.keys(this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].dataSet)
        if (keys.length > 0) {
          this.$store.commit(this.$NS.TASK.MUT_SET_CURRENT_DATA_SET_KEY, keys[0])
        }
        this.delete_data_set_panel_state = false
      }
    },
    data () {
      return {
        lang: 'task.dataSetOperatePart.',
        reinfo_data_set_panel_state: false,
        delete_data_set_panel_state: false,
        data_set_key: '',
        data_set_remark: '',
        old_data_set_key: ''
      }
    }
  }
</script>

<style scoped>
  .data-set-operate-part {
  }
</style>