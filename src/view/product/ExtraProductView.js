import elementCreater  from '../generator/element.js';
import { Modal } from '../modal/modal.js';
import { formGenerator } from '../generator/form.js';

export class ExtraProductView {

  constructor(product) {
    this.product = product;
    this.register = [];
  }

  registerOnUpdate(callback) {
    this.register.push(callback);
  }

  onUpdate(formResult) {
    for (let i = 0; i < this.register.length; i++) {
      this.register[i](formResult);
    }
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
      let keys = form.querySelectorAll('input[name=key[]]');
      let values = form.querySelectorAll('input[name=value[]]');

      this.mainController.addExtraProductValues(this.product, keys, values);

      this.onUpdate();
      this.container.remove();
    });
    addRowButton.addEventListener('click', () => {
      form.appendChild(this.generateNewRow('', ''));
    });
    form.appendChild(addRowButton);
    bodyContainer.appendChild(form);
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
      'class': 'form-control',
    }], '');
    let labelValue = elementCreater('label', [], 'Value');
    let valueValue = elementCreater('input', [{
      'type': 'text',
      'name': 'value[]',
      'class': 'form-control',
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
