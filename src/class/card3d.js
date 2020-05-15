/**
 * 卡片3d动画.
 * {@link https://imondo.cn/files/3d.html 查看效果}
 * @param { DOM } el 卡片dom集合
 * @param { DOM } boxEl 卡片盒子dom
 */

class Card3d {
  constructor(el, boxEl) {
    this.el = el;
    this.boxEl = boxEl;
    this.page = 0;

    this.configCss = [
      { deg: 0, origin: "center" }, // 中
      { deg: -90, origin: "bottom" }, // 下
      { deg: 180, origin: "center" }, // 中
      { deg: 90, origin: "top" } // 上
    ]
    this.group = [];

    const boxH = this.boxEl.clientHeight;
    this.translateZ = boxH / 2;
    this.boxEl.style.transform = `translateZ(-${this.translateZ}px) rotateX(0deg)`;

    const pageSize = el.length
    this.pageSize = pageSize;
    this.maxSize = pageSize - 1;
    this.init();
    this.initCss();
  }

  /**
   * 初始化事件
   * 让第一个，第二个卡片显示，以下的隐藏
   */
  init() {
    this.block({
      index: 1,
      hideNext: true
    });
  }

  /**
   * 初始化样式
   * 给每个卡片设置 transform 样式
   */
  initCss() {
    const { el: $els, configCss, translateZ } = this;
    this.group = this.sliceGroup($els);
    this.arrForch(this.group, function (item, index) {
      this.arrForch(item, function (el, i) {
        const config = configCss[i];
        const sym = i === 0 ? "" : "-";
        el.style.transform = `translateZ(${sym}${translateZ}px) rotateX(${config.deg}deg)`
        el.style.transformOrigin = `${config.origin}`
        // el.style.backfaceVisibility = 'hidden'
      })
    })
  }

  /**
   * 分割数组
   * @param {Array} data  原数组
   * @param {Number} size  每一个分割的数组长度
   */
  sliceGroup(data = [], size = 4) {
    const result = [];
    for (let i = 0, len = data.length; i < len; i += size) {
      result.push(Array.prototype.slice.call(data, i, i + size));
    }
    return result;
  }

  /**
   * 动画移动
   * @param {Function} callback 移动后回调函数
   */
  move(callback) {
    this.rotateX = 90 * this.page;
    const nextPage = this.page + 1;
    this.block({
      index: this.page
    });
    this.block({
      index: nextPage,
      hideNext: true
    });
    if (this.page === this.pageSize) return;
    this.boxEl.style.transform = `translateZ(-${this.translateZ}px) rotateX(${this.rotateX}deg)`
    callback && callback(this.el[this.page], this.page);
  }

  /**
   * 上滑动
   * @param {Function} callback 移动后回调函数
   */
  pageUp(callback) {
    if (this.page >= this.maxSize) {
      return;
    };
    this.page++
    this.move(callback);
  }

  /**
   * 下滑动
   * @param {Function} callback 移动后回调函数
   */
  pageDown(callback) {
    if (this.page <= 0) {
      return;
    }
    this.page--
    this.move(callback);
  }

  /**
   * DOM 元素对象循环
   * @param {Array} els DOM 元素集合
   * @param {Function} callback 循环回调
   */
  arrForch(els, callback) {
    const _this = this;
    Array.prototype.forEach.call(els, function () {
      callback.call(_this, ...arguments);
    })
  }

  /**
   * 对 DOM 元素设置 display 样式
   * @param {Number} index 元素个数下标
   * @param {Boolean} hideNext 是否该元素后面的兄弟元素都 display: none，默认值 true
   */
  block({ index, hideNext = false }) {
    if (hideNext) {
      this.arrForch(this.el, function (item, i) {
        this.el[i].style.opacity = index === i ? 1 : i > index ? 0 : 1;
      })
    } else {
      this.el[index].style.opacity = 1;
    }

  }
}