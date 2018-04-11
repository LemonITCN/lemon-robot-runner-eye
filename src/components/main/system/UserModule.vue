<template>
  <div class="user-module">
    <img src="https://avatars1.githubusercontent.com/u/11977874?s=460&v=4" class="avatar">
    <div class="content">
      <span class="username">登录到LemonCloud</span>
      <el-button size="mini" type="text" class="operate">注册柠檬云账户</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserModule'
}
</script>

<style scoped>
  .user-module {
    display: flex;
    flex-direction: row;
    padding: 10px;
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
