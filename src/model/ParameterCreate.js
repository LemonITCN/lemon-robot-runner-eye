let ParameterCreate = class Parameter {

  constructor (taskKey) {
    this.name = ''
    this.remark = ''
    this.regex = ''
    this.isBinary = false
    this.isRequired = false
    this.taskKey = taskKey
    this.paramIntroduce = ''
  }

  toJSON () {
    return {
      name: this.name,
      remark: this.remark,
      regex: this.regex,
      isBinary: this.isBinary,
      isRequired: this.isRequired,
      taskKey: this.taskKey,
      paramIntroduce: this.paramIntroduce
    }
  }
}

export default ParameterCreate