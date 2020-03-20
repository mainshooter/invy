import { Store } from '../model/Store.js';
import { RegionsView } from '../view/RegionsView.js';
import { WeatherView } from '../view/WeatherView.js';
import { CreateProductView } from '../view/CreateProductView.js';
import { WizzardView } from '../view/wizzard/WizzardView.js';
import { Product } from '../model/Product.js';
import { generateWeatherMessage } from '../view/generator/weatherGenerator.js';
import elementCreater from '../view/generator/element.js';

class MainController {

  constructor(scene, changeRegionService) {
    this.scene = scene;
    this.store = new Store();
    this.changeRegionService = changeRegionService;
  }

  start() {
    let firstRow = elementCreater('div', [{ 'class': 'row' }]);
    let regionsView = new RegionsView(this.store, this.changeRegionService);
    let weatherView = new WeatherView(this);
    let createProductView = new CreateProductView(this);
    let weatherNode = weatherView.present();
    let regionNode = regionsView.present();

    weatherNode.classList.add("col-2");
    let container = document.createElement("div");
    container.classList.add("container");
    firstRow.appendChild(regionNode);
    firstRow.appendChild(weatherNode);

    let createProductNode = new WizzardView(this.changeRegionService, this).container;
    createProductNode.classList.add('col-12');
    let newRow = elementCreater('div', [{ 'class': 'row' }]);
    newRow.appendChild(createProductNode);
    container.appendChild(firstRow);
    container.appendChild(newRow);
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

  addProduct(productObject) {
    let newProduct = new Product();
    newProduct.name = productObject.product_name;
    newProduct.description = productObject.product_description;
    newProduct.buyInprice = productObject.product_buyin;
    newProduct.sellPriceExVat = productObject.product_sell_ex;
    newProduct.sellPriceInVat = productObject.product_sell_inc;
    newProduct.minStock = productObject.product_min_stock;
    newProduct.currentStock = productObject.product_stock;

    if (this.store.activeRegion.name == "kleding") {
      newProduct.color = productObject.item_color;
      newProduct.size = productObject.item_size;
    }
    else if (this.store.activeRegion.name == "tierlantijn") {
      newProduct.weight = productObject.item_weight;
    }
    else if (this.store.activeRegion.name = "decoratie") {
      newProduct.size = productObject.item_size;
      newProduct.color = productObject.item_color;
      newProduct.amount = productObject.item_amount;
    }

    this.store.activeRegion.products.push(newProduct);
    this.store.save();
  }
}

export { MainController }
