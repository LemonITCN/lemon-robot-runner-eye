<template>
  <div class="common-upload-view">
    <div class="operate-area" v-if="uploadPercentage === 0 || uploadPercentage === 100">
      <div class="choose-file-button choose-file-button-parameter-bin">
        {{$t('common.choose_file')}}
      </div>
      <el-button @click="upload">{{$t('common.upload')}}</el-button>
    </div>
    <div class="upload-tip">{{uploadFileName}}</div>
    <el-progress :text-inside="true" :stroke-width="22" :percentage="uploadPercentage"></el-progress>
  </div>
</template>

<script>
  export default {
    name: 'CommonUploadView',
    props: ['uploadUrl', 'uploadSuccess'],
    mounted () {
      this.initUploader()
    },
    methods: {
      upload () {
        this.uploader.upload()
      },
      initUploader () {
        // eslint-disable-next-line
        this.uploader = WebUploader.create({
          // 文件接收服务端。
          server: this.uploadUrl,
          pick: {
            id: '.choose-file-button-parameter-bin',
            multiple: false
          },
          formData: {'taskId': this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].taskId},
          resize: false
        })
        this.uploadFileName = this.$t(this.lang + 'tip_choose_file')
        let self = this
        this.uploader.on('fileQueued', (file) => {
          this.uploadPercentage = 0
          this.$util.log.info(file)
          this.uploadFileName = this.$t(this.lang + 'tip_upload_file') + file.source.name
        })
        // 监听uploadBeforeSend事件，为其添加lrcs header
        this.uploader.on('uploadBeforeSend', (object, data, headers) => {
          headers['lrcs'] = this.$store.getters[this.$NS.LRC.GET_LRCS]
          this.$util.log.info('header, %O', headers)
        })
        this.uploader.on('uploadProgress', (file, percentage) => {
          self.uploadFileName = self.$t(self.lang + 'tip_uploading') + file.source.name
          self.$util.log.info(percentage)
          self.uploadPercentage = Math.ceil(percentage * 100)
          if (percentage === 1) {
            // 上传完成
            self.initUploader()
          }
        })
        this.uploader.on('uploadSuccess', (file, response) => {
          if (response.success) {
            this.uploadSuccess(file, response)
          }
        })
      }
    },
    data () {
      return {
        lang: 'common.upload_view.',
        uploader: {},
        uploadPercentage: 0,
        uploadFileName: ''
      }
    }
  }
</script>

<style scoped>
  .common-upload-view {
  }

  .operate-area {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }

  .operate-area * {
    margin-right: 5px;
  }

  .upload-tip {
    margin: 14px 0;
  }
</style>