import { Store } from '../model/Store.js';
import { Product } from '../model/Product.js';
import { generateWeatherMessage } from '../view/generator/weatherGenerator.js';
import { MainView } from '../view/MainView.js';
import uuid4 from '../helper/uuid.js';

class MainController {

  constructor(scene, changeRegionService, saveStoreService) {
    this.scene = scene;
    this.store = new Store();
    this.store.load();
    this.changeRegionService = changeRegionService;
    this.saveStoreService = saveStoreService;
    this.saveStoreService.register(() => {
      this.store.save();
    });
  }

  start() {
    let mainView = new MainView(this.store, this.changeRegionService, this.saveStoreService, this);
    mainView.present();
    this.scene.setView(mainView.container);
  }

  deleteProduct(product) {
    this.store.activeRegion.remove(product.id);
    this.saveStoreService.saveStore();
    this.changeRegionService.changeRegion(this.store.activeRegion);
  }

  saveProductUpload(product, uploadField) {
    if (uploadField.files.length != 1) {
      return;
    }
    return new Promise(resolve => {
      let file = uploadField.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        product.image = reader.result;
        this.store.activeRegion.update(product);
        this.saveStoreService.saveStore();
        resolve(product);
      }
    });

  }

  saveProduct(product) {
    this.store.activeRegion.update(product);
    this.saveStoreService.saveStore();
  }

  addExtraProductValues(product, keys, values) {
    let newAttributes = [];
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = values[i];

      newAttributes.push({
        'key': key.value,
        'value': value.value,
      });
    }
    product.properties = newAttributes;
    this.store.activeRegion.update(product);
    this.saveStoreService.saveStore();
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
    newProduct.id = uuid4();
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
    this.saveStoreService.saveStore();
    this.changeRegionService.changeRegion(this.store.activeRegion);
  }

  placeProduct(product, x, y) {
    this.store.activeRegion.grid[x][y] = product;
    this.saveStoreService.saveStore();
  }
}

export { MainController }
