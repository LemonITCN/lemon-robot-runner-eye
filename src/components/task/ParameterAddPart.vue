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
      <el-form :ref="formName" :rules="rules" :model="dataSetProperty" label-width="140px">
        <el-form-item :label="$t(lang + 'data_set_property_key')" prop="key" class="dialog-field">
          <el-input v-model="dataSetProperty.key"
                    :placeholder="$t(lang + 'data_set_property_key_placeholder')"></el-input>
        </el-form-item>
        <el-form-item :label="$t(lang + 'data_set_property_type')" class="dialog-field">
          <el-select v-model="dataSetProperty.type" style="width: 480px">
            <el-option
                v-for="item in $define.OPTIONS.DATA_SET_PROPERTY_TYPE"
                :key="item.value"
                :label="item.name"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t(lang + 'data_set_property_remark')" prop="desc" class="dialog-field">
          <el-input type="textarea" v-model="dataSetProperty.remark" rows="6"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="createPanelState = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="createDataSetProperty">{{$t('common.create')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button.vue'
  import DataSetProperty from '../../model/DataSetProperty'

  export default {
    components: {ElButton},
    name: 'ParameterAddPart',
    methods: {
      createDataSetProperty () {
        this.$refs[this.formName].validate((valid) => {
          if (valid) {
            let properties = this.$store.getters[this.$NS.TASK.GET_CURRENT_DATA_SET].properties
            if (this.$util.array.countWithFiledValue(properties, 'key', this.dataSetProperty.key) > 0) {
              this.$util.tip.notification_error(this.$t(this.lang + 'data_set_property_already_exists'))
              return
            }
            properties.push(this.dataSetProperty)
            this.$store.dispatch(this.$NS.TASK.ACT_SAVE_CURRENT_EDITING_TASK)
            this.createPanelState = false
            this.dataSetProperty = new DataSetProperty()
          }
        })
      }
    },
    data () {
      return {
        lang: 'task.parameterAddPart.',
        dataSetProperty: new DataSetProperty(),
        formName: 'dataSetProperty',
        rules: {
          key: this.$define.RULES.COMMON_KEY
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
