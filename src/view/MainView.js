import { RegionsView } from '../view/RegionsView.js';
import { WeatherView } from '../view/WeatherView.js';
import elementCreater from './generator/element.js';

export class MainView {

  constructor(store, changeRegionService, saveStoreService, mainController) {
    this.store = store;
    this.changeRegionService = changeRegionService;
    this.saveStoreService = saveStoreService;
    this.mainController = mainController;
  }

  present() {
    let firstRow = elementCreater('div', [{ 'class': 'row' }]);
    let regionsView = new RegionsView(this.store, this.changeRegionService, this.saveStoreService, this.mainController, this);

    let weatherView = new WeatherView(this.mainController);
    let weatherNode = weatherView.present();
    let regionNode = regionsView.present();
    regionsView.ProductListView.setupDragAndDrop();

    weatherNode.classList.add("col-2");
    let container = document.createElement("div");
    container.classList.add("container");
    firstRow.appendChild(regionNode);
    firstRow.appendChild(weatherNode);

    container.appendChild(firstRow);

    this.container = container;
  }

}
