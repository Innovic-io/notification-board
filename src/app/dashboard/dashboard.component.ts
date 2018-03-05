import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NotificationService } from '../services/notification.service';
import { INotification } from '../services/notification.interface';
import { IJSONResponse } from '../services/jsonResponse.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  notifications$: Observable<IJSONResponse<INotification[]>>;

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.notifications$ = this.notificationService.getNotifications<INotification[]>();
  }
}
