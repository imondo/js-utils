/**
 * @description url 获取查询参数
 * @param {String} url
 * @returns {Object} ? 后的参数对象
 * @example
 * paramToObj("https://test.com?a=1&b=2") => { a: '1', b: '2' } 
 */
function paramToObj(url) {
  const search = url.split('?')[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/\+/g, ' ') +
    '"}'
  );
}

export default paramToObj;