export class ChangeRegionService {

  constructor() {
    this.listeners = [];
  }

  register(callback) {
    this.listeners.push(callback);
  }

  changeRegion(activeRegion) {
    for (let i = 0; i < this.listeners.length; i++) {
      this.listeners[i](activeRegion);
    }
  }

}
