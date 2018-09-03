let LrcCreate = class LrcCreate {

  constructor() {
    this.intro = ''
    this.type = 0
    this.ipWhiteList = []
  }

  toJSON() {
    return {
      intro: this.intro,
      type: this.type,
      ipWhiteList: this.ipWhiteList
    }
  }
}

export default LrcCreate