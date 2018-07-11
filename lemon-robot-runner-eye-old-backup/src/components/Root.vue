<template>
  <div class="root">
    <system-bar-module class="system-module"/>
    <div class="right-panel">
      <main-menu-bar class="main-menu-bar"/>
      <router-view class="main-container"/>
      <div class="copyright-area">
        {{$t('system.app_name') + ' - ' + $t('system.company_name') + ' ' + $t('system.company_domain')}}
      </div>
    </div>
  </div>
</template>

<script>
import SystemBarModule from '@/components/app/framework/LeftContainer'
import MainMenuBar from '@/components/app/systemBar/MainMenuBar'
export default {
  name: 'Root',
  components: {MainMenuBar, SystemBarModule},
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.root{
  background: #fafafa;
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  align-items: stretch;
}
.system-module{
  background: #333;
  min-width: 280px;
  /*box-shadow: 0 0 5px #999;*/
}
.right-panel{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  /*margin: 10px 20px;*/
}
.main-menu-bar{
  /*margin-bottom: 10px;*/
}
.main-container{
  flex-grow: 1;
}
.copyright-area{
  padding: 15px 0 6px 0;
  text-align: center;
  font-size: 12px;
  color: #aaa;
}
</style>
