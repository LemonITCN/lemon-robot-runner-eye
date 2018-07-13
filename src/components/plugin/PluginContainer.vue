<template>
  <div class="plugin-container">
    <div class="title-area">
      <common-title-view icon="el-icon-plugin" :title="$t(lang + 'mTitle')" :intro="$t(lang + 'mIntro')"/>
      <common-menu-view :lang="lang" :config="menu"/>
    </div>
    <router-view class="content-view"/>
  </div>
</template>

<script>
  import CommonTitleView from '../common/CommonTitleView'
  import CommonMenuView from '../common/CommonMenuView'

  export default {
    name: "PluginContainer",
    components: {CommonMenuView, CommonTitleView},
    data() {
      return {
        lang: 'plugin.pluginContainer.',
        menu: [
          {
            title: 'installed',
            target: '/plugin/installed'
          },
          {
            title: 'store',
            target: '/plugin/store'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .plugin-container {
    display: flex;
    flex-direction: column;
  }

  .title-area{
    background: linear-gradient(to right, rgba(87, 218, 75, 0.1), rgba(255, 255, 255, 0));
  }

  .content-view {
    flex-grow: 1;
  }


</style>