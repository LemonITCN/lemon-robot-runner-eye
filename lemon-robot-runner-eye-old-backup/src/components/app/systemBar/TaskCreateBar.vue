<template>
  <div class="task-create-module">
    <el-tooltip
      class="item"
      effect="dark"
      :content="$t(lang + '.create_local_task_button_tip') + ' ' + $t(lang + '.createTask')"
      placement="top-start">
      <el-button class="local-task-create-button" type="success" icon="el-icon-plus" circle
                 @click="create_task_panel_state = true"></el-button>
    </el-tooltip>
    <!--创建本地任务对话框开始-->
    <el-dialog
      :title="$t(lang + '.createTask')"
      :visible.sync="createPanelState"
      width="50%">
      <div>
        <el-input :placeholder="$t(lang + '.create_dialog_task_key_placeholder')" class="task-prop-input" v-model="create_task_text_key">
          <template slot="prepend">{{$t('common.task_key')}}</template>
        </el-input>
        <el-input :placeholder="$t(lang + '.create_dialog_task_name_placeholder')" class="task-prop-input" v-model="create_task_text_name">
          <template slot="prepend">{{$t('common.task_name')}}</template>
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="create_task_panel_state = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="createTask">{{$t('common.create')}}</el-button>
      </span>
    </el-dialog>
    <!--创建本地任务对话框结束-->
  </div>
</template>

<script>
import { Notification } from 'element-ui'
export default {
  name: 'TaskCreateModule',
  methods: {
    // 创建本地任务
    createTask () {
      if (this.create_task_text_key === '' || this.create_task_text_name === '') {
        Notification({
          title: this.$t('common.failed'),
          message: this.$t(this.lang + '.local_task_create_error_msg_empty'),
          type: 'error'
        })
        return
      }
      this.$util.globalLoading.show(this.$t(this.lang + '.create_task_loading_title'))
      // eslint-disable-next-line no-undef
      let createTaskResult = _lr.task.localCreateTask(this.create_task_text_key, this.create_task_text_name)
      if (createTaskResult) {
        this.createPanelState = false
        this.create_task_text_key = ''
        this.create_task_text_name = ''
      }
      this.$store.dispatch(this.$NS.GLOBAL_LOADING.ACT_HIDE)
      Notification({
        title: createTaskResult ? this.$t('common.successful') : this.$t('common.failed'),
        message: this.$t(this.lang + '.task_creation') + ' ' + (createTaskResult ? this.$t('common.successful') : this.$t('common.failed')),
        type: createTaskResult ? 'success' : 'error'
      })
    }
  },
  data () {
    return {
      lang: 'struct.bar.taskCreateBar',
      // 创建任务的对话框是不是打开状态
      dialog_visible_create_local_task: false,
      // 任务标识
      create_task_text_key: '',
      // 任务名称
      create_task_text_name: ''
    }
  }
}
</script>

<style scoped>
  .local-task-create-button {
    position: absolute;
    bottom: 30px;
    left: 20px;
  }
  .task-prop-input{
    margin-bottom: 10px;
  }
</style>
