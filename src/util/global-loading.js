import store from '@/store'
import NS from '@/namespace'

export default {
  show (title) {
    store.dispatch(NS.GLOBAL_LOADING.ACT_SHOW, title)
  },
  hide () {
    store.dispatch(NS.GLOBAL_LOADING.ACT_HIDE)
  }
}
