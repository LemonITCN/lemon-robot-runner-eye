<template>
  <div class="system-bar-module">
    <user-module class="user-module"/>
    <system-state-module/>
    <task-list-module class="task-list-module"/>
    <task-create-module/>
  </div>
</template>

<script>
import UserModule from '../bar/UserModule'
import TaskListModule from '../bar/TaskListModule'
import SystemStateModule from '../bar/SystemStateModule'
import TaskCreateModule from '../bar/TaskCreateModule'
export default {
  name: 'SystemBarModule',
  components: {SystemStateModule, TaskListModule, UserModule, TaskCreateModule},
  methods: {
  },
  data () {
    return {
      lang: 'main.system.system_bar'
    }
  }
}
</script>

<style scoped>
  .system-bar-module {
    display: flex;
    flex-direction: column;
  }

  .task-list-module {
    flex-grow: 1;
  }

</style>
