/**
 * @description 生成小于 10 的数字前加 0
 * @param {String|Number} n 数字或字符串
 * @return {String}
 *
 * @example
 * formatNumberZero('1') => '01'
 * formatNumberZero(10) => '10'
 */
function formatNumberZero(n) {
  n = n.toString()
  return n[1] ? n : '0' + n;
}

export default formatNumberZero;