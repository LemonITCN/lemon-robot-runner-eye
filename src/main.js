import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont/iconfont.css'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import store from './store'

import TaskContainer from './components/task/TaskEditContainer'
import TaskSelectorContainer from './components/task/TaskSelectorContainer'
import ExecutorContainer from './components/executor/ExecutorContainer'
import PlanContainer from './components/plan/PlanContainer'
import CloudContainer from './components/cloud/CloudContainer'
import PluginContainer from './components/plugin/PluginContainer'
import DataContainer from './components/data/DataContainer'
import LogsContainer from './components/logs/LogsContainer'
import SystemContainer from './components/system/SystemContainer'
import axios from 'axios'
import namespace from './namespace'
import util from './util'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueI18n)

Vue.prototype.$ajax = axios
Vue.prototype.$NS = namespace
Vue.prototype.$util = util

Vue.config.productionTip = false

// 路由
const routes = [
  {path: '/', redirect: '/task'},
  {path: '/task', component: TaskSelectorContainer},
  {path: '/taskEdit', component: TaskContainer},
  {path: '/executor', component: ExecutorContainer},
  {path: '/plan', component: PlanContainer},
  {path: '/cloud', component: CloudContainer},
  {path: '/plugin', component: PluginContainer},
  {path: '/data', component: DataContainer},
  {path: '/logs', component: LogsContainer},
  {path: '/system', component: SystemContainer},
]
const router = new VueRouter({routes})
// 多语言
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('./lang/zh'),
    'en': require('./lang/en')
  }
})

new Vue({
  render: h => h(App),
  router,
  i18n,
  store
}).$mount('#app')
