import { ActionPressView } from './product/ActionPressView.js';

class RegionView {

  constructor(region, regionsView, mainController) {
    this.region = region;
    this.regionsView = regionsView;
    this.mainController = mainController;
  }

  present() {
    let container = document.createElement("div");
    let header = document.createElement("h1");
    header.innerText = this.region.name;

    container.appendChild(header);
    container.classList.add("region-container", "tab-pane", "dropzones", "tab-pane", "col-12");
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
        columnDiv.classList.add("region-column", "dropzone", "col", "square");
        columnDiv.setAttribute("x", i);
        columnDiv.setAttribute("y", j);

        if (this.region.grid[i][j]) {
          let product = this.region.grid[i][j];
          let itemView = new DragItemView(product, this.mainController, this.regionsView);
          itemView.present();
          columnDiv.appendChild(itemView.item);
        }

        rowContainer.appendChild(columnDiv);
      }
      container.appendChild(rowContainer);
    }
    return container;
  }

}

export { RegionView }
