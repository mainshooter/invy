import elementCreater  from '../generator/element.js';
import { Modal } from '../modal/modal.js';

export class ActionPressView {

  constructor(product) {
    this.product = product;
  }

  present() {
    let editButton = elementCreater('button', [{
      'type': 'button',
      'class': 'btn btn-primary',
    }], 'Edit');

    let deleteButton = elementCreater('button', [{
      'type': 'button',
      'class': 'btn btn-primary',
    }], 'Delete');
    deleteButton.addEventListener('click', () => {
      console.log('delete');
    });
    editButton.addEventListener('click', () => {
      console.log('edit');
    });
    let buttonContainer = elementCreater('div', [], '');
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    let container = new Modal('Kies een actie', buttonContainer).render();
    this.container = container;
  }
}
