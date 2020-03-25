import elementCreater  from '../generator/element.js';
import { Modal } from '../modal/modal.js';
import { ExtraProductView } from './ExtraProductView.js';

export class ActionPressView {

  constructor(product, mainController, regionsView) {
    this.product = product;
    this.mainController = mainController;
    this.regionsView = regionsView;
    this.removeListeners = [];
  }

  registerRemove(callback) {
    this.removeListeners.push(callback);
  }

  onRemove() {
    for (let i = 0; i < this.removeListeners.length; i++) {
      this.removeListeners[i]();
    }
  }

  present() {
    let buttonContainer = elementCreater('div', [], '');
    let modal = new Modal('Kies een actie', buttonContainer);

    let editButton = elementCreater('button', [{
      'type': 'button',
      'class': 'btn btn-primary',
    }], 'Edit');

    let deleteButton = elementCreater('button', [{
      'type': 'button',
      'class': 'btn btn-primary',
    }], 'Delete');
    deleteButton.addEventListener('click', () => {
      this.mainController.deleteProduct(this.product);
      this.onRemove();
      this.container.remove();
    });
    editButton.addEventListener('click', () => {
      let extraProductView = new ExtraProductView(this.product, this.mainController);
      extraProductView.present();
      this.regionsView.container.appendChild(extraProductView.container);
    });
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    this.container = modal.present();
  }
}
