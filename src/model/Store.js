import { Region } from './Region.js'

class Store {

  constructor() {
      this.region = {
        'kleding': new Region('kleding'),
        'tierlantijn': new Region('tierlantijn'),
        'decoratie': new Region('decoratie'),
      };
      this.activeRegion = this.region.kleding;
  }

  save() {
    localStorage.setItem('regions', JSON.stringify(this.region));
  }

  load() {
    let loadedRegions = JSON.parse(localStorage.getItem('regions'));
    if (loadedRegions) {
      this.region.kleding.load(loadedRegions['kleding']);
    }
  }
}

export { Store }
