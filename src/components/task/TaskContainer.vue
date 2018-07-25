<template>
  <div class="task-container">
    <div class="task-selector-part" v-if="!$store.getters[$NS.TASK.GET_HAVE_EDITING_TASK]">
      <div class="task-selector-main-title">
        {{$t(lang + 'main_title')}}
      </div>
      <div class="task-selector-sub-title">
        {{$t(lang + 'sub_title1')}}<br>{{$t(lang + 'sub_title2')}}
      </div>
      <task-create-part></task-create-part>
      <task-list-part class="task-list-part"></task-list-part>
    </div>
    <task-edit-part class="task-edit-part" v-if="$store.getters[$NS.TASK.GET_HAVE_EDITING_TASK]"></task-edit-part>
  </div>
</template>

<script>
  import TaskCreatePart from './TaskCreatePart.vue'
  import TaskListPart from './TaskListPart.vue'
  import TaskEditPart from './TaskEditPart.vue'

  export default {
    name: 'TaskSelectorContainer',
    components: {
      TaskEditPart,
      TaskListPart,
      TaskCreatePart
    },
    mounted () {
      this.$store.dispatch(this.$NS.TASK.ACT_REFRESH_TASK_LIST)
    },
    computed: {
      lrcState () {
        return this.$store.state.lrc.state
      }
    },
    watch: {
      lrcState (state) {
        // LRC重新连接成功的时候自动刷新任务列表
        if (state === this.$NS.LRC.MUT_SET_STATE_CONNECTED) {
          this.$store.dispatch(this.$NS.TASK.ACT_REFRESH_TASK_LIST)
        }
      }
    },
    data () {
      return {
        lang: 'task.taskSelectorContainer.'
      }
    }
  }
</script>

<style scoped>
  .task-container {
    display: flex;
    flex-direction: column;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 50%);
    position: relative;
  }

  .task-selector-part {
    text-align: center;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .task-selector-main-title {
    font-size: 40px;
    text-align: center;
    margin-top: 40px;
  }

  .task-selector-sub-title {
    text-align: center;
    font-size: 16px;
    color: rgba(80, 80, 80, 0.8);
    margin-top: 14px;
    margin-bottom: 10px;
  }

  .task-list-part {
    flex-grow: 1;
  }

  .task-edit-part {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>