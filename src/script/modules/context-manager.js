export default class ContextManager {
  constructor(ctx, canvas) {
    if (ContextManager.instance) {
      return ContextManager.instance;
    }

    if (ctx == null) {
      console.log("Please provide the global context.");
    }

    this.ctx = ctx;
    this.canvas = canvas;
    this.canvasContext = canvas.getContext("2d");

    this.init();

    ContextManager.instance = this;
  }

  init() {
    this.bindMethods();
  }

  bindMethods() {
    this.updateScalingFactors = this.updateScalingFactors.bind(this);
    this.clearMouseState = this.clearMouseState.bind(this);
  }

  get XScaleFactor() {
    return this.ctx.XScaleFactor;
  }

  get YScaleFactor() {
    return this.ctx.YScaleFactor;
  }

  get isDrawing() {
    return this.ctx.isDrawing;
  }

  set isDrawing(state) {
    this.ctx.isDrawing = state;
  }

  get isDragging() {
    return this.ctx.isDragging;
  }

  set isDragging(state) {
    this.ctx.isDragging = state;
  }

  get canvasBackgroundColor() {
    return this.ctx.canvasBackgroundColor;
  }

  set canvasBackgroundColor(color) {
    this.ctx.canvasBackgroundColor = color;
    this.refreshActiveColor();
  }

  get activeColor() {
    const tool = this.ctx.selectedTool;
    if (tool === "eraser") {
      return this.ctx.canvasBackgroundColor;
    } else if (tool === "brush") {
      return this.ctx.brushColor;
    }
    return this.ctx.brushColor;
  }

  get brushColor() {
    return this.ctx.brushColor;
  }

  set brushColor(color) {
    this.ctx.brushColor = color;
    this.refreshActiveColor();
  }

  get selectedTool() {
    return this.ctx.selectedTool;
  }

  set selectedTool(tool) {
    this.ctx.selectedTool = tool;
    this.refreshActiveColor();
  }

  get brushSize() {
    return this.ctx.brushSize;
  }

  set brushSize(size) {
    this.ctx.brushSize = size;
    this.refreshBrushSize();
  }

  get canvasSize() {
    return this.canvas.getBoundingClientRect();
  }

  refreshActiveColor() {
    this.canvasContext.fillStyle = this.activeColor;
    this.canvasContext.strokeStyle = this.activeColor;
  }

  refreshBrushSize(){
    this.canvasContext.lineWidth = this.ctx.displayBrushSize;
  }

  updateScalingFactors() {
    let canvasSize = this.canvas.getBoundingClientRect();

    this.ctx.XScaleFactor = this.canvas.width / canvasSize.width;
    this.ctx.YScaleFactor = this.canvas.height / canvasSize.height;
  }

  clearMouseState() {
    this.ctx.isDrawing = false;
    this.ctx.isDragging = false;
  }
}
