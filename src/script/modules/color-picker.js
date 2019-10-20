export default class ColorPicker {
  // Color Picker Widget
  constructor(contextManager) {
    if (ColorPicker.instance != null) {
      return ColorPicker.instance;
    }

    if (contextManager == null) {
      console.log("Please provide the global context.");
    }

    this.contextManager = contextManager;

    this.init();

    ColorPicker.instance = this;
  }

  bindMethods() {
    this.handleHueSliderChange = this.handleHueSliderChange.bind(this);
    this.handleMobileHueSliderChange = this.handleMobileHueSliderChange.bind(this);
    this.handleSaturationSliderChange = this.handleSaturationSliderChange.bind(
      this
    );
    this.handleLuminositySliderChange = this.handleLuminositySliderChange.bind(
      this
    );
    this.renderColor = this.renderColor.bind(this);
  }

  initializeDOMReferences() {
    this.colorResult = document.getElementById("color-result");
    this.mobileColorResult = document.getElementById("mobile-color-result");
    this.hueRangeSlider = document.getElementById("hue-range-slider");
    this.mobileHueRangeSlider = document.getElementById("mobile-hue-range-slider");
    this.saturationRangeSlider = document.getElementById(
      "saturation-range-slider"
    );
    this.luminosityRangeSlider = document.getElementById(
      "luminosity-range-slider"
    );
    this.saturationGradient = document.getElementById("saturation-gradient");
    this.luminosityGradient = document.getElementById("luminosity-gradient");
  }

  initializeDOMListeners() {
    this.hueRangeSlider.oninput = this.handleHueSliderChange;
    this.mobileHueRangeSlider.oninput = this.handleMobileHueSliderChange;
    this.saturationRangeSlider.oninput = this.handleSaturationSliderChange;
    this.luminosityRangeSlider.oninput = this.handleLuminositySliderChange;
  }

  initializeDOMState() {
    this.hueRangeSlider.defaultValue = 0;
    this.mobileHueRangeSlider.defaultValue = 0;
    this.saturationRangeSlider.defaultValue = 80;
    this.luminosityRangeSlider.defaultValue = 60;

    this.hue = this.hueRangeSlider.value || 0;
    this.saturation = this.saturationRangeSlider.value || 80;
    this.luminosity = this.luminosityRangeSlider.value || 60;
  }

  init() {
    this.bindMethods();
    this.initializeDOMReferences();
    this.initializeDOMListeners();
    this.initializeDOMState();
  }

  handleMobileHueSliderChange(e) {
    this.hue = e.target.value;
    this.hueRangeSlider.value = this.hue;
    this.renderColor();
  }

  handleHueSliderChange(e) {
    this.hue = e.target.value;
    this.mobileHueRangeSlider.value = this.hue;
    this.renderColor();
  }


  handleSaturationSliderChange(e) {
    this.saturation = e.target.value;
    this.renderColor();
  }

  handleLuminositySliderChange(e) {
    this.luminosity = e.target.value;
    this.renderColor();
  }

  generateSaturationGradient(hue) {
    let gradient = "linear-gradient(to right, ";
    for (var i = 0; i < 100; i += 10) {
      gradient += `hsl(${hue}, ${i}%, 60%),`;
    }
    gradient += `hsl(${hue}, 100%, 60%)`;

    return gradient;
  }

  generateLuminosityGradient(hue, saturation) {
    let gradient = "linear-gradient(to right, ";
    for (var i = 0; i < 100; i += 10) {
      gradient += `hsl(${hue}, ${saturation}%, ${i}%),`;
    }
    gradient += `hsl(${hue}, ${saturation}%, 100%)`;

    return gradient;
  }

  renderColor() {
    const hue = this.hue;
    const saturation = this.saturation;
    const luminosity = this.luminosity;

    var hslColor = `hsl(${hue}, ${saturation}%, ${luminosity}%)`;
    this.colorResult.style.background = hslColor;
    this.mobileColorResult.style.background = hslColor;
    this.contextManager.brushColor = hslColor;

    this.saturationGradient.style.background = this.generateSaturationGradient(
      hue
    );
    this.luminosityGradient.style.background = this.generateLuminosityGradient(
      hue,
      saturation
    );
  }
}
