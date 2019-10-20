export default class SidebarController {
  constructor(contextManager) {
    if (SidebarController.instance != null) {
      return SidebarController.instance;
    }

    this.contextManager = contextManager;

    this.init();

    SidebarController.instance = this;
  }

  bindMethods() {
    this.toggleSideBarHandler = this.toggleSideBarHandler.bind(this);
  }

  initializeDOMReferences() {
    this.toggleButton = document.getElementById("hamburger-icon-container");
    this.closeSidebar = document.getElementById("close-arrow-container");
    this.sidebarAnchor = document.getElementById("sidebar-anchor");
    this.sidebarContainer = document.getElementById("sidebar-container");
  }

  initializeDOMListeners() {
    this.toggleButton.addEventListener("click", this.toggleSideBarHandler);
    this.toggleButton.addEventListener("touchstart", this.toggleSideBarHandler);

    this.closeSidebar.addEventListener("click", this.toggleSideBarHandler);
    this.closeSidebar.addEventListener("touchstart", this.toggleSideBarHandler);
  }

  init() {
    this.bindMethods();
    this.initializeDOMReferences();
    this.initializeDOMListeners();
  }

  toggleSideBarHandler(e) {
    e.preventDefault();
    var windowWidth = window.innerWidth;
    var isMinimizing = false;
    var scrollToTopEvent;

    if (windowWidth < 800) {
      this.sidebarContainer.classList.remove("minified");
      this.sidebarContainer.classList.toggle("expanded");

      if (!this.sidebarContainer.classList.contains("expanded")) {
        isMinimizing = true;
      }
    } else {
      this.sidebarContainer.classList.remove("expanded");
      this.sidebarContainer.classList.toggle("minified");

      if (this.sidebarContainer.classList.contains("minified")) {
        isMinimizing = true;
      }
    }

    if (isMinimizing) {
      scrollToTopEvent = setTimeout(() => (this.sidebarContainer.scrollTop = 0), 300);
    } else {
      if (scrollToTopEvent != null) {
        clearTimeout(scrollToTopEvent);
      }
    }
    setTimeout(this.contextManager.updateScalingFactors, 400);
  }
}
