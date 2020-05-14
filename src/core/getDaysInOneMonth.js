/**
* @description 获取某月份的天数
* @param {String} year
* @param {String} month
* @return {Number} 某月份的天数
*
* @example
* getDaysInOneMonth({year: 2020, month: 5}) => 31
*/
function getDaysInOneMonth({ year, month }) {
  const _month = parseInt(month, 10);
  const d = new Date(year, _month, 0);
  return d.getDate();
}

export default getDaysInOneMonth;