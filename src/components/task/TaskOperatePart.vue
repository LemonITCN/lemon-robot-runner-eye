<template>
  <div class="task-operate-part" @click.stop>
    <el-tooltip class="item" effect="dark" :content="$t(lang + 'rename')" placement="top">
      <el-button icon="el-icon-edit" type="primary" @click.stop="show_rename_pane" circle></el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" :content="$t(lang + 'delete')" placement="top">
      <el-button icon="el-icon-delete" type="danger" @click.stop="delete_task_panel_state = true"
                 circle></el-button>
    </el-tooltip>
    <!--修改任务名称的对话框-->
    <el-dialog
        @open="handle_open"
        :title="$t(lang + 'rename')"
        :visible.sync="rename_task_panel_state"
        width="50%">
      <div>
        <el-input :placeholder="$t(lang + 'task_name_placeholder')" class="dialog-field"
                  v-model="task_name">
          <template slot="prepend">{{$t(lang + 'task_name')}}</template>
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="rename_task_panel_state = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="rename_task">{{$t('common.modify')}}</el-button>
      </span>
    </el-dialog>
    <!--修改任务名称的对话框 结束-->
    <!--删除任务的确认对话框-->
    <el-dialog
        :title="$t(lang + 'delete')"
        :visible.sync="delete_task_panel_state"
        width="30%">
      <span>{{$t(lang + 'delete_tip')}}【 {{taskName}} 】</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delete_task_panel_state = false">{{$t('common.cancel')}}</el-button>
        <el-button type="danger" @click="delete_task">{{$t('common.delete')}}</el-button>
      </span>
    </el-dialog>
    <!--删除任务的确认对话框 结束-->
  </div>
</template>

<script>
  export default {
    name: "TaskOperatePart",
    props: ['taskId', 'taskName'],
    methods: {
      handle_open() {
        this.task_name = this.taskName
      },
      show_rename_pane() {
        this.rename_task_panel_state = true
      },
      rename_task() {
        this.$axios.post(this.$define.URL.TASK.RENAME, {
          taskId: this.taskId,
          taskName: this.task_name
        })
          .then(() => {
            this.$store.dispatch(this.$NS.TASK.ACT_REFRESH_TASK_LIST)
            this.$util.tip.notification_success(this.$t(this.lang + 'rename_success'))
          })
      },
      delete_task() {
        this.$axios
          .delete(this.$define.URL.TASK.DELETE, {
            data: {
              taskId: this.taskId
            }
          })
          .then(() => {
            this.$store.dispatch(this.$NS.TASK.ACT_REFRESH_TASK_LIST);
            this.$util.tip.notification_success(
              this.$t(this.lang + "delete_success")
            );
          });
      }
    },
    data() {
      return {
        lang: "task.taskOperatePart.",
        rename_task_panel_state: false,
        delete_task_panel_state: false,
        task_name: ""
      };
    }
  };
</script>

<style scoped>
  .task-operate-part {
  }
</style>