import { AuthenticationnService } from './../../service/authenticationn.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.css'],
})
export class HeaderCompComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  constructor(public authenticationnService: AuthenticationnService) {}

  ngOnInit(): void {}
}
