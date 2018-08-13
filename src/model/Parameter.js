let Parameter = class Parameter {

  constructor () {
    this.name = ''
    this.remark = ''
    this.isBinary = false
    this.isRequired = false
    this.template = ''
  }

  toJSON () {
    return {
      name: this.name,
      remark: this.remark,
      isBinary: this.isBinary,
      isRequired: this.isRequired,
      template: this.template
    }
  }
}

export default Parameter