<template>
  <div class="instruction-set-part">
    <instruction-set-list-part class="instruction-set-list"></instruction-set-list-part>
    <codemirror v-loading="script == null" v-model="script" :options="options" class="instruction-set-editor"></codemirror>
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
    computed: {
      instructionSetKey () {
        return this.$store.getters[this.$NS.TASK.GET_CURRENT_INSTRUCTION_SET_KEY]
      }
    },
    watch: {
      instructionSetKey (val) {
        if (val !== null) {
          this.script = null
          this.$util.log.info('Change instruction set: ' + val)
          this.$axios.get(this.$define.URL.TASK.INSTRUCTION.GET, {
            params: {
              taskId: this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK].taskId,
              instructionSetKey: val
            }
          })
            .then(res => {
              this.script = res.data.data
            })
        }
      }
    },
    data () {
      return {
        script: null,
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