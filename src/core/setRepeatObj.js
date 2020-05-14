/**
* @description 将数组重复元素归类组装成树形结构
* @param {Array} data 需要组装的数据
* @param {String} repeatKey 重复元素的key 
* @param {String} majorKey 归类到重复元素的key
* @return {Array} 树形结构
*
* @example
* setRepeatObj({data: [{name:1, area: 1}, {area: 1, name: 2}]})
* =>
* [ { area: '1', name: [ 1, 2 ] } ]
*/
function setRepeatObj({ data, repeatKey = 'area', majorKey = 'name' }) {
  if (!Array.isArray(data)) return data;
  let _arr = data;
  let m = {}
  for (let i = 0; i < _arr.length; i++) {
    let t = _arr[i]
    if (!m[t[repeatKey]]) {
      m[t[repeatKey]] = []
    }
    m[t[repeatKey]].push(t[majorKey])
  }
  let arrs = []
  for (let key in m) {
    arrs.push({ [repeatKey]: key, [majorKey]: m[key] })
  }
  return arrs;
}

console.log(setRepeatObj({ data: [{ name: 1, area: 1 }, { name: 2, area: 1 }] }))

// export default setRepeatObj;