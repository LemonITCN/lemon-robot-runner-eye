<template>
  <div class="task-create-part">
    <el-button class="local-task-create-button" type="success" icon="el-icon-plus" round
               @click="createPanelState = true">{{$t(lang + 'create_task')}}
    </el-button>
    <!--创建本地任务对话框开始-->
    <el-dialog
        :title="$t(lang + 'create_task')"
        :visible.sync="createPanelState"
        class="form-dialog">
      <el-form :ref="formName" :model="form" :rules="rules" label-width="140px">
        <el-form-item :label="$t('common.task_name')" prop="name" class="dialog-field">
          <el-input :placeholder="$t(lang +  'task_name_placeholder')" v-model="form.name">
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="createPanelState = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="createTask">{{$t('common.create')}}</el-button>
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
      createTask () {
        this.$refs[this.formName].validate((valid) => {
          if (valid) {
            this.$util.globalLoading.show(this.$t(this.lang + 'create_task_loading'))
            // 提交到服务器创建任务
            this.$axios.put(this.$define.URL.TASK.CREATE, this.form)
              .then(() => {
                this.$util.tip.notification_success(this.$t(this.lang + 'create_task_success'))
                this.createPanelState = false
                this.$store.dispatch(this.$NS.TASK.ACT_REFRESH_TASK_LIST)
                this.$util.globalLoading.hide()
                this.form.name = ''
              })
              .catch(() => {
                this.$util.globalLoading.hide()
              })
          }
        })
      }
    },
    data () {
      return {
        lang: 'task.taskCreatePart.',
        // 创建任务的对话框是不是打开状态
        createPanelState: false,
        formName: 'createTask',
        // 任务名称
        form: {
          name: ''
        },
        rules: {
          name: this.$define.RULES.COMMON_NAME
        }
      }
    }
  }
</script>

<style scoped>
</style>
