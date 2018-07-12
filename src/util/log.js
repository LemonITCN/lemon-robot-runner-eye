export default {
  debug() {
    let arr = Array.prototype.slice.call(arguments)
    // eslint-disable-next-line
    console.log.apply(console, arr)
  },
  info() {
    let arr = Array.prototype.slice.call(arguments)
    // eslint-disable-next-line
    console.info.apply(console, arr)
  },
  error() {
    let arr = Array.prototype.slice.call(arguments)
    // eslint-disable-next-line
    console.error.apply(console, arr)
  },
  warn() {
    let arr = Array.prototype.slice.call(arguments)
    // eslint-disable-next-line
    console.warn.apply(console, arr)
  }
}
