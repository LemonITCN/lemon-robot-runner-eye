<template>
  <div class="user-part">
    <img src="@/assets/images/logo.png" class="user-part-avatar"/>
    <div class="user-part-operate">
      <div class="user-part-operate-a">{{$t(lang + 'login_to') + $t('app.cloud_name')}}</div>
      <div class="user-part-operate-b">{{$t(lang + 'sign_up')}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserPart',
    data() {
      return {
        lang: 'operator.userPart.'
      }
    }
  }
</script>

<style scoped>
  .user-part {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user-part-avatar {
    width: 70px;
    height: 70px;
    border-radius: 35px;
    margin-right: 14px;
    margin-left: -20px;
  }

  .user-part-operate {
    color: #fff;
    display: flex;
    flex-direction: column;
  }

  .user-part-operate-a {
    font-size: 19px;
    margin-bottom: 6px;
  }

  .user-part-operate-b {
    font-size: 15px;
    color: #aaa;
  }
</style>