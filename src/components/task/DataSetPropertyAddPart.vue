<template>
  <div class="data-set-property-add-part">
    <div class="data-set-property-add-button"
         @click="create_data_set_property_panel_state = true">
      <i class="el-icon-plus"></i> {{$t(lang + 'add')}}
    </div>
    <el-dialog
        :title="$t(lang + 'add')"
        :visible.sync="create_data_set_property_panel_state"
        width="660px">
      <div>
        <el-form :ref="form_name" :rules="rules" :model="data_set_property" label-width="140px">
          <el-form-item :label="$t(lang + 'data_set_property_key')" prop="key" class="dialog-field">
            <el-input v-model="data_set_property.key"
                      :placeholder="$t(lang + 'data_set_property_key_placeholder')"></el-input>
          </el-form-item>
          <el-form-item :label="$t(lang + 'data_set_property_type')" class="dialog-field">
            <el-select v-model="data_set_property.type" style="width: 480px">
              <el-option
                  v-for="item in $define.OPTIONS.DATA_SET_PROPERTY_TYPE"
                  :key="item.value"
                  :label="item.name"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :label="$t(lang + 'data_set_property_remark')" prop="desc" class="dialog-field">
            <el-input type="textarea" v-model="data_set_property.remark" rows="6"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="create_data_set_property_panel_state = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="create_data_set_property">{{$t('common.create')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button.vue'
  import DataSetProperty from '../../model/DataSetProperty'

  export default {
    components: {ElButton},
    name: 'DataSetPropertyAddPart',
    methods: {
      create_data_set_property () {
        this.$refs[this.form_name].validate((valid) => {
          if (valid) {
            let properties = this.$store.getters[this.$NS.TASK.GET_CURRENT_DATA_SET].properties
            if (this.$util.array.countWithFiledValue(properties, 'key', this.data_set_property.key) > 0) {
              this.$util.tip.notification_error(this.$t(this.lang + 'data_set_property_already_exists'))
              return
            }
            properties.push(this.data_set_property)
            this.$store.dispatch(this.$NS.TASK.ACT_SAVE_CURRENT_EDITING_TASK)
            this.data_set_property = new DataSetProperty()
            this.create_data_set_property_panel_state = false
          }
        })
      }
    },
    data () {
      return {
        lang: 'task.dataSetPropertyAddPart.',
        data_set_property: new DataSetProperty(),
        form_name: 'data_set_property',
        rules: {
          key: this.$define.RULES.COMMON_KEY
        },
        create_data_set_property_panel_state: false,
      }
    }
  }
</script>

<style scoped>
  .data-set-property-add-part {
    text-align: center;
  }

  .data-set-property-add-button {
    padding: 14px;
    cursor: pointer;
    color: #578fbb;
  }

  .data-set-property-add-button:hover {
    color: #0e58bb;
  }
</style>
