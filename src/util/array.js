export default {

  /**
   * 遍历数组的指定元素，统计满足元素的键=值的元素数量
   * @param array 要遍历的数组
   * @param fieldName 键名称
   * @param value 值
   */
  countWithFiledValue (array, fieldName, value) {
    let count = 0
    if (Array.isArray(array)) {
      array.forEach(item => {
        if (item[fieldName] === value) {
          count++
        }
      })
    }
    return count
  }

}