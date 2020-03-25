import elementCreater  from '../generator/element.js';
import { Modal } from '../modal/modal.js';
import { formGenerator } from '../generator/form.js';

export class ExtraProductView {

  constructor(product, mainController) {
    this.mainController = mainController;
    this.product = product;
  }

  present() {
    let bodyContainer = elementCreater('div', [], '');
    let modal = new Modal('Voeg product opties toe', bodyContainer);

    let form = formGenerator([], () =>{}, false);
    for (let i = 0; i < this.product.properties.length; i++) {
      let property = this.product.properties[i];
      form.appendChild(this.generateNewRow(property.key, property.value));
    }

    let addRowButton = elementCreater('button', [{
      'type': 'button',
      'class': 'btn btn-success',
    }], 'Rij toevoegen');

    let saveButton = elementCreater('button', [{
      'type': 'button',
      'class': 'btn btn-primary',
    }], 'Opslaan');

    saveButton.addEventListener('click', () => {
      let keys = form.querySelectorAll('.key');
      let values = form.querySelectorAll('.value');

      this.mainController.addExtraProductValues(this.product, keys, values);
      this.container.remove();
    });
    addRowButton.addEventListener('click', () => {
      form.appendChild(this.generateNewRow('', ''));
    });
    bodyContainer.appendChild(form);
    bodyContainer.appendChild(addRowButton);
    bodyContainer.appendChild(saveButton);

    this.container = modal.present();
  }

  generateNewRow(key, value) {
    let newRow = elementCreater('div', [{'class':'form-group row'}], '');
    let keyContainer = elementCreater('div', [{'class':'col-4'}], '');
    let valueContainer = elementCreater('div', [{'class':'col-7'}], '');

    let labelKey = elementCreater('label', [], 'Key');
    let valueKey = elementCreater('input', [{
      'type': 'text',
      'name': 'key[]',
      'class': 'form-control key',
      'value': key,
    }], '');
    let labelValue = elementCreater('label', [], 'Value');
    let valueValue = elementCreater('input', [{
      'type': 'text',
      'name': 'value[]',
      'class': 'form-control value',
      'value': value,
    }], '');
    keyContainer.appendChild(labelKey);
    keyContainer.appendChild(valueKey);
    valueContainer.appendChild(labelValue);
    valueContainer.appendChild(valueValue);

    newRow.appendChild(keyContainer);
    newRow.appendChild(valueContainer);
    return newRow;
  }

}
