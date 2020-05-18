/**
 * @description 中文字符串转成utf8
 * @param {String} str 需要转换的中文字符
 * @returns {String} utf-8字符
 * @example
 * toUTF8("中文") => [ 228, 184, 173, 230, 150, 135 ]  
 */
function toUTF8(str) {
	const result = [];

	let k = 0;
	for (let i = 0; i < str.length; i++) {
		const j = encodeURI(str[i]);
		if (j.length === 1) {
			// 未转换的字符
			result[k++] = j.charCodeAt(0);
		} else {
			// 转换成%XX形式的字符
			const bytes = j.split('%');
			for (let l = 1; l < bytes.length; l++) {
				result[k++] = parseInt('0x' + bytes[l]);
			}
		}
	}
	return result;
}

export default toUTF8;