<template>
  <div class="task-list-part">
    <div class="task-list-item" v-if="$store.getters[$NS.TASK.GET_CURRENT_STATE] === $NS.TASK.MUT_SET_STATE_NORMAL"
         v-for="task in $store.getters[$NS.TASK.GET_TASK_LIST]" :key="task.key"
         @click="onSelectTask(task)">
      <div class="task-list-item-name">
        {{task.taskName}} <span class="task-list-item-key">[ {{$t('common.task_key')}}: {{task.taskKey}} ]</span>
      </div>
      <div class="task-list-item-date">
        {{$t(lang + 'task_create_time')}}: {{$util.date.unixTimeStampToLocalStr(task.createTime, $t('common.dateStr'))}}
      </div>
    </div>
    <div class="task-list-tip" v-if="$store.getters[$NS.TASK.GET_CURRENT_STATE] !== $NS.TASK.MUT_SET_STATE_NORMAL">
      {{$t(lang + stateTipRelation[$store.getters[$NS.TASK.GET_CURRENT_STATE]])}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TaskListPart',
    methods: {
      onSelectTask (task) {
        this.$store.commit(this.$NS.TASK.MUT_SET_CURRENT_EDIT_TASK, task)
      }
    },
    data () {
      return {
        lang: 'task.taskListPart.',
        stateTipRelation: {
          [this.$NS.TASK.MUT_SET_STATE_EMPTY]: 'task_list_tip_empty',
          [this.$NS.TASK.MUT_SET_STATE_FAILED]: 'task_list_tip_failed',
          [this.$NS.TASK.MUT_SET_STATE_PULLING]: 'task_list_tip_pulling'
        }
      }
    }
  }
</script>

<style scoped>
  .task-list-part {
    margin-top: 20px;
    border-top: 1px solid silver;
    border-image: linear-gradient(to right, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0) 90%) 30 30 30;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
  }

  .task-list-item {
    background: rgba(200, 200, 200, 0.1);
    margin-bottom: 2px;
    width: 80%;
    display: flex;
    padding: 20px 18px;
    cursor: pointer;
    flex-direction: column;
    text-align: left;
  }

  .task-list-item:hover {
    background: rgba(200, 200, 200, 0.4);
  }

  .task-list-item-key {
    color: rgba(100, 100, 100, 0.6);
  }

  .task-list-item-date {
    margin-top: 4px;
    color: rgba(100, 100, 100, 0.5);
  }

  .task-list-tip {
    font-size: 30px;
    margin-top: 100px;
    color: rgba(100, 100, 100, 0.5);
  }

</style>