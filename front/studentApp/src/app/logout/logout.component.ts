import { AuthenticationnService } from './../service/authenticationn.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(private authenticationnService: AuthenticationnService) {}

  ngOnInit(): void {
    this.authenticationnService.logout();
  }
}
