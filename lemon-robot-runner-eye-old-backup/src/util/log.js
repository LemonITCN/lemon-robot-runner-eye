export default {
  debug (msg) {
    let arr = Array.prototype.slice.call(arguments)
    console.log.apply(console, arr)
  },
  info (msg) {
    let arr = Array.prototype.slice.call(arguments)
    console.info.apply(console, arr)
  },
  error (msg) {
    let arr = Array.prototype.slice.call(arguments)
    console.error.apply(console, arr)
  },
  warn (msg) {
    let arr = Array.prototype.slice.call(arguments)
    console.warn.apply(console, arr)
  }
}
