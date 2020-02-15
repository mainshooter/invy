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
    console.log(tabItems);
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
// <ul class="nav nav-tabs" id="myTab" role="tablist">
//   <li class="nav-item">
//     <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
//   </li>
// </ul>
// <div class="tab-content" id="myTabContent">
//   <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
//   <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
//   <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
// </div>
