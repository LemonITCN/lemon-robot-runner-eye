<template>
  <div class="common-title-view">
    <div class="common-title-view-title">{{title}}</div>
    <div class="common-title-view-intro">{{intro}}</div>
  </div>
</template>

<script>
  export default {
    name: "CommonTitleView",
    props: ['title', 'intro']
  }
</script>

<style scoped>
  .common-title-view {
    color: #555;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #eee;
    background: radial-gradient(circle at 5% 50%, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0));
  }

  .common-title-view-title {
    font-size: 28px;
    margin-right: 20px;
  }

  .common-title-view-intro {
    font-size: 16px;
    color: #888;
  }
</style>