<template>
  <div class="lrc-operate-part">
    <el-button type="text" icon="el-icon-plus" @click="createLrcDialogState = true">{{$t(lang + 'create')}}</el-button>
    <el-dialog
        :title="$t(lang + 'add')"
        :visible.sync="createLrcDialogState"
        class="form-dialog">
      <el-form :ref="formName" :rules="rules" :model="parameter" label-width="140px">
        <el-form-item :label="$t(lang + 'parameter_name')" prop="name" class="dialog-field">
          <el-input v-model="parameter.name"
                    :placeholder="$t(lang + 'parameter_name_placeholder')"></el-input>
        </el-form-item>
        <el-form-item :label="$t(lang + 'parameter_is_binary')">
          <el-switch v-model="parameter.isBinary"></el-switch>
        </el-form-item>
        <el-form-item :label="$t(lang + 'parameter_is_required')">
          <el-switch v-model="parameter.isRequired"></el-switch>
        </el-form-item>
        <el-form-item :label="$t(lang + 'parameter_remark')" prop="desc" class="dialog-field">
          <el-input type="textarea" v-model="parameter.remark" rows="6"
                    :placeholder="$t(lang + 'parameter_remark_placeholder')"></el-input>
        </el-form-item>
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
    methods: {},
    data() {
      return {
        lang: 'system.lrcCreatePart.',
        createLrcDialogState: false,
        lrcCreate: new LrcCreate()
      }
    }
  }
</script>

<style scoped>
  .lrc-operate-part {
  }

</style>