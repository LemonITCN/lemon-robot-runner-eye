<template>
  <div class="data-set-part">
    <data-set-list-part class="data-set-list"></data-set-list-part>
    <data-set-property-list-part class="data-set-property-list-part"></data-set-property-list-part>
  </div>
</template>

<script>
  import DataSetListPart from './DataSetListPart.vue'
  import DataSetPropertyListPart from './DataSetPropertyListPart.vue'

  export default {
    components: {
      DataSetPropertyListPart,
      DataSetListPart
    },
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

  .data-set-property-list-part {
    flex-grow: 1;
  }
</style>