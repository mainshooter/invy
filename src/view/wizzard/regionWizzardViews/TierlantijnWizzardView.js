import elementCreater from '../../generator/element.js';
import { formGenerator } from '../../generator/form.js';

export class TierlanTijdWizzardView {

  constructor(wizzardView) {
    this.wizzardView = wizzardView;
    let h1 = elementCreater('h1', [{}], 'Tierlantijd eigenschap toevoegen');
    let container = elementCreater('div', [{'class': 'row'}], '');

    let formHolder = elementCreater('div', [{"class": 'col-12'}], '');

    this.form = formGenerator([
      {
        'labelText': 'Gewicht',
        'id': 'item_weight',
        'type': 'text',
      },
    ], () => {
      this.handleClick();
    }, true);

    formHolder.appendChild(this.form);

    container.appendChild(h1);
    container.appendChild(formHolder);
    this.container = container;
  }

  handleClick() {
    this.wizzardView.sendFormDataToController();
  }
}
