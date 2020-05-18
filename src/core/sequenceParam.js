/**
 * @description 序列化对象
 * @param {Object} obj 需要序列化的参数对象
 * @returns {String} 序列化后的字符串
 * @example
 * sequenceParam({a: 1, num: 20}) => "a=1&num=20"  
 */

function sequenceParam(obj) {
  let str = '';
  if (typeof obj !== 'object') {
    throw new Error('exportParam 过滤器参数要求类型为object');
  }
  for (const key in obj) {
    if (obj[key] !== undefined && obj[key] !== null) {
      str += key + '=' + obj[key] + '&';
    }
  }
  return str.substr(0, str.length - 1);
}

export default sequenceParam;