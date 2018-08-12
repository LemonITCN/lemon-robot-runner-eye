<template>
  <div class="data-set-add-part">
    <div class="list-end-add-button"
         @click="createPanelState = true">
      <i class="el-icon-plus"></i> {{$t(lang + 'add')}}
    </div>
    <el-dialog
        :title="$t(lang + 'add')"
        :visible.sync="createPanelState"
        class="form-dialog">
      <el-form :ref="formName" :model="dataSet" :rules="rules" label-width="140px">
        <el-form-item :label="$t(lang + 'data_set_key')" prop="key" class="dialog-field">
          <el-input :placeholder="$t(lang + 'data_set_key_placeholder')"
                    v-model="dataSet.key"></el-input>
        </el-form-item>
        <el-form-item :label="$t(lang + 'data_set_remark')">
          <el-input
              type="textarea"
              rows="6"
              :placeholder="$t(lang + 'data_set_remark_placeholder')"
              class="dialog-field"
              v-model="dataSet.model.remark">
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="createPanelState = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="createDataSet">{{$t('common.create')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button.vue'
  import DataSet from '../../model/DataSet'

  export default {
    components: {ElButton},
    name: 'DataSetAddPart',
    methods: {
      createDataSet () {
        this.$refs[this.formName].validate((valid) => {
          if (valid) {
            this.$store.commit(this.$NS.TASK.MUT_PUT_EDITING_TASK_DATA_SET, {
              key: this.dataSet.key,
              dataSet: this.dataSet.model,
            })
            this.createPanelState = false
            this.$store.dispatch(this.$NS.TASK.ACT_SAVE_CURRENT_EDITING_TASK)
            this.$store.commit(this.$NS.TASK.MUT_SET_CURRENT_DATA_SET_KEY, this.dataSet.key)
          }
        })
      }
    },
    data () {
      return {
        lang: 'task.dataSetAddPart.',
        formName: 'dataSet',
        createPanelState: false,
        dataSet: {
          key: '',
          model: new DataSet(),
        },
        rules: {
          key: this.$define.RULES.COMMON_KEY
        }
      }
    }
  }
</script>

<style scoped>
  .data-set-add-part {
    text-align: center;
  }
</style>
