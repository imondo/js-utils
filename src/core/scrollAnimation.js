/**
 * @description 动画滚动至目标位置
 * @param {Number} currentY 当前位置
 * @param {Number} targetY 目标位置
 * @example  scrollAnimation(0, 100)
 */
function scrollAnimation(currentY, targetY) {
  // 计算需要移动的距离
  let needScrollTop = targetY - currentY
  let _currentY = currentY
  setTimeout(() => {
    // 一次调用滑动帧数，每次调用会不一样
    const dist = Math.ceil(needScrollTop / 100)
    _currentY += dist
    window.scrollTo(_currentY, currentY)
    // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
    if (needScrollTop > 100 || needScrollTop < -100) {
      scrollAnimation(_currentY, targetY)
    } else {
      window.scrollTo(_currentY, targetY)
    }
  }, 1)
}

export default scrollAnimation;
