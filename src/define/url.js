export default {
  BASE_URL () {
    return localStorage.connector_address
  },
  WEB_SOCKET: '/websocket',
  LRC: {
    ACTIVE: '/lrc/active'
  },
  TASK: {
    CREATE: '/task/create',
    DELETE: '/task/delete',
    UPDATE: '/task/update',
    RENAME: '/task/rename',
    UPLOAD_PARAMETER_BIN: '/task/parameter-bin',
    GET: '/task/get',
    LIST: '/task/list',
    INSTRUCTION: {
      CREATE: '/task/instruction/create',
      DELETE: '/task/instruction/delete',
      REKEY: '/task/instruction/rekey',
      SAVE_SCRIPT: '/task/instruction/saveScript',
      GET: '/task/instruction/get',
      LIST: '/task/instruction/list'
    }
  },
  PLUGIN: {
    UPLOAD: '/plugin/upload',
    LIST: '/plugin/list'
  }
}