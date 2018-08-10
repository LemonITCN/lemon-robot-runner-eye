<template>
  <div class="task-operate-part" @click.stop>
    <el-tooltip class="item" effect="dark" :content="$t(lang + 'rename')" placement="top">
      <el-button icon="el-icon-edit" type="primary" @click.stop="renamePanelState = true" circle></el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" :content="$t(lang + 'delete')" placement="top">
      <el-button icon="el-icon-delete" type="danger" @click.stop="deletePanelState = true"
                 circle></el-button>
    </el-tooltip>
    <!--修改任务名称的对话框-->
    <el-dialog
        :title="$t(lang + 'rename')"
        :visible.sync="renamePanelState"
        width="40%">
      <el-form :ref="formName" :model="form" :rules="rules" label-width="140px">
        <el-form-item :label="$t('common.task_name')" prop="taskName" class="dialog-field">
          <el-input :placeholder="$t(lang +  'task_name_placeholder')" v-model="form.taskName">
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="renamePanelState = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="renameTask">{{$t('common.modify')}}</el-button>
      </span>
    </el-dialog>
    <!--修改任务名称的对话框 结束-->
    <!--删除任务的确认对话框-->
    <el-dialog
        :title="$t(lang + 'delete')"
        :visible.sync="deletePanelState"
        width="30%">
      <span>{{$t(lang + 'delete_tip')}}【 {{taskName}} 】</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deletePanelState = false">{{$t('common.cancel')}}</el-button>
        <el-button type="danger" @click="deleteTask">{{$t('common.delete')}}</el-button>
      </span>
    </el-dialog>
    <!--删除任务的确认对话框 结束-->
  </div>
</template>

<script>
  export default {
    name: 'TaskOperatePart',
    props: ['taskId', 'taskName'],
    methods: {
      renameTask () {
        this.$refs[this.formName].validate((valid) => {
          if (valid) {
            this.$axios.post(this.$define.URL.TASK.RENAME, this.form)
              .then(() => {
                this.$store.dispatch(this.$NS.TASK.ACT_REFRESH_TASK_LIST)
                this.$util.tip.notification_success(this.$t(this.lang + 'rename_success'))
              })
          }
        })
      },
      deleteTask () {
        this.$axios
          .delete(this.$define.URL.TASK.DELETE, {
            data: this.form
          })
          .then(() => {
            this.$store.dispatch(this.$NS.TASK.ACT_REFRESH_TASK_LIST)
            this.$util.tip.notification_success(
              this.$t(this.lang + 'delete_success')
            )
          })
      }
    },
    data () {
      return {
        lang: 'task.taskOperatePart.',
        renamePanelState: false,
        deletePanelState: false,
        formName: 'renameTask',
        form: {
          taskId: this.taskId,
          taskName: this.taskName
        },
        rules: {
          taskName: this.$define.RULES.COMMON_NAME
        }
      }
    }
  }
</script>

<style scoped>
  .task-operate-part {
  }
</style>