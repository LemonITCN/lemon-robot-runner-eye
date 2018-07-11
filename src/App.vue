<template>
  <div id="app">
    <operator-container class="operator-container"/>
    <router-view/>
  </div>
</template>

<script>
  import OperatorContainer from './components/operator/OperatorContainer'

  export default {
    name: 'app',
    components: {
      OperatorContainer
    },
    data() {
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
    text-align: center;
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
    width: 320px;
  }
</style>
