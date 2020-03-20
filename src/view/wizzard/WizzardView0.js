import elementCreater from '../generator/element.js';
import { formGenerator } from '../generator/form.js';

class WizzardView0 {

  constructor() {
    let h1 = elementCreater('h1', [], "Basis product gegevens");
    let container = elementCreater('div', [{'class': 'row'}]);

    let formHolder = elementCreater('div', [{'class': 'col-12'}]);
    this.form = formGenerator([
      {
        'labelText': 'Product naam',
        'type': 'text',
        'id': 'product_name',
      },
      {
        'labelText': 'Product omschrijving',
        'type': 'text',
        'id': 'product_description',
      },
    ], () =>{}, false);
    formHolder.appendChild(this.form);

    container.appendChild(h1);
    container.appendChild(formHolder);

    this.container = container;
  }

  getData() {
    return this.form.getData();
  }
}

export { WizzardView0 }
