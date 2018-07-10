<template>
  <div class="main-menu-bar">
    <router-link :to="{'path':'/task'}" activeClass="main-menu-button-selected" class="main-menu-button">
      <i class="el-icon-edit main-menu-button-icon"></i>
      <div class="main-menu-button-title">{{$t(lang + '.task')}}</div>
    </router-link><router-link :to="{'path':'/plugin'}" activeClass="main-menu-button-selected" class="main-menu-button">
      <i class="el-icon-menu main-menu-button-icon"></i>
      <div class="main-menu-button-title">{{$t(lang + '.plugin')}}</div>
    </router-link><router-link :to="{'path':'/executor'}" activeClass="main-menu-button-selected" class="main-menu-button">
      <i class="el-icon-date main-menu-button-icon"></i>
      <div class="main-menu-button-title">{{$t(lang + '.executor')}}</div>
    </router-link><router-link :to="{'path':'/cloud'}" activeClass="main-menu-button-selected" class="main-menu-button">
      <i class="el-icon-upload main-menu-button-icon"></i>
      <div class="main-menu-button-title">{{$t(lang + '.cloud')}}</div>
    </router-link><router-link :to="{'path':'/system'}" activeClass="main-menu-button-selected" class="main-menu-button">
      <i class="el-icon-setting main-menu-button-icon"></i>
      <div class="main-menu-button-title">{{$t(lang + '.system')}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ControlButtonsModule',
  methods: {},
  data () {
    return {
      lang: 'struct.bar.mainMenuBar'
    }
  }
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
    height: 80px;
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
