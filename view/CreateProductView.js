import { formGenerator } from './generator/form.js';

class CreateProductView {

  constructor(mainController) {
  }

  present() {
    let container = document.createElement('div');
    container.classList.add('col-2');
    let form = formGenerator([
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
      {
        'labelText': 'Product inkoop prijs',
        'type': 'number',
        'id': 'product_buyin',
      },
      {
        'labelText': 'Product verkoop prijs ex',
        'type': 'number',
        'id': 'product_sell_ex',
      },
      {
        'labelText': 'Product verkoop inc',
        'type': 'number',
        'id': 'product_sell_inc',
      },
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
    container.appendChild(form);
    return container;
  }

  handleClick() {

  }
}

export { CreateProductView }
