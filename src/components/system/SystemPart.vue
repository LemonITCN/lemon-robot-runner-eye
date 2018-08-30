<template>
  <div class="system-part">
    <div class="general-background-twill-light-red">
      <common-title-view icon="el-icon-system"
                         :title="$t(lang + 'mTitle')"
                         :intro="$t(lang + 'mIntro')"></common-title-view>
      <common-menu-view :lang="lang" :config="menu"></common-menu-view>
    </div>
    <router-view class="system-part-content"></router-view>
  </div>
</template>

<script>
  import CommonTitleView from "../common/CommonTitleView";
  import CommonMenuView from "../common/CommonMenuView";

  export default {
    name: "SystemPart",
    components: {CommonMenuView, CommonTitleView},
    data() {
      return {
        lang: 'system.systemPart.',
        menu: [
          {
            target: '/system/lrc',
            title: 'lrc'
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .system-part {
    display: flex;
    flex-direction: column;
  }

  .system-part-content {
    flex-grow: 1;
  }
</style>