<template>
  <div class="data-set-list-part">
    <div class="data-set-item"
         v-for="(dataSetValue, dataSetKey) in $store.getters[$NS.TASK.GET_CURRENT_EDIT_TASK].dataSet"
         :key="dataSetKey"
         @click="$store.commit($NS.TASK.MUT_SET_CURRENT_DATA_SET_KEY, dataSetKey)"
         :class="dataSetKey === $store.getters[$NS.TASK.GET_CURRENT_DATA_SET_KEY] ? 'data-set-item-selected' : ''">
      {{dataSetKey}}
      <!--<div class="instruction-set-operation">-->
      <!--<instruction-set-operate-part></instruction-set-operate-part>-->
      <!--</div>-->
    </div>
    <data-set-add-part></data-set-add-part>
  </div>
</template>

<script>
  import DataSetAddPart from './DataSetAddPart.vue'

  export default {
    components: {DataSetAddPart},
    name: 'DataSetListPart',
    mounted () {
      // 让第一个默认选中
      let keys = Object.keys(this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].dataSet)
      if (keys.length > 0) {
        this.$store.commit(this.$NS.TASK.MUT_SET_CURRENT_DATA_SET_KEY, keys[0])
      }
    },
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .data-set-list-part {

  }

  .data-set-list-part {
    overflow-y: scroll;
    position: relative;
  }

  .data-set-item {
    padding: 14px 18px;
    border-bottom: 1px solid rgba(200, 200, 200, 0.2);
    cursor: pointer;
    position: relative;
  }

  .data-set-item-selected {
    background: #d9eeff;
  }
</style>