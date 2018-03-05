import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {IP, NotificationService} from './services/notification.service';
import {IJSONResponse} from './services/jsonResponse.interface';
import {INotification} from './services/notification.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ipData$: Observable<IP>;
  isOverlay;
  notifications$: Observable<IJSONResponse<INotification[]>>;

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {

    this.ipData$ = this.notificationService.getIpAddress();
  }

  setCover() {
    this.isOverlay = true;
  }

  removeCover() {
    this.isOverlay = false;
  }

  searchFocus(event) {
    this.notifications$ = this.notificationService.searchNotificationsByTitle(event);
  }
}
