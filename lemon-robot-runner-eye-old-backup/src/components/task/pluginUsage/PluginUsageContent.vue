<template>
    <div class="plugin-usage-content">
        <div v-for="(plugin, index) in this.global.repo.pluginList" v-bind:key="index" class="plugin-item">
          <div class="plugin-name">{{$t(lang + '.plugin_name')}}: {{plugin.name}}</div>
          <div class="plugin-author">{{$t(lang + '.plugin_author')}}: {{plugin.author}}</div>
          <div class="plugin-version">{{$t(lang + '.plugin_version')}}: {{plugin.version}}</div>
          <div class="plugin-key" >{{$t(lang + '.plugin_key')}}: {{plugin.key}}</div>
          <div>
            <el-switch
              class="plugin-state"
              v-model="state[index]"
              active-color="#13ce66">
            </el-switch>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PluginContentModule',
  data () {
    return {
      lang: 'task.pluginUsage.pluginUsageContent',
      state: []
    }
  }
}
</script>

<style scoped>
.plugin-usage-content{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.plugin-item{
  border: 1px solid #eee;
  background: #fcfcfc;
  width: 320px;
  height: 90px;
  padding: 20px;
  margin: 0 18px 10px 0;
  font-size: 13px;
  position: relative;
  border-radius: 6px;
  border-left: 3px solid #409eff;
}
.plugin-item div{
  margin: 5px 0;
}
.plugin-state{
  position: absolute;
  top: 38%;
  right: 18px;
}
</style>
