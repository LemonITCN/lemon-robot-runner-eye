<template>
  <div class="task-menu-part">
    <el-popover
        width="200"
        trigger="hover">
      <div class="menu-list">
        <div class="menu-line">
          <el-button class="menu-button" type="text" icon="el-icon-caret-right">{{$t(lang + 'execute')}}</el-button>
        </div>
        <div class="menu-line">
          <el-button class="menu-button" type="text" icon="el-icon-download">{{$t(lang + 'export')}}</el-button>
        </div>
      </div>
      <el-button slot="reference" class="task-menu-button" icon="el-icon-menu" circle=""></el-button>
    </el-popover>
  </div>
</template>

<script>
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button.vue'

  export default {
    components: {ElButton},
    name: 'TaskMenuPart',
    data () {
      return {
        lang: 'task.taskMenuPart.',
      }
    }
  }
</script>

<style scoped>
  .task-menu-part .task-menu-button {
    font-size: 24px;
  }

  .menu-line {
    background: white;
    padding-left: 10px;
  }

  .menu-line:hover {
    background: #444;
  }

  .menu-button {
    color: #999 !important;
  }

  .menu-line:hover .menu-button{
    color: #fff !important;
  }
</style>