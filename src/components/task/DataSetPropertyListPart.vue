<template>
  <div class="data-set-property-list-part">
    <el-table
        stripe
        :data="$store.getters[$NS.TASK.GET_CURRENT_DATA_SET].properties">
      <el-table-column
          :label="$t(lang + 'column_data_set_key')"
          width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.key }}</span>
        </template>
      </el-table-column>
      <el-table-column
          :label="$t(lang + 'column_data_set_type')"
          width="180">
        <template slot-scope="scope">
          <el-tag size="medium">{{ typeNameMapping[scope.row.type] }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
          :label="$t(lang + 'column_data_set_remark')">
        <template slot-scope="scope">
          {{scope.row.remark}}
        </template>
      </el-table-column>
      <el-table-column :label="$t(lang + 'column_data_set_operate')" width="180">
        <template slot-scope="scope">
          <data-set-property-operate-part :index="scope.$index"></data-set-property-operate-part>
        </template>
      </el-table-column>
    </el-table>
    <data-set-property-add-part></data-set-property-add-part>
  </div>
</template>

<script>
  import DataSetAddPart from './DataSetAddPart.vue'
  import DataSetOperatePart from './DataSetOperatePart.vue'
  import DataSetPropertyAddPart from './DataSetPropertyAddPart.vue'
  import DataSetPropertyOperatePart from './DataSetPropertyOperatePart.vue'

  export default {
    components: {
      DataSetPropertyOperatePart,
      DataSetPropertyAddPart,
      DataSetOperatePart,
      DataSetAddPart
    },
    name: 'DataSetPropertyListPart',
    mounted () {
      this.$define.OPTIONS.DATA_SET_PROPERTY_TYPE.forEach((item) => {
        this.typeNameMapping[item.value] = item.name
      })
    },
    methods: {
      handleDataSetClick (dataSetKey) {
        this.$store.commit(this.$NS.TASK.MUT_SET_CURRENT_DATA_SET_KEY, dataSetKey)
      }
    },
    data () {
      return {
        lang: 'task.dataSetPropertyListPart.',
        typeNameMapping: {}
      }
    }
  }
</script>

<style scoped>
  .data-set-property-list-part {
    overflow-y: scroll;
    position: relative;
  }

  .data-set-property-item {
    padding: 14px 18px;
    border-bottom: 1px solid rgba(200, 200, 200, 0.2);
    cursor: pointer;
    position: relative;
  }

  .data-set-operation {
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>