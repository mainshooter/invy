import { Product } from './product.js';

class Region {

  constructor(name) {
    this.name = name;
    this.products = [];
    this.grid = new Array(15);
    for (let i = 0; i < this.grid.length; i++) {
      this.grid[i] = new Array(15);
    }
  }

  load(regionObject) {
    for (let i = 0; i < regionObject.products.length; i++) {
      let product = regionObject.products[i];
      let newProduct = new Product();
      newProduct.load(product);
      this.products.push(newProduct);
    }
  }

}

export { Region }
