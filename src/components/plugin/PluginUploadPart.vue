<template>
  <div class="plugin-upload-part">
    <el-tooltip class="item" effect="dark" :content="$t(lang + 'upload')" placement="left">
      <el-button type="primary" class="main-upload-button" icon="el-icon-upload2" circle
                 @click="pluginUploadPanelState = true"></el-button>
    </el-tooltip>
    <!--上传插件对话框-->
    <el-dialog
        class="upload-dialog"
        :before-close="beforeClose"
        :title="$t(lang + 'upload')"
        :visible.sync="pluginUploadPanelState"
        :show-close="false"
        width="660px">
      <div>
        <common-upload-view
            :uploadSuccess="uploadSuccess"
            :uploadUrl="$define.URL.BASE_URL() + $define.URL.PLUGIN.UPLOAD">
        </common-upload-view>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="pluginUploadPanelState = false">{{$t('common.hide')}}</el-button>
      </span>
    </el-dialog>
    <!--上传插件对话框 - 结束-->
    <!--插件结果展示-->
    <el-dialog
        class="upload-dialog"
        :before-close="beforeClose"
        :title="$t(lang + 'upload_success')"
        :visible.sync="pluginResultPanelState"
        :show-close="false"
        width="660px">
      <div v-if="pluginInfo !== null">
        <div>{{$t(lang + 'plugin_name') + pluginInfo.config.name}}</div>
        <div>{{$t(lang + 'plugin_key') + pluginInfo.config.key}}</div>
        <div>{{$t(lang + 'plugin_version') + pluginInfo.config.version}}</div>
        <div>{{$t(lang + 'function_package_count') + pluginInfo.functionPackageDescriptions.length}}</div>
        <div>{{$t(lang + 'plugin_introduce') + pluginInfo.config.introduce}}</div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="pluginResultPanelState = false">{{$t('common.iknow')}}</el-button>
      </span>
    </el-dialog>
    <!--插件结果展示 - 结束-->
  </div>
</template>

<script>
  import CommonUploadView from '../common/CommonUploadView.vue'

  export default {
    name: 'PluginUploadPart',
    components: {CommonUploadView},
    methods: {
      uploadSuccess (file, response) {
        this.pluginUploadPanelState = false
        this.pluginResultPanelState = true
        this.pluginInfo = response.data
      },
      beforeClose () {}
    },
    data () {
      return {
        lang: 'plugin.pluginUploadPart.',
        pluginUploadPanelState: false,
        pluginResultPanelState: false,
        pluginInfo: null
      }
    }
  }
</script>

<style scoped>
  .plugin-upload-part {
    text-align: center;
  }

  .main-upload-button {
    font-size: 20px;
  }

  .upload-dialog {
    text-align: left;
  }
</style>