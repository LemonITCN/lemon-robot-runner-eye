<template>
  <div class="task-create-part">
    <el-button class="local-task-create-button" type="success" icon="el-icon-plus" round
               @click="create_task_panel_state = true">{{$t(lang + 'create_task')}}
    </el-button>
    <!--创建本地任务对话框开始-->
    <el-dialog
        :title="$t(lang + 'create_task')"
        :visible.sync="create_task_panel_state"
        width="50%">
      <div>
        <el-input :placeholder="$t(lang +  'task_name_placeholder')" class="dialog-field"
                  v-model="create_task_text_name">
          <template slot="prepend">{{$t('common.task_name')}}</template>
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="create_task_panel_state = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="create_local_task">{{$t('common.create')}}</el-button>
      </span>
    </el-dialog>
    <!--创建本地任务对话框结束-->
  </div>
</template>

<script>
  export default {
    name: 'TaskCreatePart',
    methods: {
      // 创建本地任务
      create_local_task () {
        if (this.create_task_text_key === '' || this.create_task_text_name === '') {
          this.$util.tip.notification_info({
            title: this.$t('common.failed'),
            message: this.$t(this.lang + '.local_task_create_error_msg_empty'),
            type: 'error'
          })
          return
        }
        this.$util.globalLoading.show(this.$t(this.lang + 'create_task_loading'))
        // 提交到服务器创建任务
        this.$axios.put(this.$define.URL.TASK.CREATE, {
          name: this.create_task_text_name
        })
          .then(() => {
            this.$util.tip.notification_success(this.$t(this.lang + 'create_task_success'))
            this.create_task_panel_state = false
            this.$store.dispatch(this.$NS.TASK.ACT_REFRESH_TASK_LIST)
            this.$util.globalLoading.hide()
            this.create_task_text_name = ''
          })
          .catch(() => {
            this.$util.globalLoading.hide()
          })
      }
    },
    data () {
      return {
        lang: 'task.taskCreatePart.',
        // 创建任务的对话框是不是打开状态
        create_task_panel_state: false,
        // 任务名称
        create_task_text_name: ''
      }
    }
  }
</script>

<style scoped>
</style>
