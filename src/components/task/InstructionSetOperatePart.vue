<template>
  <div class="instruction-set-operate-part">
    <el-tooltip class="item" effect="dark" :content="$t(lang + 'rekey')" placement="top">
      <el-button icon="el-icon-edit" @click="rekey_instruction_set_panel_state = true" size="mini" circle></el-button>
    </el-tooltip>
    <el-tooltip class="item" effect="dark" :content="$t(lang + 'delete')" placement="top">
      <el-button icon="el-icon-delete" size="mini" circle></el-button>
    </el-tooltip>
    <!--修改指令集名称的对话框-->
    <el-dialog
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
        <el-button type="primary" @click="rekey_instruction_set">{{$t('common.create')}}</el-button>
      </span>
    </el-dialog>
    <!--修改指令集名称的对话框 结束-->

  </div>
</template>

<script>

  export default {
    name: 'InstructionSetOperatePart',
    methods: {
      rekey_instruction_set () {

      }
    },
    data () {
      return {
        lang: 'task.instructionSetOperatePart.',
        rekey_instruction_set_panel_state: false,
        instruction_set_key: ''
      }
    }
  }
</script>

<style scoped>
  .instruction-set-operate-part {
  }
</style>