<template>
  <div class="root">
    <system-bar-module class="system-module"/>
    <div class="right-panel">
      <control-buttons-module class="control-buttons-module"/>
      <content-container-module class="content-container-module"/>
      <div class="copyright-area">
        {{$t('system.app_name') + ' - ' + $t('system.company_name') + ' ' + $t('system.company_domain')}}
      </div>
    </div>
  </div>
</template>

<script>
import SystemBarModule from './main/system/SystemBarModule'
import ContentContainerModule from './main/content/ContentContainerModule'
import ControlButtonsModule from './main/content/ControlButtonsModule'
export default {
  name: 'Root',
  components: {ControlButtonsModule, ContentContainerModule, SystemBarModule},
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
  box-shadow: 0 0 5px #999;
}
.right-panel{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
}
.control-buttons-module{
  min-height: 42px;
}
.content-container-module{
  flex-grow: 1;
}
.copyright-area{
  padding: 15px 0 6px 0;
  text-align: center;
  font-size: 12px;
  color: #aaa;
}
</style>
