class RegionsView {

  constructor(store) {
    this.store = store;
    this.ProductListView = new ProductListView(this.store.region);
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
    container.appendChild(this.ProductListView.present());
    return container;
  }

  handleTabClick(event) {
    let target = event.target;
    let hash = target.href;
    hash = hash.split("#")[1];

    let tab = document.querySelector("#" + hash);

    let tabContents = document.querySelectorAll(".tab-content .tab-pane");
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.remove("active");
      tabContents[i].classList.remove("show");
    }
    tab.classList.add("active", "show");
    this.ProductListView.refreshMenu(hash);
  }
}
