import Vue from 'vue'
import VueRouter from 'vue-router'

import Task from './task'
import Executor from './dispatcher'
import Plan from './plan'
import Cloud from './cloud'
import Plugin from './plugin'
import Data from './data'
import Logs from './logs'
import System from './system'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    redirect: '/task'
  },
    Task, Executor, Plan, Cloud, Plugin, Data, Logs, System
  ]
})