!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t);var a=function(){function e(){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),e.instance)return e.instance;e.instance=this}var t,n,a;return t=e,(n=[{key:"isLeftClick",value:function(e){return 0===e.button&&e.buttons<=1}},{key:"isScreenTouch",value:function(e){return e.changedTouches.length>=1}}])&&i(t.prototype,n),a&&i(t,a),e}();function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=function(){function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),e.instance)return e.instance;null==t&&console.log("Please provide the global context."),this.contextManager=t,this.canvasPainter=n,this.clickUtil=new a,this.init(),e.instance=this}var t,n,i;return t=e,(n=[{key:"bindMethods",value:function(){this.mouseDownHandler=this.mouseDownHandler.bind(this),this.mouseDragHandler=this.mouseDragHandler.bind(this),this.mouseUpHandler=this.mouseUpHandler.bind(this),this.clearMouseState=this.clearMouseState.bind(this),this.resizeHandler=this.resizeHandler.bind(this),this.touchStartHandler=this.touchStartHandler.bind(this),this.touchDragHandler=this.touchDragHandler.bind(this),this.touchEndHandler=this.touchEndHandler.bind(this),this.touchClearMouseState=this.touchClearMouseState.bind(this),this.resizeHandler=this.resizeHandler.bind(this)}},{key:"initializeDOMListeners",value:function(){var e=this.canvasPainter.canvas;e.addEventListener("mousedown",this.mouseDownHandler),document.addEventListener("mousemove",this.mouseDragHandler),e.addEventListener("mouseup",this.mouseUpHandler),document.addEventListener("mouseup",this.clearMouseState),window.addEventListener("resize",this.resizeHandler),e.addEventListener("touchstart",this.touchStartHandler),e.addEventListener("touchmove",this.touchDragHandler),e.addEventListener("touchend",this.touchEndHandler),window.addEventListener("orientationchange",this.resizeHandler)}},{key:"init",value:function(){this.bindMethods(),this.initializeDOMListeners()}},{key:"mouseDownHandler",value:function(e){this.contextManager.isDrawing=!0,this.canvasPainter.startPath(e.x,e.y)}},{key:"mouseUpHandler",value:function(e){var t=this.contextManager,n=t.isDrawing,i=t.isDragging,a=this.clickUtil.isLeftClick;n&&!i&&a(e)&&this.canvasPainter.drawPoint(e.x,e.y)}},{key:"mouseDragHandler",value:function(e){var t=this.contextManager.isDrawing,n=this.clickUtil.isLeftClick;t&&n(e)&&(this.contextManager.isDragging=!0,this.canvasPainter.drawLineTo(e.x,e.y))}},{key:"resizeHandler",value:function(e){setTimeout(this.contextManager.updateScalingFactors,400)}},{key:"touchStartHandler",value:function(e){e.preventDefault();var t=this.clickUtil.isScreenTouch;if(!this.contextManager.isDrawing&&t(e)){this.contextManager.isDrawing=!0;var n=e.targetTouches[0],i=n.clientX,a=n.clientY;this.canvasPainter.startPath(i,a)}}},{key:"touchDragHandler",value:function(e){e.preventDefault();var t=this.clickUtil.isScreenTouch;if(this.contextManager.isDrawing&&t(e)){this.contextManager.isDragging=!0;var n=e.targetTouches[0],i=n.clientX,a=n.clientY;this.canvasPainter.drawLineTo(i,a)}}},{key:"touchEndHandler",value:function(e){if(e.preventDefault(),this.contextManager.isDrawing&&!this.contextManager.isDragging){var t=e.changedTouches[0],n=t.clientX,i=t.clientY;this.canvasPainter.drawPoint(n,i)}this.touchClearMouseState(e)}},{key:"touchClearMouseState",value:function(e){e.targetTouches.length>0||this.clearMouseState()}},{key:"clearMouseState",value:function(){this.contextManager.clearMouseState()}}])&&s(t.prototype,n),i&&s(t,i),e}();function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var l=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),null!=e.instance)return e.instance;null==t&&console.log("Please provide the global context."),this.contextManager=t,this.init(),e.instance=this}var t,n,i;return t=e,(n=[{key:"bindMethods",value:function(){this.handleEraserSelection=this.handleEraserSelection.bind(this),this.handleBrushSelection=this.handleBrushSelection.bind(this)}},{key:"initializeDOMReferences",value:function(){this.tools=document.getElementsByClassName("tool"),this.eraserTool=document.getElementById("eraser"),this.brushTool=document.getElementById("brush")}},{key:"initializeDOMListeners",value:function(){this.eraserTool.addEventListener("click",this.handleEraserSelection),this.eraserTool.addEventListener("touchstart",this.handleEraserSelection),this.brushTool.addEventListener("click",this.handleBrushSelection),this.brushTool.addEventListener("touchstart",this.handleBrushSelection)}},{key:"initializeDOMState",value:function(){this.brushTool.classList.add("selected")}},{key:"init",value:function(){this.bindMethods(),this.initializeDOMReferences(),this.initializeDOMListeners(),this.initializeDOMState()}},{key:"clearSelectedTools",value:function(){for(var e=0;e<this.tools.length;e++)this.tools[e].classList.remove("selected")}},{key:"handleEraserSelection",value:function(e){e.preventDefault(),this.contextManager.clearMouseState(),this.clearSelectedTools(),this.contextManager.selectedTool="eraser",this.eraserTool.classList.add("selected")}},{key:"handleBrushSelection",value:function(e){e.preventDefault(),this.contextManager.clearMouseState(),this.clearSelectedTools(),this.contextManager.selectedTool="brush",this.brushTool.classList.add("selected")}}])&&o(t.prototype,n),i&&o(t,i),e}();function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var u=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),null!=e.instance)return e.instance;null==t&&console.log("Please provide the global context."),this.contextManager=t,this.init(),e.instance=this}var t,n,i;return t=e,(n=[{key:"bindMethods",value:function(){this.handleHueSliderChange=this.handleHueSliderChange.bind(this),this.handleMobileHueSliderChange=this.handleMobileHueSliderChange.bind(this),this.handleSaturationSliderChange=this.handleSaturationSliderChange.bind(this),this.handleLuminositySliderChange=this.handleLuminositySliderChange.bind(this),this.renderColor=this.renderColor.bind(this)}},{key:"initializeDOMReferences",value:function(){this.colorResult=document.getElementById("color-result"),this.mobileColorResult=document.getElementById("mobile-color-result"),this.hueRangeSlider=document.getElementById("hue-range-slider"),this.mobileHueRangeSlider=document.getElementById("mobile-hue-range-slider"),this.saturationRangeSlider=document.getElementById("saturation-range-slider"),this.luminosityRangeSlider=document.getElementById("luminosity-range-slider"),this.saturationGradient=document.getElementById("saturation-gradient"),this.luminosityGradient=document.getElementById("luminosity-gradient")}},{key:"initializeDOMListeners",value:function(){this.hueRangeSlider.oninput=this.handleHueSliderChange,this.mobileHueRangeSlider.oninput=this.handleMobileHueSliderChange,this.saturationRangeSlider.oninput=this.handleSaturationSliderChange,this.luminosityRangeSlider.oninput=this.handleLuminositySliderChange}},{key:"initializeDOMState",value:function(){this.hueRangeSlider.defaultValue=0,this.mobileHueRangeSlider.defaultValue=0,this.saturationRangeSlider.defaultValue=80,this.luminosityRangeSlider.defaultValue=60,this.hue=this.hueRangeSlider.value||0,this.saturation=this.saturationRangeSlider.value||80,this.luminosity=this.luminosityRangeSlider.value||60}},{key:"init",value:function(){this.bindMethods(),this.initializeDOMReferences(),this.initializeDOMListeners(),this.initializeDOMState()}},{key:"handleMobileHueSliderChange",value:function(e){this.hue=e.target.value,this.hueRangeSlider.value=this.hue,this.renderColor()}},{key:"handleHueSliderChange",value:function(e){this.hue=e.target.value,this.mobileHueRangeSlider.value=this.hue,this.renderColor()}},{key:"handleSaturationSliderChange",value:function(e){this.saturation=e.target.value,this.renderColor()}},{key:"handleLuminositySliderChange",value:function(e){this.luminosity=e.target.value,this.renderColor()}},{key:"generateSaturationGradient",value:function(e){for(var t="linear-gradient(to right, ",n=0;n<100;n+=10)t+="hsl(".concat(e,", ").concat(n,"%, 60%),");return t+="hsl(".concat(e,", 100%, 60%)")}},{key:"generateLuminosityGradient",value:function(e,t){for(var n="linear-gradient(to right, ",i=0;i<100;i+=10)n+="hsl(".concat(e,", ").concat(t,"%, ").concat(i,"%),");return n+="hsl(".concat(e,", ").concat(t,"%, 100%)")}},{key:"renderColor",value:function(){var e=this.hue,t=this.saturation,n=this.luminosity,i="hsl(".concat(e,", ").concat(t,"%, ").concat(n,"%)");this.colorResult.style.background=i,this.mobileColorResult.style.background=i,this.contextManager.brushColor=i,this.saturationGradient.style.background=this.generateSaturationGradient(e),this.luminosityGradient.style.background=this.generateLuminosityGradient(e,t)}}])&&c(t.prototype,n),i&&c(t,i),e}();function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var d=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),null!=e.instance)return e.instance;this.contextManager=t,this.init(),e.instance=this}var t,n,i;return t=e,(n=[{key:"bindMethods",value:function(){this.toggleSideBarHandler=this.toggleSideBarHandler.bind(this)}},{key:"initializeDOMReferences",value:function(){this.toggleButton=document.getElementById("hamburger-icon-container"),this.closeSidebar=document.getElementById("close-arrow-container"),this.sidebarAnchor=document.getElementById("sidebar-anchor"),this.sidebarContainer=document.getElementById("sidebar-container")}},{key:"initializeDOMListeners",value:function(){this.toggleButton.addEventListener("click",this.toggleSideBarHandler),this.toggleButton.addEventListener("touchstart",this.toggleSideBarHandler),this.closeSidebar.addEventListener("click",this.toggleSideBarHandler),this.closeSidebar.addEventListener("touchstart",this.toggleSideBarHandler)}},{key:"init",value:function(){this.bindMethods(),this.initializeDOMReferences(),this.initializeDOMListeners()}},{key:"toggleSideBarHandler",value:function(e){var t=this;e.preventDefault();var n,i=!1;window.innerWidth<800?(this.sidebarContainer.classList.remove("minified"),this.sidebarContainer.classList.toggle("expanded"),this.sidebarContainer.classList.contains("expanded")||(i=!0)):(this.sidebarContainer.classList.remove("expanded"),this.sidebarContainer.classList.toggle("minified"),this.sidebarContainer.classList.contains("minified")&&(i=!0)),i?n=setTimeout((function(){return t.sidebarContainer.scrollTop=0}),300):null!=n&&clearTimeout(n),setTimeout(this.contextManager.updateScalingFactors,400)}}])&&h(t.prototype,n),i&&h(t,i),e}();function g(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var f=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),null!=e.instance)return e.instance;null==t&&console.log("Please provide the global context."),this.contextManager=t,this.init(),e.instance=this}var t,n,i;return t=e,(n=[{key:"bindMethods",value:function(){this.handleBrushSizeChange=this.handleBrushSizeChange.bind(this)}},{key:"initializeDOMReferences",value:function(){this.brushSizeField=document.getElementById("brushSizeField")}},{key:"initializeDOMState",value:function(){var e=Number(this.brushSizeField.value)||20;this.contextManager.brushSize=e,this.brushSizeField.defaultValue=e,this.brushSizeField.oninput=this.handleBrushSizeChange}},{key:"init",value:function(){this.bindMethods(),this.initializeDOMReferences(),this.initializeDOMState()}},{key:"handleBrushSizeChange",value:function(e){var t=Number(e.target.value);this.contextManager.brushSize=t}}])&&g(t.prototype,n),i&&g(t,i),e}();function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var b=function(){function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),e.instance)return e.instance;null==t&&console.log("Please provide the global context."),this.ctx=t,this._canvas=n,this.canvasContext=n.getContext("2d"),this.init(),e.instance=this}var t,n,i;return t=e,(n=[{key:"init",value:function(){this.bindMathods()}},{key:"bindMathods",value:function(){this.startPath=this.startPath.bind(this),this.drawPoint=this.drawPoint.bind(this),this.drawLineTo=this.drawLineTo.bind(this),this.normalizeCoordinates=this.normalizeCoordinates.bind(this)}},{key:"startPath",value:function(e,t){var n=this.normalizeCoordinates(e,t),i=n.canvasX,a=n.canvasY;this.canvasContext.beginPath(),this.canvasContext.moveTo(i,a)}},{key:"drawPoint",value:function(e,t){var n=this.ctx.displayBrushSize,i=this.normalizeCoordinates(e,t),a=i.canvasX,s=i.canvasY;this.canvasContext.arc(a,s,n/2,0,2*Math.PI),this.canvasContext.fill()}},{key:"drawLineTo",value:function(e,t){var n=this.normalizeCoordinates(e,t),i=n.canvasX,a=n.canvasY;this.canvasContext.lineTo(i,a),this.canvasContext.stroke()}},{key:"normalizeCoordinates",value:function(e,t){return{canvasX:e=this.ctx.XScaleFactor*(e-this.canvas.offsetLeft),canvasY:t=this.ctx.YScaleFactor*(t-this.canvas.offsetTop)}}},{key:"canvas",get:function(){return this._canvas}}])&&v(t.prototype,n),i&&v(t,i),e}();function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var S=function(){function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),e.instance)return e.instance;null==t&&console.log("Please provide the global context."),this.ctx=t,this.canvas=n,this.canvasContext=n.getContext("2d"),this.init(),e.instance=this}var t,n,i;return t=e,(n=[{key:"init",value:function(){this.bindMethods()}},{key:"bindMethods",value:function(){this.updateScalingFactors=this.updateScalingFactors.bind(this),this.clearMouseState=this.clearMouseState.bind(this)}},{key:"refreshActiveColor",value:function(){this.canvasContext.fillStyle=this.activeColor,this.canvasContext.strokeStyle=this.activeColor}},{key:"refreshBrushSize",value:function(){this.canvasContext.lineWidth=this.ctx.displayBrushSize}},{key:"updateScalingFactors",value:function(){var e=this.canvas.getBoundingClientRect();this.ctx.XScaleFactor=this.canvas.width/e.width,this.ctx.YScaleFactor=this.canvas.height/e.height}},{key:"clearMouseState",value:function(){this.ctx.isDrawing=!1,this.ctx.isDragging=!1}},{key:"XScaleFactor",get:function(){return this.ctx.XScaleFactor}},{key:"YScaleFactor",get:function(){return this.ctx.YScaleFactor}},{key:"isDrawing",get:function(){return this.ctx.isDrawing},set:function(e){this.ctx.isDrawing=e}},{key:"isDragging",get:function(){return this.ctx.isDragging},set:function(e){this.ctx.isDragging=e}},{key:"canvasBackgroundColor",get:function(){return this.ctx.canvasBackgroundColor},set:function(e){this.ctx.canvasBackgroundColor=e,this.refreshActiveColor()}},{key:"activeColor",get:function(){var e=this.ctx.selectedTool;return"eraser"===e?this.ctx.canvasBackgroundColor:this.ctx.brushColor}},{key:"brushColor",get:function(){return this.ctx.brushColor},set:function(e){this.ctx.brushColor=e,this.refreshActiveColor()}},{key:"selectedTool",get:function(){return this.ctx.selectedTool},set:function(e){this.ctx.selectedTool=e,this.refreshActiveColor()}},{key:"brushSize",get:function(){return this.ctx.brushSize},set:function(e){this.ctx.brushSize=e,this.refreshBrushSize()}},{key:"canvasSize",get:function(){return this.canvas.getBoundingClientRect()}}])&&y(t.prototype,n),i&&y(t,i),e}(),m=document.getElementById("myCanvas"),k=m.getContext("2d"),C={isDrawing:!1,isDragging:!1,canvasBackgroundColor:"#f8f8f8",brushColor:"#000000",selectedTool:"brush",brushSize:20,XScaleFactor:1,YScaleFactor:1,get displayBrushSize(){return this.brushSize*(window.devicePixelRatio||1)}},p=new S(C,m),x=new b(C,m),M=(new r(p,x),new u(p));new l(p),new d(p),new f(p);m.width=window.screen.width*window.devicePixelRatio,m.height=window.screen.height*window.devicePixelRatio,p.updateScalingFactors(),m.style.background=C.canvasBackgroundColor,k.lineWidth=C.displayBrushSize,k.lineJoin="round",k.lineCap="round",M.renderColor()}]);