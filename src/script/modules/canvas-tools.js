export default class CanvasToolController {
  constructor(contextManager) {
    if (CanvasToolController.instance != null) {
      return CanvasToolController.instance;
    }

    if (contextManager == null) {
      console.log("Please provide the global context.");
    }

    this.contextManager = contextManager;

    this.init();

    CanvasToolController.instance = this;
  }

  bindMethods() {
    this.handleEraserSelection = this.handleEraserSelection.bind(this);
    this.handleBrushSelection = this.handleBrushSelection.bind(this);
  }

  initializeDOMReferences() {
    this.tools = document.getElementsByClassName("tool");
    this.eraserTool = document.getElementById("eraser");
    this.brushTool = document.getElementById("brush");
  }

  initializeDOMListeners() {
    this.eraserTool.addEventListener("click", this.handleEraserSelection);
    this.eraserTool.addEventListener("touchstart", this.handleEraserSelection);

    this.brushTool.addEventListener("click", this.handleBrushSelection);
    this.brushTool.addEventListener("touchstart", this.handleBrushSelection);
  }

  initializeDOMState() {
    this.brushTool.classList.add("selected");
  }

  init() {
    this.bindMethods();
    this.initializeDOMReferences();
    this.initializeDOMListeners();
    this.initializeDOMState();
  }

  // Tool buttons

  clearSelectedTools() {
    for (var i = 0; i < this.tools.length; i++) {
      this.tools[i].classList.remove("selected");
    }
  }

  // Eraser tool

  handleEraserSelection(e) {
    e.preventDefault();
    this.contextManager.clearMouseState();
    this.clearSelectedTools();
    this.contextManager.selectedTool = "eraser";
    this.eraserTool.classList.add("selected");
  }

  // Brush tool

  handleBrushSelection(e) {
    e.preventDefault();
    this.contextManager.clearMouseState();
    this.clearSelectedTools();
    this.contextManager.selectedTool = "brush";
    this.brushTool.classList.add("selected");
  }
}
