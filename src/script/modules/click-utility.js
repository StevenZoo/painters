// Click Utility

export default class ClickUtils {
  constructor() {
    if (ClickUtils.instance) {
      return ClickUtils.instance;
    }

    ClickUtils.instance = this;
  }

  isLeftClick(e) {
    return e.button === 0 && e.buttons <= 1;
  }

  isScreenTouch(e) {
    return e.changedTouches.length >= 1;
  }
}
