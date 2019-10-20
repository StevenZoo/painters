import ClickUtils from "./click-utility.js";

export default class IOHandler {
  constructor(contextManager, canvasPainter) {
    if (IOHandler.instance) {
      return IOHandler.instance;
    }

    if (contextManager == null) {
      console.log("Please provide the global context.");
    }

    this.contextManager = contextManager;
    this.canvasPainter = canvasPainter;

    this.clickUtil = new ClickUtils();

    this.init();

    IOHandler.instance = this;
  }

  bindMethods() {
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
    this.mouseDragHandler = this.mouseDragHandler.bind(this);
    this.mouseUpHandler = this.mouseUpHandler.bind(this);
    this.clearMouseState = this.clearMouseState.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);
    this.touchStartHandler = this.touchStartHandler.bind(this);
    this.touchDragHandler = this.touchDragHandler.bind(this);
    this.touchEndHandler = this.touchEndHandler.bind(this);
    this.touchClearMouseState = this.touchClearMouseState.bind(this);
    this.resizeHandler = this.resizeHandler.bind(this);
  }

  initializeDOMListeners() {
    let canvas = this.canvasPainter.canvas;

    canvas.addEventListener("mousedown", this.mouseDownHandler);
    document.addEventListener("mousemove", this.mouseDragHandler);
    canvas.addEventListener("mouseup", this.mouseUpHandler);
    document.addEventListener("mouseup", this.clearMouseState);
    window.addEventListener("resize", this.resizeHandler);

    canvas.addEventListener("touchstart", this.touchStartHandler);
    canvas.addEventListener("touchmove", this.touchDragHandler);
    canvas.addEventListener("touchend", this.touchEndHandler);
    window.addEventListener("orientationchange", this.resizeHandler);
  }

  init() {
    this.bindMethods();
    this.initializeDOMListeners();
  }

  // Core Drawing functionality

  mouseDownHandler(e) {
    this.contextManager.isDrawing = true;
    this.canvasPainter.startPath(e.x, e.y);
  }

  mouseUpHandler(e) {
    const { isDrawing, isDragging } = this.contextManager;
    const { isLeftClick } = this.clickUtil;

    if (isDrawing && !isDragging && isLeftClick(e)) {
      this.canvasPainter.drawPoint(e.x, e.y);
    }
  }

  mouseDragHandler(e) {
    const { isDrawing } = this.contextManager;
    const { isLeftClick } = this.clickUtil;

    if (isDrawing && isLeftClick(e)) {
      this.contextManager.isDragging = true;

      this.canvasPainter.drawLineTo(e.x, e.y);
    }
  }

  resizeHandler(e) {
    setTimeout(this.contextManager.updateScalingFactors, 400);
  }

  touchStartHandler(e) {
    e.preventDefault();

    const { isScreenTouch } = this.clickUtil;

    if (this.contextManager.isDrawing) {
      return;
    }

    if (isScreenTouch(e)) {
      this.contextManager.isDrawing = true;
      var { clientX: x, clientY: y } = e.targetTouches[0];
      this.canvasPainter.startPath(x, y);
    }
  }

  touchDragHandler(e) {
    e.preventDefault();

    const { isScreenTouch } = this.clickUtil;

    if (this.contextManager.isDrawing && isScreenTouch(e)) {
      this.contextManager.isDragging = true;
      var { clientX: x, clientY: y } = e.targetTouches[0];
      this.canvasPainter.drawLineTo(x, y);
    }
  }

  touchEndHandler(e) {
    e.preventDefault();

    if (this.contextManager.isDrawing && !this.contextManager.isDragging) {
      var { clientX: x, clientY: y } = e.changedTouches[0];
      this.canvasPainter.drawPoint(x, y);
    }

    this.touchClearMouseState(e);
  }

  touchClearMouseState(e) {
    if (e.targetTouches.length > 0) {
      return;
    }

    this.clearMouseState();
  }

  clearMouseState() {
    this.contextManager.clearMouseState();
  }
}
