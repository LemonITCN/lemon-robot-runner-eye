<template>
  <div id="app" v-loading.lock="$store.getters[this.$NS.GLOBAL_LOADING.GET_IS_SHOW]"
       :element-loading-text="$store.getters[this.$NS.GLOBAL_LOADING.GET_TITLE]">
    <root-view/>
    <lrc-container/>
  </div>
</template>

<script>
import LrcContainer from '@/components/struct/framework/LRCContainer'
import RootView from './components/Root'
export default {
  components: {RootView, LrcContainer},
  mounted () {
    // eslint-disable-next-line no-undef
    _lr.global = this.global
  },
  name: 'App'
}
</script>

<style>
  div {
    user-select: none;
  }

  #app {
    font-family: "PingFang SC", "Hiragino Sans GB", "Helvetica Neue", Helvetica, "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }

  .el-loading-mask {
     z-index: 99999;
   }
</style>
