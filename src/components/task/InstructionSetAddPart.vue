<template>
  <div class="instruction-set-add-part">
    <div class="instruction-set-add-button"
         @click="create_instruction_set_panel_state = true">
      <i class="el-icon-plus"></i> {{$t(lang + 'add')}}
    </div>
    <el-dialog
        :title="$t(lang + 'add')"
        :visible.sync="create_instruction_set_panel_state"
        width="50%">
      <div>
        <el-input :placeholder="$t(lang + 'instruction_set_key_placeholder')" class="dialog-field"
                  v-model="create_instruction_set_text_key">
          <template slot="prepend">{{$t(lang + 'instruction_set_key')}}</template>
        </el-input>
        <el-input :placeholder="$t(lang +  'instruction_set_remark_placeholder')" class="dialog-field"
                  v-model="create_instruction_set_text_name">
          <template slot="prepend">{{$t(lang + 'instruction_set_remark')}}</template>
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="create_instruction_set_panel_state = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="create_instruction_set">{{$t('common.create')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button.vue'

  export default {
    components: {ElButton},
    name: 'InstructionSetAddPart',
    methods: {
      create_instruction_set () {

      }
    },
    data () {
      return {
        lang: 'task.instructionSetAddPart.',
        create_instruction_set_panel_state: false,
        create_instruction_set_text_key: '',
        create_instruction_set_text_name: ''
      }
    }
  }
</script>

<style scoped>
  .instruction-set-add-part {
    text-align: center;
  }

  .instruction-set-add-button {
    padding: 14px;
    cursor: pointer;
    color: #578fbb;
  }

  .instruction-set-add-button:hover {
    color: #0e58bb;
  }
</style>