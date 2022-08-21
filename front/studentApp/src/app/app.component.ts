import { WelcomeDataService } from './service/data/welcome-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'studentApp';
  getWelcomeMessage(): void {
    console.log('hhhhhhh');
  }
}
