<template>
  <div class="main-menu-bar">
    <router-link :to="{'path':'/task'}" activeClass="main-menu-button-selected" class="main-menu-button">
      <i class="el-icon-edit main-menu-button-icon"></i>
      <div class="main-menu-button-title">任务编辑</div>
    </router-link><router-link :to="{'path':'/plugin'}" activeClass="main-menu-button-selected" class="main-menu-button">
      <i class="el-icon-menu main-menu-button-icon"></i>
      <div class="main-menu-button-title">插件管理</div>
    </router-link><router-link :to="{'path':'/executor'}" activeClass="main-menu-button-selected" class="main-menu-button">
      <i class="el-icon-date main-menu-button-icon"></i>
      <div class="main-menu-button-title">执行器</div>
    </router-link><router-link :to="{'path':'/cloud'}" activeClass="main-menu-button-selected" class="main-menu-button">
      <i class="el-icon-upload main-menu-button-icon"></i>
      <div class="main-menu-button-title">云端管理</div>
    </router-link><router-link :to="{'path':'/system'}" activeClass="main-menu-button-selected" class="main-menu-button">
      <i class="el-icon-setting main-menu-button-icon"></i>
      <div class="main-menu-button-title">系统设置</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ControlButtonsModule',
  methods: {}
}
</script>

<style scoped>
  .main-menu-bar {
    height: 80px;
    background: #f5f7fa;
    border-bottom: 1px solid #47a1ff;
  }

  .main-menu-button {
    display: inline-block;
    text-align: center;
    width: 100px;
    padding: 16px 0 14px 0;
    font-size: 8px;
    cursor: pointer;
    color: #888;
  }

  .main-menu-button-selected {
    background: #47a1ff;
    color: white;
  }

  .main-menu-button:hover {
    background: linear-gradient(to top, rgba(71, 171, 255, 0.4) 0%, rgba(255, 255, 255, 0) 80%);
  }

  .main-menu-button-selected:hover {
    background: #47a1ff;
  }

  .main-menu-button .main-menu-button-icon {
    font-size: 26px;
  }

  .main-menu-button .main-menu-button-title {
    margin-top: 8px;
  }
</style>
