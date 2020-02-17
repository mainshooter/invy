class Scene {

  constructor() {
    this.appView = document.querySelector("#app");
    this.view = null;
  }

  setView(view) {
    if (this.view != null) {
      this.appView.removeChild(this.view);
    }
    this.appView.appendChild(view);
    this.view = view;
  }

}
