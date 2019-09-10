import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRestaurants() {
    return this.http.get('https://opentable.herokuapp.com/api/stats');
  }
}
