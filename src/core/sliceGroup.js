/**
 * 分割数组
 * @param {Array} data  原数组
 * @param {Number} size  每一个分割的数组长度
 * @return {Array} 分割后的数组
 *
 * @example
 * sliceGroup([1,2,3,4,5], 2) => [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
 */
function sliceGroup(data = [], size) {
  if (!size) return data;
  const result = [];
  for (let i = 0, len = data.length; i < len; i += size) {
    result.push(Array.prototype.slice.call(data, i, i + size));
  }
  return result;
}

export default sliceGroup;