import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationnService {
  constructor() {}

  authenticated(username: string, password: string): boolean {
    console.log('before : ' + this.isLoggedIn());
    if (username === 'chaker' && password === 'azerty') {
      sessionStorage.setItem('authenticatedUser', username);
      console.log('after' + this.isLoggedIn());
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    let userLoggedIn = sessionStorage.getItem('authenticatedUser');
    // console.log(userLoggedIn);
    return !(userLoggedIn === null);
  }

  logout(): void {
    sessionStorage.removeItem('authenticatedUser');
  }
}
