<template>
  <div class="system-bar-module">
    <user-module class="user-module"/>
    <system-state-module/>
    <task-list-module class="task-list-module"/>
    <el-tooltip
      class="item"
      effect="dark"
      :content="$t(lang + '.create_local_task_button_tip') + ' ' + $t(lang + '.create_local_task')"
      placement="top-start">
      <el-button class="local-task-create-button" type="success" icon="el-icon-plus" circle
                 @click="dialog_visible_create_local_task = true"></el-button>
    </el-tooltip>
    <!--创建本地任务对话框开始-->
    <el-dialog
      :title="$t(lang + '.create_local_task')"
      :visible.sync="dialog_visible_create_local_task"
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
        <el-button @click="dialog_visible_create_local_task = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="create_local_task">{{$t('common.create')}}</el-button>
      </span>
    </el-dialog>
    <!--创建本地任务对话框结束-->
  </div>
</template>

<script>
import UserModule from './UserModule'
import TaskListModule from './TaskListModule'
import SystemStateModule from './SystemStateModule'
import { Notification } from 'element-ui'
export default {
  name: 'SystemBarModule',
  components: {SystemStateModule, TaskListModule, UserModule},
  methods: {
    // 创建本地任务
    create_local_task () {
      if (this.create_task_text_key === '' || this.create_task_text_name === '') {
        Notification({
          title: this.$t('common.failed'),
          message: this.$t(this.lang + '.local_task_create_error_msg_empty'),
          type: 'error'
        })
        return
      }
      this.global.util.showLoading('任务创建中..')
      // eslint-disable-next-line no-undef
      var createTaskResult = _lr.task.localCreateTask(this.create_task_text_key, this.create_task_text_name)
      if (createTaskResult) {
        this.dialog_visible_create_local_task = false
      }
      setTimeout(function () {
        this.global.util.hideLoading()
      }, 1000)
      Notification({
        title: createTaskResult ? this.$t('common.successful') : this.$t('common.failed'),
        message: this.$t(this.lang + '.task_creation') + ' ' + (createTaskResult ? this.$t('common.successful') : this.$t('common.failed')),
        type: createTaskResult ? 'success' : 'error'
      })
    }
  },
  data () {
    return {
      lang: 'main.system.system_bar',
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
  .system-module {
    display: flex;
    flex-direction: column;
  }

  .task-list-module {
    flex-grow: 1;
  }

  .local-task-create-button {
    position: absolute;
    bottom: 30px;
    left: 20px;
  }
  .task-prop-input{
    margin-bottom: 10px;
  }
</style>
