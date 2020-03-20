import elementCreater from '../../generator/element.js';
import { formGenerator } from '../../generator/form.js';

export class DecoratieWizzardView {

  constructor(wizzardView) {
    this.wizzardView = wizzardView;
    let h1 = elementCreater('h1', [{}], 'Decoratie eigenschappen toevoegen');
    let container = elementCreater('div', [{'class': 'row'}], '');

    let formHolder = elementCreater('div', [{"class": 'col-12'}], '');

    this.form = formGenerator([
      {
        'labelText': 'Groote in cm',
        'id': 'item_size',
        'type': 'number',
      },
      {
        'labelText': 'Kleur',
        'id': 'item_color',
        'type': 'text',
      },
      {
        'labelText': 'Aantal in verpakking',
        'id': 'item_amount',
        'type': 'number'
      }
    ], () => {
      this.handleClick();
    }, true);

    formHolder.appendChild(this.form);

    container.appendChild(h1);
    container.appendChild(formHolder);
    this.container = container;
  }
  
  getData() {
    return this.form.getData();
  }

  handleClick() {
    this.wizzardView.sendFormDataToController();
  }
}
