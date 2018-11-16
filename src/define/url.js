export default {
    BASE_URL() {
        return localStorage.connector_address
    },
    WEB_SOCKET: '/websocket',
    LRC: {
        CREATE: '/lrc/create',
        DELETE: '/lrc/delete',
        UPDATE: '/lrc/update',
        ACTIVE: '/lrc/active',
        HEARTBEAT: '/lrc/heartbeat',
        LIST: '/lrc/list'
    },
    TASK: {
        CREATE: '/task/create',
        DELETE: '/task/delete',
        RENAME: '/task/rename',
        LIST: '/task/list',
        INSTRUCTION: {
            CREATE: '/task/instruction/create',
            DELETE: '/task/instruction/delete',
            RENAME: '/task/instruction/rename',
            SAVE_SCRIPT: '/task/instruction/saveScript',
            GET: '/task/instruction/get',
            LIST: '/task/instruction/list'
        },
        PARAMETER: {
            CREATE: '/task/parameter/create',
            DELETE: '/task/parameter/delete',
            UPDATE: '/task/parameter/update',
            LIST: '/task/parameter/list'
        }
    },
    PLUGIN: {
        UPLOAD: '/plugin/upload',
        DELETE: '/plugin/delete',
        LIST: '/plugin/list'
    }
}