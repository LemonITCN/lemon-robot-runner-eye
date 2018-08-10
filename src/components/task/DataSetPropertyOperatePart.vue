<template>
  <div class="data-set-property-operate-part" @click.stop>
    <div class="data-set-property-operate-button">
      <el-button size="mini" @click="modify_panel_state = true">{{$t('common.modify')}}</el-button>
      <el-button size="mini" @click="delete_panel_state = true" type="danger">{{$t('common.delete')}}</el-button>
    </div>
    <!--修改数据集属性信息对话框-->
    <el-dialog
        :title="$t(lang + 'modify')"
        :visible.sync="modify_panel_state"
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
        <el-button @click="modify_panel_state = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="create_data_set_property">{{$t('common.modify')}}</el-button>
      </span>
    </el-dialog>
    <!--修改数据集属性对话框  结束-->
    <!--删除数据集的确认对话框-->
    <el-dialog
        :title="$t(lang + 'delete')"
        :visible.sync="delete_panel_state"
        width="30%">
      <span>{{$t(lang + 'delete_tip')}}【 {{$store.getters[$NS.TASK.GET_CURRENT_DATA_SET].properties[index].key}} 】</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delete_panel_state = false">{{$t('common.cancel')}}</el-button>
        <el-button type="danger" @click="delete_data_set_property">{{$t('common.delete')}}</el-button>
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
    name: 'DataSetPropertyOperatePart',
    props: ['index'],
    mounted () {
      this.data_set_property = Object.assign({}, this.$store.getters[this.$NS.TASK.GET_CURRENT_DATA_SET].properties[this.index])
    },
    methods: {
      create_data_set_property () {
        this.$refs[this.form_name].validate((valid) => {
          if (valid) {
            let properties = this.$store.getters[this.$NS.TASK.GET_CURRENT_DATA_SET].properties
            let containCount = this.$util.array.countWithFiledValue(properties, 'key', this.data_set_property.key, [this.index])
            if (containCount > 0) {
              this.$util.tip.notification_error(this.$t(this.lang + 'data_set_property_already_exists'))
              return
            }
            Vue.set(properties, this.index, this.data_set_property)
            this.$store.dispatch(this.$NS.TASK.ACT_SAVE_CURRENT_EDITING_TASK)
            this.modify_panel_state = false
          }
        })
      },
      delete_data_set_property () {
        Vue.delete(this.$store.getters[this.$NS.TASK.GET_CURRENT_DATA_SET].properties, this.index)
        this.$store.dispatch(this.$NS.TASK.ACT_SAVE_CURRENT_EDITING_TASK)
      }
    },
    data () {
      return {
        lang: 'task.dataSetPropertyOperatePart.',
        data_set_property: {},
        form_name: 'data_set_property',
        rules: {
          key: this.$define.RULES.COMMON_KEY
        },
        modify_panel_state: false,
        delete_panel_state: false,
      }
    }
  }
</script>

<style scoped>
  .data-set-property-operate-part {
  }
</style>
