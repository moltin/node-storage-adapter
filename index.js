const { LocalStorage } = require('node-localstorage')

class MoltinNodeStorageAdapter {
  constructor(dir = './localStorage') {
    this.storage = new LocalStorage(dir)
  }

  set(key, value) {
    return this.storage.setItem(key, value)
  }

  get(key) {
    return this.storage.getItem(key)
  }

  delete(key) {
    return this.storage.removeItem(key)
  }
}

module.exports = MoltinNodeStorageAdapter
