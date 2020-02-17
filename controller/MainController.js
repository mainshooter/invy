class MainController {

  constructor(scene) {
    this.scene = scene;
    this.store = new Store();
  }

  start() {
    let regionsView = new RegionsView(this.store);
    this.scene.setView(regionsView.present());
  }
}
