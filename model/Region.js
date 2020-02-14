class Region {

  constructor(name) {
    this.name = name;
    this.products = [];
    this.grid = new Array(15);
    for (let i = 0; i < this.grid.length; i++) {
      this.grid[i] = new Array(15);
    }
  }

}
