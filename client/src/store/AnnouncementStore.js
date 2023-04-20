import { makeAutoObservable } from "mobx";

export default class AnnouncementStore {
  constructor() {
    this._types = []
    this._brands = []
    this._announcements = []
    this._selectedType = {}
    this._selectedBrand = {}
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setAnnouncements(announcements) {
    this._announcements = announcements;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get announcements() {
    return this._announcements;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}