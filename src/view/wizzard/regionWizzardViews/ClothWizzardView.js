import elementCreater from '../../generator/element.js';
import { formGenerator } from '../../generator/form.js';

export class ClothWizzardView {

  constructor(wizzardView) {
    this.wizzardView = wizzardView;
    let h1 = elementCreater('h1', [{}], 'Kleding eigenschappen toevoegen');
    let container = elementCreater('div', [{'class': 'row'}], '');

    let formHolder = elementCreater('div', [{"class": 'col-12'}], '');

    this.form = formGenerator([
      {
        'labelText': 'Kleur',
        'id': 'item_color',
        'type': 'text',
      },
      {
        'labelText': 'Maat',
        'id': 'item_size',
        'type': 'text',
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
