<template>
  <div class="instruction-set-operate-part">
    <el-tooltip class="item" effect="dark" :content="$t(lang + 'rename')" placement="top">
      <el-button icon="el-icon-edit" @click="renamePanelState = true" size="mini" circle></el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" :content="$t(lang + 'delete')" placement="top">
      <el-button icon="el-icon-delete" @click="deletePanelState = true" size="mini"
                 circle></el-button>
    </el-tooltip>
    <!--修改指令集名称的对话框-->
    <el-dialog
        :title="$t(lang + 'rename')"
        :visible.sync="renamePanelState"
        class="form-dialog">
      <el-form :ref="formName" :model="form" :rules="rules" label-width="140px">
        <el-form-item :label="$t(lang + 'instruction_set_name')" prop="instructionSetName" class="dialog-field">
          <el-input :placeholder="$t(lang + 'instruction_set_name_placeholder')"
                    v-model="form.instructionSetName">
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="renamePanelState = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="renameInstructionSet">{{$t('common.modify')}}</el-button>
      </span>
    </el-dialog>
    <!--修改指令集名称的对话框 结束-->
    <!--删除指令集的确认对话框-->
    <el-dialog
        :title="$t(lang + 'delete')"
        :visible.sync="deletePanelState"
        width="30%">
      <span>{{$t(lang + 'delete_tip')}}【 {{instructionSetName}} 】</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deletePanelState = false">{{$t('common.cancel')}}</el-button>
        <el-button type="danger" @click="deleteInstructionSet">{{$t('common.delete')}}</el-button>
      </span>
    </el-dialog>
    <!--删除指令集的确认对话框 结束-->

  </div>
</template>

<script>

  export default {
    name: 'InstructionSetOperatePart',
    props: ['instructionSetKey', 'instructionSetName'],
    methods: {
      renameInstructionSet () {
        this.$refs[this.formName].validate((valid) => {
          if (valid) {
            this.$axios.post(this.$define.URL.TASK.INSTRUCTION.RENAME, this.form)
              .then(() => {
                let self = this
                this.$store.dispatch(this.$NS.TASK.ACT_REFRESH_INSTRUCTION_SET_LIST, {
                  success () {
                    self.$store.commit(self.$NS.TASK.MUT_SET_CURRENT_INSTRUCTION_SET_KEY, self.instructionSetKey)
                  }
                })
                this.$util.tip.notification_success(this.$t(this.lang + 'rename_success'))
              })
          }
        })
      },
      deleteInstructionSet () {
        this.$axios.delete(this.$define.URL.TASK.INSTRUCTION.DELETE, {
          data: this.form
        })
          .then(() => {
            this.$store.dispatch(this.$NS.TASK.ACT_REFRESH_INSTRUCTION_SET_LIST)
            this.$util.tip.notification_success(this.$t(this.lang + 'delete_success'))
          })
      }
    },
    data () {
      return {
        lang: 'task.instructionSetOperatePart.',
        renamePanelState: false,
        deletePanelState: false,
        formName: 'rekeyInstructionSet',
        form: {
          instructionSetKey: this.instructionSetKey,
          instructionSetName: this.instructionSetName
        },
        rules: {
          instructionSetName: this.$define.RULES.COMMON_KEY
        }
      }
    }
  }
</script>

<style scoped>
  .instruction-set-operate-part {
  }
</style>