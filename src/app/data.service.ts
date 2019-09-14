import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from "rxjs";
import {Country} from './country';
import { Cities} from './cities';
import { ByID } from './by-id';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRestaurants() {
    return this.http.get('https://opentable.herokuapp.com/api/stats');
  }
  getCountries() {
    return this.http.get<Country>('http://opentable.herokuapp.com/api/countries');
  }
  getCities() {
    return this.http.get<Cities>('https://opentable.herokuapp.com/api/cities');
  }
  getRestaurantByID() {
    return this.http.get<ByID>('https://opentable.herokuapp.com/api/restaurants/');
  }
}
sudo
