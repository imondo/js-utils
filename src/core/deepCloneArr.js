/**
 * @description 深拷贝数组
 * @param {Array} data 数组
 * @return {Array}
 *
 * @example
 * deepCloneArr([{a: 1}]) => [{a: 1}]
 */
function deepCloneArr(data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] !== 'object') {
      arr.push(data[i]);
    } else {
      arr.push(ObjClone(data[i]));
    }
  }
  return arr;
}

function ObjClone(data) {
  let obj = {};
  for (let i in data) {
    obj[i] = data[i];
  }
  return obj;
}

export default deepCloneArr;