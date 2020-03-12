import { formGenerator } from './generator/form.js';

class CreateProductView {

  constructor(mainController) {
    this.MainController = mainController;
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
    ], () => {
      this.handleClick(form)
    });
    container.appendChild(form);
    return container;
  }

  handleClick(form) {
    this.MainController.addProduct({
      product_name: form.querySelector('#product_name').value,
      product_description: form.querySelector('#product_description').value,
      product_buyin: form.querySelector('#product_buyin').value,
      product_sell_ex: form.querySelector('#product_sell_ex').value,
      product_sell_inc: form.querySelector('#product_sell_inc').value,
      product_min_stock: form.querySelector('#product_min_stock').value,
      product_stock: form.querySelector('#product_stock').value,
    });
  }
}

export { CreateProductView }
