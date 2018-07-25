export default {

  /**
   * unix时间戳转本地时间字符串
   * @param time 时间戳数字，精确到毫秒（13位）
   * @param format 本地时间字符串格式，如：yyyy-MM-dd hh:mm:ss
   * @returns {string} 本地时间字符串
   */
  unixTimeStampToLocalStr (time, format) {
    let dateObj = new Date(time)
    let info = {
      'M+': dateObj.getMonth() + 1, //月份
      'd+': dateObj.getDate(), //日
      'h+': dateObj.getHours(), //小时
      'm+': dateObj.getMinutes(), //分
      's+': dateObj.getSeconds(), //秒
      'q+': Math.floor((dateObj.getMonth() + 3) / 3), //季度
      'S': dateObj.getMilliseconds() //毫秒
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (dateObj.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in info)
      if (new RegExp('(' + k + ')').test(format)) format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (info[k]) : (('00' + info[k]).substr(('' + info[k]).length)))
    return format
  }

}