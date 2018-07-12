<template>
  <div class="operator-container">
    <user-part class="user-part"/>
    <cloud-part class="cloud-part"/>
    <main-menu-part class="main-menu-part"/>
    <technology-support-part class="technology-support-part"/>
  </div>
</template>

<script>
  import UserPart from './UserPart'
  import CloudPart from './CloudPart'
  import MainMenuPart from './MainMenuPart'
  import TechnologySupportPart from './TechnologySupportPart'

  export default {
    name: "OperatorContainer",
    lang: 'operator.operatorContainer',
    components: {UserPart, CloudPart, MainMenuPart, TechnologySupportPart}
  }
</script>

<style scoped>
  .operator-container {
    background: #444444;
    display: flex;
    flex-direction: column;
  }

  .user-part {
    height: 120px;
  }

  .cloud-part {
    height: 50px;
  }

  .main-menu-part {
    flex-grow: 1;
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-image: -webkit-linear-gradient(to right, #444444 10%, #999, #444444 90%) 30 30;
    border-image: -moz-linear-gradient(to right, #444444 10%, #999, #444444 90%) 30 30;
    border-image: linear-gradient(to right, #444444 10%, #999, #444444 90%) 30 30;
    margin: 0 30px;
    padding-top: 6px;
  }

  .technology-support-part {
    height: 50px;
  }
</style>