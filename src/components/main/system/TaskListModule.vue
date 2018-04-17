<template>
    <div class="task-list-module">
      <el-menu
        default-active="local"
        class="task-list-menu"
        mode="horizontal"
        background-color="#333"
        @select="taskListTypeSelect"
        text-color="#888"
        active-text-color="#ffd04b">
        <el-menu-item index="local" class="task-list-menu">{{$t(lang + '.local')}}</el-menu-item>
        <el-menu-item index="lemon" class="task-list-menu">{{$t('system.cloud_name')}}</el-menu-item>
        <el-menu-item index="private" class="task-list-menu">{{$t('common.private_cloud')}}</el-menu-item>
      </el-menu>
      <!--任务列表-->
      <el-menu
        :default-active="this.global.repo.taskList.current.task.taskKey"
        @select="taskListSelect"
        class="task-list-content"
        background-color="#333"
        text-color="#777"
        active-text-color="#fff">
        <el-tooltip v-for="task in this.global.repo.taskList.current.list" v-bind:key="task.taskKey" class="item" effect="dark" v-bind:content="task.taskKey" placement="right">
          <el-menu-item v-bind:index="task.taskKey">
            <i class="el-icon-star-on"></i>
            <span slot="title">{{task.taskName}}</span>
          </el-menu-item>
        </el-tooltip>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'TaskListModule',
  data () {
    return {
      lang: 'main.system.task_list'
    }
  },
  methods: {
    taskListTypeSelect (key, keyPath) {
      console.log('change task list type to ：' + key)
      // 切换任务列表
      this.global.repo.taskList.current.list = this.global.repo.taskList[key]
    },
    taskListSelect (key, keyPath) {
      // 选中任务列表中的任务，切换编辑中的任务
      console.log('select task:' + key + keyPath)
      for (var i = 0; i < this.global.repo.taskList.current.list.length; i++) {
        // 循环取出任务标识对应的任务，放置到当前正在编辑的任务变量中
        if (this.global.repo.taskList.current.list[i].taskKey === key) {
          this.global.repo.taskList.current.task = this.global.repo.taskList.current.list[i]
        }
      }
    }
  }
}
</script>

<style scoped>
.task-list-module{
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}
.task-list-menu{
  height: 40px;
  line-height: 40px;
  border-right: 0;
}
.task-list-content{
  flex-grow: 1;
  overflow: scroll;
}
.task-list-content::-webkit-scrollbar
{
  width: 6px;  /*滚动条宽度*/
  height: 6px;  /*滚动条高度*/
}

.task-list-content::-webkit-scrollbar-track
{
  background-color: #666;/*滚动条的背景颜色*/
}

.task-list-content::-webkit-scrollbar-thumb
{
  background-color: #333;  /*滚动条的背景颜色*/
}
</style>
