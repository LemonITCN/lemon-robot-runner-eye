<template>
  <div class="parameter-part">
    <el-table
        stripe
        v-loading="showParameterListLoading"
        :data="$store.getters[$NS.TASK.GET_CURRENT_TASK_PARAMETER_DEF]">
      <el-table-column
          :label="$t(lang + 'column_name')"
          width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
          :label="$t(lang + 'column_is_binary')"
          width="130">
        <template slot-scope="scope">
          <el-switch
              active-color="#13ce66"
              v-model="scope.row.isBinary"
              disabled>
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
          :label="$t(lang + 'column_is_required')" width="130">
        <template slot-scope="scope">
          <el-switch
              active-color="#13ce66"
              v-model="scope.row.isRequired"
              disabled>
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
          :label="$t(lang + 'column_introduce')">
        <template slot-scope="scope">
          {{scope.row.paramIntroduce}}
        </template>
      </el-table-column>
      <el-table-column :label="$t(lang + 'column_operate')" width="300">
        <template slot-scope="scope">
          <parameter-operate-part :index="scope.$index"></parameter-operate-part>
        </template>
      </el-table-column>
    </el-table>
    <parameter-add-part></parameter-add-part>
  </div>
</template>

<script>
  import ParameterAddPart from './ParameterAddPart.vue'
  import ParameterOperatePart from './ParameterOperatePart.vue'

  export default {
    components: {
      ParameterOperatePart,
      ParameterAddPart
    },
    name: 'ParameterPart',
    mounted() {
      this.showParameterListLoading = true
      let self = this
      this.$store.dispatch(this.$NS.TASK.ACT_REFRESH_PARAMETER_DEF, {
        success() {
          self.showParameterListLoading = false
        },
        failed() {
          self.showParameterListLoading = false
        }
      })
    },
    data() {
      return {
        lang: 'task.parameterPart.',
        showParameterListLoading: false
      }
    }
  }
</script>

<style scoped>
  .parameter-part {
    overflow-y: scroll;
  }
</style>