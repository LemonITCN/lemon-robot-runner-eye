<template>
  <div class="">
    <el-button type="success" size="small" icon="el-icon-caret-right">{{$t(lang + '.run')}}</el-button>
    <el-button type="success" size="small" icon="el-icon-upload" plain>{{$t(lang + '.upload_to') + ' ' + $t('system.cloud_name')}}</el-button>
    <el-button type="primary" size="small" icon="el-icon-star-on" plain>{{$t(lang + '.upload_to') + ' ' + $t('common.private_cloud')}}</el-button>
    <el-button size="small" icon="el-icon-menu" plain>{{$t(lang + '.store')}}</el-button>
    <el-button size="small" icon="el-icon-news" plain>{{$t(lang + '.add_instruction_set')}}</el-button>
    <el-button size="small" icon="el-icon-document" plain>{{$t(lang + '.add_data_set')}}</el-button>
  </div>
</template>

<script>
export default {
  name: 'ControlButtonsModule',
  data () {
    return {
      lang: 'main.content.control_buttons'
    }
  }
}
</script>

<style scoped>

</style>
