<template>
  <div class="lrc-operate-part">
    <el-button type="text" icon="el-icon-plus" @click="createLrcDialogState = true">{{$t(lang + 'create')}}</el-button>
    <el-dialog
        :title="$t(lang + 'create')"
        :visible.sync="createLrcDialogState"
        width="1000px"
        class="form-dialog">
      <el-form :ref="formName"
               :rules="rules"
               :model="lrcCreate"
               label-width="100px"
               class="form-area">
        <div class="base-info-area">
          <el-form-item :label="$t(lang + 'field_type')" prop="type" class="dialog-field">
            <el-select v-model="lrcCreate.type">
              <el-option label="Lemon Robot Runner Eye" :value="0"></el-option>
              <el-option label="Lemon Robot Dispatcher" :value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :label="$t(lang + 'field_intro')">
            <el-input type="textarea" rows="10" v-model="lrcCreate.intro"></el-input>
          </el-form-item>
        </div>
        <div class="ip-white-list-area">
          <div class="ip-white-list-title">{{$t(lang + 'field_ip_white_list')}}</div>
          <el-form-item :label="$t(lang + 'field_ip_item')"
                        :key="ip + index"
                        v-for="(ip , index) in lrcCreate.ipWhiteList">
            <el-input
                v-model="lrcCreate.ipWhiteList[index]"
                :rules="$define.RULES.COMMON_IPV4">
              <el-button slot="append" icon="el-icon-delete"
                         @click.prevent="lrcCreate.ipWhiteList.splice(index, 1)"></el-button>
            </el-input>
          </el-form-item>
          <el-button icon="el-icon-plus" type="text" @click="addIpItem">{{$t(lang + 'add_ip_item')}}</el-button>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="createLrcDialogState = false">{{$t('common.cancel')}}</el-button>
        <el-button type="primary" @click="createParameter">{{$t('common.create')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import LrcCreate from '@/model/LrcCreate'

  export default {
    name: "LrcCreatePart",
    methods: {
      addIpItem() {
        this.lrcCreate.ipWhiteList.push('')
      },
      createParameter() {
        let self = this
        this.$store.dispatch(this.$NS.LRC.ACT_CREATE_LRC, {
          form: this.lrcCreate,
          success() {
            self.createLrcDialogState = false
          }
        })
      }
    },
    data() {
      return {
        lang: 'system.lrcCreatePart.',
        createLrcDialogState: false,
        lrcCreate: new LrcCreate(),
        rules: {},
        formName: 'lrcCreate',
      }
    }
  }
</script>

<style scoped>
  .lrc-operate-part {
  }

  .form-area {
    display: flex;
    flex-direction: row;
  }

  .base-info-area {
    width: 460px;
  }

  .ip-white-list-title {
    font-size: 20px;
    text-align: left;
    font-weight: bold;
    padding-left: 50px;
    margin-bottom: 16px;
  }

  .ip-white-list-area {
    flex-grow: 1;
    text-align: center;
    height: 300px;
    overflow-y: auto;
    padding-right: 18px;
  }

</style>