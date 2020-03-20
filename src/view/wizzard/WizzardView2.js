import elementCreater from '../generator/element.js';
import { formGenerator } from '../generator/form.js';

class WizzardView2 {

  constructor() {
    let h1 = elementCreater('h1', [], 'Product voorraad');
    let container = elementCreater("div", [{'class': 'row'}], '');


    let formHolder = elementCreater('div', [{'class': 'col-12'}], '');

    this.form = formGenerator([
      {
        'labelText': 'Product min stock',
        'type': 'number',
        'id': 'product_min_stock',
      },
      {
        'labelText': 'Product current stock',
        'type': 'number',
        'id': 'product_stock',
      },
    ]);

    formHolder.appendChild(this.form);
    container.appendChild(h1);
    container.appendChild(formHolder);

    this.container = container;
  }

  getData() {
    return this.form.getData();
  }
}

export { WizzardView2 }
