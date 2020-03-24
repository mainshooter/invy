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
    for (let i = 0; i < regionObject.grid.length; i++) {
      let row = regionObject.grid[i];
      for (let j = 0; j < row.length; j++) {
        let column = row[j];
        if (column) {
          let newProduct = new Product();
          newProduct.load(column);
          this.grid[i][j] = newProduct;
        }
      }
    }
  }

  remove(id) {
    for (let i = 0; i < this.products.length; i++) {
      let product = this.products[i];
      if (product.id == id) {
        this.products.splice(i, 1);
      }
    }

    for (let i = 0; i < this.grid.length; i++) {
      let row = this.grid[i];
      for (let j = 0; j < row.length; j++) {
        let column = row[j];
        if (column) {
          let productId = column.id;
          if (productId == id) {
            this.grid[i][j] = null;
          }
        }
      }
    }
  }

  find(id) {
    for (let i = 0; i < this.products.length; i++) {
      let product = this.products[i];
      let productId = product.id;
      if (productId == id) {
        return product;
      }
    }

    for (let i = 0; i < this.grid.length; i++) {
      let row = this.grid[i];
      for (let j = 0; j < row.length; j++) {
        let column = row[j];
        if (column) {
          let productId = column.id;
          if (productId == id) {
            return column;
          }
        }
      }
    }
    return null;
  }

  update(product) {
    for (let i = 0; i < this.products.length; i++) {
      let productId = this.products[i];
      if (productId == product.id) {
        this.products[i] = product;
        return true;
      }
    }
    for (let i = 0; i < this.grid.length; i++) {
      let row = this.grid[i];
      for (let j = 0; j < row.length; j++) {
        let column = row[j];
        if (column) {
          let productId = column.id;
          if (productId == product.id) {
            this.grid[i][j] = product;
            return true;
          }
        }
      }
    }
    return false;
  }

}

export { Region }
