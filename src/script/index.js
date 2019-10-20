"use strict";

import IOHandler from "./modules/IOHandler.js";
import CanvasToolController from "./modules/canvas-tools.js";
import ColorPicker from "./modules/color-picker.js";
import SidebarController from "./modules/sidebar.js";
import BrushSizeController from "./modules/brush-size.js";
import CanvasPainter from "./modules/canvas-painter.js";
import ContextManager from "./modules/context-manager.js";

const canvas = document.getElementById("myCanvas");
const canvasContext = canvas.getContext("2d");

const ctx = {
  isDrawing: false,
  isDragging: false,
  canvasBackgroundColor: "#f8f8f8",
  brushColor: "#000000",
  selectedTool: "brush",
  brushSize: 20,
  XScaleFactor: 1,
  YScaleFactor: 1,
  get displayBrushSize() {
    return this.brushSize * (window.devicePixelRatio || 1);
  }
};

const contextManager = new ContextManager(ctx, canvas);
const canvasPainter = new CanvasPainter(ctx, canvas);
const ioHandler = new IOHandler(contextManager, canvasPainter);
const colorPicker = new ColorPicker(contextManager);
const canvasToolController = new CanvasToolController(contextManager);
const sidebarController = new SidebarController(contextManager);
const brushSizeController = new BrushSizeController(contextManager);

function initializeCanvasSize() {
  canvas.width = window.screen.width * window.devicePixelRatio;
  canvas.height = window.screen.height * window.devicePixelRatio;

  contextManager.updateScalingFactors();
}

function initializeCanvasSyles() {
  canvas.style.background = ctx.canvasBackgroundColor;
  canvasContext.lineWidth = ctx.displayBrushSize;
  canvasContext.lineJoin = "round";
  canvasContext.lineCap = "round";

  colorPicker.renderColor();
}

function initializeCanvas() {
  initializeCanvasSize();
  initializeCanvasSyles();
}

initializeCanvas();
