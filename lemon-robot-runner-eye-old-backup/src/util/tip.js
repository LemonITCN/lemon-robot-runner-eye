import { Notification, Message } from 'element-ui'

export default {
  notification (type, title, msg) {
    Notification({
      title: title,
      message: msg,
      type: type
    })
  },
  notification_success (title, msg) {
    this.notification('success', title, msg)
  },
  notification_info (title, msg) {
    this.notification('info', title, msg)
  },
  notification_warn (title, msg) {
    this.notification('warning', title, msg)
  },
  notification_error (title, msg) {
    this.notification('error', title, msg)
  },
  message (type, msg) {
    Message({
      message: msg,
      type: type,
      showClose: true
    })
  },
  message_success (msg) {
    this.message('success', msg)
  },
  message_info (msg) {
    this.message('info', msg)
  },
  message_warn (msg) {
    this.message('warning', msg)
  },
  message_error (msg) {
    this.message('error', msg)
  }
}
