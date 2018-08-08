<template>
  <div class="data-set-part">
    <data-set-list-part class="data-set-list"></data-set-list-part>
  </div>
</template>

<script>
  import DataSetListPart from './DataSetListPart.vue'

  export default {
    components: {DataSetListPart},
    name: 'DataSetPart'
  }
</script>

<style scoped>
  .data-set-part {
    display: flex;
  }

  .data-set-list {
    width: 220px;
    border-right: 6px solid #669933;
  }
</style>