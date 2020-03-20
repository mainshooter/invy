import elementCreater from '../generator/element.js';
import { formGenerator } from '../generator/form.js';

class WizzardView1 {

  constructor() {
    let h1 = elementCreater("h1", [], "Prijs gegevens");
    let container = elementCreater("div", [{"class": "row"}], "");

    let formHolder = elementCreater("div", [{"class": "col-12"}], "");
    this.form = formGenerator([
      {
        'labelText': 'Product inkoop prijs',
        'type': 'number',
        'id': 'product_buyin',
      },
      {
        'labelText': 'Product verkoop prijs ex',
        'type': 'number',
        'id': 'product_sell_ex',
        'readonly': 'true',
      },
      {
        'labelText': 'Product verkoop inc',
        'type': 'number',
        'id': 'product_sell_inc',
      },
    ], ()=>{}, false);
    this.addListeners();
    formHolder.appendChild(this.form);

    container.appendChild(h1);
    container.appendChild(formHolder);

    this.container = container;
  }

  addListeners() {
    let inputPriceIncBtw = this.form.querySelector('#product_sell_inc');
    let inputPriceExBtw = this.form.querySelector('#product_sell_ex');
    inputPriceIncBtw.addEventListener('keyup', () => {
      try {
        let incPrice = parseFloat(inputPriceIncBtw.value);
        inputPriceExBtw.value = (incPrice / 121 * 100).toFixed(2);
      } catch (e) {}
    });
  }

  getData() {
    return this.form.getData();
  }

}

export { WizzardView1 }
