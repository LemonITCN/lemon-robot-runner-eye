<template>
  <div class="cloud-part">
    <div class="cloud-part-state  cloud-part-state-disconn">
      <i class="el-icon-success cloud-part-state-icon"></i>
      <div class="cloud-part-state-title">{{$t('system.cloud_name')}}</div>
    </div>
    <div class="cloud-part-state">
      <i class="el-icon-error cloud-part-state-icon cloud-part-state-conn"></i>
      <div class="cloud-part-state-title">{{$t('common.private_cloud')}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CloudPart"
  }
</script>

<style scoped>
  .cloud-part {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cloud-part-state {
    display: inline-block;
    margin-right: 20px;
  }

  .cloud-part-state-icon {
    margin-right: 4px;
  }

  .cloud-part-state-title {
    display: inline-block;
    font-size: 14px;
  }
</style>