<template>
  <div class="common-menu-view">
    <router-link :key="item.title" v-for="item in config" class="common-menu-view-item" :to="item.target">
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
    border-bottom: 1px solid #eee;
  }

  .common-menu-view-item {
    font-size: 20px;
    padding: 10px 20px;
    cursor: pointer;
    text-decoration: none;
    color: #555;
  }
</style>