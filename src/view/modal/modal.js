import elementCreater  from '../generator/element.js';

export class Modal {

  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  render() {
    let modal = elementCreater('div', [{'role':'dialogic', 'class': 'modal'}]);
    let modalDialog = elementCreater('div', [{'class': 'modal-dialogic'}], '');
    let modalContent = elementCreater('div', [{'class': 'modal-content'}], '');

    let modalHeader = elementCreater('div', [{'class':'modal-header'}], '');
    modalHeader.appendChild(elementCreater('h5', [{'class':'modal-title'}], this.title));

    let modalBody = elementCreater('div', [{'class':'modal-body'}], '');
    modalBody.appendChild(elementCreater('p', [], this.body));

    let modalFooter = elementCreater('div', [{'class': 'modal-footer'}, '']);
    let closeButton = elementCreater('button', [{
      'type': 'button',
      'class': 'btn btn-primary',
    }], 'Sluiten');
    closeButton.addEventListener('click', () => {
      modal.remove();
    });
    modalFooter.appendChild(closeButton);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    modalDialog.appendChild(modalContent);

    modal.appendChild(modalDialog);

    return modal;
  }
}
