import elementCreater  from '../generator/element.js';
import { Modal } from '../modal/modal.js';

export class ActionPressView {

  constructor() {

  }

  render() {
    let closeButton = elementCreater('button', [{
      'type': 'button',
      'class': 'btn btn-primary',
    }], 'Sluiten');
    let editButton = elementCreater('button', [{
      'type': 'button',
      'class': 'btn btn-primary',
    }], 'Edit');
    let deleteButton = elementCreater('button', [{
      'type': 'button',
      'class': 'btn btn-primary',
    }], 'Delete');
    let buttonContainer = elementCreater('div', [], '');
    buttonContainer.appendChild(closeButton);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    let container = new Modal('Kies een actie', buttonContainer);
    this.container = container;
  }
}
