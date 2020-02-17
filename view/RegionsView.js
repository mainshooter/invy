class RegionsView {

  constructor(store) {
    this.store = store;
  }

  present() {
    let storeRegions = this.store.region;
    let kledingRegionView = new RegionView(storeRegions.kleding).present();
    let tierlantijnRegionView = new RegionView(storeRegions.tierlantijn).present();
    let decoratieRegionView = new RegionView(storeRegions.decoratie).present();

    let container = document.createElement("div");
    let navTabs = document.createElement("ul");
    navTabs.classList.add("nav", 'nav-tabs');
    let tabItems = [
      new TabItem("Kleding", "kleding").present(),
      new TabItem("Tierlantijn", "tierlantijn").present(),
      new TabItem("Decoratie", "decoratie").present(),
    ];

    for (let i = 0; i < tabItems.length; i++) {
      console.log(tabItems[i]);
      navTabs.appendChild(tabItems[i]);
    }

    let tabContent = document.createElement("div");
    tabContent.classList.add("tab-content");
    tabContent.appendChild(kledingRegionView);
    tabContent.appendChild(tierlantijnRegionView);
    tabContent.appendChild(decoratieRegionView);

    container.appendChild(navTabs);
    container.appendChild(tabContent);

    return container;
  }
}
