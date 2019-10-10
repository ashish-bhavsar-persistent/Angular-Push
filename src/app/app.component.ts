import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { firebase } from '@firebase/app';
import { NotificationsService } from './shared/notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-push-notification';

  constructor(private notificationsService: NotificationsService) { }

  async ngOnInit() {
    firebase.initializeApp(environment.firebase);
    await this.notificationsService.init();
  }

  async ngAfterViewInit() {
    await this.notificationsService.requestPermission();
  }

}
