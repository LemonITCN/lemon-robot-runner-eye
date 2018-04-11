<template>
  <div class="system-bar-module">
    <user-module class="user-module"/>
    <system-state-module/>
    <task-list-module class="task-list-module"/>
  </div>
</template>

<script>
import UserModule from './UserModule'
import TaskListModule from './TaskListModule'
import SystemStateModule from './SystemStateModule'
export default {
  name: 'SystemBarModule',
  components: {SystemStateModule, TaskListModule, UserModule}
}
</script>

<style scoped>
.system-module {
  display: flex;
  flex-direction: column;
}
.user-module{
  height: 100px;
}
.task-list-module{
  flex-grow: 1;
}
</style>
