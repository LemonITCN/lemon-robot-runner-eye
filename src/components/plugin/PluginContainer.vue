<template>
  <div class="plugin-container">
    <common-title-view :title="$t(lang + 'mTitle')" :intro="$t(lang + 'mIntro')"/>
    <common-menu-view :lang="lang" :config="menu"/>
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

  .content-view {
    flex-grow: 1;
  }
</style>