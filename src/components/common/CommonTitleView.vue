<template>
  <div class="common-title-view">
    <i :class="icon" class="common-title-view-icon"></i>
    <div class="common-title-view-text-area">
      <div class="common-title-view-title">{{title}}</div>
      <div class="common-title-view-intro">{{intro}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommonTitleView",
    props: ['icon', 'title', 'intro']
  }
</script>

<style scoped>
  .common-title-view {
    color: #333;
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .common-title-view-icon {
    font-size: 40px;
    margin-right: 20px;
    color: #777;
  }

  .common-title-view-text-area {
    display: flex;
    flex-direction: column;
  }

  .common-title-view-title {
    font-size: 24px;
    margin-right: 20px;
  }

  .common-title-view-intro {
    font-size: 14px;
    color: #666;
  }
</style>