let ParameterUpdate = class Parameter {

  constructor () {
    this.name = ''
    this.remark = ''
    this.regex = ''
    this.isBinary = false
    this.isRequired = false
    this.parameterKey = ''
  }

  toJSON () {
    return {
      name: this.name,
      remark: this.remark,
      regex: this.regex,
      isBinary: this.isBinary,
      isRequired: this.isRequired,
      parameterKey: this.parameterKey
    }
  }
}

export default ParameterUpdate