<template>
  <div class="main-menu-part">
    <div class="main-menu-part-line" :key="line[0]" v-for="line in menu">
      <router-link class="main-menu-part-item" :key="item" v-for="item in line" :to="'/' + item"
                   active-class="main-menu-part-item-active">
        <i class="main-menu-part-icon" :class="'el-icon-' + item"></i>
        <div class="main-menu-part-title">{{$t(lang + item)}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MainMenuPart",
    data() {
      return {
        lang: 'operator.mainMenuPart.',
        menu: [
          ['task', 'dispatcher'],
          ['plan', 'cloud'],
          ['plugin', 'data'],
          ['logs', 'system']
        ]
      }
    }
  }
</script>

<style scoped>
  .main-menu-part {
    display: flex;
    flex-direction: column;
  }

  .main-menu-part-line {
    display: flex;
    flex-direction: row;
    height: 90px;
  }

  .main-menu-part-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    cursor: pointer;
    color: #aaa;
    text-decoration: none
  }

  .main-menu-part-item-active {
    color: #fff;
    background: radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
  }

  .main-menu-part-line {
    border-bottom: 1px solid #555;
  }

  .main-menu-part-line:last-of-type {
    border-bottom: none;
  }

  .main-menu-part-item:nth-child(odd) {
    border-right: 1px solid #555;
  }

  .main-menu-part-icon {
    font-size: 28px;
    margin-bottom: 8px;
  }

  .main-menu-part-title {
    font-size: 14px;
  }
</style>