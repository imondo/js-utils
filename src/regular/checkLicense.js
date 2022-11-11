/**
 * @module Regular/checkLicense
* @description 校验统一社会信用代码
* @param {String} value 需要校验的值
* @param {Function} callback 回调函数
* @return {String} 错误信息
*
* @example
* checkLicense('91430100MA7GDNGR00')
* =>
* ''
*/
function checkLicense(value, callback) {
  let error = null
  if (!value || (!!value && value.length !== 18)) {
    error = new Error('社会信用代码长度错误!')
    if (callback) {
      error ? callback(error) : callback()
    } else {
      return error
    }
    return
  }
  var reg = /^([159Y]{1})([1239]{1})([0-9]{6})([0-9ABCDEFGHJKLMNPQRTUWXY]{9})([0-9ABCDEFGHJKLMNPQRTUWXY]{1})$/
  if (!reg.test(value)) {
    error = new Error('请输入正确的社会信用代码!')
  }
  // 不用I、O、S、V、Z
  var str = '0123456789ABCDEFGHJKLMNPQRTUWXY'
  var ws = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28]

  var codes = []
  var sum = 0
  codes[0] = value.substr(0, value.length - 1)
  codes[1] = value.substr(value.length - 1, value.length)

  for (var i = 0; i < codes[0].length; i++) {
    var Ancode = codes[0].charAt(i)
    var Ancodevalue = str.indexOf(Ancode)
    sum += Ancodevalue * ws[i]
  }
  var indexOfc18 = 31 - (sum % 31)
  // fix:  边界问题
  if (indexOfc18 === 31) {
    indexOfc18 = 0
  }
  var c18 = str.charAt(indexOfc18)
  if (c18 !== codes[1]) {
    error = new Error('社会信用代码有误!')
  }
  if (callback) {
    error ? callback(error) : callback()
  } else {
    return error
  }

}

export default checkLicense;