<template>
  <div class="instruction-set-part">
    <instruction-set-list-part class="instruction-set-list"></instruction-set-list-part>
    <codemirror v-model="script" :options="options" class="instruction-set-editor"></codemirror>
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
  import 'codemirror/theme/mdn-like.css'
  import InstructionSetListPart from './InstructionSetListPart.vue'

  export default {
    name: 'InstructionSetPart',
    components: {
      InstructionSetListPart,
      codemirror
    },
    data () {
      return {
        script: '',
        options: {
          tabSize: 2,
          mode: 'text/javascript',
          theme: 'mdn-like',
          extraKeys: {'Ctrl': 'autocomplete'},
          lineNumbers: true,
          line: true,
        }
      }
    }
  }
</script>

<style scoped>
  .instruction-set-part {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }

  .instruction-set-list {
    width: 220px;
  }

  .instruction-set-editor {
    font-size: 20px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .instruction-set-editor >>> .CodeMirror {
    height: 100% !important;
  }
</style>