/**
 * @description 获取 url 参数
 * @param {String} query url query 参数字符串 
 * @return {Object} 参数对象
 *
 * @example
 * getUrlQuery("test.com?a=1&b=2") => {a: 1, b: 2}
 */
function getUrlQuery(query) {
  var pattern = /(\w+)=(\w+)/ig; // 定义正则表达式
  var parames = {}; // 定义数组
  query.replace(pattern, function (a, b, c) {
    parames[b] = c;
  });
  return parames;
}

export default getUrlQuery
