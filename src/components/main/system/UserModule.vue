<template>
  <div class="user-module">
    <img src="static/resource/image/logo.png" class="avatar">
    <div class="content">
      <span class="username">{{$t(lang + '.login_to') + ' ' + $t('system.cloud_name')}}</span>
      <el-button size="mini" type="text" class="operate">{{$t(lang + '.register') + ' ' + $t('system.cloud_name') + ' ' + $t(lang + '.account')}}</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserModule',
  data () {
    return {
      lang: 'main.system.user'
    }
  }
}
</script>

<style scoped>
  .user-module {
    display: flex;
    flex-direction: row;
    padding: 26px 10px 10px 16px;
    min-height: 70px;
  }

  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-right: 10px;
  }

  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 10px;
  }

  .username {
    color: #eee;
    font-size: 16px;
  }
  .operate{
    font-size: 12px;
    height: 26px;
    color: #888;
  }
</style>
