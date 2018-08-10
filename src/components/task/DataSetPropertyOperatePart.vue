<template>
  <div class="data-set-property-operate-part" @click.stop>
    <div class="data-set-property-operate-button">
      <el-button size="mini" @click="modifyPanelState = true">{{$t('common.modify')}}</el-button>
      <el-button size="mini" @click="deletePanelState = true" type="danger">{{$t('common.delete')}}</el-button>
    </div>
    <!--修改数据集属性信息对话框-->
    <el-dialog
        :title="$t(lang + 'modify')"
        :visible.sync="modifyPanelState"
        width="660px">
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
        <el-button @click="modifyPanelState = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="createDataSetProperty">{{$t('common.modify')}}</el-button>
      </span>
    </el-dialog>
    <!--修改数据集属性对话框  结束-->
    <!--删除数据集的确认对话框-->
    <el-dialog
        :title="$t(lang + 'delete')"
        :visible.sync="deletePanelState"
        width="30%">
      <span>{{$t(lang + 'delete_tip')}}【 {{$store.getters[$NS.TASK.GET_CURRENT_DATA_SET].properties[index].key}} 】</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deletePanelState = false">{{$t('common.cancel')}}</el-button>
        <el-button type="danger" @click="deleteDataSetProperty">{{$t('common.delete')}}</el-button>
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
    methods: {
      createDataSetProperty () {
        this.$refs[this.formName].validate((valid) => {
          if (valid) {
            let properties = this.$store.getters[this.$NS.TASK.GET_CURRENT_DATA_SET].properties
            let containCount = this.$util.array.countWithFiledValue(properties, 'key', this.dataSetProperty.key, [this.index])
            if (containCount > 0) {
              this.$util.tip.notification_error(this.$t(this.lang + 'data_set_property_already_exists'))
              return
            }
            Vue.set(properties, this.index, this.dataSetProperty)
            this.$store.dispatch(this.$NS.TASK.ACT_SAVE_CURRENT_EDITING_TASK)
            this.modifyPanelState = false
          }
        })
      },
      deleteDataSetProperty () {
        Vue.delete(this.$store.getters[this.$NS.TASK.GET_CURRENT_DATA_SET].properties, this.index)
        this.$store.dispatch(this.$NS.TASK.ACT_SAVE_CURRENT_EDITING_TASK)
      }
    },
    data () {
      return {
        lang: 'task.dataSetPropertyOperatePart.',
        dataSetProperty: Object.assign({}, this.$store.getters[this.$NS.TASK.GET_CURRENT_DATA_SET].properties[this.index]),
        formName: 'dataSetProperty',
        rules: {
          key: this.$define.RULES.COMMON_KEY
        },
        modifyPanelState: false,
        deletePanelState: false,
      }
    }
  }
</script>

<style scoped>
  .data-set-property-operate-part {
  }
</style>
