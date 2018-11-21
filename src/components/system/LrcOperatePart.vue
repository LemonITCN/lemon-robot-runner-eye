<template>
  <div class="lrc-operate-part">
    <el-button size="mini" type="primary" @click="viewLrckDialogState = true">{{$t(lang + 'view_publicKey')}}</el-button>
    <el-button size="mini" type="danger" @click="confirmDelete">{{$t('common.delete')}}</el-button>
    <el-dialog
        :title="$t(lang + 'view_publicKey')"
        :visible.sync="viewLrckDialogState"
        width="500px">
      <span>{{this.$store.getters[this.$NS.LRC.GET_LRC_LIST][this.index].lrck}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="viewLrckDialogState = false">{{$t('common.iknow')}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

  export default {
    name: "LrcOperatePart",
    props: ['index'],
    methods: {
      confirmDelete() {
        let self = this
        this.$confirm(this.$t(this.lang + 'delete_confirm'), this.$t('common.delete'), {
          confirmButtonText: this.$t('common.delete'),
          cancelButtonText: this.$t('common.cancel'),
          type: 'warning'
        }).then(() => {
          self.deleteLrc()
        })
      },
      deleteLrc() {
        this.$axios.delete(this.$define.URL.LRC.DELETE, {
          data: {
            lrct: this.$store.getters[this.$NS.LRC.GET_LRC_LIST][this.index].lrct
          }
        }).then(() => {
          this.$store.dispatch(this.$NS.LRC.ACT_REFRESH_LRC_LIST)
        })
      }
    },
    data() {
      return {
        lang: 'system.lrcOperatePart.',
        viewLrckDialogState: false
      }
    }
  }
</script>

<style scoped>
  .lrc-operate-part {
  }

</style>