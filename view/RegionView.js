class RegionView {

  constructor(region) {
    this.region = region;
  }

  present() {
    let container = document.createElement("div");
    let header = document.createElement("h1");
    header.innerText = this.region.name;

    container.appendChild(header);
    container.classList.add("tab-pane", "col-12");
    container.setAttribute("role", "tabpanel");
    container.id = this.region.name;

    let grid = this.region.grid;
    for (let i = 0; i < grid.length; i++) {
      let row = grid[i];
      let rowContainer = document.createElement("div");
      rowContainer.classList.add("row");
      for (let j = 0; j < row.length; j++) {
        let column = row[j];
        let columnDiv = document.createElement("div");
        columnDiv.classList.add("col", "square");
        rowContainer.appendChild(columnDiv);
      }
      container.appendChild(rowContainer);
    }
    return container;
  }
}

export { RegionView }
