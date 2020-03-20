import elementCreater  from '../generator/element.js';
import { WizzardView0 } from './WizzardView0.js';
import { WizzardView1 } from './WizzardView1.js';
import { WizzardView2 } from './WizzardView2.js';
import { ClothWizzardView } from './regionWizzardViews/ClothWizzardView.js';

export class WizzardView {

  constructor(changeRegionService) {
    this.index = 0;
    this.views = [];
    this.regionWizzardViews = {
      'kleding': new ClothWizzardView(this),
    };
    this.activeRegionName = "";
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

    this.views.push(new WizzardView0());
    this.views.push(new WizzardView1());
    this.views.push(new WizzardView2());

    container.appendChild(this.wizzardViewContainer);
    container.appendChild(previouseButton);
    container.appendChild(nextButton);

    this.container = container;

    this.present();

    this.changeRegionService.register((activeRegion) => {
      // Here handle switch
      this.activeRegionName = activeRegion.name;
      console.log(this.activeRegionName);
      console.log("service");
    });
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
    while (this.wizzardViewContainer.firstChild) {
      this.wizzardViewContainer.removeChild(this.wizzardViewContainer.lastChild);
    }
    if (this.index == this.views.length) {
      this.wizzardViewContainer.appendChild(this.regionWizzardViews[this.activeRegionName].container);
    }
    else {
      this.wizzardViewContainer.appendChild(this.views[this.index].container);
    }
  }
}
