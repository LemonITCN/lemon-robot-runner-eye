import NS from '@/namespace'

export default {
  state: {
    isShow: false,
    title: ''
  },
  getters: {
    [NS.GLOBAL_LOADING.GET_IS_SHOW] (state) {
      return state.isShow
    },
    [NS.GLOBAL_LOADING.GET_TITLE] (state) {
      return state.title
    }
  },
  mutations: {
    [NS.GLOBAL_LOADING.MUT_SET_IS_SHOW] (state, isShow) {
      state.isShow = isShow
    },
    [NS.GLOBAL_LOADING.MUT_SET_TITLE] (state, title) {
      state.title = title
    }
  },
  actions: {
    [NS.GLOBAL_LOADING.ACT_SHOW] (context, title) {
      context.commit(NS.GLOBAL_LOADING.MUT_SET_IS_SHOW, true)
      context.commit(NS.GLOBAL_LOADING.MUT_SET_TITLE, title)
    },
    [NS.GLOBAL_LOADING.ACT_HIDE] (context) {
      context.commit(NS.GLOBAL_LOADING.MUT_SET_IS_SHOW, false)
      context.commit(NS.GLOBAL_LOADING.MUT_SET_TITLE, '')
    }
  }
}
