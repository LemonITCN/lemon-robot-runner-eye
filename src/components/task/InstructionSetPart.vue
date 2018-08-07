<template>
  <div class="instruction-set-part" @keydown.ctrl="keyboardSave($event)">
    <instruction-set-list-part class="instruction-set-list"></instruction-set-list-part>
    <div class="editor-area" v-loading="script === null" :element-loading-text="$t(lang + 'loading_script')">
      <codemirror v-model="script" :options="options" v-if="script !== null"
                  class="instruction-set-editor"></codemirror>
    </div>
    <el-tooltip class="item" effect="dark" :content="$t(lang + 'save_button_tip')" placement="left">
      <el-button @click="saveScript(not_save_instruction_set_key)" type="success" class="editor-save"
                 icon="el-icon-save" circle></el-button>
    </el-tooltip>
  </div>
</template>

<script>
  import {codemirror} from "vue-codemirror";
  import "codemirror/lib/codemirror.css";
  import "codemirror/mode/javascript/javascript.js";
  import "codemirror/addon/hint/javascript-hint.js";
  import "codemirror/addon/hint/show-hint.css";
  import "codemirror/addon/hint/show-hint.js";
  import "codemirror/addon/hint/anyword-hint.js";
  import "codemirror/theme/mdn-like.css";
  import InstructionSetListPart from "./InstructionSetListPart.vue";

  export default {
    name: "InstructionSetPart",
    components: {
      InstructionSetListPart,
      codemirror
    },
    mounted() {
      let instructionSetKey = this.$store.getters[
        this.$NS.TASK.GET_CURRENT_INSTRUCTION_SET_KEY
        ];
      if (instructionSetKey !== null) {
        this.loadScript(instructionSetKey);
      } else {
        this.script = "";
      }
    },
    computed: {
      instructionSetKey() {
        return this.$store.getters[this.$NS.TASK.GET_CURRENT_INSTRUCTION_SET_KEY];
      }
    },
    watch: {
      instructionSetKey(val, oldVal) {
        this.not_save_instruction_set_key = val;
        this.not_save_task_id = this.$store.getters[
          this.$NS.TASK.GET_CURRENT_EDIT_TASK
          ].taskId;
        if (oldVal !== null) {
          // 保存任务
          this.saveScript(oldVal);
        }
        if (val !== null) {
          this.loadScript(val);
        }
      }
    },
    beforeDestroy() {
      // 组件马上销毁了，保存任务
      this.saveScript(this.not_save_instruction_set_key);
    },
    methods: {
      loadScript(instructionSetKey) {
        this.script = null;
        this.$util.log.info("Change instruction set: " + instructionSetKey);
        this.$axios
          .get(this.$define.URL.TASK.INSTRUCTION.GET, {
            params: {
              taskId: this.$store.getters[this.$NS.TASK.GET_CURRENT_EDIT_TASK]
                .taskId,
              instructionSetKey: instructionSetKey
            }
          })
          .then(res => {
            this.old_script = res.data.data
            this.script = res.data.data;
          });
      },
      saveScript(instructionSetKey) {
        if (this.old_script === this.script) {
          this.$util.log.debug('The instruction set script has not changed and does not need to be saved.')
          return;
        }
        if (this.old_script !== null && this.script !== null) {
          let self = this
          this.$store.dispatch(this.$NS.TASK.ACT_SAVE_INSTRUCTION_SET_SCRIPT, {
            task: {
              taskId: this.not_save_task_id,
              instructionSetKey: instructionSetKey,
              script: this.script
            },
            success() {
              self.old_script = self.script
            }
          });
        }
      },
      keyboardSave(event) {
        if (event.ctrlKey && event.key === "s") {
          let self = this;
          setTimeout(function () {
            self.saveScript(self.not_save_instruction_set_key);
          }, 1);
          event.preventDefault();
        }
      }
    },
    data() {
      return {
        // 保存最原始的脚本指令，在保存的时候进行对比，如果发现一模一样，那就不保存了
        old_script: null,
        script: null,
        lang: "task.instructionSetPart.",
        not_save_task_id: "",
        not_save_instruction_set_key: "",
        options: {
          tabSize: 2,
          mode: "text/javascript",
          theme: "mdn-like",
          extraKeys: {
            Ctrl: "autocomplete"
          },
          lineNumbers: true,
          line: true
        }
      };
    }
  };
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

  .editor-area {
    flex-grow: 1;
    display: flex;
  }

  .editor-save {
    position: absolute;
    bottom: 50px;
    right: 50px;
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
