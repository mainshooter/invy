import { RegionsView } from '../view/RegionsView.js';
import { WeatherView } from '../view/WeatherView.js';
import { WizzardView } from '../view/wizzard/WizzardView.js';
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
    let regionsView = new RegionsView(this.store, this.changeRegionService, this.saveStoreService, this.mainController);
    regionsView.ProductListView.setupDragAndDrop();

    let weatherView = new WeatherView(this);
    let weatherNode = weatherView.present();
    let regionNode = regionsView.present();

    weatherNode.classList.add("col-2");
    let container = document.createElement("div");
    container.classList.add("container");
    firstRow.appendChild(regionNode);
    firstRow.appendChild(weatherNode);

    let createProductNode = new WizzardView(this.changeRegionService, this.mainController).container;
    createProductNode.classList.add('col-12');
    let newRow = elementCreater('div', [{ 'class': 'row' }]);
    newRow.appendChild(createProductNode);
    container.appendChild(firstRow);
    container.appendChild(newRow);

    this.container = container;
  }

}
