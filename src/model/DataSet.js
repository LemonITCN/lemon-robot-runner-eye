let DataSet = class DataSet {

  constructor (remark) {
    this.properties = []
    this.remark = remark
  }

  toJSON() {
    return {
      remark: this.remark,
      properties: this.properties
    }
  }
}

export default DataSet