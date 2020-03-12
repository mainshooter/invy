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
}

export { Store }
