import i18n from '@/lang'

let lang = 'rules.'

export default {
  COMMON_KEY: [
    {required: true, pattern: /^[a-zA-Z][a-zA-Z0-9_]{0,64}$/, message: i18n.t(lang + 'common_key'), trigger: 'change'}
  ],
  COMMON_NAME: [
    {required: true, max: 64, message: i18n.t(lang + 'common_name'), trigger: 'change'}
  ],
  COMMON_IPV4: [
    {required: true, pattern: /^(?=(\b|\D))(((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))(?=(\b|\D))$/, message: i18n.t(lang + 'common_ipv4'), trigger: 'change'}
  ]
}