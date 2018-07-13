<template>
  <div class="common-menu-view">
    <router-link :key="item.title" v-for="item in config" class="common-menu-view-item" :to="item.target"
                 active-class="common-menu-view-item-active">
      {{$t(lang + item.title)}}
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "CommonMenuView",
    props: ['lang', 'config']
  }
</script>

<style scoped>
  .common-menu-view {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #ddd;
    padding-left: 20px;
    padding-top: 6px;
  }

  .common-menu-view-item {
    font-size: 16px;
    padding: 12px 10px 6px 10px;
    margin: 0 10px;
    cursor: pointer;
    text-decoration: none;
    color: #888;
  }

  .common-menu-view-item-active {
    border-bottom: 4px solid #666;
    color: #333;
  }
</style>