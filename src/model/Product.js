class Product {

  constructor() {
    this.name;
    this.id;
    this.image;
    this.description;
    this.buyInprice;
    this.sellPriceExVat;
    this.sellPriceInVat;
    this.minStock;
    this.currentStock;
    this.properties = [];
    this.drawings = [];
    this.comment = '';
  }

  load(productObject) {
    this.name = productObject.name;
    this.id = productObject.id;
    this.image = productObject.image;
    this.description = productObject.description;
    this.buyInprice = productObject.buyInprice;
    this.sellPriceExVat = productObject.sellPriceExVat;
    this.sellPriceInVat = productObject.sellPriceInVat;
    this.minStock = productObject.minStock;
    this.currentStock = productObject.currentStock;
    this.properties = productObject.properties;
    this.drawings = productObject.drawings;
    this.comment = productObject.comment;
  }
}

export { Product }
