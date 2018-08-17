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
        width="660px">
      <codemirror v-model="parameter.template" :options="options"
                  class="json-editor"></codemirror>
      <span slot="footer" class="dialog-footer">
        <el-button @click="jsonPanelState = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary">{{$t('common.modify')}}</el-button>
      </span>
    </el-dialog>
    <!--参数模板修改 - JSON-->
    <!--参数模板修改 - BIN-->
    <el-dialog
        :before-close="beforeClose"
        :title="$t(lang + 'bin')"
        :visible.sync="binPanelState"
        width="660px">
      <div>
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
        this[this.parameter.isBinary ? 'binPanelState' : 'jsonPanelState'] = true
      },
      beforeClose () {
      },
      uploadSuccess (file, response) {
        this.$util.log.info('RESP = %O', response)
      }
    },
    data () {
      return {
        lang: 'task.parameterTemplatePart.',
        parameter: {template: ''},
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

</style>
