import define from '@/define'

let DataSetProperty = class DataSetProperty {

  constructor (key, type, remark) {
    this.key = key
    if (!type) {
      this.type = define.OPTIONS.DATA_SET_PROPERTY_TYPE[0].value
    }
    this.remark = remark
  }

  toJSON () {
    return {
      key: this.key,
      type: this.type,
      remark: this.remark
    }
  }

}

export default DataSetProperty