<template>
  <div class="parameter-operate-part" @click.stop>
    <div class="data-set-property-operate-button">
      <el-button size="mini" @click="modifyPanelState = true">{{$t('common.modify')}}</el-button>
      <el-button size="mini" type="primary" @click="modifyPanelState = true" plain>{{$t(lang + 'template')}}</el-button>
      <el-button size="mini" @click="deletePanelState = true" type="danger">{{$t('common.delete')}}</el-button>
    </div>
    <!--修改数据集属性信息对话框-->
    <el-dialog
        @open="handleOpen"
        :title="$t(lang + 'modify')"
        :visible.sync="modifyPanelState"
        width="660px">
      <el-form :ref="formName" :rules="rules" :model="parameter" label-width="140px">
        <el-form-item :label="$t(lang + 'parameter_name')" prop="name" class="dialog-field">
          <el-input v-model="parameter.name"
                    :placeholder="$t(lang + 'parameter_name_placeholder')"></el-input>
        </el-form-item>
        <el-form-item :label="$t(lang + 'parameter_is_binary')">
          <el-switch v-model="parameter.isBinary"></el-switch>
        </el-form-item>
        <el-form-item :label="$t(lang + 'parameter_is_required')">
          <el-switch v-model="parameter.isRequired"></el-switch>
        </el-form-item>
        <el-form-item :label="$t(lang + 'parameter_remark')" class="dialog-field">
          <el-input type="textarea" v-model="parameter.remark" rows="6"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="modifyPanelState = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="editParameter">{{$t('common.modify')}}</el-button>
      </span>
    </el-dialog>
    <!--修改数据集属性对话框  结束-->
    <!--删除数据集的确认对话框-->
    <el-dialog
        :title="$t(lang + 'delete')"
        :visible.sync="deletePanelState"
        width="30%">
      <span>{{$t(lang + 'delete_tip')}}【 {{$store.getters[$NS.TASK.GET_CURRENT_EDIT_TASK].parameters[index].name}} 】</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deletePanelState = false">{{$t('common.cancel')}}</el-button>
        <el-button type="danger" @click="deleteParameter">{{$t('common.delete')}}</el-button>
      </span>
    </el-dialog>
    <!--删除数据集的确认对话框 结束-->
  </div>
</template>

<script>
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button.vue'
  import Vue from 'vue'

  export default {
    components: {ElButton},
    name: 'ParameterOperatePart',
    props: ['index'],
    methods: {
      handleOpen () {
        this.parameter = Object.assign({}, this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].parameters[this.index])
      },
      editParameter () {
        this.$refs[this.formName].validate((valid) => {
          if (valid) {
            let parameters = this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].parameters
            let containCount = this.$util.array.countWithFiledValue(parameters, 'name', this.parameter.name, [this.index])
            if (containCount > 0) {
              this.$util.tip.notification_error(this.$t(this.lang + 'parameter_already_exists'))
              return
            }
            Vue.set(parameters, this.index, this.parameter)
            this.$store.dispatch(this.$NS.TASK.ACT_SAVE_CURRENT_EDITING_TASK)
            this.modifyPanelState = false
          }
        })
      },
      deleteParameter () {
        Vue.delete(this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].parameters, this.index)
        this.$store.dispatch(this.$NS.TASK.ACT_SAVE_CURRENT_EDITING_TASK)
        this.deletePanelState = false
      }
    },
    data () {
      return {
        lang: 'task.parameterOperatePart.',
        parameter: {},
        formName: 'parameter',
        rules: {
          name: this.$define.RULES.COMMON_KEY
        },
        modifyPanelState: false,
        deletePanelState: false,
      }
    }
  }
</script>

<style scoped>
  .parameter-operate-part {
    overflow-y: scroll;
  }
</style>
