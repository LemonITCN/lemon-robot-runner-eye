import i18n from '@/lang'

let lang = 'define.options.'

export default {
  DATA_SET_PROPERTY_TYPE: [
    {
      value: 'str',
      name: i18n.t(lang + 'data_set_property_type_str')
    },
    {
      value: 'num',
      name: i18n.t(lang + 'data_set_property_type_num')
    },
    {
      value: 'bin',
      name: i18n.t(lang + 'data_set_property_type_bin')
    }
  ]
}