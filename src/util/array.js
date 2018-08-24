/**
 * 判断指定的数组中是否存在这个元素
 * @param array 要查询的数组
 * @param value 要查询的元素
 * @returns {boolean} 是否存在的布尔值
 */
let containsInArray = (array, value) => {
  if (Array.isArray(array)) {
    return array.indexOf(value) >= 0
  }
  return false
}

/**
 * 从数组中删除元素
 * @param array 数组
 * @param value 要删除的元素
 */
let removeFromArray = (array, value) => {
  if (Array.isArray(array)) {
    let index = array.indexOf(value)
    while (index >= 0) {
      array.splice(index, 1)
      index = array.indexOf(value)
    }
  }
}

/**
 * 遍历数组的指定元素，统计满足元素的键=值的元素数量
 * @param array 要遍历的数组
 * @param fieldName 键名称
 * @param ignoreIndexArr 要忽略的索引的数组
 * @param value 值
 */
let countWithFiledValue = (array, fieldName, value, ignoreIndexArr) => {
  let count = 0
  if (Array.isArray(array)) {
    array.forEach((item, index) => {
      if (!ignoreIndexArr || !ignoreIndexArr.includes(index)) {
        // 不是忽略范围内的
        if (item[fieldName] === value) {
          count++
        }
      }
    })
  }
  return count
}

export default {
  containsInArray,
  removeFromArray,
  countWithFiledValue,
}