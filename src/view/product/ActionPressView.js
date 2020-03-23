import elementCreater  from '../generator/element.js';
import { Modal } from '../modal/modal.js';

export class ActionPressView {

  constructor(product, mainController) {
    this.product = product;
    this.mainController = mainController;
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
      console.log('edit');
    });
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    this.container = modal.present();
  }
}
