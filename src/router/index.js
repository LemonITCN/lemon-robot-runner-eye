import Vue from 'vue'
import Router from 'vue-router'
import TaskDetailContainer from '@/components/struct/framework/TaskDetailContainer'
import PluginManagerContainer from '@/components/struct/framework/PluginManagerContainer'

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
    }
  ]
})
