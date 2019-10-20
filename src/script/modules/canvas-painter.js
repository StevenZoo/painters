export default class CanvasPainter {
  constructor(ctx, canvas) {
    if (CanvasPainter.instance) {
      return CanvasPainter.instance;
    }

    if (ctx == null) {
      console.log("Please provide the global context.");
    }

    this.ctx = ctx;
    this._canvas = canvas;
    this.canvasContext = canvas.getContext("2d");

    this.init();

    CanvasPainter.instance = this;
  }

  init() {
    this.bindMathods();
  }

  bindMathods() {
    this.startPath = this.startPath.bind(this);
    this.drawPoint = this.drawPoint.bind(this);
    this.drawLineTo = this.drawLineTo.bind(this);
    this.normalizeCoordinates = this.normalizeCoordinates.bind(this);
  }

  get canvas() {
    return this._canvas;
  }

  startPath(x, y) {
    const { canvasX, canvasY } = this.normalizeCoordinates(x, y);

    this.canvasContext.beginPath();
    this.canvasContext.moveTo(canvasX, canvasY);
  }

  drawPoint(x, y) {
    const { displayBrushSize } = this.ctx;
    const { canvasX, canvasY } = this.normalizeCoordinates(x, y);

    this.canvasContext.arc(
      canvasX,
      canvasY,
      displayBrushSize / 2,
      0,
      Math.PI * 2
    );
    this.canvasContext.fill();
  }

  drawLineTo(x, y) {
    const { canvasX, canvasY } = this.normalizeCoordinates(x, y);

    this.canvasContext.lineTo(canvasX, canvasY);
    this.canvasContext.stroke();
  }

  // Map screen coordinates to canvas coordinates
  normalizeCoordinates(x, y) {
    x = this.ctx.XScaleFactor * (x - this.canvas.offsetLeft);
    y = this.ctx.YScaleFactor * (y - this.canvas.offsetTop);
    return { canvasX: x, canvasY: y };
  }
}
