/**
 * @description 获取当前日期
 * @param {String} seperator 连接字符 默认 -
 * @returns {String} 当前日期
 * @example
 * getNowDate() => "2020-05-18"  
 */
function getNowDate(seperator = "-") {
  const showDate = new Date();
  const year = showDate.getFullYear();
  let month = showDate.getMonth() + 1;
  var strDate = showDate.getDate();
  if (month >= 1 && month <= 9) {
    month = '0' + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = '0' + strDate;
  }
  const currentdate = year + seperator + month + seperator + strDate;
  return currentdate;
}

export default getNowDate;