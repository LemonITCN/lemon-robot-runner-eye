import VueI18n from 'vue-i18n'

import lang_zh from './lang/zh'
import lang_en from './lang/en'

import Vue from 'vue'

Vue.use(VueI18n)

// 多语言
const i18n = new VueI18n({
    locale: 'en',
    messages: {
        'zh': lang_zh,
        'en': lang_en
    }
})

export default i18n