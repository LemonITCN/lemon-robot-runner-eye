let DataSet = class DataSet {

  constructor (remark) {
    this._properties = []
    this._remark = remark
  }

  get remark () {
    return this._remark
  }

  set remark (value) {
    this._remark = value
  }

  get properties () {
    return this._properties
  }

  set properties (value) {
    this._properties = value
  }

  toJSON() {
    return {
      remark: this.remark,
      properties: this.properties
    }
  }
}

export default DataSet