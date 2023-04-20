import { makeAutoObservable } from "mobx"


export default class NewsStore {
  constructor() { 
    this._news = []
    makeAutoObservable(this);
  }

  get news() {
    return this._news; 
  }

  setNews(news) {
    this._news = news;
  }
}