<template>
  <div class="data-set-property-list-part">
    <el-table
        :data="$store.getters[$NS.TASK.GET_CURRENT_DATA_SET].properties">
      <el-table-column
          label="DATA_SET_KEY"
          width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="DATA_SET_TYPE"
          width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
          label="DATA_SET_REMARK">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>


    <div
        v-for="dataSetProperty in $store.getters[$NS.TASK.GET_CURRENT_DATA_SET].properties"
        :key="dataSetProperty.key"
        class="data-set-property-item">
      {{dataSetKey}}
      <!--<div class="data-set-operation"-->
      <!--v-if="dataSetKey === $store.getters[$NS.TASK.GET_CURRENT_DATA_SET_KEY]">-->
      <!--<data-set-operate-part></data-set-operate-part>-->
      <!--</div>-->
    </div>
    <!--<data-set-add-part></data-set-add-part>-->
  </div>
</template>

<script>
  import DataSetAddPart from './DataSetAddPart.vue'
  import DataSetOperatePart from './DataSetOperatePart.vue'

  export default {
    components: {
      DataSetOperatePart,
      DataSetAddPart
    },
    name: 'DataSetPropertyListPart',
    mounted () {
      // 让第一个默认选中
      let keys = Object.keys(this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].dataSet)
      if (keys.length > 0) {
        this.$store.commit(this.$NS.TASK.MUT_SET_CURRENT_DATA_SET_KEY, keys[0])
      }
    },
    methods: {
      handleDataSetClick (dataSetKey) {
        this.$store.commit(this.$NS.TASK.MUT_SET_CURRENT_DATA_SET_KEY, dataSetKey)
      }
    },
    data () {
      return {
        lang: 'task.dataSetPropertyListPart.'
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