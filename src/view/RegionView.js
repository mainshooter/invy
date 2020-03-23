import { ActionPressView } from './product/ActionPressView.js';

class RegionView {

  constructor(region, regionsView) {
    this.region = region;
    this.regionsView = regionsView;
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
          let item = document.createElement("a");
          item.setAttribute('id', product.id);
          item.setAttribute("href", "#");
          item.classList.add('draggable-item');
          item.innerText = product.name;
          item.setAttribute("draggable", "true");
          item.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            let actionPressView = new ActionPressView(product);
            actionPressView.present();
            this.regionsView.container.appendChild(actionPressView.container);
          });
          columnDiv.appendChild(item);
        }

        rowContainer.appendChild(columnDiv);
      }
      container.appendChild(rowContainer);
    }
    return container;
  }

}

export { RegionView }
