export class SaveStoreService {

  constructor() {
    this.listeners = [];
  }

  register(callback) {
    this.listeners.push(callback);
  }

  saveStore() {
    for (let i = 0; i < this.listeners.length; i++) {
      this.listeners[i]();
    }
  }

}
