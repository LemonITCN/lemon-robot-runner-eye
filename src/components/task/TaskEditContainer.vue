<template>
  <div class="task-container">
    <router-view name="slider" class="task-container-slider"/>
    <task-menu-part/>
    <router-view name="content" class="task-container-content"/>
  </div>
</template>

<script>
  import TaskMenuPart from './TaskMenuPart'

  export default {
    name: "TaskContainer",
    components: {TaskMenuPart}
  }
</script>

<style scoped>
  .task-container {
  }
</style>