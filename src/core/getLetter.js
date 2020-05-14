/**
* @description 生成26个字母
* @return {Number} 26个字母数组
*
* @example
* getLetter() => 'A, B, C ... Z'
*/
function getLetter() {
  let _ch = 'A';
  let letters = [];
  for (let i = 0; i < 26; i++) {
    letters.push(String.fromCharCode(_ch.charCodeAt(0) + i));
  }
  return letters;
}

export default getLetter;