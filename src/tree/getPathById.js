/**
* @module Tree/getPathById
* @description 根据子节点 id 获取 节点路径
* @param {Array} data 树型结构数据
* @param {string} id 子节点id
* @return {Array}
*
* @example
* getPathById([{"id":"1","child":[{"id":"1_1","child":[{"id":"1_2","child":[{"id":"1_3"}]}]}]}], '1_3')
* =>
* ['1_3', '1_2', '1_1', '1']
*/
function getPathById(data, id) {

  if (!Array.isArray(data)) {
    throw new Error('data is not `Array`')
  }
  let currentId = id  // 当前id
  let arr = [] // 定义数组，存放当前id的直系父ids
  function getParentsIds(data) {
      for (let i = 0; i < data.length; i++) {
          let temp = data[i]
          if (temp.id == currentId) {
              arr.push(temp.id);
              return 1
          }
          if (temp && temp.child && temp.child.length > 0) {
              let t = getParentsIds(temp.child)
              if (t == 1) {
                  arr.push(temp.id)
                  return 1
              }
          }
      }
  }
  getParentsIds(list)
  return arr;
}

export default getPathById;