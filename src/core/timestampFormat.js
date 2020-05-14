/**
* @description 时间转换成 刚刚，几分钟前 描述
* @param {String} dateTimeStamp 时间戳
* @return {String} 刚刚， 2分钟前
*
* @example
* timestampFormat(new Date().getTime()) => '刚刚'
*/

function timestampFormat(dateTimeStamp) {
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const halfamonth = day * 15;
  const month = day * 30;

  const now = new Date().getTime();
  let diffValue = now - dateTimeStamp;
  const monthC = diffValue / month;
  const weekC = diffValue / (7 * day);
  const dayC = diffValue / day;
  const hourC = diffValue / hour;
  const minC = diffValue / minute;
  const _date = new Date(dateTimeStamp);
  let result = '';
  if (dayC >= 1) {
    let year = _date.getFullYear();
    let month = _date.getMonth() + 1;
    let day = _date.getDate();
    result = [year, month, day].map(formatNumber).join('-');
  } else if (hourC >= 1) {
    result = parseInt(hourC) + '小时前';
  } else if (minC > 1) {
    result = parseInt(minC) + '分钟前';
  } else {
    result = '刚刚';
  }
  return result;
}

console.log(timestampFormat(new Date().getTime()))

// export default timestampFormat;