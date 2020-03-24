import { ActionPressView } from './product/ActionPressView.js';

export class DragItemView {

  constructor(product, mainController, regionsView) {
    this.product = product;
    this.mainController = mainController;
    this.regionsView = regionsView;
  }

  present() {
    let item = document.createElement("a");
    item.setAttribute('id', this.product.id);
    item.setAttribute("href", "#");
    item.classList.add('draggable-item');
    item.innerText = this.product.name;
    item.setAttribute("draggable", "true");
    item.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;
      let actionPressView = new ActionPressView(this.product, this.mainController, this.regionsView);
      actionPressView.registerRemove(() => {
        item.remove();
      });
      actionPressView.present();
      console.log(this.regionsView);
      this.regionsView.container.appendChild(actionPressView.container);
    });
    this.item = item;
  }

}
