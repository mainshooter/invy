import elementCreater  from '../generator/element.js';
import { WizzardView0 } from './WizzardView0.js';
import { WizzardView1 } from './WizzardView1.js';
import { WizzardView2 } from './WizzardView2.js';
import { ClothWizzardView } from './regionWizzardViews/ClothWizzardView.js';
import { TierlanTijdWizzardView } from './regionWizzardViews/TierlantijnWizzardView.js';
import { DecoratieWizzardView } from './regionWizzardViews/DecoratieWizzardView.js';

export class WizzardView {

  constructor(changeRegionService, mainController) {
    this.activeRegionName = "";
    this.mainController = mainController;
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
    let productObject = {};
    for (let i = 0; i < this.views.length; i++) {
      let view = this.views[i];
      Object.assign(productObject, view.getData());
    }
    Object.assign(productObject, this.regionWizzardViews[this.activeRegionName].getData());
    console.log(this.mainController);
    this.mainController.addProduct(productObject);
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
