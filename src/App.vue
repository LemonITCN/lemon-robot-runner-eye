<template>
  <div id="app" v-loading.lock="$store.getters[this.$NS.GLOBAL_LOADING.GET_IS_SHOW]"
       :element-loading-text="$store.getters[this.$NS.GLOBAL_LOADING.GET_TITLE]">
    <operator-container class="operator-container"/>
    <router-view class="router-view-main"/>
    <lrc-container/>
  </div>
</template>

<script>
  import OperatorContainer from './components/operator/OperatorContainer'
  import LrcContainer from './components/lrc/LrcContainer'

  export default {
    name: 'app',
    components: {OperatorContainer, LrcContainer},
    data () {
      return {}
    }
  }
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }

  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }

  .operator-container {
    width: 300px;
    min-width: 300px;
    max-width: 300px;
  }

  .router-view-main {
    flex-grow: 1;
  }

  .el-loading-mask {
    z-index: 99999 !important;
  }
</style>
