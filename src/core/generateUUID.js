/**
* @description 生成UUID
* @return {String} 返回字符串
*
* @example
* generateUUID() => '026841df-27db-4ec6-b4e8-6a4c7ee7854f'
*/
function generateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
  });
  return uuid;
}

export default generateUUID;