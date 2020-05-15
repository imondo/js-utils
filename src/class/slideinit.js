/**
 * 移动端上下左右滑动
 * @param {Object} options 滑动事件
 * 
 * @param {Function} options.up 向上滑动
 * @param {Function} options.down 向下滑动
 * @param {Function} options.left 向左滑动
 * @param {Function} options.right 向右滑动
 * 
 * @example
 * new SlideInit({
 *    up() { } // 手指向上滑动
 * })
 */
class SlideInit {

  constructor(options) {
    const _options = Object.assign(
      {
        up() {}, // 向上滑动
        down() {}, // 向下滑动
        left() {}, // 向左滑动
        right() {} // 向右滑动
      },
      options
    );
    this.init(_options);
  }

  /**
   * 初始化函数
   * @param {Object} options 
   */
  init(options) {
    let startx, starty;
    // 禁止微信下拉
    document.body.addEventListener('touchmove', (e) => {
      e.preventDefault()
    }, { passive: false });
    //手指接触屏幕
    document.addEventListener("touchstart", (e) => {
      startx = e.touches[0].pageX;
      starty = e.touches[0].pageY;
    }, false);
    //手指离开屏幕
    document.addEventListener("touchend", (e) => {
      let endx = e.changedTouches[0].pageX;
      let endy = e.changedTouches[0].pageY;
      const direction = this.getDirection(startx, starty, endx, endy);
      switch (direction) {
        case 0: // 0未滑动
          break;
        case 1: // 向上
          options.up();
          break;
        case 2: // 向下
          options.down();
          break;
        case 3: // 向左
          options.left();
          break;
        case 4: // 向右
          options.right();
          break;
        default:
      }
    }, false);
  }

  /**
   * 获得点击角度
   * @param {Number} angx 
   * @param {Number} angy 
   */
  getAngle(angx, angy) {
    return Math.atan2(angy, angx) * 180 / Math.PI;
  }

  /**
   * 根据起点终点返回方向
   * @param {Number} startx 点击屏幕开始 x 下标
   * @param {Number} starty 点击屏幕开始 y 下标
   * @param {Number} endx 点击屏幕结束 x 下标
   * @param {Number} endy 点击屏幕结束 y 下标 
   * @return {Number} 1 向上 2 向下 3 向左 4 向右 0 未滑动
   */
  getDirection(startx, starty, endx, endy) {
    const angx = endx - startx;
    const angy = endy - starty;
    let result = 0;
    // 如果滑动距离太短
    if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
      return result;
    }
    const angle = this.getAngle(angx, angy);
    if (angle >= -135 && angle <= -45) {
      result = 1;
    } else if (angle > 45 && angle < 135) {
      result = 2;
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
      result = 3;
    } else if (angle >= -45 && angle <= 45) {
      result = 4;
    }
    return result;
  }
}

export default SlideInit;