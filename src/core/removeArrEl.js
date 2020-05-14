
/**
* @description 数组删除元素 返回删除元素的数组
* @param {Array} data 原数组
* @param {String} ele 元素
* @param {String} key 对象key
* @return {Array} 返回删除元素的数组
*
* @example
* removeArrEl({data: [{a:1}, {b: 2}], ele: 2, key: "b"}) => [ { a: 1 } ]
*/
function removeArrEl({ data, ele, key }) {
  if (!Array.isArray(data)) { return data; }
  let isObj = false;
  for (let val of data) {
    if (val instanceof Object) {
      isObj = true;
    }
  }

  if (isObj) {
    let _index = data.findIndex(v => v[key] === ele);
    data.splice(_index, 1);
  } else {
    let _index = data.findIndex(v => v === ele);
    data.splice(_index, 1);
  }
  return data;
}


export default removeArrEl;