<template>
  <div class="control-buttons">
    <!--<el-button type="success" size="small" icon="el-icon-caret-right">{{$t(lang + '.run')}}</el-button>-->
    <!--<el-button type="success" size="small" icon="el-icon-upload" plain>{{$t(lang + '.upload_to') + ' ' + $t('system.cloud_name')}}</el-button>-->
    <!--<el-button type="primary" size="small" icon="el-icon-star-on" plain>{{$t(lang + '.upload_to') + ' ' + $t('common.private_cloud')}}</el-button>-->
    <!--<el-button size="small" icon="el-icon-menu" plain>{{$t(lang + '.store')}}</el-button>-->
    <!--<el-button size="small" icon="el-icon-news" @click="onAddInstructionSetClick" plain>{{$t(lang + '.add_instruction_set')}}</el-button>-->
    <!--<el-button size="small" icon="el-icon-document" plain>{{$t(lang + '.add_data_set')}}</el-button>-->
    <!--添加数据的对话框 - 数据集、指令集通用 - 开始-->
    <el-dialog
      :title="$t(lang + '.' + data_add_dialog_label.title)"
      :visible.sync="data_add_dialog_visible"
      width="50%">
      <el-form :model="data_add_dialog_form" >
        <el-form-item :label="$t('common.please_input') + ' ' + $t('common.' + data_add_dialog_label.key) + ' : '">
          <el-input v-model="data_add_dialog_form.key"></el-input>
        </el-form-item>
        <el-form-item :label="$t('common.please_input') + ' ' + $t('common.' + data_add_dialog_label.name) + ' : '">
          <el-input v-model="data_add_dialog_form.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="data_add_dialog_visible = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="this[data_add_dialog_handler]">{{$t('common.create')}}</el-button>
      </span>
    </el-dialog>
    <!--添加数据的对话框 - 数据集、指令集通用 - 结束-->
  </div>
</template>

<script>
export default {
  name: 'ControlButtonsModule',
  methods: {
    // 添加指令集按钮被点击
    onAddInstructionSetClick () {
      this.data_add_dialog_visible = true
      this.data_add_dialog_label = {key: 'instruction_set_key', name: 'instruction_set_name', title: 'add_instruction_set'}
      this.data_add_dialog_handler = 'handleAddInstructionSet'
    },
    // 添加指令集操作过程
    handleAddInstructionSet () {
      console.log(JSON.stringify(this.data_add_dialog_form))
    }
  },
  data () {
    return {
      lang: 'main.content.control_buttons',
      data_add_dialog_visible: false,
      // 对话框中的标签文字
      data_add_dialog_label: {
        key: 'instruction_set_key',
        name: 'instruction_set_name',
        title: 'add_instruction_set'
      },
      data_add_dialog_handler: 'handleAddInstructionSet',
      data_add_dialog_form: {
        key: '',
        name: ''
      },
      data_add_dialog_rules: {
        key: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 2, max: 32, message: '长度在 2 到 32 个字符', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    data_add_dialog_visible: {
      handler (val, oldVal) {
        if (val) {
          // 打开对话框时候清空data_add_dialog_form对象
          this.data_add_dialog_form.key = ''
          this.data_add_dialog_form.name = ''
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>
