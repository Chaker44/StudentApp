import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from './../service/data/welcome-data.service';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css'],
})
export class TestApiComponent implements OnInit {
  welcomeMessageFromService = '';
  name = '';
  constructor(
    private welcomeDataService: WelcomeDataService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  // getMessage(): void {
  //   console.log(this.welcomeDataService.executeHellWorldBeanService());
  //   this.welcomeDataService
  //     .executeHellWorldBeanService()
  //     .subscribe((response) => this.handleSuccessfulResponse(response));
  // }
  // handleSuccessfulResponse(response: any) {
  //   this.welcomeMessageFromService = response.message;
  // }
  // getMessageWithVaraible(): void {
  //   this.name = this.router.snapshot.params['name'];
  //   this.welcomeDataService
  //     .executeHellWorldBeanServiceWithPathVariable(this.name)
  //     .subscribe((response) => this.handleSuccessfulResponse(response));
  // }
}
