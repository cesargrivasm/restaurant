import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(user: string, password: string): boolean {
    if (user === 'admin' && password === 'admin') {
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }
  logout(): any {
    localStorage.removeItem('username');
  }
  getPerson(): any {
    return localStorage.getItem('person');
  }
  getUser(): any {
    return localStorage.getItem('username');
  }
  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  constructor() { }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService}
];
