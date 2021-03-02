/**
* @description list 数据结构 转换成 树结构
* @param {Array} data 需要转换的数据
* @param {object} options 配置信息
* @param {String} id 节点 id
* @param {String} pid 父级节点 id
* @param {String} children 子树为节点对象的某个属性值
* @param {String|number} root 指定根节点 value
* @return {Array}
*
* @example
* formatTree([{id:1, pid: 0}, {id: 2, pid: 0}, {id: 3, pid: 1}])
* =>
* [ { id: 1, pid: 0 children: [ {id: 3, pid: 1} ] }, { id: 2, pid: 0 } ]
*/
function formatTree(data, options) {

  if (!Array.isArray(data)) {
    throw new Error('data is not `Array`')
  }

  const _options = Object.assign({}, {
    pid: 'pid',
    id: 'id',
    children: 'children',
    root: 0
  }, options);

  let parents = data.filter(p => p[_options.pid] === _options.root);
  let children = data.filter(c => c[_options.pid] !== _options.root);

  dataToTree(parents, children);

  function dataToTree(parents, children) {
    parents.forEach(p => {
      children.forEach((c, i) => {
        if (c[_options.pid] === p[_options.id]) {
          let _c = JSON.parse(JSON.stringify(children));
          _c.splice(i, 1);
          dataToTree([c], _c);

          if (p[_options.children]) {
            p[_options.children].push(c);
          } else {
            p[_options.children] = [c];
          }
        }
      })
    })
  }
  return parents;
}

export default formatTree;