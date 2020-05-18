/**
 * @description 对数字保留小数点后几位
 * @param {String|Number} value 需要保留小数点的数值
 * @param {Number} num 保留小数点后几位 默认 2 位
 * @returns {String} 保留后的数值字符串
 * @example
 * toFixed(0.3358) => "0.34"  
 * toFixed('0.3358') => "0.34"  
 */

function toFixed(value, num) {
  const len = num || 2;
  const adjust = value >= 0 ? 0.5 : -0.5;
  const integer = String(value).includes('.');
  if (!integer) {
    return value.toFixed(len);
  }
  const numberFixed = (parseInt(value * Math.pow(10, len) + adjust) / Math.pow(10, len)).toString();
  const dithering = numberFixed.split('.')[1];
  // 补0
  if (dithering.length < len) {
    return numberFixed + `0`;
  }
  return numberFixed;
}

export default toFixed;