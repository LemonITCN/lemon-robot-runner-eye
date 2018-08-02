<template>
  <div class="instruction-set-operate-part">
    <el-tooltip class="item" effect="dark" :content="$t(lang + 'rekey')" placement="top">
      <el-button icon="el-icon-edit" @click="rekey_instruction_set_panel_state = true" size="mini" circle></el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" :content="$t(lang + 'delete')" placement="top">
      <el-button icon="el-icon-delete" @click="delete_instruction_set_panel_state = true" size="mini"
                 circle></el-button>
    </el-tooltip>
    <!--修改指令集名称的对话框-->
    <el-dialog
        @open="handle_open"
        :title="$t(lang + 'rekey')"
        :visible.sync="rekey_instruction_set_panel_state"
        width="50%">
      <div>
        <el-input :placeholder="$t(lang + 'instruction_set_key_placeholder')" class="dialog-field"
                  v-model="instruction_set_key">
          <template slot="prepend">{{$t(lang + 'instruction_set_key')}}</template>
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="rekey_instruction_set_panel_state = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="rekey_instruction_set">{{$t('common.modify')}}</el-button>
      </span>
    </el-dialog>
    <!--修改指令集名称的对话框 结束-->
    <!--删除指令集的确认对话框-->
    <el-dialog
        :title="$t(lang + 'delete')"
        :visible.sync="delete_instruction_set_panel_state"
        width="30%">
      <span>{{$t(lang + 'delete_tip')}}【 {{$store.getters[$NS.TASK.GET_CURRENT_INSTRUCTION_SET_KEY]}} 】</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delete_instruction_set_panel_state = false">{{$t('common.cancel')}}</el-button>
        <el-button type="danger" @click="delete_instruction_set">{{$t('common.delete')}}</el-button>
      </span>
    </el-dialog>
    <!--删除指令集的确认对话框 结束-->

  </div>
</template>

<script>

  export default {
    name: 'InstructionSetOperatePart',
    methods: {
      handle_open () {
        this.$util.log.info('hello')
        this.instruction_set_key = this.$store.getters[this.$NS.TASK.GET_CURRENT_INSTRUCTION_SET_KEY]
      },
      rekey_instruction_set () {
        this.$axios.post(this.$define.URL.TASK.INSTRUCTION.REKEY, {
          taskId: this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].taskId,
          instructionSetKey: this.$store.getters[this.$NS.TASK.GET_CURRENT_INSTRUCTION_SET_KEY],
          instructionSetKeyNew: this.instruction_set_key
        })
          .then(() => {
            let self = this
            this.$store.dispatch(this.$NS.TASK.ACT_REFRESH_INSTRUCTION_SET_LIST, {
              success () {
                self.$store.commit(self.$NS.TASK.MUT_SET_CURRENT_INSTRUCTION_SET_KEY, self.instruction_set_key)
              }
            })
            this.$util.tip.notification_success(this.$t(this.lang + 'rekey_success'))
          })
      },
      delete_instruction_set () {
        this.$axios.delete(this.$define.URL.TASK.INSTRUCTION.DELETE, {
          data: {
            taskId: this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].taskId,
            instructionSetKey: this.$store.getters[this.$NS.TASK.GET_CURRENT_INSTRUCTION_SET_KEY]
          }
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
        rekey_instruction_set_panel_state: false,
        delete_instruction_set_panel_state: false,
        instruction_set_key: ''
      }
    }
  }
</script>

<style scoped>
  .instruction-set-operate-part {
  }
</style>