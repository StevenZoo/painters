export default class BrushSizeController {
  constructor(contextManager) {
    if (BrushSizeController.instance != null) {
      return BrushSizeController.instance;
    }

    if (contextManager == null) {
      console.log("Please provide the global context.");
    }

    this.contextManager = contextManager;

    this.init();

    BrushSizeController.instance = this;
  }

  bindMethods() {
    this.handleBrushSizeChange = this.handleBrushSizeChange.bind(this);
  }

  initializeDOMReferences() {
    this.brushSizeField = document.getElementById("brushSizeField");

  }

  initializeDOMState() {
    let brushSize = Number(this.brushSizeField.value) || 20;
    this.contextManager.brushSize = brushSize;
    this.brushSizeField.defaultValue = brushSize;
    this.brushSizeField.oninput = this.handleBrushSizeChange;
  }

  init() {
    this.bindMethods();
    this.initializeDOMReferences();
    this.initializeDOMState();
  }

  handleBrushSizeChange(e) {
    let brushSize = Number(e.target.value);
    this.contextManager.brushSize = brushSize;
  }
}
