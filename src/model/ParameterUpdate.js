let ParameterUpdate = class Parameter {

  constructor () {
    this.name = ''
    this.regex = ''
    this.isBinary = false
    this.isRequired = false
    this.taskParameterDefKey = ''
    this.paramIntroduce = ''
  }

  toJSON () {
    return {
      name: this.name,
      regex: this.regex,
      isBinary: this.isBinary,
      isRequired: this.isRequired,
      taskParameterDefKey: this.taskParameterDefKey,
      paramIntroduce: this.paramIntroduce
    }
  }
}

export default ParameterUpdate