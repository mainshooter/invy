class WeatherView {


  constructor(mainController) {
    this.container = null;
    this.mainController = mainController;
  }

  present() {
    this.container = document.createElement("div");

    let form = formGenerator([
      {
        "type":"text",
        "id":"city",
      }
    ], this.mainController.presentWeather);

    this.container.appendChild(form);

    return this.container
  }

}
