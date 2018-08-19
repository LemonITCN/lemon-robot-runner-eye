<template>
  <div class="plugin-part">
    <div class="title-area general-background-twill-light-blue">
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
    name: 'PluginPart',
    components: {CommonMenuView, CommonTitleView},
    data () {
      return {
        lang: 'plugin.pluginPart.',
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