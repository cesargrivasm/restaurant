import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
users: object;
message: string;
  constructor(private data: DataService, public authService: AuthService) {
    this.message = '';
  }

  login(username: string, password: string): boolean {
    this.message = '';
    if(!this.authService.login(username, password)) {
      this.message = 'Credenciales Incorrectas';
      setTimeout(function() {
        this.message = '';
      }.bind(this), 2500);
      }
    return false;
    }
    logout(): boolean {
    this.authService.logout();
    return false;
    }
    ngOnInit() {
    this.data.getRestaurants().subscribe(data => {
      this.users = data
      console.log(this.users);
    });
  }
    }
