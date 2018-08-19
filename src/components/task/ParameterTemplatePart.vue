<template>
  <div class="parameter-template-part" @click.stop>
    <div class="data-set-property-operate-button">
      <el-button size="mini" type="primary" @click="showPanel" plain>{{buttonTitle}}</el-button>
    </div>
    <!--参数模板修改 - JSON-->
    <el-dialog
        :before-close="beforeClose"
        :title="$t(lang + 'json')"
        :visible.sync="jsonPanelState"
        :show-close="false"
        width="770px">
      <codemirror v-model="parameter.template" :options="options"
                  class="json-editor"></codemirror>
      <span slot="footer" class="dialog-footer">
        <el-button @click="jsonPanelState = false">{{$t('common.cancel')}}</el-button>
        <el-button @click="saveJSONTemplate" type="primary">{{$t('common.modify')}}</el-button>
      </span>
    </el-dialog>
    <!--参数模板修改 - JSON-->
    <!--参数模板修改 - BIN-->
    <el-dialog
        :before-close="beforeClose"
        :title="$t(lang + 'bin')"
        :visible.sync="binPanelState"
        :show-close="false"
        width="660px">
      <div>
        <el-alert
            :closable="false"
            :title="isHaveUploaded() ? ($t(lang + 'have_uploaded') + templateObj[0]) : $t(lang + 'none_uploaded') "
            :type="isHaveUploaded() ? 'success' : 'info'"
            class="state-tip"
            show-icon>
        </el-alert>
        <common-upload-view
            :uploadSuccess="uploadSuccess"
            :uploadUrl="$define.URL.BASE_URL() + $define.URL.TASK.UPLOAD_PARAMETER_BIN">
        </common-upload-view>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="binPanelState = false">{{$t('common.hide')}}</el-button>
      </span>
    </el-dialog>
    <!--参数模板修改 - BIN-->
  </div>
</template>

<script>
  import { codemirror } from 'vue-codemirror'
  import 'codemirror/lib/codemirror.css'
  import 'codemirror/mode/javascript/javascript.js'
  import 'codemirror/addon/hint/javascript-hint.js'
  import 'codemirror/addon/hint/show-hint.css'
  import 'codemirror/addon/hint/show-hint.js'
  import 'codemirror/addon/hint/anyword-hint.js'
  import 'codemirror/theme/blackboard.css'
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button.vue'
  import CommonUploadView from '../common/CommonUploadView.vue'

  export default {
    components: {
      CommonUploadView,
      ElButton,
      codemirror
    },
    name: 'ParameterTemplatePart',
    props: ['index', 'buttonTitle'],
    mounted () {
    },
    methods: {
      showPanel () {
        this.parameter = Object.assign({}, this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].parameters[this.index])
        if (this.parameter.isBinary) {
          if (this.parameter.template.length > 2) {
            this.templateObj = JSON.parse(this.parameter.template)
          }
        }
        this[this.parameter.isBinary ? 'binPanelState' : 'jsonPanelState'] = true
      },
      beforeClose (done) {
        if (this.parameter.isBinary && (this.uploadPercentage === 0 || this.uploadPercentage === 100)) {
          done()
        }
      },
      uploadSuccess (file, response) {
        this.templateObj = [file.source.name, response.data]
        this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].parameters[this.index].template = JSON.stringify(this.templateObj)
        this.$store.dispatch(this.$NS.TASK.ACT_SAVE_CURRENT_EDITING_TASK)
        this.$util.tip.notification_success(this.$t(this.lang + 'tip_upload_success'))
      },
      isHaveUploaded () {
        return (Array.isArray(this.templateObj) && this.templateObj.length === 2)
      },
      saveJSONTemplate () {
        this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].parameters[this.index].template = this.parameter.template
        this.$store.dispatch(this.$NS.TASK.ACT_SAVE_CURRENT_EDITING_TASK)
        this.jsonPanelState = false
      }
    },
    data () {
      return {
        lang: 'task.parameterTemplatePart.',
        parameter: {template: ''},
        templateObj: [],
        jsonPanelState: false,
        binPanelState: false,
        uploadPercentage: 0,
        uploadFileName: '',
        uploader: {},
        options: {
          tabSize: 2,
          mode: 'application/json',
          theme: 'blackboard',
          extraKeys: {
            Ctrl: 'autocomplete'
          },
          lineNumbers: true,
          line: true
        }
      }
    }
  }
</script>

<style scoped>
  .parameter-template-part {
    display: inline-block;
  }

  .json-editor {
    font-size: 20px;
  }

  .json-editor >>> .CodeMirror-scroll {
    margin-right: 0 !important;
  }

  .state-tip {
    margin-bottom: 16px;
  }

</style>
