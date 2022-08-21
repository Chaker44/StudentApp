import { AuthenticationnService } from './../service/authenticationn.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-com.components.html',
  styleUrls: ['./login-comp.components.css'],
})
export class LoginComp implements OnInit {
  username = '';
  password = '';
  invalidLogin = false;

  ngOnInit(): void {}

  constructor(
    private router: Router,
    private authenticationnService: AuthenticationnService
  ) {}

  // Router
  //Angular.giveMeRouter
  // Dependecy injection

  onHandleLogin(): void {
    if (
      this.authenticationnService.authenticated(this.username, this.password)
    ) {
      this.router.navigate(['']);
      this.invalidLogin = false;
    }
    this.invalidLogin = true;
  }
}
