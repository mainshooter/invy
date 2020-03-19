import elementCreater  from '../generator/element.js';
import { WizzardView0 } from './WizzardView0.js';
import {WizzardView1 } from './WizzardView1.js';

export class WizzardView {

  constructor(type) {
    this.index = 0;
    this.views = [];

    let container = elementCreater("div", []);
    this.wizzardViewContainer = elementCreater('div', []);
    let nextButton = elementCreater('button', [
      {
        'type': 'button',
        'class': 'btn btn-primary'
      }
    ], 'Volgende');
    nextButton.addEventListener('click', () => {
      this.nextView();
    });
    let previouseButton = elementCreater('button', [
      {
        'type': 'button',
        'class': 'btn btn-secondary',
      }
    ], 'Vorige');
    previouseButton.addEventListener('click', () => {
      this.previouseView();
    });

    this.views.push(new WizzardView0().container);
    this.views.push(new WizzardView1().container);

    container.appendChild(this.wizzardViewContainer);
    container.appendChild(previouseButton);
    container.appendChild(nextButton);

    this.container = container;

    this.present();
  }

  nextView() {
    this.index++;
    if (this.index == this.views.length) {
      this.index--;
    }
    this.present();
  }

  previouseView() {
    this.index--;
    if (this.index < 0) {
      this.index = 0;
    }
    this.present();
  }

  present() {
    while (this.wizzardViewContainer.firstChild) {
      this.wizzardViewContainer.removeChild(this.wizzardViewContainer.lastChild);
    }
    this.wizzardViewContainer.appendChild(this.views[this.index]);
  }
}
