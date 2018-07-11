<template>
  <div class="operator-container">
    <user-part class="user-part"/>
    <cloud-part class="cloud-part"/>
    <main-menu-part class="main-menu-part"/>
    <user-part class="user-part"/>
  </div>
</template>

<script>
  import UserPart from './UserPart'
  import CloudPart from './CloudPart'
  import MainMenuPart from './MainMenuPart'
  import CopyrightPart from './CopyrightPart'

  export default {
    name: "OperatorContainer",
    lang: 'operator.operatorContainer',
    components: {UserPart, CloudPart, MainMenuPart, CopyrightPart}
  }
</script>

<style scoped>
  .operator-container {
    background: #444444;
    display: flex;
    flex-direction: column;
  }
  .user-part {
    height: 50px;
    background: red;
  }
</style>