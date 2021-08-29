import {makeAutoObservable} from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {id:1, name: 'холодильник'},
      {id:2, name: 'телефон'},
    ]
    this._brands = [
      {id:1, name: 'Apple'},
      {id:2, name: 'Samsung'},
    ]
    this._devices = [
      {id:1, name: 'Iphone 13', price: 100_000, rating: 6, img: 'https://htstatic.imgsmail.ru/pic_original/459c09090505f72d684e412025afa060/2083608/'},
      {id:2, name: 'Iphone 13', price: 100_000, rating: 6, img: 'https://htstatic.imgsmail.ru/pic_original/459c09090505f72d684e412025afa060/2083608/'},
      {id:3, name: 'Iphone 13', price: 100_000, rating: 6, img: 'https://htstatic.imgsmail.ru/pic_original/459c09090505f72d684e412025afa060/2083608/'},
      {id:4, name: 'Iphone 13', price: 100_000, rating: 6, img: 'https://htstatic.imgsmail.ru/pic_original/459c09090505f72d684e412025afa060/2083608/'},
    ]
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setDevices(devices) {
    this._devices = devices
  }

  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }
  get devices() {
    return this._devices
  }
}