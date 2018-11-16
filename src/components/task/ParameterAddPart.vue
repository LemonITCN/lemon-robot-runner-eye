<template>
  <div class="parameter-add-part">
    <div class="list-end-add-button"
         @click="createPanelState = true">
      <i class="el-icon-plus"></i> {{$t(lang + 'add')}}
    </div>
    <el-dialog
        :title="$t(lang + 'add')"
        :visible.sync="createPanelState"
        class="form-dialog">
      <el-form :ref="formName" :rules="rules" :model="parameter" label-width="140px">
        <el-form-item :label="$t(lang + 'parameter_name')" prop="name" class="dialog-field">
          <el-input v-model="parameter.name"
                    :placeholder="$t(lang + 'parameter_name_placeholder')"></el-input>
        </el-form-item>
        <el-form-item :label="$t(lang + 'parameter_is_binary')">
          <el-switch v-model="parameter.isBinary"></el-switch>
        </el-form-item>
        <el-form-item :label="$t(lang + 'parameter_regex')" prop="regex" class="dialog-field" v-show="!parameter.isBinary">
          <el-input v-model="parameter.regex"
                    :placeholder="$t(lang + 'parameter_regex_placeholder')"></el-input>
        </el-form-item>
        <el-form-item :label="$t(lang + 'parameter_is_required')">
          <el-switch v-model="parameter.isRequired"></el-switch>
        </el-form-item>
        <el-form-item :label="$t(lang + 'parameter_introduce')" prop="desc" class="dialog-field">
          <el-input type="textarea" v-model="parameter.paramIntroduce" rows="6"
                    :placeholder="$t(lang + 'parameter_introduce_placeholder')"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="createPanelState = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="createParameter">{{$t('common.create')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import ParameterCreate from '../../model/ParameterCreate'

  export default {
    name: 'ParameterAddPart',
    methods: {
      createParameter () {
        this.$refs[this.formName].validate((valid) => {
          if (valid) {
            let parameters = this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].parameters
            if (this.$util.array.countWithFiledValue(parameters, 'name', this.parameter.name) > 0) {
              this.$util.tip.notification_error(this.$t(this.lang + 'parameter_already_exists'))
              return
            }
            this.$util.log.info('Submit create parameter def: %O', this.parameter)
            let self = this
            this.$store.dispatch(this.$NS.TASK.ACT_CREATE_PARAMETER_DEF, {
              parameter: this.parameter,
              success () {
                self.createPanelState = false
                self.$util.tip.notification_success(self.$t(self.lang + 'tip_add_success'))
                self.parameter = new ParameterCreate(self.$store.getters[self.$NS.TASK.GET_CURRENT_EDIT_TASK].taskKey)
              }
            })
          }
        })
      }
    },
    data () {
      return {
        lang: 'task.parameterAddPart.',
        parameter: new ParameterCreate(this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].taskKey),
        formName: 'addParameter',
        rules: {
          name: this.$define.RULES.COMMON_KEY
        },
        createPanelState: false,
      }
    }
  }
</script>

<style scoped>
  .parameter-add-part {
    text-align: center;
  }

</style>
