import i18n from '@/lang'

let lang = 'rules.'

export default {
  COMMON_KEY: [
    {required: true, pattern: /^[a-zA-Z][a-zA-Z0-9_]{0,64}$/, message: i18n.t(lang + 'common_key'), trigger: 'change'}
  ],
  COMMON_NAME: [
    {required: true, max: 64, message: i18n.t(lang + 'common_name'), trigger: 'change'}
  ]
}