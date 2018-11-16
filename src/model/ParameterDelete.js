let ParameterDelete = class Parameter {

  constructor(parameterKey) {
    this.parameterKey = parameterKey
  }

  toJSON() {
    return {
      parameterKey: this.parameterKey,
    }
  }
}

export default ParameterDelete