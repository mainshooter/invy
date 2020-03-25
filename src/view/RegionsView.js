import { RegionView } from './RegionView.js';
import { TabItem } from './tab/TabItem.js';
import { ProductListView  } from './ProductListView.js';

class RegionsView {

  constructor(store, changeRegionService, saveStoreService, mainController, regionsView) {
    this.store = store;
    this.changeRegionService = changeRegionService;
    this.saveStoreService = saveStoreService;
    this.regionsView = regionsView;
    this.mainController = mainController;
    this.ProductListView = new ProductListView(this.changeRegionService, this.saveStoreService, mainController, this.regionsView);
  }

  present() {
    let storeRegions = this.store.region;
    let kledingRegionView = new RegionView(storeRegions.kleding, this.regionsView, this.mainController, this.changeRegionService).present();
    let tierlantijnRegionView = new RegionView(storeRegions.tierlantijn, this.regionsView, this.mainController, this.changeRegionService).present();
    let decoratieRegionView = new RegionView(storeRegions.decoratie, this.regionsView, this.mainController, this.changeRegionService).present();
    this.ProductListView.present()

    let container = document.createElement("div");
    container.classList.add("col-12");
    let navTabs = document.createElement("ul");
    navTabs.classList.add("nav", 'nav-tabs');
    let tabItems = [
      new TabItem("Kleding", "kleding").present(),
      new TabItem("Tierlantijn", "tierlantijn").present(),
      new TabItem("Decoratie", "decoratie").present(),
    ];

    for (let i = 0; i < tabItems.length; i++) {
      tabItems[i].addEventListener('click', (event) => {
        event.preventDefault();
        this.handleTabClick(event);
      });
      navTabs.appendChild(tabItems[i]);
    }
    let tabContent = document.createElement("div");
    tabContent.classList.add("tab-content");
    tabContent.appendChild(kledingRegionView);
    tabContent.appendChild(tierlantijnRegionView);
    tabContent.appendChild(decoratieRegionView);

    container.appendChild(navTabs);
    container.appendChild(tabContent);
    container.appendChild(this.ProductListView.container);
    return container;
  }

  handleTabClick(event) {
    let target = event.target;
    let hash = target.href;
    hash = hash.split("#")[1];
    this.store.activeRegion = this.store.region[hash];
    this.changeRegionService.changeRegion(this.store.activeRegion);
    let tab = document.querySelector("#" + hash);

    let tabContents = document.querySelectorAll(".tab-content .tab-pane");
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.remove("active");
      tabContents[i].classList.remove("show");
    }
    tab.classList.add("active", "show");
  }
}

export { RegionsView }
