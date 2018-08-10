import define from '@/define'

let DataSetProperty = class DataSetProperty {

  constructor (key, type, remark) {
    this._key = key
    if (!type) {
      this._type = define.OPTIONS.DATA_SET_PROPERTY_TYPE[0].value
    }
    this._remark = remark
  }

  get key () {
    return this._key
  }

  set key (value) {
    this._key = value
  }

  get type () {
    return this._type
  }

  set type (value) {
    this._type = value
  }

  get remark () {
    return this._remark
  }

  set remark (value) {
    this._remark = value
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