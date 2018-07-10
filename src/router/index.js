import Vue from 'vue'
import Router from 'vue-router'
import TaskDetailContainer from '@/components/struct/framework/TaskDetailContainer'
import PluginManagerContainer from '@/components/struct/framework/PluginManagerContainer'
import ExecutorContainer from '@/components/struct/framework/ExecutorContainer'
import CloudManagerContainer from '@/components/struct/framework/CloudManagerContainer'
import SystemSettingsContainer from '@/components/struct/framework/SystemSettingsContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/task',
      name: 'TaskDetailContainer',
      component: TaskDetailContainer
    },
    {
      path: '/plugin',
      name: 'PluginManagerContainer',
      component: PluginManagerContainer
    },
    {
      path: '/executor',
      name: 'ExecutorContainer',
      component: ExecutorContainer
    },
    {
      path: '/cloud',
      name: 'CloudManagerContainer',
      component: CloudManagerContainer
    },
    {
      path: '/system',
      name: 'SystemSettingsContainer',
      component: SystemSettingsContainer
    }
  ]
})
