/**
 * @module Date/getFormData
 * @description 获取原生 form 表单数据
 * @param {String} formId form id
 * @return {Object} 返回表单数据
 * @example
 * getFormData('#form') => {name: 'Mondo', site: 'imondo.cn'}
 */
function getFormData(formId) {
  if (!formId) return
  try {
    var form = document.querySelector(formId)
    var formData = new FormData(form)
    var formDataJson = Object.fromEntries(formData.entries())
    return formData
  } catch (error) {
    return
  }
}
export default generateUUID;
