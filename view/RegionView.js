class RegionView extends BaseView {

  constructor(region) {
    super();
    this.region = region;
  }

  present() {
    let container = document.createElement("div");
    container.classList.add("region-container");
    console.log(this.region.grid);
    let grid = this.region.grid;
    for (let i = 0; i < grid.length; i++) {
      let row = grid[i];
      let rowContainer = document.createElement("div");
      rowContainer.classList.add("region-row");
      for (let j = 0; j < row.length; j++) {
        let column = row[j];
        let columnDiv = document.createElement("div");
        columnDiv.classList.add("region-column");
        rowContainer.appendChild(columnDiv);
      }
      container.appendChild(rowContainer);
    }
    this.appView.appendChild(container);
  }

}
