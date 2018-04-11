<template>
    <div class="task-list-module">
      <el-menu
        default-active="1"
        class="task-list-menu"
        mode="horizontal"
        background-color="#333"
        text-color="#888"
        active-text-color="#ffd04b">
        <el-menu-item index="1" class="task-list-menu">本地任务</el-menu-item>
        <el-menu-item index="2" class="task-list-menu">柠檬云</el-menu-item>
        <el-menu-item index="3" class="task-list-menu">私有云</el-menu-item>
      </el-menu>
      <!--任务列表-->
      <el-menu
        default-active="1"
        class="task-list-content"
        background-color="#333"
        text-color="#777"
        active-text-color="#fff">
        <el-tooltip v-for="(task , index) in taskList" v-bind:key="task.taskKey" class="item" effect="dark" v-bind:content="task.taskKey" placement="right">
          <el-menu-item v-bind:index="index">
            <i class="el-icon-arrow-right"></i>
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
      taskList: [
        {
          taskKey: 'task001',
          taskName: '我的任务h1'
        },
        {
          taskKey: 'task002',
          taskName: '我的任务b2'
        },
        {
          taskKey: 'task003',
          taskName: '我的任务c3'
        },
        {
          taskKey: 'task004',
          taskName: '我的任务d6'
        },
        {
          taskKey: 'task004',
          taskName: '我的任务d6'
        },
        {
          taskKey: 'task004',
          taskName: '我的任务d6'
        },
        {
          taskKey: 'task004',
          taskName: '我的任务d6'
        },
        {
          taskKey: 'task004',
          taskName: '我的任务d6'
        },
        {
          taskKey: 'task004',
          taskName: '我的任务d6'
        },
        {
          taskKey: 'task004',
          taskName: '我的任务d6'
        },
        {
          taskKey: 'task004',
          taskName: '我的任务d6'
        },
        {
          taskKey: 'task004',
          taskName: '我的任务d6'
        },
        {
          taskKey: 'task004',
          taskName: '我的任务d6'
        },
        {
          taskKey: 'task004',
          taskName: '我的任务d6'
        },
        {
          taskKey: 'task004',
          taskName: '我的任务d6'
        },
        {
          taskKey: 'task004',
          taskName: '我的任务d6'
        },
        {
          taskKey: 'task004',
          taskName: '我的任务d6'
        },
        {
          taskKey: 'task005',
          taskName: '我的任务h9'
        }
      ]
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
  background: red;
}
.task-list-content .is-active{
  background: #222 !important;
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
