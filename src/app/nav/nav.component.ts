import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import {Country} from "../country";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  country: Country;
  constructor(private dataService: DataService) { }

  ngOnInit() {
   this.dataService.getCountries().subscribe(data => {
    console.log(data);
    this.country = data;
   });
  }

}
