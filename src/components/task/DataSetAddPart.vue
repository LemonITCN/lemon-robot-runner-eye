<template>
  <div class="data-set-add-part">
    <div class="data-set-add-button"
         @click="create_data_set_panel_state = true">
      <i class="el-icon-plus"></i> {{$t(lang + 'add')}}
    </div>
    <el-dialog
        :title="$t(lang + 'add')"
        :visible.sync="create_data_set_panel_state"
        width="50%">
      <div>
        <el-input :placeholder="$t(lang + 'data_set_key_placeholder')" class="dialog-field"
                  v-model="create_data_set_text_key">
          <template slot="prepend">{{$t(lang + 'data_set_key')}}</template>
        </el-input>
        <el-input :placeholder="$t(lang + 'data_set_remark_placeholder')" class="dialog-field"
                  v-model="create_data_set_text_remark">
          <template slot="prepend">{{$t(lang + 'data_set_remark')}}</template>
        </el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="create_data_set_panel_state = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="create_data_set">{{$t('common.create')}}</el-button>
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
      create_data_set () {
        this.$store.commit(this.$NS.TASK.MUT_PUT_EDITING_TASK_DATA_SET, {
          key: this.create_data_set_text_key,
          dataSet: new DataSet(this.create_data_set_text_remark),
        })
        this.create_data_set_panel_state = false
        this.$store.dispatch(this.$NS.TASK.ACT_SAVE_CURRENT_EDITING_TASK)
        this.$store.commit(this.$NS.TASK.MUT_SET_CURRENT_DATA_SET_KEY, this.create_data_set_text_key)
      }
    },
    data () {
      return {
        lang: 'task.dataSetAddPart.',
        create_data_set_panel_state: false,
        create_data_set_text_key: '',
        create_data_set_text_remark: ''
      }
    }
  }
</script>

<style scoped>
  .data-set-add-part {
    text-align: center;
  }

  .data-set-add-button {
    padding: 14px;
    cursor: pointer;
    color: #578fbb;
  }

  .data-set-add-button:hover {
    color: #0e58bb;
  }
</style>
