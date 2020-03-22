import { formGenerator } from './generator/form.js';

class WeatherView {

  constructor(mainController) {
    this.container = null;
    this.mainController = mainController;
  }

  present() {
    this.container = document.createElement("div");

    let form = formGenerator([
      {
        'labelText': 'Weer station',
        "type":"text",
        "id":"city",
      }
    ], this.mainController.presentWeather, true);

    this.container.appendChild(form);

    return this.container
  }

}

export { WeatherView }
