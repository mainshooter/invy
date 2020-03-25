class Product {

  constructor() {
    this.name;
    this.id;
    this.description;
    this.buyInprice;
    this.sellPriceExVat;
    this.sellPriceInVat;
    this.minStock;
    this.currentStock;
    this.properties = [];
  }

  load(productObject) {
    this.name = productObject.name;
    this.id = productObject.id;
    this.description = productObject.description;
    this.buyInprice = productObject.buyInprice;
    this.sellPriceExVat = productObject.sellPriceExVat;
    this.sellPriceInVat = productObject.sellPriceInVat;
    this.minStock = productObject.minStock;
    this.currentStock = productObject.currentStock;
    this.properties = productObject.properties;
  }
}

export { Product }
