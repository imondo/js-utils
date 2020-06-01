/**
* @description 获取对象的属性值
* @param {object} object 需要获取值的对象
* @param {string} path 需要获取值的属性路径
* @return {any} 任意值
*
* @example
* const object = { 'a': { 'b': { 'c': 3 } } }
* getObjVal(object, "a.b.c") => 3
*/
function getObjVal(object, path) {
  const result = object == null ? undefined : getPath(object, path);
  
  function getPath(object, path) {
    path = path.split(".");

    let index = 0
    const length = path.length

    while (object != null && index < length) {
      object = object[path[index++]]
    }
    return (index && index == length) ? object : undefined;
  }
  return result;
}

export default getObjVal;
