 /**
  * @description 不同奖项的获取概率不同
  * @param {Array} list 需要概率性的事物集合
  * @param {Array} probs 概率数组集合
  * @return {any} 概率性的事物
  *
  * @example
  * lotteryRandom([1, 2, 3], [0.5, 0.35, 0.15]) => 1
  */
 function lotteryRandom(list, probs) {
  let sum = 0;
  let factor = 0;

  for (let i = probs.length - 1; i >= 0; i--) {
    sum += probs[i]; // 统计概率总和
  }

  const random = Math.random() * sum;  // 生成概率随机数

  for (let i = probs.length - 1; i >= 0; i--) {
    factor += probs[i];
    if (random <= factor) {
      console.log(random, factor);
      return list[i];
    }
    
  }
  return null;
}

export default lotteryRandom;
