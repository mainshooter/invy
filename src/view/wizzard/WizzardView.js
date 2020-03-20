import elementCreater  from '../generator/element.js';
import { WizzardView0 } from './WizzardView0.js';
import { WizzardView1 } from './WizzardView1.js';
import { WizzardView2 } from './WizzardView2.js';
import { ClothWizzardView } from './regionWizzardViews/ClothWizzardView.js';
import { TierlanTijdWizzardView } from './regionWizzardViews/TierlantijnWizzardView.js';
import { DecoratieWizzardView } from './regionWizzardViews/DecoratieWizzardView.js';

export class WizzardView {

  constructor(changeRegionService) {
    this.changeRegionService = changeRegionService;

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

    container.appendChild(this.wizzardViewContainer);
    container.appendChild(previouseButton);
    container.appendChild(nextButton);

    this.container = container;
    this.prepare();
    this.present();

    this.changeRegionService.register((activeRegion) => {
      // Here handle switch
      this.activeRegionName = activeRegion.name;
      this.prepare();
      this.present();
    });
  }

  prepare() {
    this.clearWizzardViewContainer();
    this.index = 0;
    this.views = [];
    this.regionWizzardViews = {
      'kleding': new ClothWizzardView(this),
      'tierlantijn': new TierlanTijdWizzardView(this),
      'decoratie': new DecoratieWizzardView(this),
    };
    this.activeRegionName = "";

    this.views.push(new WizzardView0());
    this.views.push(new WizzardView1());
    this.views.push(new WizzardView2());
  }

  clearWizzardViewContainer() {
    while (this.wizzardViewContainer.firstChild) {
      this.wizzardViewContainer.removeChild(this.wizzardViewContainer.lastChild);
    }
  }

  sendFormDataToController() {
    let result = [];
    for (let i = 0; i < this.views.length; i++) {
      let view = this.views[i];
      result.push(view.getData());
    }
    console.log(result);
  }

  nextView() {
    this.index++;
    if (this.index > this.views.length) {
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
    this.clearWizzardViewContainer();
    if (this.index == this.views.length) {
      this.wizzardViewContainer.appendChild(this.regionWizzardViews[this.activeRegionName].container);
    }
    else {
      this.wizzardViewContainer.appendChild(this.views[this.index].container);
    }
  }
}
