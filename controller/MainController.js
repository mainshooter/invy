import { Store } from '../model/Store.js';
import { RegionsView } from '../view/RegionsView.js';
import { WeatherView } from '../view/WeatherView.js';
import { generateWeatherMessage } from '../view/generator/weatherGenerator.js';

class MainController {

  constructor(scene) {
    this.scene = scene;
    this.store = new Store();
  }

  start() {
    let regionsView = new RegionsView(this.store);
    let weatherView = new WeatherView(this);
    let weatherNode = weatherView.present();
    let regionNode = regionsView.present();
    weatherNode.classList.add("col-2");
    let container = document.createElement("div");
    container.classList.add("row");
    container.appendChild(regionNode);
    container.appendChild(weatherNode);
    this.scene.setView(container);
  }

  presentWeather(form) {
    let city = form.querySelector("#city").value;
    fetch("https://data.buienradar.nl/2.0/feed/json")
    .then(response => {
      return response.json();
    })
    .then(json => {
      let weather = json.actual;
      let stations = weather.stationmeasurements;
      let foundStation = false;
      for (let i = 0; i < stations.length; i++) {
        let station = stations[i];
        let stationName = station.stationname;

        if (station.regio == city) {
          foundStation = station;
        }
      }
      let weatherDisplay = form.querySelector(".weather");
      if (weatherDisplay) {
        weatherDisplay.remove();
      }
      if (foundStation) {
        form.appendChild(generateWeatherMessage(foundStation));
      }
      else {
        alert("Station niet gevonden");
      }
    });
  }
}

export { MainController }
