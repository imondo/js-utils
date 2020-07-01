/**
 * @description 是否为整数
 * @param {any} number 需要判断的参数
 * @return {boolean} true | false
 *
 * @example
 * isInteger(3) => true
 * isInteger(3.3) => false
 * isInteger('') => false
 * isInteger('3') => false
 * isInteger(true) => false
 * isInteger([]) => false
 */

function isInteger(number) {
  return Math.floor(number) === number;
}


export default isInteger;