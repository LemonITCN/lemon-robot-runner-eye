import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueI18n)

Vue.config.productionTip = false

// 路由
const routes = [
  {path: '/', redirect: '/task'}
  // {path:'/task',component: }
]
const router = new VueRouter({routes})
// 多语言
const i18n = new VueI18n({
  locale: 'en',
  messages: {
    'zh': require('./lang/zh'),
    'en': require('./lang/en')
  }
})

new Vue({
  render: h => h(App),
  router,
  i18n
}).$mount('#app')
